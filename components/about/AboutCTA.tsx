import Link from "next/link";
import {
  ArrowRight,
} from "lucide-react";

import styles from "./AboutCTA.module.scss";

export default function AboutCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className={styles.eyebrow}>
          What&apos;s next?
        </span>

        <h2>
          Let&apos;s build
          <br />
          something useful.
        </h2>

        <Link
          href="/contact"
          className={styles.link}
        >
          Get in touch

          <ArrowRight
            size={17}
            strokeWidth={1.7}
          />
        </Link>
      </div>
    </section>
  );
}