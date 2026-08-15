import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import styles from "./LearningDirection.module.scss";

const areas = [
  "Advanced TypeScript",
  "React architecture",
  "Next.js performance",
  "Frontend system design",
];

export default function LearningDirection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.icon}>
            <Sparkles
              size={20}
              strokeWidth={1.5}
            />
          </div>

          <div>
            <span className={styles.eyebrow}>
              Currently developing
            </span>

            <h2>
              Always sharpening
              <br />
              the next layer.
            </h2>

            <p>
              I&apos;m continuing to deepen my knowledge
              of frontend architecture and modern
              React development.
            </p>

            <div className={styles.areas}>
              {areas.map((area) => (
                <span key={area}>
                  {area}
                </span>
              ))}
            </div>
          </div>

          <ArrowRight
            className={styles.arrow}
            size={24}
            strokeWidth={1.5}
          />
        </div>
      </div>
    </section>
  );
}