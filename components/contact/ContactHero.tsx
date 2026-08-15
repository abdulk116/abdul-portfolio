import styles from "./ContactHero.module.scss";

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.top}>
          <span className={styles.eyebrow}>
            Contact
          </span>

          <span className={styles.status}>
            <i />
            Open to opportunities
          </span>
        </div>

        <div className={styles.headingWrap}>
          <span className={styles.line} />

          <h1>
            Let&apos;s talk about
            <br />
            <span>the next opportunity.</span>
          </h1>
        </div>

        <div className={styles.bottom}>
          <span className={styles.label}>
            Get in touch
          </span>

          <p>
            I&apos;m open to frontend engineering
            opportunities where I can contribute
            with React.js, Next.js and modern
            frontend development.
          </p>
        </div>
      </div>
    </section>
  );
}