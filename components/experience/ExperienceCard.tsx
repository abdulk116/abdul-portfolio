import Badge from "@/components/ui/Badge";

import type { Experience } from "@/types/experience";

import styles from "./ExperienceCard.module.scss";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div>
          <span className={styles.period}>
            {experience.startDate}
            {" — "}
            {experience.endDate}
          </span>

          <h2>
            {experience.company}
          </h2>

          <h3>
            {experience.role}
          </h3>
        </div>

        {experience.projectCount && (
          <div className={styles.projectCount}>
            <strong>
              {experience.projectCount}
            </strong>

            <span>
              Project exposure
            </span>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <p className={styles.description}>
          {experience.description}
        </p>

        <div className={styles.section}>
          <span className={styles.label}>
            What I did
          </span>

          <ul>
            {experience.highlights.map(
              (highlight) => (
                <li key={highlight}>
                  {highlight}
                </li>
              )
            )}
          </ul>
        </div>

        <div className={styles.section}>
          <span className={styles.label}>
            Technologies
          </span>

          <div className={styles.technologies}>
            {experience.technologies.map(
              (technology) => (
                <Badge key={technology}>
                  {technology}
                </Badge>
              )
            )}
          </div>
        </div>
      </div>
    </article>
  );
}