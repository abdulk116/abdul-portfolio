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
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow = "";

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  return (
    <>
      {/* Menu Trigger */}
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-navigation"
      >
        <Menu
          size={19}
          strokeWidth={1.8}
        />
      </button>

      {/* Mobile Navigation */}
      {open && (
        <div
          id="mobile-navigation"
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Top Bar */}
          <div className={styles.top}>
            <div className={styles.topTitle}>
              <span className={styles.topDot} />

              <span>
                Navigation
              </span>
            </div>

            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
            >
              <X
                size={20}
                strokeWidth={1.7}
              />
            </button>
          </div>

          {/* Navigation Links */}
          <nav
            className={styles.links}
            aria-label="Mobile navigation"
          >
            {navigation.map(
              (item, index) => {
                const active = isActive(
                  item.href
                );

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${styles.mobileLink} ${
                      active
                        ? styles.active
                        : ""
                    }`}
                    aria-current={
                      active
                        ? "page"
                        : undefined
                    }
                    style={
                      {
                        "--item-index": index,
                      } as React.CSSProperties
                    }
                  >
                    <span
                      className={
                        styles.number
                      }
                    >
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span
                      className={
                        styles.linkLabel
                      }
                    >
                      {item.label}
                    </span>

                    <span
                      className={
                        styles.linkIcon
                      }
                    >
                      <ArrowUpRight
                        size={20}
                        strokeWidth={1.5}
                      />
                    </span>

                    {active && (
                      <span
                        className={
                          styles.activeIndicator
                        }
                      />
                    )}
                  </Link>
                );
              }
            )}
          </nav>

          {/* Bottom Information */}
          <div className={styles.bottom}>
            <div>
              <span className={styles.bottomLabel}>
                Role
              </span>

              <span>
                Frontend Engineer
              </span>
            </div>

            <div>
              <span className={styles.bottomLabel}>
                Availability
              </span>

              <span
                className={
                  styles.availability
                }
              >
                <i />
                Open to opportunities
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}