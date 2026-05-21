"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
});

function applyThemeClass(theme) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("dark");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const initial = saved === "light" || saved === "dark" ? saved : "dark";
    setThemeState(initial);
    applyThemeClass(initial);
  }, []);

  const setTheme = useCallback((next) => {
    if (next !== "light" && next !== "dark") return;
    setThemeState(next);
    applyThemeClass(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", next);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      applyThemeClass(next);
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", next);
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
