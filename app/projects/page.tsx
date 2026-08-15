import type { Metadata } from "next";

import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import ProjectsGrid from "@/components/projects/ProjectsGrid";

import { projects } from "@/data/projects";

import styles from "./ProjectsPage.module.scss";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Abdul Kareem's frontend and full-stack projects, including React.js, Next.js, TypeScript, React Native, business applications, and personal projects.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <Section className={styles.hero}>
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects I've worked on."
          description="A collection of professional, freelance and personal projects covering frontend development, business applications, mobile experiences and full-stack collaboration."
        />
      </Section>

      <Section className={styles.projects}>
        <ProjectsGrid projects={projects} />
      </Section>
    </main>
  );
}