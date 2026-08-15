import styles from "./loading.module.scss";

export default function ProjectLoading() {
  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.skeleton}>
          <div className={styles.small} />

          <div className={styles.title} />

          <div className={styles.titleShort} />

          <div className={styles.meta} />

          <div className={styles.hero} />

          <div className={styles.columns}>
            <div className={styles.text} />

            <div className={styles.text} />
          </div>
        </div>
      </div>
    </main>
  );
}