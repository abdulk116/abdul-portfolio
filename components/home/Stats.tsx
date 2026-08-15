import styles from "./Stats.module.scss";

const stats = [
  {
    value: "3+",
    label: "Years of professional experience",
  },
  {
    value: "15+",
    label: "Projects worked across",
  },
  {
    value: "3",
    label: "Projects handled in parallel",
  },
  {
    value: "React",
    label: "Primary frontend ecosystem",
  },
];

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={styles.item}
            >
              <strong className={styles.value}>
                {stat.value}
              </strong>

              <span className={styles.label}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}