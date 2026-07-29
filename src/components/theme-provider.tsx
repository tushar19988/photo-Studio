"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  React.useEffect(() => {
    // Remove stale localStorage theme override so it strictly follows device OS system theme
    try {
      localStorage.removeItem("theme");
    } catch (e) {}

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = (isDark: boolean) => {
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    // Initial sync with OS setting
    updateTheme(mediaQuery.matches);

    // Dynamic listener when OS appearance changes (Light <-> Dark)
    const handleChange = (e: MediaQueryListEvent) => {
      updateTheme(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
