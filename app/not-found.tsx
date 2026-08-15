import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <div className={styles.backgroundGrid} />

      <div className="container">
        <div className={styles.content}>
          <div className={styles.top}>
            <span className={styles.code}>
              404
            </span>

            <span className={styles.status}>
              Page unavailable
            </span>
          </div>

          <div className={styles.heading}>
            <h1>
              Page not
              <br />
              <span>found.</span>
            </h1>
          </div>

          <div className={styles.bottom}>
            <p>
              The page you&apos;re looking for
              doesn&apos;t exist or may have been
              moved to another location.
            </p>

            <Link
              href="/"
              className={styles.homeLink}
            >
              <ArrowLeft
                size={16}
                strokeWidth={1.8}
              />

              <span>Return home</span>

              <ArrowUpRight
                className={styles.externalIcon}
                size={15}
                strokeWidth={1.8}
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}