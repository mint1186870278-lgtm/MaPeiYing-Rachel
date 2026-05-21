"use client";

import { useLanguage } from "@/context/LanguageContext";

const LanguageToggle = () => {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setLocale("en")}
        className={`px-2 py-1 text-sm rounded transition-colors ${
          locale === "en"
            ? "text-neutral-900 font-semibold dark:text-white"
            : "text-neutral-600 hover:text-neutral-900 dark:text-[#ADB7BE] dark:hover:text-white"
        }`}
      >
        EN
      </button>
      <span className="text-neutral-400 dark:text-[#ADB7BE]/50">|</span>
      <button
        onClick={() => setLocale("zh")}
        className={`px-2 py-1 text-sm rounded transition-colors ${
          locale === "zh"
            ? "text-neutral-900 font-semibold dark:text-white"
            : "text-neutral-600 hover:text-neutral-900 dark:text-[#ADB7BE] dark:hover:text-white"
        }`}
      >
        中文
      </button>
    </div>
  );
};

export default LanguageToggle;
