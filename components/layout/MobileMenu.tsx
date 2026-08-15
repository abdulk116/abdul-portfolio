"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import { navigation } from "@/data/navigation";

import styles from "./MobileMenu.module.scss";

export default function MobileMenu() {
  const [open, setOpen] =
    useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow =
      open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={open}
      >
        <Menu size={19} />
      </button>

      {open && (
        <div className={styles.overlay}>
          <div className={styles.top}>
            <span>
              Navigation
            </span>

            <button
              type="button"
              onClick={() =>
                setOpen(false)
              }
              aria-label="Close navigation menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className={styles.links}>
            {navigation.map(
              (item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.mobileLink}
                >
                  <span>
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  {item.label}

                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.5}
                  />
                </Link>
              )
            )}
          </div>

          <div className={styles.bottom}>
            <span>
              Frontend Engineer
            </span>

            <span>
              Open to opportunities
            </span>
          </div>
        </div>
      )}
    </>
  );
}