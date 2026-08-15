import Link from "next/link";
import {
  ArrowUpRight,
} from "lucide-react";

import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import ProjectCard from "@/components/projects/ProjectCard";

import { featuredProjects } from "@/data/projects";

import styles from "./FeaturedProjects.module.scss";

export default function FeaturedProjects() {
  return (
    <Section className={styles.section}>
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects that shaped my engineering journey."
        description="A selection of professional projects that represent my experience building React-based business applications."
      />

      <div className={styles.grid}>
        {featuredProjects.map(
          (project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          )
        )}
      </div>

      <div className={styles.footer}>
        <Link href="/projects">
          View all projects

          <ArrowUpRight
            size={16}
            strokeWidth={1.8}
          />
        </Link>
      </div>
    </Section>
  );
}