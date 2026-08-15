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
  mounted: boolean;
}

const ThemeContext =
  createContext<ThemeContextValue | null>(null);

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] =
    useState<Theme>("dark");

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    const currentTheme =
      document.documentElement.dataset.theme;

    const resolvedTheme =
      currentTheme === "dark"
        ? "dark"
        : "light";

    setTheme(resolvedTheme);

    setMounted(true);
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
        mounted,
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