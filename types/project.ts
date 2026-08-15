export type ProjectCategory =
  | "professional"
  | "freelance"
  | "personal";

export interface Project {
  id: string;

  slug: string;

  title: string;

  shortDescription: string;

  description: string;

  category: ProjectCategory;

  role: string;

  technologies: string[];

  features: string[];

  responsibilities: string[];

  featured: boolean;

  year?: string;

  duration?: string;

  team?: string;

  client?: string;

  liveUrl?: string;

  githubUrl?: string;

  image?: string;

  challenge?: string;

  solution?: string;

  outcome?: string;
}