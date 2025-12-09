"use client";

import Link from "next/link";

const Logo = ({ className = "" }) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-end gap-0 ${className} text-white hover:text-[#ADB7BE] transition-colors`}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0"
      >
        {/* R letter - minimalist tech style */}
        <path
          d="M8 8 L8 32 M8 8 L20 8 L24 12 L24 16 L20 20 L8 20 M20 20 L28 32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Tech accent - small geometric element */}
        <circle cx="20" cy="14" r="1.5" fill="currentColor" />
      </svg>
      <span className="text-sm md:text-base font-semibold tracking-normal uppercase -ml-1.5 text-[#ADB7BE]">
        achel
      </span>
    </Link>
  );
};

export default Logo;

