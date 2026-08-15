import styles from "./ContactCTA.module.scss";

export default function ContactCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <span>
            Open to opportunities
          </span>

          <h2>
            Senior React Developer
            <br />
            · Frontend Engineer
          </h2>

          <p>
            React.js · Next.js · TypeScript
          </p>
        </div>
      </div>
    </section>
  );
}