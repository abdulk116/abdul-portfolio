import ExperienceCard from "./ExperienceCard";

import type { Experience } from "@/types/experience";

import styles from "./CareerTimeline.module.scss";

interface CareerTimelineProps {
  experiences: Experience[];
}

export default function CareerTimeline({
  experiences,
}: CareerTimelineProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <span>
            01 — Experience
          </span>

          <h2>
            Where I&apos;ve worked
          </h2>
        </div>

        <div className={styles.timeline}>
          {experiences.map(
            (experience, index) => (
              <div
                key={experience.id}
                className={styles.item}
              >
                <div
                  className={styles.marker}
                >
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </div>

                <ExperienceCard
                  experience={
                    experience
                  }
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}