import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "esense-smart-school",

    slug: "esense-smart-school",

    title: "Esense – Smart School System",

    shortDescription:
      "A smart school management system with separate Admin, Teacher and Student experiences.",

    description:
      "A smart school management system designed around separate experiences for administrators, teachers and students. The web applications were built for Admin and Teacher workflows, while the Student experience was delivered through a React Native mobile application.",

    category: "professional",

    role: "Frontend Developer",

    technologies: [
      "React.js",
      "React Native",
      "Firebase",
      "JavaScript",
    ],

    features: [
      "Admin portal",
      "Teacher portal",
      "Student mobile application",
      "Online classes",
      "Assignment uploads",
      "Attendance tracking",
      "Digital exams",
      "Role-based dashboards",
      "Firebase push notifications",
    ],

    responsibilities: [
      "Developed the Admin and Teacher web applications using React.js.",
      "Built the Student mobile application using React Native.",
      "Implemented role-based dashboards.",
      "Integrated online class workflows using Zoom and Google Meet.",
      "Implemented assignment, attendance and digital exam features.",
      "Integrated Firebase push notifications for updates and schedules.",
    ],

    challenge:
      "The project required separate experiences for administrators, teachers and students while supporting different workflows such as attendance, assignments, online classes and examinations.",

    solution:
      "Built React.js web applications for Admin and Teacher workflows and a React Native mobile application for students. Firebase was integrated for backend services and push notifications.",

    outcome:
      "Delivered a multi-role school management platform covering administrative workflows, teacher operations and student mobile experiences.",

    featured: true,
  },

  {
    id: "inventory-management",
    slug: "inventory-management",
    title: "Inventory Management System",

    shortDescription:
      "A warehouse inventory dashboard for tracking stock availability and product locations.",

    description:
      "A warehouse inventory management dashboard that enables businesses to monitor stock availability and manage product locations efficiently.",

    category: "professional",

    role: "Frontend Developer",

    technologies: [
      "React.js",
      "TypeScript",
      "React Hooks",
      "Node.js",
      "REST APIs",
    ],

    features: [
      "Stock availability tracking",
      "Product location management",
      "Inventory dashboard",
      "Reusable UI components",
      "REST API integration",
      "Real-time inventory data updates",
    ],

    responsibilities: [
      "Built reusable React components using TypeScript and React Hooks.",
      "Maintained a scalable UI architecture.",
      "Integrated REST APIs with backend Node.js services.",
      "Implemented interfaces for fetching and updating inventory data.",
    ],

    challenge:
      "The application needed to provide a clear interface for monitoring stock availability and product locations while consuming backend inventory data.",

    solution:
      "Built a reusable React and TypeScript frontend with React Hooks and REST API integration for retrieving and updating inventory information.",

    outcome:
      "Delivered a responsive inventory dashboard that provided users with centralized visibility into stock and product locations.",

    featured: true,
  },

  {
    id: "seller-portal",
    slug: "seller-portal",
    title: "Seller Portal",

    shortDescription:
      "A centralized seller management portal for products, orders and warehouse operations.",

    description:
      "A seller management portal that provides vendors with a centralized dashboard for managing products, orders and warehouse operations.",

    category: "professional",

    role: "Frontend Developer",

    technologies: [
      "React.js",
      "JavaScript",
      "REST APIs",
    ],

    features: [
      "Product management",
      "Order management",
      "Warehouse operations",
      "Authentication",
      "Role-based authorization",
      "Responsive dashboard",
    ],

    responsibilities: [
      "Built the seller management dashboard using React.js.",
      "Implemented authentication and role-based authorization.",
      "Designed reusable responsive UI components.",
      "Supported desktop and mobile user experiences.",
    ],

    challenge:
      "Sellers needed a centralized interface for managing products, orders and warehouse-related operations.",

    solution:
      "Built a responsive React.js dashboard with reusable components, authentication and role-based authorization while integrating REST APIs.",

    outcome:
      "Provided sellers with a centralized portal for managing core product and order workflows.",

    featured: true,
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured
);