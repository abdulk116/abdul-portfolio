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
    id: "camu",

    slug: "camu",

    title: "Camu – Digital Campus Management Platform",

    shortDescription:
      "A digital campus management platform modernized from AngularJS to React.js for managing universities, colleges and student operations.",

    description:
      "A large-scale digital campus management platform used by universities, colleges and students to manage academic and administrative workflows. The existing application was built with AngularJS, and my responsibility was to modernize the frontend by migrating the existing application to React.js while preserving the existing backend APIs and business workflows. The project included separate university and college management applications along with the MyCamu student experience.",

    category: "professional",

    role: "Frontend Developer",

    technologies: [
      "React.js",
      "SCSS",
      "Material UI",
      "Redux Toolkit",
      "React Bootstrap",
      "Moment.js",
      "FullCalendar",
    ],

    features: [
      "University management",
      "College management",
      "Student management",
      "Academic management workflows",
      "University and college configuration",
      "Student portal",
      "Calendar and event management",
      "Data filtering and sorting",
      "Responsive dashboards",
      "Role-based application workflows",
      "Reusable component system",
      "Optimized data management",
    ],

    responsibilities: [
      "Migrated existing AngularJS frontend applications to React.js while maintaining the existing backend APIs and business workflows.",
      "Worked across the University/College management application and MyCamu student application repositories.",
      "Designed and implemented a feature-based React project structure to improve scalability and maintainability.",
      "Converted existing AngularJS views and workflows into reusable React components.",
      "Created reusable UI components and shared utilities to reduce duplication across the application.",
      "Optimized React rendering by identifying unnecessary component re-renders and improving component update patterns.",
      "Analyzed the existing Redux architecture and divided the large global store into focused Redux Toolkit slices.",
      "Moved component-tree-specific state from Redux into localized Context or component state when global access was unnecessary.",
      "Reduced unnecessary global state subscriptions and improved application responsiveness by keeping state closer to the components that required it.",
      "Created optimized helper functions for data manipulation, transformation and date formatting.",
      "Implemented lazy loading with React Suspense for large and resource-intensive application modules.",
      "Analyzed JavaScript bundle size and removed unnecessary libraries and scripts to reduce frontend payload.",
      "Used React Profiler to identify slow components, unnecessary re-renders and rendering bottlenecks.",
      "Optimized expensive rendering and data-processing operations while preserving the existing application behavior.",
      "Maintained responsive layouts and consistent UI behavior during the AngularJS-to-React migration.",
      "Worked within an existing production codebase where significant business logic was implemented on the frontend.",
    ],

    challenge:
      "The main challenge was modernizing an existing AngularJS application without changing the backend or breaking established business workflows. A significant amount of business logic such as sorting, filtering, data transformation and formatting was already implemented on the frontend. The existing application also maintained a very large Redux store containing university and college configuration data. Rebuilding these workflows in React while preserving the existing behavior introduced rendering overhead, unnecessary re-renders and performance bottlenecks.",

    solution:
      "Migrated the frontend incrementally to a feature-based React architecture while preserving the existing backend APIs and business rules. Refactored the large Redux store into focused Redux Toolkit slices and moved state that was only required by specific component trees into localized Context or component state. Built reusable and optimized components, improved data-manipulation utilities, implemented lazy loading with React Suspense, analyzed bundle composition, removed unnecessary dependencies and scripts, and used React Profiler to identify and resolve expensive rendering and unnecessary re-rendering. This approach allowed the new React frontend to preserve the existing application behavior while significantly improving its maintainability and runtime performance.",

    outcome:
      "Successfully modernized major parts of the existing AngularJS frontend into a structured React.js architecture while keeping the existing backend and business workflows intact. The resulting frontend had a more maintainable feature-based structure, better state isolation, reduced unnecessary Redux usage, optimized component rendering, improved initial loading through lazy loading, and a cleaner JavaScript dependency footprint.",

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