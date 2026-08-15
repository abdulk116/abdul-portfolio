import styles from "./EngineeringApproach.module.scss";

import {
  engineeringPrinciples,
} from "@/data/engineering";

export default function EngineeringApproach() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            02 — Engineering approach
          </span>

          <h2>
            How I approach
            <br />
            frontend engineering.
          </h2>

          <p>
            My focus is not only on making an
            interface work, but also on keeping
            the codebase maintainable,
            responsive and reliable as the
            product evolves.
          </p>
        </div>

        <div className={styles.list}>
          {engineeringPrinciples.map(
            (item) => (
              <article
                key={item.number}
                className={styles.item}
              >
                <span className={styles.number}>
                  {item.number}
                </span>

                <h3>{item.title}</h3>

                <p>
                  {item.description}
                </p>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}