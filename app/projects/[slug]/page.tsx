import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getProjectBySlug,
  getProjectNavigation,
  getRelatedProjects,
} from "@/lib/projects";

import ProjectHero from "@/components/projects/ProjectHero";
import ProjectOverview from "@/components/projects/ProjectOverview";
import ProjectFeatures from "@/components/projects/ProjectFeatures";
import ProjectResponsibilities from "@/components/projects/ProjectResponsibilities";
import ProjectTechnologies from "@/components/projects/ProjectTechnologies";
import ProjectNavigation from "@/components/projects/ProjectNavigation";
import RelatedProjects from "@/components/projects/RelatedProjects";
import ProjectJsonLd from "@/components/seo/ProjectJsonLd";
import { siteConfig } from "@/config/site";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects =
    await import("@/data/projects");

  return projects.projects.map(
    (project) => ({
      slug: project.slug,
    })
  );
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project =
    getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,

    description:
      project.shortDescription,

    alternates: {
      canonical: `/projects/${project.slug}`,
    },

    openGraph: {
      title: project.title,

      description:
        project.shortDescription,
    },
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project =
    getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectUrl =
    `${siteConfig.url}/projects/${project.slug}`;

  const relatedProjects =
    getRelatedProjects(project);

  const {
    previous,
    next,
  } = getProjectNavigation(project);

  return (
    <main>
      <ProjectJsonLd
        title={project.title}
        description={project.shortDescription}
        url={projectUrl}
      />
      <ProjectHero
        project={project}
      />

      <ProjectOverview
        project={project}
      />

      <ProjectFeatures
        project={project}
      />

      <ProjectResponsibilities
        project={project}
      />

      <ProjectTechnologies
        project={project}
      />

      <ProjectNavigation
        previous={previous}
        next={next}
      />

      <RelatedProjects
        projects={relatedProjects}
      />
    </main>
  );
}