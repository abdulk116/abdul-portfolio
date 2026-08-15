export interface Skill {
  name: string;

  level?: "core" | "strong" | "working";

  description?: string;
}

export interface SkillGroup {
  id: string;

  number: string;

  title: string;

  description: string;

  skills: Skill[];
}