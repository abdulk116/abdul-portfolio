"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/data/navigation";

import styles from "./Navbar.module.scss";
import ThemeToggle from "../theme/ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link
            href="/"
            className={styles.logo}
            aria-label="Go to homepage"
          >
            <span className={styles.logoMark}>
              AK
            </span>

            <span className={styles.logoText}>
              Frontend Engineer
            </span>
          </Link>

          <div className={styles.desktopLinks}>
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                pathname.startsWith(
                  `${item.href}/`
                );

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.link} ${
                    isActive
                      ? styles.active
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className={styles.desktopStatus}>
            <span />
            Open to opportunities
          </div>
          <ThemeToggle />

          <MobileMenu />
        </nav>
      </div>
    </header>
  );
}