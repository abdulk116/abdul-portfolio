import {
  Blocks,
  Gauge,
  Layers3,
  Workflow,
} from "lucide-react";

import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import styles from "./Capabilities.module.scss";

const capabilities = [
  {
    number: "01",
    icon: Blocks,
    title: "Frontend Development",
    description:
      "Building responsive, reusable and maintainable interfaces with React.js, Next.js and TypeScript.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Component Architecture",
    description:
      "Designing reusable components, clear module boundaries and scalable frontend structures.",
  },
  {
    number: "03",
    icon: Gauge,
    title: "Performance",
    description:
      "Identifying rendering and loading bottlenecks and improving the overall user experience.",
  },
  {
    number: "04",
    icon: Workflow,
    title: "Project Delivery",
    description:
      "Working across multiple projects, coordinating tasks and supporting junior developers.",
  },
];

export default function Capabilities() {
  return (
    <Section>
      <SectionHeading
        eyebrow="What I do"
        title="Frontend engineering with a product mindset."
        description="My work sits between user experience, frontend architecture and practical business requirements."
      />

      <div className={styles.grid}>
        {capabilities.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.number}
              className={styles.card}
            >
              <div className={styles.top}>
                <span>
                  {item.number}
                </span>

                <Icon
                  size={22}
                  strokeWidth={1.5}
                />
              </div>

              <div>
                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}