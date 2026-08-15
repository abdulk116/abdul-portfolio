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
          <div className={styles.label}>
            <span>02</span>
            Features
          </div>

          <div className={styles.features}>
            {project.features.map(
              (feature, index) => (
                <div
                  key={feature}
                  className={styles.feature}
                >
                  <span>
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <p>{feature}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}