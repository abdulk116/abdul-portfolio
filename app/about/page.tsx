import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import EngineeringPhilosophy from "@/components/about/EngineeringPhilosophy";
import WorkingStyle from "@/components/about/WorkingStyle";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Abdul Kareem, a React.js Frontend Engineer focused on building scalable, responsive, and high-performance web applications.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      <EngineeringPhilosophy />

      <WorkingStyle />

      <AboutCTA />
    </main>
  );
}