"use client";

import {
  useMemo,
  useState,
} from "react";

import ProjectCard from "./ProjectCard";
import ProjectFilters, {
  type ProjectFilter,
} from "./ProjectFilters";

import type { Project } from "@/types/project";

import styles from "./ProjectsGrid.module.scss";

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({
  projects,
}: ProjectsGridProps) {
  const [filter, setFilter] =
    useState<ProjectFilter>("all");

  const filteredProjects = useMemo(() => {
    if (filter === "all") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.category === filter
    );
  }, [projects, filter]);

  return (
    <>
      <ProjectFilters
        activeFilter={filter}
        onChange={setFilter}
      />

      {filteredProjects.length > 0 ? (
        <div className={styles.grid}>
          {filteredProjects.map(
            (project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            )
          )}
        </div>
      ) : (
        <div className={styles.empty}>
          <p>
            No projects available in this
            category yet.
          </p>
        </div>
      )}
    </>
  );
}