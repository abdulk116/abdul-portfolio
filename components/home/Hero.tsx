import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} />

            React.js / Frontend Engineer
          </div>

          <h1 className={styles.title}>
            Building scalable,
            <br />

            <span>performant</span> digital
            experiences.
          </h1>

          <p className={styles.description}>
            Frontend engineer specializing in
            React.js, Next.js and TypeScript,
            with hands-on experience building
            business applications across
            multiple projects and domains.
          </p>

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

          <div className={styles.stack}>
            <span className={styles.stackLabel}>
              Core stack
            </span>

            <div className={styles.stackItems}>
              <Badge variant="accent">
                React.js
              </Badge>

              <Badge>Next.js</Badge>

              <Badge>TypeScript</Badge>

              <Badge>Redux</Badge>

              <Badge>Node.js</Badge>
            </div>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <ArrowDownRight
            size={16}
            strokeWidth={1.6}
          />

          <span>
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}