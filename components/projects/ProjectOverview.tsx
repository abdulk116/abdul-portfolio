import type { Project } from "@/types/project";

import styles from "./ProjectOverview.module.scss";

interface ProjectOverviewProps {
  project: Project;
}

const sections = [
  {
    label: "The challenge",
    key: "challenge",
  },
  {
    label: "The approach",
    key: "solution",
  },
  {
    label: "Outcome",
    key: "outcome",
  },
] as const;

export default function ProjectOverview({
  project,
}: ProjectOverviewProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Section Label */}
          <div className={styles.label}>
            <span className={styles.number}>
              01
            </span>

            <span>
              Overview
            </span>
          </div>

          {/* Content */}
          <div className={styles.content}>
            {sections.map(
              (section, index) => (
                <article
                  key={section.key}
                  className={styles.block}
                  style={
                    {
                      "--block-index": index,
                    } as React.CSSProperties
                  }
                >
                  <div className={styles.blockHeader}>
                    <span className={styles.blockNumber}>
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span className={styles.eyebrow}>
                      {section.label}
                    </span>
                  </div>

                  <p>
                    {project[section.key]}
                  </p>
                </article>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}