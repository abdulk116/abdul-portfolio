import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import styles from "./ExperiencePreview.module.scss";
import { experiences } from "@/data/experience";

const previewExperiences = experiences.slice(0, 3);

export default function ExperiencePreview() {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>
              Experience
            </span>

            <h2>
              A career built
              <br />
              through experience.
            </h2>
          </div>

          <p className={styles.intro}>
            A short overview of my professional
            journey across frontend engineering,
            IoT, and software development.
          </p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          <div
            className={styles.track}
            aria-hidden="true"
          />

          {previewExperiences.map(
            (experience, index) => (
              <article
                key={experience.id}
                className={styles.item}
              >
                <div
                  className={`${styles.dot} ${index === 0
                      ? styles.active
                      : ""
                    }`}
                  aria-hidden="true"
                />

                <div className={styles.card}>
                  <div className={styles.cardTop}>
                    <div>
                      <span className={styles.role}>
                        {experience.role}
                      </span>

                      <h3>
                        {experience.company}
                      </h3>
                    </div>

                    <span className={styles.date}>
                      {experience.startDate}
                      {" — "}
                      {experience.endDate}
                    </span>
                  </div>

                  <div className={styles.location}>
                    <MapPin
                      size={13}
                      strokeWidth={1.7}
                    />

                    {experience.location}
                  </div>

                  <p>
                    {experience.description}
                  </p>

                  <div className={styles.technologies}>
                    {experience.technologies
                      .slice(0, 5)
                      .map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                  </div>
                </div>
              </article>
            )
          )}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <span>
            {experiences.length} professional
            experiences
          </span>

          <Link
            href="/experience"
            className={styles.viewAll}
          >
            <span>View full experience</span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}