import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import type { Project } from "@/types/project";

import styles from "./ProjectNavigation.module.scss";

interface ProjectNavigationProps {
  previous?: Project;
  next?: Project;
}

export default function ProjectNavigation({
  previous,
  next,
}: ProjectNavigationProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.navigation}>
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className={styles.item}
            >
              <span className={styles.direction}>
                <ArrowLeft
                  size={15}
                  strokeWidth={1.7}
                />

                Previous
              </span>

              <strong>
                {previous.title}
              </strong>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className={`${styles.item} ${styles.next}`}
            >
              <span className={styles.direction}>
                Next

                <ArrowRight
                  size={15}
                  strokeWidth={1.7}
                />
              </span>

              <strong>
                {next.title}
              </strong>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}