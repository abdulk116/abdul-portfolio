import type { Project } from "@/types/project";

import styles from "./ProjectResponsibilities.module.scss";

interface ProjectResponsibilitiesProps {
  project: Project;
}

export default function ProjectResponsibilities({
  project,
}: ProjectResponsibilitiesProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.label}>
            <span>03</span>
            My Contribution
          </div>

          <div>
            <div className={styles.role}>
              <span>Role</span>

              <strong>
                {project.role}
              </strong>
            </div>

            <div className={styles.list}>
              {project.responsibilities.map(
                (responsibility, index) => (
                  <div
                    key={responsibility}
                    className={styles.item}
                  >
                    <span>
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <p>
                      {responsibility}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}