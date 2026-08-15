import {
  Blocks,
  Gauge,
  Layers3,
  RefreshCcw,
} from "lucide-react";

import styles from "./EngineeringPhilosophy.module.scss";

const principles = [
  {
    number: "01",
    icon: Blocks,
    title: "Reusable by default",
    description:
      "I prefer breaking interfaces into focused, reusable components rather than building large components that become difficult to maintain.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Think about structure",
    description:
      "Good frontend development is not only about making a screen look correct. I think about component boundaries, data flow, state management and maintainability.",
  },
  {
    number: "03",
    icon: Gauge,
    title: "Performance matters",
    description:
      "I consider rendering behaviour, unnecessary work, API usage and user experience while building and improving applications.",
  },
  {
    number: "04",
    icon: RefreshCcw,
    title: "Keep improving",
    description:
      "Frontend development changes quickly, so I continuously learn new patterns, tools and technologies and apply them when they provide real value.",
  },
];

export default function EngineeringPhilosophy() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            02 — Philosophy
          </span>

          <div className={styles.headingContent}>
            <h2>
              How I think about
              <br />
              <span>frontend engineering.</span>
            </h2>

            <p>
              A few principles that guide how I
              design, structure and improve the
              interfaces I build.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <article
                key={principle.number}
                className={styles.card}
              >
                <div className={styles.cardTop}>
                  <span className={styles.number}>
                    {principle.number}
                  </span>

                  <div className={styles.icon}>
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3>{principle.title}</h3>

                  <p>{principle.description}</p>
                </div>

                <span className={styles.corner}>
                  ↗
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}