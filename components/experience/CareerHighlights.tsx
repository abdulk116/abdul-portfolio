import {
  Layers3,
  UsersRound,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";

import styles from "./CareerHighlights.module.scss";

const highlights = [
  {
    icon: Layers3,
    value: "15+",
    label: "Projects",
    description:
      "Worked across multiple projects in a service-based environment.",
  },

  {
    icon: BriefcaseBusiness,
    value: "3+",
    label: "Years",
    description:
      "Professional frontend engineering experience.",
  },

  {
    icon: Code2,
    value: "React",
    label: "Core Stack",
    description:
      "React.js, Next.js and modern frontend development.",
  },

  {
    icon: UsersRound,
    value: "Mentoring",
    label: "Team Contribution",
    description:
      "Trained and guided junior developers.",
  },
];

export default function CareerHighlights() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={styles.card}
              >
                <Icon
                  size={19}
                  strokeWidth={1.6}
                />

                <strong>
                  {item.value}
                </strong>

                <span>
                  {item.label}
                </span>

                <p>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}