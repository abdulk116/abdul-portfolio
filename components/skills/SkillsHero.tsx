import styles from "./SkillsHero.module.scss";

export default function SkillsHero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <span className={styles.eyebrow}>
          Skills & Technology
        </span>

        <h1>
          The tools I use
          <br />
          to turn ideas into
          <br />
          products.
        </h1>

        <p>
          My core strength is frontend engineering
          with React.js. Around that foundation,
          I work with Next.js, TypeScript, state
          management, APIs, responsive UI and
          React Native.
        </p>
      </div>
    </section>
  );
}