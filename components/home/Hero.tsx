import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

import styles from "./Hero.module.scss";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundGrid} />

      <div className={styles.glow} />

      <div className="container">
        <div className={styles.content}>
          {/* Eyebrow */}
          <div className={styles.eyebrow}>
            <span className={styles.dot} />

            <span>
              React.js / Frontend Engineer
            </span>
          </div>

          {/* Main heading */}
          <h1 className={styles.title}>
            <span className={styles.line}>
              Building scalable,
            </span>

            <span className={styles.line}>
              <span className={styles.muted}>
                performant
              </span>{" "}
              digital
            </span>

            <span className={styles.line}>
              experiences.
            </span>
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Frontend engineer specializing in React.js,
            Next.js and TypeScript, with hands-on experience
            building scalable, production-ready applications
            across web, mobile, and multiple business domains.
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
              href="/resume/Abdul_Kareem_Frontend_Engineer_Resume.pdf"
              external
              variant="secondary"
            >
              Download resume
            </Button>
          </div>

          {/* Stack */}
          <div className={styles.stack}>
            <span className={styles.stackLabel}>
              Core stack
            </span>

            <div className={styles.stackItems}>
              <Badge variant="accent">
                React.js
              </Badge>

              <Badge>
                Next.js
              </Badge>

              <Badge>
                JavaScript
              </Badge>

              <Badge>
                TypeScript
              </Badge>

              <Badge>
                Redux
              </Badge>

              <Badge>
                Node.js
              </Badge>
            </div>

            <Link
              href="/skills"
              className={styles.skillsLink}
            >
              <span>
                View full technical stack
              </span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.7}
              />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollLine} />

          <ArrowDownRight
            size={15}
            strokeWidth={1.5}
          />

          <span>
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}