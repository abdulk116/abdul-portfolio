export interface Experience {
  id: string;

  company: string;

  role: string;

  location?: string;

  startDate: string;

  endDate: string;

  description: string;

  technologies: string[];

  highlights: string[];

  projectCount?: string;

  featured?: boolean;
}