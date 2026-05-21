"use client";

import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import Logo from "./Logo";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { titleKey: "nav.about", path: "/#about" },
    { titleKey: "nav.projects", path: "/#projects" },
    { titleKey: "nav.contact", path: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b border-neutral-200/80 dark:border-white/20 ${
        scroll > 50
          ? "bg-background/95 backdrop-blur-sm dark:bg-black/90"
          : "bg-background/85 backdrop-blur-sm dark:bg-black/30"
      }`}
    >
      <div className="flex items-center justify-between w-full px-12 py-4">
        <Logo />

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <NavLink key={idx} href={link.path} title={t(link.titleKey)} />
          ))}
          <ThemeToggle />
          <LanguageToggle />
        </div>

        {/* 小屏汉堡菜单 */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center px-3 py-2 border rounded border-neutral-400 text-neutral-700 hover:text-neutral-900 hover:border-neutral-900 dark:border-slate-200 dark:text-slate-200 dark:hover:text-white dark:hover:border-white"
          >

            {menuOpen ? (
            <XMarkIcon className="w-5 h-5" />
          ) : (
            <Bars3Icon className="w-5 h-5" />
          )}
        </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background/98 dark:bg-black/90 backdrop-blur-sm w-full absolute top-full left-0 border-b border-neutral-200 dark:border-white/10">
          <ul className="flex flex-col p-4 space-y-4">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <NavLink href={link.path} title={t(link.titleKey)} />
              </li>
            ))}
            <li className="flex items-center gap-3 pt-2 flex-wrap">
              <ThemeToggle />
              <LanguageToggle />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

