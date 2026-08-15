import styles from "./ContactHero.module.scss";

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <span className={styles.eyebrow}>
          Contact
        </span>

        <h1>
          Let&apos;s talk about
          <br />
          the next opportunity.
        </h1>

        <p>
          I&apos;m open to frontend engineering
          opportunities where I can contribute
          with React.js, Next.js and modern
          frontend development.
        </p>
      </div>
    </section>
  );
}