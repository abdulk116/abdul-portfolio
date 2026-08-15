import Link from "next/link";

import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <div className="container">
        <div className={styles.content}>
          <span className={styles.code}>
            404
          </span>

          <h1>
            Page not
            <br />
            found.
          </h1>

          <p>
            The page you&apos;re looking for
            doesn&apos;t exist or may have been
            moved.
          </p>

          <Link href="/">
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}