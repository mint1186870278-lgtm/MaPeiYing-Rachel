"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative mt-8 md:mt-12 w-full">
      {/* Top border line - full viewport width */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 border-t border-white/20 z-10"></div>
      
      <div className="flex items-center justify-between w-full pt-8 pb-8 z-10">
          {/* Left: LOGO */}
          <Logo />
          
          {/* Right: Copyright */}
          <div className="text-[#ADB7BE] text-sm md:text-base">
            {t("footer.rights")}
          </div>
        </div>
      </footer>
  );
};

export default Footer;

