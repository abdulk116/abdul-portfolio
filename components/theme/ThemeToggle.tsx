"use client";

import {
  Moon,
  Sun,
} from "lucide-react";

import {
  useTheme,
} from "./ThemeProvider";

import styles from "./ThemeToggle.module.scss";

export default function ThemeToggle() {
  const {
    theme,
    toggleTheme,
  } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={styles.button}
      onClick={toggleTheme}
      aria-label={
        isDark
          ? "Switch to light theme"
          : "Switch to dark theme"
      }
      title={
        isDark
          ? "Switch to light theme"
          : "Switch to dark theme"
      }
    >
      {isDark ? (
        <Sun size={17} strokeWidth={1.7} />
      ) : (
        <Moon size={17} strokeWidth={1.7} />
      )}
    </button>
  );
}