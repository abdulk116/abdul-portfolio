import {
  Blocks,
  Gauge,
  Layers3,
  Workflow,
} from "lucide-react";

import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import styles from "./Capabilities.module.scss";
import Reveal from "../ui/Reveal";

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
        {capabilities.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal
              key={item.number}
              delay={index * 100}
            >
              <article
                className={styles.card}
              >
                <div className={styles.top}>
                  <span className={styles.number}>
                    {item.number}
                  </span>

                  <div className={styles.icon}>
                    <Icon
                      size={21}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                <div className={styles.content}>
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

                <div
                  className={styles.bottom}
                  aria-hidden="true"
                >
                  <span />
                  <span className={styles.arrow}>
                    ↗
                  </span>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}