import styles from "./AboutHero.module.scss";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <span className={styles.eyebrow}>
          About me
        </span>

        <h1>
          Frontend engineer
          <br />
          focused on building
          <br />
          useful products.
        </h1>

        <div className={styles.introduction}>
          <p>
            I&apos;m a frontend-focused software engineer
            with professional experience building
            web and mobile applications using
            React.js, Next.js and related
            technologies.
          </p>

          <p>
            Working in a service-based environment
            exposed me to different products,
            domains and development challenges.
            That experience taught me to adapt
            quickly, understand requirements and
            build maintainable interfaces that
            solve real problems.
          </p>
        </div>
      </div>
    </section>
  );
}