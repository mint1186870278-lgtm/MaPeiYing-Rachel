"use client";

import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="relative mt-8 md:mt-12 w-full">
      {/* Top border line extending full width */}
      <div className="w-full border-t border-white/20 z-10"></div>
      
      <div className="flex items-center justify-between w-full px-4 md:px-12 pt-8 pb-8 z-10">
          {/* Left: LOGO */}
          <Logo />
          
          {/* Right: Copyright */}
          <div className="text-[#ADB7BE] text-sm md:text-base">
            All rights reserved.
          </div>
        </div>
      </footer>
  );
};

export default Footer;

