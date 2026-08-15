import styles from "./loading.module.scss";

export default function Loading() {
  return (
    <main
      className={styles.loading}
      aria-label="Loading"
    >
      <div className={styles.backgroundGrid} />

      <div className={styles.content}>
        <div className={styles.top}>
          <span className={styles.number}>
            00
          </span>

          <span className={styles.status}>
            Please wait
          </span>
        </div>

        <div className={styles.loader}>
          <div className={styles.line}>
            <span />
          </div>

          <span className={styles.text}>
            Loading
          </span>
        </div>
      </div>
    </main>
  );
}