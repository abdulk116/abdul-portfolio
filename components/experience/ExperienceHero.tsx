import styles from "./ExperienceHero.module.scss";

export default function ExperienceHero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.eyebrow}>
          Career
        </div>

        <h1>
          Building products,
          <br />
          learning through
          <br />
          every project.
        </h1>

        <p>
          My experience has been shaped by
          working across multiple projects,
          technologies and teams in a
          service-based environment.
        </p>
      </div>
    </section>
  );
}