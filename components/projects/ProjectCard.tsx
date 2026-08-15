import Link from "next/link";
import {
  ArrowUpRight,
} from "lucide-react";

import Badge from "@/components/ui/Badge";

import type { Project } from "@/types/project";

import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({
  project,
  index = 0,
}: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <Link
        href={`/projects/${project.slug}`}
        className={styles.link}
      >
        <div className={styles.visual}>
          <div className={styles.visualGrid} />

          <span className={styles.projectNumber}>
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className={styles.openIcon}>
            <ArrowUpRight
              size={18}
              strokeWidth={1.7}
            />
          </span>

          <span className={styles.visualTitle}>
            {project.title}
          </span>
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <div>
              <p className={styles.category}>
                {project.category}
              </p>

              <h3>
                {project.title}
              </h3>
            </div>
          </div>

          <p className={styles.description}>
            {project.shortDescription}
          </p>

          <div className={styles.technologies}>
            {project.technologies
              .slice(0, 4)
              .map((technology) => (
                <Badge key={technology}>
                  {technology}
                </Badge>
              ))}
          </div>
        </div>
      </Link>
    </article>
  );
}