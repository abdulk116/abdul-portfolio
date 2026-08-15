import { ArrowDownRight } from "lucide-react";

import styles from "./AboutHero.module.scss";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.top}>
          <span className={styles.eyebrow}>
            <span className={styles.number}>01</span>
            About me
          </span>

          <span className={styles.scrollHint}>
            <ArrowDownRight
              size={15}
              strokeWidth={1.5}
            />
            Get to know me
          </span>
        </div>

        <h1 className={styles.title}>
          Frontend engineer
          <br />
          focused on building
          <br />
          <span>useful products.</span>
        </h1>

        <div className={styles.introduction}>
          <div className={styles.introLabel}>
            <span>Profile</span>
          </div>

          <div className={styles.copy}>
            <p>
              I&apos;m a frontend-focused software
              engineer with professional experience
              building web and mobile applications
              using React.js, Next.js and related
              technologies.
            </p>

            <p>
              Working in a service-based environment
              exposed me to different products,
              domains and development challenges.
              That experience taught me to adapt
              quickly, understand requirements and
              build maintainable interfaces that solve
              real problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}