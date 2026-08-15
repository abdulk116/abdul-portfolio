import type { Project } from "@/types/project";

import Badge from "@/components/ui/Badge";

import styles from "./ProjectTechnologies.module.scss";

interface ProjectTechnologiesProps {
  project: Project;
}

export default function ProjectTechnologies({
  project,
}: ProjectTechnologiesProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.label}>
            <span>04</span>
            Technology
          </div>

          <div className={styles.technologies}>
            {project.technologies.map(
              (technology) => (
                <Badge
                  key={technology}
                  variant="accent"
                >
                  {technology}
                </Badge>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}