import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/types/project";

import styles from "./RelatedProjects.module.scss";

interface RelatedProjectsProps {
  projects: Project[];
}

export default function RelatedProjects({
  projects,
}: RelatedProjectsProps) {
  if (!projects.length) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>
              Continue Exploring
            </span>

            <h2>More projects</h2>
          </div>

          <Link
            href="/projects"
            className={styles.viewAll}
          >
            <span>View all projects</span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
            />
          </Link>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className={styles.card}
            >
              <div className={styles.content}>
                <span className={styles.category}>
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.shortDescription}</p>
              </div>

              <span className={styles.icon}>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.7}
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}