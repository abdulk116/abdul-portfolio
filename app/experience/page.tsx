import type { Metadata } from "next";

import ExperienceHero from "@/components/experience/ExperienceHero";
import CareerHighlights from "@/components/experience/CareerHighlights";
import CareerTimeline from "@/components/experience/CareerTimeline";

import { experiences } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Explore Abdul Kareem's professional experience in frontend engineering, React.js, Next.js, JavaScript, TypeScript, and modern web application development.",
  alternates: {
    canonical: "/experience",
  },
};

export default function ExperiencePage() {
  return (
    <main>
      <ExperienceHero />

      <CareerHighlights />

      <CareerTimeline experiences={experiences} />
    </main>
  );
}