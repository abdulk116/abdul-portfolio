import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/types/project";

import styles from "./ProjectFeatures.module.scss";

interface ProjectFeaturesProps {
  project: Project;
}

export default function ProjectFeatures({
  project,
}: ProjectFeaturesProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Section Label */}
          <div className={styles.label}>
            <span className={styles.sectionNumber}>
              02
            </span>

            <span>
              Features
            </span>
          </div>

          {/* Features */}
          <div className={styles.features}>
            {project.features.map(
              (feature, index) => (
                <article
                  key={feature}
                  className={styles.feature}
                  style={
                    {
                      "--feature-index": index,
                    } as React.CSSProperties
                  }
                >
                  <div className={styles.top}>
                    <span className={styles.number}>
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span className={styles.icon}>
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.6}
                      />
                    </span>
                  </div>

                  <p>
                    {feature}
                  </p>

                  <span className={styles.line} />
                </article>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}