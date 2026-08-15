import styles from "./WorkingStyle.module.scss";

const workflow = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the business requirement, user flow and technical constraints before starting implementation.",
  },
  {
    number: "02",
    title: "Break down",
    description:
      "Break larger requirements into smaller components, states and reusable pieces of functionality.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Implement the UI and application behaviour with a focus on clean component structure and predictable data flow.",
  },
  {
    number: "04",
    title: "Review",
    description:
      "Test the implementation, identify edge cases and improve the experience based on feedback.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Refactor where necessary and look for opportunities to improve maintainability, performance and developer experience.",
  },
];

export default function WorkingStyle() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            03 — Workflow
          </span>

          <div className={styles.headingContent}>
            <h2>
              From requirement
              <br />
              <span>to implementation.</span>
            </h2>

            <p>
              I approach development as a process of
              understanding, building, reviewing and
              continuously improving the solution.
            </p>
          </div>
        </div>

        <div className={styles.workflow}>
          {workflow.map((item, index) => (
            <article
              key={item.number}
              className={styles.item}
            >
              <div className={styles.marker}>
                <span>{item.number}</span>

                {index < workflow.length - 1 && (
                  <span className={styles.connector} />
                )}
              </div>

              <div className={styles.content}>
                <div className={styles.titleRow}>
                  <h3>{item.title}</h3>

                  <span className={styles.step}>
                    Step {item.number}
                  </span>
                </div>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}