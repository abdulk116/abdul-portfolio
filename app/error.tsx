"use client";

import { useEffect } from "react";

import styles from "./error.module.scss";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };

  reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styles.error}>
      <div className="container">
        <div className={styles.content}>
          <span className={styles.code}>
            ERROR
          </span>

          <h1>
            Something went
            <br />
            wrong.
          </h1>

          <p>
            An unexpected error occurred
            while loading this page.
          </p>

          <div className={styles.actions}>
            <button
              type="button"
              onClick={() => reset()}
            >
              Try again
            </button>

            <a href="/">
              Back to home
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}