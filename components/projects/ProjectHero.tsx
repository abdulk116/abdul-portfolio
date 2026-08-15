import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

import Badge from "@/components/ui/Badge";

import type { Project } from "@/types/project";

import styles from "./ProjectHero.module.scss";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({
  project,
}: ProjectHeroProps) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.topbar}>
          <Link
            href="/projects"
            className={styles.back}
          >
            <ArrowLeft
              size={14}
              strokeWidth={1.7}
            />

            <span>Back to projects</span>
          </Link>

          <span className={styles.caseStudy}>
            Case Study
          </span>
        </div>

        <div className={styles.content}>
          <div className={styles.meta}>
            <span>{project.category}</span>

            <span className={styles.metaDivider}>
              /
            </span>

            <span>{project.role}</span>

            {project.year && (
              <>
                <span className={styles.metaDivider}>
                  /
                </span>

                <span>{project.year}</span>
              </>
            )}
          </div>

          <h1>{project.title}</h1>

          <p className={styles.description}>
            {project.description}
          </p>

          <div className={styles.footer}>
            <div className={styles.technologies}>
              {project.technologies.map(
                (technology) => (
                  <Badge key={technology}>
                    {technology}
                  </Badge>
                )
              )}
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.liveLink}
              >
                <span>
                  Visit project
                </span>

                <span
                  className={styles.liveIcon}
                >
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.7}
                  />
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}