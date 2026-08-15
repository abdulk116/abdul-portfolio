import styles from "./CareerSnapshot.module.scss";

import { careerStats } from "@/data/career";

export default function CareerSnapshot() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>
              01 — Career snapshot
            </span>

            <h2>
              Experience built
              <br />
              across products.
            </h2>
          </div>

          <p>
            My experience comes from working
            across multiple production projects,
            changing requirements and parallel
            delivery responsibilities.
          </p>
        </div>

        <div className={styles.grid}>
          {careerStats.map((stat, index) => (
            <article
              className={styles.card}
              key={stat.label}
            >
              <span className={styles.index}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong className={styles.value}>
                {stat.value}
              </strong>

              <h3>{stat.label}</h3>

              <p>{stat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}