"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  const cycleTheme = () => {
    if (theme === "dark") setTheme("light");
    else if (theme === "light") setTheme("system");
    else setTheme("dark");
  };

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-full border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50"
      title={`Theme: ${theme || "system"}`}
      aria-label="Toggle Theme"
      data-cursor
    >
      {theme === "dark" ? (
        <Moon className="w-4 h-4 text-amber-300" />
      ) : theme === "light" ? (
        <Sun className="w-4 h-4 text-amber-600" />
      ) : (
        <Monitor className="w-4 h-4 text-neutral-500" />
      )}
    </button>
  );
}
