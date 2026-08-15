import styles from "./loading.module.scss";

export default function Loading() {
  return (
    <main className={styles.loading}>
      <div className={styles.content}>
        <span className={styles.number}>
          00
        </span>

        <div className={styles.line} />

        <span className={styles.text}>
          Loading
        </span>
      </div>
    </main>
  );
}