import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

import styles from "./Hero.module.scss";

const technologies = [
  {
    label: "React.js",
    variant: "accent" as const,
  },
  {
    label: "Next.js",
    variant: undefined,
  },
  {
    label: "TypeScript",
    variant: undefined,
  },
  {
    label: "Redux",
    variant: undefined,
  },
  {
    label: "Node.js",
    variant: undefined,
  },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Decorative background */}
      <div
        className={styles.backgroundGlow}
        aria-hidden="true"
      />

      <div
        className={styles.grid}
        aria-hidden="true"
      />

      <div className="container">
        <div className={styles.content}>
          {/* Eyebrow */}
          <div className={styles.eyebrow}>
            <span
              className={styles.status}
              aria-hidden="true"
            >
              <span className={styles.dot} />
            </span>

            <span>
              React.js / Frontend Engineer
            </span>
          </div>

          {/* Heading */}
          <h1 className={styles.title}>
            <span className={styles.titleLine}>
              Building scalable,
            </span>

            <span
              className={`${styles.titleLine} ${styles.mutedLine}`}
            >
              performant
            </span>

            <span className={styles.titleLine}>
              digital experiences.
            </span>
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Frontend engineer specializing in
            React.js, Next.js and TypeScript,
            with hands-on experience building
            business applications across
            multiple projects and domains.
          </p>

          {/* Actions */}
          <div className={styles.actions}>
            <Button href="/projects">
              Explore my work

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
              />
            </Button>

            <Button
              href="/resume/Abdul-Kareem-Resume.pdf"
              external
              variant="secondary"
            >
              Download resume
            </Button>
          </div>

          {/* Technology stack */}
          <div className={styles.stack}>
            <span className={styles.stackLabel}>
              Core stack
            </span>

            <div className={styles.stackItems}>
              {technologies.map((technology) => (
                <Badge
                  key={technology.label}
                  variant={technology.variant}
                >
                  {technology.label}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollIcon}>
            <ArrowDownRight
              size={15}
              strokeWidth={1.5}
            />
          </div>

          <span>Scroll to explore</span>

          <span
            className={styles.scrollLine}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}