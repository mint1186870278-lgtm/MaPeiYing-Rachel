"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
