import { ArrowUpRight } from "lucide-react";

import styles from "./EngineeringApproach.module.scss";

import {
  engineeringPrinciples,
} from "@/data/engineering";
import Reveal from "../ui/Reveal";

export default function EngineeringApproach() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal>
          <div className={styles.header}>
            <div className={styles.headerTop}>
              <span className={styles.eyebrow}>
                02 — Engineering approach
              </span>

              <span className={styles.headerMeta}>
                Principles I work by
              </span>
            </div>

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
        </Reveal>

        <div className={styles.list}>
          {engineeringPrinciples.map((item, index) => (
            <Reveal
              key={item.number}
              delay={index * 100}
            >
              <article
                className={styles.item}
              >
                <div className={styles.top}>
                  <span className={styles.number}>
                    {item.number}
                  </span>

                  <ArrowUpRight
                    className={styles.icon}
                    size={18}
                    strokeWidth={1.5}
                  />
                </div>

                <div className={styles.content}>
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

                <span
                  className={styles.backgroundNumber}
                  aria-hidden="true"
                >
                  {item.number}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}