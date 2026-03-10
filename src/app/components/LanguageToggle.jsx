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
            ? "text-white font-semibold"
            : "text-[#ADB7BE] hover:text-white"
        }`}
      >
        EN
      </button>
      <span className="text-[#ADB7BE]/50">|</span>
      <button
        onClick={() => setLocale("zh")}
        className={`px-2 py-1 text-sm rounded transition-colors ${
          locale === "zh"
            ? "text-white font-semibold"
            : "text-[#ADB7BE] hover:text-white"
        }`}
      >
        中文
      </button>
    </div>
  );
};

export default LanguageToggle;
