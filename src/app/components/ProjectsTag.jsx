import React from "react";

const ProjectsTag = ({ name, value, onClick, isSelected }) => {
  const base =
    "inline-flex items-center justify-center shrink-0 rounded-full border-2 font-medium transition-colors cursor-pointer whitespace-nowrap min-h-[2.5rem] px-3 py-2 text-sm sm:min-h-0 sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-xl";
  const selected =
    "text-white bg-purple-600 border-purple-600 dark:bg-purple-500 dark:border-purple-500 shadow-sm";
  const idle =
    "text-neutral-700 border-neutral-300 bg-white hover:border-neutral-900 dark:text-[#ADB7BE] dark:border-slate-600 dark:bg-transparent dark:hover:border-white";

  const displayName = Array.isArray(name)
    ? name[0]
    : typeof name === "object" && name !== null
      ? String(name)
      : String(name || "");
  const tagValue = value ?? name;

  return (
    <button
      type="button"
      className={`${base} ${isSelected ? selected : idle}`}
      onClick={() => onClick(tagValue)}
    >
      {displayName}
    </button>
  );
};

export default ProjectsTag;
