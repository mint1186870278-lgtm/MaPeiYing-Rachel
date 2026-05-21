"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-neutral-300 dark:border-white/30 text-neutral-700 dark:text-[#ADB7BE] hover:bg-neutral-100 dark:hover:bg-white/10 hover:text-neutral-900 dark:hover:text-white transition-colors"
      aria-label={isDark ? t("theme.useLight") : t("theme.useDark")}
      title={isDark ? t("theme.useLight") : t("theme.useDark")}
    >
      {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggle;
