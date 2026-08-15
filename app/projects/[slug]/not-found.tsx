import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import styles from "./not-found.module.scss";

export default function ProjectNotFound() {
  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.meta}>
            <span className={styles.code}>
              404
            </span>

            <span className={styles.label}>
              Project not found
            </span>
          </div>

          <h1>
            This project
            <br />
            doesn&apos;t exist.
          </h1>

          <p>
            The project you&apos;re looking for may
            have been removed, renamed, or the URL
            may be incorrect.
          </p>

          <div className={styles.actions}>
            <Link
              href="/projects"
              className={styles.primary}
            >
              <span>View all projects</span>

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
              />
            </Link>

            <Link
              href="/"
              className={styles.secondary}
            >
              <ArrowLeft
                size={15}
                strokeWidth={1.8}
              />

              <span>Back home</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}