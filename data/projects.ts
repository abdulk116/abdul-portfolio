import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "lawft",

    slug: "lawft",

    title: "Lawft – Legal Practice Management Platform",

    shortDescription:
      "A production legal management platform where I focused on React performance, UI stabilization, responsive design and complex timezone handling.",

    description:
      "A production legal management platform where I was onboarded during my notice period as a Senior React Developer to resolve production UI issues, improve application performance, optimize state management and strengthen the frontend architecture. A major part of the work involved resolving a complex timezone issue affecting calendar events and user-selected timezones across the application.",

    category: "professional",

    role: "Frontend Developer",

    technologies: [
      "React.js",
      "React Router",
      "TypeScript",
      "Redux Toolkit",
      "FullCalendar",
      "Chart.js",
      "Axios",
    ],

    features: [
      "Legal practice management workflows",
      "Responsive application interface",
      "Calendar and event management",
      "User-configurable timezones",
      "Data visualization and charts",
      "Global state management",
      "Route-level state management",
      "Lazy-loaded components",
      "Dark theme",
      "Reusable UI components",
    ],

    responsibilities: [
      "Resolved and stabilized multiple production UI issues across the application.",
      "Improved responsive layouts and fixed cross-screen UI inconsistencies.",
      "Worked as a Senior React Developer focusing on production stability and frontend performance.",
      "Implemented lazy loading with React Suspense for heavy components to reduce the initial loading workload.",
      "Refactored the frontend into reusable components and custom hooks to improve maintainability.",
      "Reduced CSS complexity by removing unnecessary styles and introducing reusable CSS classes.",
      "Implemented dark theme support across the application.",
      "Optimized state management by keeping globally required data in Redux Toolkit and moving route-specific data into React Context.",
      "Analyzed and resolved a complex timezone issue involving JavaScript Date objects, FullCalendar and user-configured timezones.",
      "Created reusable date and timezone helper functions for consistent conversion between server UTC timestamps and user-selected timezones.",
      "Investigated date and timezone handling approaches across libraries including Moment, Luxon and Day.js.",
      "Ensured outgoing calendar and date values were normalized correctly before being submitted to the backend.",
      "Used Axios for API communication and integrated frontend data with existing backend services.",
    ],

    challenge:
      "The application allowed users to manually configure their preferred timezone independently from their device timezone. Calendar events were stored as UTC values on the server, but UI components relying on JavaScript Date objects could interpret timezone-adjusted values using the machine's system timezone. This caused calendar events to display incorrect times when a user's selected timezone differed from their system timezone.",

    solution:
      "Analyzed the complete date and timezone flow from the server response through the frontend state layer and calendar components. Implemented centralized timezone helper functions that first converted server UTC timestamps into the user's selected timezone, normalized the date and time representation before passing values to UI components, and converted user-entered values back to the appropriate timezone and UTC format before sending them to the server. This allowed the application to consistently respect the user's configured timezone regardless of the device's system timezone.",

    outcome:
      "Stabilized production UI issues, improved responsive behavior and frontend performance, reduced unnecessary global state usage, improved code maintainability through reusable components and hooks, and successfully resolved a complex timezone and calendar issue. The improvements were appreciated by the client for significantly improving production stability and resolving long-standing timezone inconsistencies.",

    featured: true,
  },
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