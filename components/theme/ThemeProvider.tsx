"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext =
  createContext<ThemeContextValue | null>(null);

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] =
    useState<Theme>("light");

  useEffect(() => {
    const storedTheme =
      localStorage.getItem("theme") as Theme | null;

    if (
      storedTheme === "light" ||
      storedTheme === "dark"
    ) {
      setTheme(storedTheme);

      document.documentElement.dataset.theme =
        storedTheme;

      return;
    }

    const prefersDark =
      window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

    const initialTheme = prefersDark
      ? "dark"
      : "light";

    setTheme(initialTheme);

    document.documentElement.dataset.theme =
      initialTheme;
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme =
        currentTheme === "light"
          ? "dark"
          : "light";

      document.documentElement.dataset.theme =
        nextTheme;

      localStorage.setItem(
        "theme",
        nextTheme
      );

      return nextTheme;
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context =
    useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}