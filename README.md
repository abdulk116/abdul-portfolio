# Abdul Kareem --- Portfolio

A modern, responsive developer portfolio built to showcase my
experience, selected projects, technical skills, and frontend
engineering approach.

The portfolio is designed around a clean, editorial-style interface with
a strong focus on usability, performance, responsive behavior,
accessibility, and polished micro-interactions.

## ✨ Overview

This portfolio presents me as a **React.js / Frontend Engineer** with
professional experience building business applications across web and
mobile projects.

The site highlights:

-   Professional experience
-   Selected projects and detailed case studies
-   Frontend and React ecosystem expertise
-   Engineering approach and capabilities
-   Responsive UI/UX
-   Light and dark themes
-   SEO-focused metadata and structured data
-   Project navigation and related projects
-   Real contact functionality
-   Resume access

## 👨‍💻 About

I am a frontend-focused software engineer specializing in:

-   React.js
-   Next.js
-   TypeScript
-   JavaScript

I also have hands-on experience with:

-   Node.js
-   Express.js
-   MongoDB
-   SQL
-   REST APIs
-   React Native
-   Expo

My earlier experience also includes IoT development using Arduino,
Raspberry Pi, Python, and Node-RED.

## 🚀 Key Features

### Home

The homepage includes:

-   Hero introduction
-   Professional positioning
-   Core technology stack
-   Career snapshot
-   Capabilities
-   Featured projects
-   Engineering approach
-   Experience preview
-   Contact CTA
-   Resume access

### Projects

The project section uses dynamic project detail routes:

``` text
/projects/[slug]
```

Project pages include:

-   Project hero
-   Project overview
-   Key features
-   Responsibilities
-   Technologies
-   Previous/next navigation
-   Related projects
-   Loading state
-   Project-specific not-found page

### Experience

The experience section presents my professional journey in a
timeline-oriented interface.

Professional experience includes:

-   Executive Software Engineer --- Soft Suave Technologies
-   IoT Engineer --- Fantasy Solution
-   Arduino Developer --- Galwin Technology
-   Quality Engineer --- Jindo Shell Mould

The portfolio emphasizes frontend engineering while also representing
earlier full-stack, IoT, and hardware-related work.

### Skills

The skills area provides a complete view of my technical stack.

Core areas include:

**Frontend & React Ecosystem**

-   React.js
-   Next.js
-   React Native
-   Expo
-   TypeScript
-   JavaScript
-   Redux
-   React Query
-   Tailwind CSS
-   Material UI

**Backend & Data**

-   Node.js
-   Express.js
-   MongoDB
-   SQL
-   REST APIs
-   Axios

**Realtime & Services**

-   Socket.IO
-   Firebase
-   JWT

**Development Tools**

-   Git
-   GitHub
-   Postman
-   JIRA
-   npm
-   Vite

**IoT / Earlier Experience**

-   Node-RED
-   Arduino
-   Raspberry Pi
-   Python

## 🎨 UI / UX

The portfolio follows a minimal, modern visual system rather than a
traditional resume-style layout.

Design characteristics include:

-   Editorial typography
-   Responsive layouts
-   Subtle background grids
-   Minimal borders
-   Controlled spacing
-   Rounded surfaces
-   Hover interactions
-   Micro-animations
-   Timeline interactions
-   Light and dark themes
-   Mobile-first responsive behavior

The goal is to keep the interface visually distinctive without allowing
animations or decorative elements to interfere with content.

## 🌗 Theme System

The portfolio supports:

-   Light theme
-   Dark theme
-   Persisted theme preference
-   System color-scheme fallback

Theme colors are implemented through CSS custom properties so the design
system remains consistent across components.

## 🔍 SEO

The portfolio includes:

-   Page metadata
-   Title templates
-   Descriptions
-   Keywords
-   Open Graph image
-   Structured data
-   Person schema
-   Website schema
-   Semantic page structure

A dedicated Open Graph image is included for social sharing.

## 📱 Responsive Design

The portfolio is designed for:

-   Desktop
-   Laptop
-   Tablet
-   Mobile

Responsive behavior is handled through component-specific SCSS and
responsive layout rules.

## 🧩 Architecture

The project follows a component-based Next.js architecture.

A simplified structure:

``` text
src/
├── app/
│   ├── projects/
│   │   └── [slug]/
│   ├── experience/
│   ├── skills/
│   ├── ...
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── home/
│   ├── projects/
│   ├── experience/
│   ├── layout/
│   └── ui/
│
├── data/
│   ├── projects.ts
│   ├── experiences.ts
│   └── techStack.ts
│
├── types/
│   ├── project.ts
│   └── experience.ts
│
└── styles/
```

Reusable data structures keep content separate from presentation, making
it easier to add projects, experiences, and technologies without
rewriting UI components.

## 🛠️ Tech Stack

  Category       Technologies
  -------------- ---------------------------------------
  Framework      Next.js
  UI             React.js
  Language       TypeScript, JavaScript
  Styling        SCSS / CSS Modules
  Icons          Lucide React
  State / Data   Redux, React Query
  Mobile         React Native, Expo
  Backend        Node.js, Express.js
  Database       MongoDB, SQL
  APIs           REST APIs, Axios
  Services       Firebase, Socket.IO, JWT
  Development    Git, GitHub, Postman, JIRA, npm, Vite

## 📦 Getting Started

Clone the repository:

``` bash
git clone <your-repository-url>
```

Move into the project:

``` bash
cd <project-directory>
```

Install dependencies:

``` bash
npm install
```

Start the development server:

``` bash
npm run dev
```

Open:

``` text
http://localhost:3000
```

## 🏗️ Production Build

Create a production build:

``` bash
npm run build
```

Run the production server:

``` bash
npm run start
```

## 📄 Resume

The portfolio provides a downloadable resume from the Hero section.

Expected asset:

``` text
public/resume/Abdul_Kareem_Frontend_Engineer_Resume.pdf
```

## 📬 Contact

The portfolio includes a dedicated contact flow for professional
opportunities, collaboration, and project discussions.

## 🌐 Portfolio

Live portfolio:

``` text
<your-live-portfolio-url>
```

## 🔗 Links

-   Portfolio: `<your-live-portfolio-url>`
-   GitHub: `<your-github-url>`
-   LinkedIn: `<your-linkedin-url>`
-   Resume: `/resume/Abdul-Kareem-Resume.pdf`

## 📌 Project Goals

1.  Present a clear professional identity as a React.js / Frontend
    Engineer.
2.  Demonstrate real-world frontend engineering skills through the
    implementation itself.
3.  Showcase selected projects with useful technical context.
4.  Present professional experience in a structured and readable way.
5.  Demonstrate responsive UI/UX and attention to detail.
6.  Maintain a scalable component and data architecture.
7.  Provide a fast, accessible, and SEO-friendly experience.
8.  Give recruiters a quick path from the Hero section to projects,
    experience, skills, and contact information.

## 💡 Engineering Philosophy

> **The portfolio itself should demonstrate the quality of the engineer
> behind it.**

Instead of treating the site as a static resume, the implementation
focuses on:

-   Reusable components
-   Maintainable data structures
-   Responsive design
-   Performance-conscious UI
-   Semantic markup
-   Clear information hierarchy
-   Thoughtful interactions
-   Practical frontend architecture

## 👤 Author

**Abdul Kareem**

**React.js / Frontend Engineer**

Specializing in React.js, Next.js, TypeScript, and modern frontend
development, with additional experience across Node.js, Express.js,
MongoDB, React Native, Expo, and IoT technologies.

------------------------------------------------------------------------

Built with React, Next.js, TypeScript, SCSS, and a strong focus on
frontend engineering.
