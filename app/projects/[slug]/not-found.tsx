import Link from "next/link";

import styles from "./not-found.module.scss";

export default function ProjectNotFound() {
  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.content}>
          <span>
            Project not found
          </span>

          <h1>
            This project
            <br />
            doesn&apos;t exist.
          </h1>

          <p>
            The project you&apos;re looking for
            may have been removed or the
            URL may be incorrect.
          </p>

          <div className={styles.actions}>
            <Link href="/projects">
              View all projects
            </Link>

            <Link href="/">
              Back home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}