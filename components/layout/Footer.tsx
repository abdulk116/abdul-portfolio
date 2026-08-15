import Link from "next/link";

import {
  ArrowUpRight,
} from "lucide-react";

import { navigation } from "@/data/navigation";
import { contact } from "@/data/contact";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.intro}>
            <span>
              Frontend Engineer
            </span>

            <h2>
              Building useful
              <br />
              digital experiences.
            </h2>

            <a
              href={`mailto:${contact.email}`}
            >
              {contact.email}
            </a>
          </div>

          <div className={styles.navigation}>
            <span className={styles.label}>
              Navigation
            </span>

            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className={styles.social}>
            <span className={styles.label}>
              Elsewhere
            </span>

            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <ArrowUpRight size={14} />
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {new Date().getFullYear()}
            {" "}
            Your Name
          </span>

          <span>
            Built with Next.js
          </span>

          <a href="#">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}