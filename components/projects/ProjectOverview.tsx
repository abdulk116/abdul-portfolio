import type { Project } from "@/types/project";

import styles from "./ProjectOverview.module.scss";

interface ProjectOverviewProps {
  project: Project;
}

export default function ProjectOverview({
  project,
}: ProjectOverviewProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.label}>
            <span>01</span>
            Overview
          </div>

          <div className={styles.content}>
            <div className={styles.block}>
              <p className={styles.eyebrow}>
                The challenge
              </p>

              <p>
                {project.challenge}
              </p>
            </div>

            <div className={styles.block}>
              <p className={styles.eyebrow}>
                The approach
              </p>

              <p>
                {project.solution}
              </p>
            </div>

            <div className={styles.block}>
              <p className={styles.eyebrow}>
                Outcome
              </p>

              <p>
                {project.outcome}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}