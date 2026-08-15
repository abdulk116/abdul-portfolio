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

import styles from "./WorkingStyle.module.scss";

export default function WorkingStyle() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <span>
            02 — Workflow
          </span>

          <h2>
            From requirement
            <br />
            to implementation.
          </h2>
        </div>

        <div className={styles.workflow}>
          {workflow.map((item) => (
            <div
              key={item.number}
              className={styles.item}
            >
              <span className={styles.number}>
                {item.number}
              </span>

              <div>
                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}