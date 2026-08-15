import type { Metadata } from "next";

import SkillsHero from "@/components/skills/SkillsHero";
import SkillGroups from "@/components/skills/SkillGroups";
import LearningDirection from "@/components/skills/LearningDirection";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Explore Abdul Kareem's technical skills in React.js, Next.js, TypeScript, JavaScript, Redux, Node.js, Express.js, MongoDB, and modern frontend development.",
  alternates: {
    canonical: "/skills",
  },
};

export default function SkillsPage() {
  return (
    <main>
      <SkillsHero />

      <SkillGroups />

      <LearningDirection />
    </main>
  );
}