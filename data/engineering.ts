export const engineeringPrinciples = [
  {
    number: "01",
    title: "Component architecture",
    description:
      "Build reusable, focused components with clear responsibilities and predictable composition.",
  },
  {
    number: "02",
    title: "State management",
    description:
      "Choose local state, shared state or Redux based on application complexity and data flow requirements.",
  },
  {
    number: "03",
    title: "Performance",
    description:
      "Pay attention to rendering behavior, unnecessary updates, loading performance and efficient data handling.",
  },
  {
    number: "04",
    title: "API integration",
    description:
      "Connect frontend applications with REST APIs while keeping data flow and error handling predictable.",
  },
  {
    number: "05",
    title: "Responsive UI",
    description:
      "Build interfaces that work across desktop, tablet and mobile rather than treating mobile as an afterthought.",
  },
  {
    number: "06",
    title: "Maintainability",
    description:
      "Prefer readable code, reusable abstractions and structures that remain understandable as applications grow.",
  },
] as const;