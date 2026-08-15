"use client";

import { useEffect } from "react";
import {
  ArrowLeft,
  RotateCcw,
} from "lucide-react";

import styles from "./error.module.scss";
import Link from "next/link";

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
      <div className={styles.backgroundGrid} />

      <div className="container">
        <div className={styles.content}>
          <div className={styles.top}>
            <span className={styles.code}>
              ERROR
            </span>

            <span className={styles.status}>
              Something went wrong
            </span>
          </div>

          <div className={styles.heading}>
            <h1>
              Something went
              <br />
              <span>wrong.</span>
            </h1>
          </div>

          <div className={styles.bottom}>
            <p>
              An unexpected error occurred
              while loading this page. You can
              try again or return to the
              homepage.
            </p>

            <div className={styles.actions}>
              <button
                type="button"
                onClick={reset}
                className={styles.retry}
              >
                <RotateCcw
                  size={15}
                  strokeWidth={1.8}
                />

                <span>Try again</span>
              </button>

              <Link
                href="/"
                className={styles.home}
              >
                <ArrowLeft
                  size={15}
                  strokeWidth={1.8}
                />

                <span>Back to home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}