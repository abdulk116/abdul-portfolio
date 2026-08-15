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
        <Link
          href="/projects"
          className={styles.back}
        >
          <ArrowLeft
            size={15}
            strokeWidth={1.7}
          />

          Back to projects
        </Link>

        <div className={styles.content}>
          <div className={styles.meta}>
            <span>
              {project.category}
            </span>

            <span>•</span>

            <span>
              {project.role}
            </span>

            {project.year && (
              <>
                <span>•</span>

                <span>
                  {project.year}
                </span>
              </>
            )}
          </div>

          <h1>
            {project.title}
          </h1>

          <p className={styles.description}>
            {project.description}
          </p>

          <div className={styles.technologies}>
            {project.technologies.map(
              (technology) => (
                <Badge
                  key={technology}
                >
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
              Visit project

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
              />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}