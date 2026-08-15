import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import styles from "./ContactCTA.module.scss";

export default function ContactCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.grid} aria-hidden="true" />

          <div className={styles.content}>
            <span className={styles.eyebrow}>
              03 — Let&apos;s work together
            </span>

            <h2>
              Have a project
              <br />
              <span>in mind?</span>
            </h2>

            <p>
              Whether you&apos;re building a product,
              improving an existing application,
              or looking for a frontend engineer,
              I&apos;d be happy to hear about it.
            </p>

            <Link
              href="/contact"
              className={styles.button}
            >
              <span>Start a conversation</span>

              <span className={styles.icon}>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.7}
                />
              </span>
            </Link>
          </div>

          <div className={styles.corner} aria-hidden="true">
            ↗
          </div>
        </div>
      </div>
    </section>
  );
}