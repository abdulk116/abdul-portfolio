import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";

import { featuredProjects } from "@/data/projects";

import styles from "./FeaturedProjects.module.scss";
import Reveal from "../ui/Reveal";

export default function FeaturedProjects() {
  return (
    <Section className={styles.section}>
      <div className={styles.headingRow}>
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects that shaped my engineering journey."
          description="A selection of professional projects that represent my experience building React-based business applications."
        />

        <div className={styles.projectCount}>
          <span>
            {String(featuredProjects.length).padStart(2, "0")}
          </span>

          <small>Featured projects</small>
        </div>
      </div>

      <div className={styles.grid}>
        {featuredProjects.map((project, index) => (
          <Reveal
            key={project.id}
            delay={index * 100}
          >
            <ProjectCard
              project={project}
              index={index}
            />
          </Reveal>
        ))}
      </div>

      <div className={styles.footer}>
        <span className={styles.footerText}>
          More projects, experiments and
          engineering work
        </span>

        <Link
          href="/projects"
          className={styles.viewAll}
        >
          <span>View all projects</span>

          <span className={styles.arrow}>
            <ArrowUpRight
              size={16}
              strokeWidth={1.8}
            />
          </span>
        </Link>
      </div>
    </Section>
  );
}