import Reveal from "../ui/Reveal";
import styles from "./CareerSnapshot.module.scss";

import { careerStats } from "@/data/career";

export default function CareerSnapshot() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal>
          <div className={styles.header}>
            <div className={styles.headingGroup}>
              <span className={styles.eyebrow}>
                01 — Career snapshot
              </span>

              <h2>
                Experience built
                <br />
                across products.
              </h2>
            </div>

            <p className={styles.intro}>
              My experience comes from working
              across multiple production projects,
              changing requirements and parallel
              delivery responsibilities.
            </p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {careerStats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 90}
            >
              <article
                className={styles.card}
              >
                <div className={styles.cardTop}>
                  <span className={styles.index}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className={styles.cardArrow}>
                    ↗
                  </span>
                </div>

                <div className={styles.cardContent}>
                  <strong className={styles.value}>
                    {stat.value}
                  </strong>

                  <h3>{stat.label}</h3>

                  <p>{stat.description}</p>
                </div>

                <span
                  className={styles.cardLine}
                  aria-hidden="true"
                />
              </article>
            </Reveal>
          ))}
        </div>

        <div className={styles.footerNote}>
          <span>Experience / 2019 — Present</span>

          <span>
            Product development · Frontend engineering
          </span>
        </div>
      </div>
    </section>
  );
}