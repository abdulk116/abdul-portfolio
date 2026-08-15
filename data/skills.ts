import type { SkillGroup } from "@/types/skill";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    number: "01",

    title: "Frontend Engineering",

    description:
      "My primary area of expertise is building modern web applications and reusable interfaces with the React ecosystem.",

    skills: [
      {
        name: "React.js",
        level: "core",
        description:
          "Component-driven application development, hooks, reusable UI and application architecture.",
      },
      {
        name: "JavaScript",
        level: "core",
        description:
          "Modern ES6+ JavaScript, asynchronous programming, array methods, modules and browser APIs.",
      },
      {
        name: "TypeScript",
        level: "strong",
        description:
          "Typed components, interfaces, reusable types and safer application development.",
      },
      {
        name: "Next.js",
        level: "strong",
        description:
          "App Router, routing, server-side capabilities, metadata and production React applications.",
      },
    ],
  },

  {
    id: "state-data",
    number: "02",

    title: "State & Data",

    description:
      "Working with application state, APIs and data-driven interfaces.",

    skills: [
      {
        name: "Redux",
        level: "strong",
        description:
          "Global state management and predictable application state.",
      },
      {
        name: "REST APIs",
        level: "strong",
        description:
          "API integration, request handling, loading states and error handling.",
      },
      {
        name: "Axios",
        level: "strong",
        description:
          "HTTP client integration for frontend applications.",
      },
      {
        name: "Firebase",
        level: "working",
        description:
          "Firebase services used in application development and integrations.",
      },
    ],
  },

  {
    id: "ui-architecture",
    number: "03",

    title: "UI & Architecture",

    description:
      "Building interfaces that are responsive, reusable and maintainable.",

    skills: [
      {
        name: "Material UI",
        level: "strong",
        description:
          "Building production interfaces using reusable MUI components.",
      },
      {
        name: "Responsive Design",
        level: "strong",
        description:
          "Designing interfaces that adapt across desktop, tablet and mobile devices.",
      },
      {
        name: "Component Architecture",
        level: "strong",
        description:
          "Breaking applications into reusable and maintainable component systems.",
      },
      {
        name: "Performance",
        level: "working",
        description:
          "Identifying unnecessary rendering, improving component behaviour and optimizing frontend experiences.",
      },
    ],
  },

  {
    id: "mobile",
    number: "04",

    title: "Mobile Development",

    description:
      "Building cross-platform mobile experiences using the React ecosystem.",

    skills: [
      {
        name: "React Native",
        level: "strong",
        description:
          "Building cross-platform mobile applications using React Native.",
      },
      {
        name: "Expo",
        level: "strong",
        description:
          "Developing, testing and building React Native applications with Expo.",
      },
    ],
  },

  {
    id: "backend",
    number: "05",

    title: "Backend Knowledge",

    description:
      "Frontend-focused development backed by practical understanding of backend technologies.",

    skills: [
      {
        name: "Node.js",
        level: "working",
        description:
          "Understanding server-side JavaScript and backend application development.",
      },
      {
        name: "Express.js",
        level: "working",
        description:
          "REST API development and backend application structure.",
      },
      {
        name: "MongoDB",
        level: "working",
        description:
          "Working with document-oriented databases and application data.",
      },
    ],
  },

  {
    id: "tools",
    number: "06",

    title: "Tools & Workflow",

    description:
      "Tools used for development, collaboration, debugging and project delivery.",

    skills: [
      {
        name: "Git",
        level: "strong",
      },
      {
        name: "GitHub",
        level: "strong",
      },
      {
        name: "Postman",
        level: "strong",
      },
      {
        name: "JIRA",
        level: "working",
      },
    ],
  },
];