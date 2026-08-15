"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/data/navigation";

import styles from "./Navbar.module.scss";

import ThemeToggle from "../theme/ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] =
    useState(false);

  const [hidden, setHidden] =
    useState(false);

  /*
   * Find current navigation item.
   *
   * This allows the mobile navbar to show
   * the current section while the full
   * navigation is hidden.
   */
  const currentNavigation = navigation.find(
    (item) => {
      if (item.href === "/") {
        return pathname === "/";
      }

      return (
        pathname === item.href ||
        pathname.startsWith(`${item.href}/`)
      );
    }
  );

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY =
        window.scrollY;

      setScrolled(currentScrollY > 20);

      // Always show navbar near the top.
      if (currentScrollY < 80) {
        setHidden(false);
      } else if (
        currentScrollY > previousScrollY &&
        currentScrollY > 120
      ) {
        // Scrolling down
        setHidden(true);
      } else if (
        currentScrollY < previousScrollY
      ) {
        // Scrolling up
        setHidden(false);
      }

      previousScrollY = currentScrollY;
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <header
      className={[
        styles.header,
        scrolled ? styles.scrolled : "",
        hidden ? styles.hidden : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="container">
        <nav
          className={styles.nav}
          aria-label="Main navigation"
        >
          {/* Logo */}
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

          {/* Desktop Navigation */}
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
                  className={[
                    styles.link,
                    isActive
                      ? styles.active
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  aria-current={
                    isActive
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right Side */}
          <div className={styles.right}>

            {/* Mobile Current Page */}
            {currentNavigation &&
              pathname !== "/" && (
                <Link
                  href={currentNavigation.href}
                  className={styles.mobileBreadcrumb}
                  aria-current="page"
                >
                  <span
                    className={
                      styles.mobileBreadcrumbDot
                    }
                  />

                  <span>
                    {currentNavigation.label}
                  </span>
                </Link>
              )}

            {/* Desktop Status */}
            <div
              className={styles.desktopStatus}
            >
              <span />
              Open to opportunities
            </div>

            <ThemeToggle />

            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  );
}