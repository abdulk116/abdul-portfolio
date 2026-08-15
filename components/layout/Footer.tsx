import Link from "next/link";

import {
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";

import { navigation } from "@/data/navigation";
import { contact } from "@/data/contact";

import styles from "./Footer.module.scss";

export default function Footer() {
  const currentYear =
    new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Main Footer */}
        <div className={styles.main}>
          {/* Intro */}
          <div className={styles.intro}>
            <span className={styles.eyebrow}>
              Frontend Engineer
            </span>

            <h2>
              Building useful
              <br />
              digital experiences.
            </h2>

            <a
              href={`mailto:${contact.email}`}
              className={styles.email}
            >
              <span>{contact.email}</span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.6}
              />
            </a>
          </div>

          {/* Navigation */}
          <div className={styles.navigation}>
            <span className={styles.label}>
              Navigation
            </span>

            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.footerLink}
              >
                <span className={styles.linkNumber}>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className={styles.social}>
            <span className={styles.label}>
              Elsewhere
            </span>

            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              <span>GitHub</span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
              />
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              <span>LinkedIn</span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
              />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <span>
            © {currentYear} Abdul Kareem
          </span>

          <span>
            Designed & built with Next.js
          </span>

          <a
            href="#top"
            className={styles.backToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>

            <ArrowUp
              size={13}
              strokeWidth={1.7}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}