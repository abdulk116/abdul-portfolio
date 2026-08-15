"use client";

import styles from "./ProjectFilters.module.scss";

export type ProjectFilter =
  | "all"
  | "professional"
  | "freelance"
  | "personal";

interface ProjectFiltersProps {
  activeFilter: ProjectFilter;
  onChange: (
    filter: ProjectFilter
  ) => void;
}

const filters: {
  label: string;
  value: ProjectFilter;
}[] = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Professional",
      value: "professional",
    },
    {
      label: "Freelance",
      value: "freelance",
    },
    {
      label: "Personal",
      value: "personal",
    },
  ];

export default function ProjectFilters({
  activeFilter,
  onChange,
}: ProjectFiltersProps) {
  return (
    <div className={styles.filters}>
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          className={
            activeFilter === filter.value
              ? styles.active
              : ""
          }
          onClick={() =>
            onChange(filter.value)
          }
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}