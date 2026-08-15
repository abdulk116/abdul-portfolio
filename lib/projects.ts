import type { Project } from "@/types/project";

import { projects } from "@/data/projects";

export function getProjectBySlug(
  slug: string
): Project | undefined {
  return projects.find(
    (project) => project.slug === slug
  );
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(
    (project) => project.featured
  );
}

export function getProjectsByCategory(
  category: string
): Project[] {
  return projects.filter(
    (project) => project.category === category
  );
}

export function getRelatedProjects(
  currentProject: Project,
  limit = 2
): Project[] {
  return projects
    .filter(
      (project) =>
        project.id !== currentProject.id
    )
    .sort((a, b) => {
      if (
        a.category ===
        currentProject.category
      ) {
        return -1;
      }

      if (
        b.category ===
        currentProject.category
      ) {
        return 1;
      }

      return 0;
    })
    .slice(0, limit);
}

export function getProjectNavigation(
  currentProject: Project
) {
  const currentIndex =
    projects.findIndex(
      (project) =>
        project.id === currentProject.id
    );

  return {
    previous:
      currentIndex > 0
        ? projects[currentIndex - 1]
        : undefined,

    next:
      currentIndex <
        projects.length - 1
        ? projects[currentIndex + 1]
        : undefined,
  };
}