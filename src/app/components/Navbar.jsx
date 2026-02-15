"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import Logo from "./Logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";


const navLinks = [
  { title: "About", path: "/#about" },
  { title: "Projects", path: "/#projects" },
  { title: "Contact", path: "/#contact" }
];

const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // 监听滚动
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b border-white/20 ${
        scroll > 50 ? "bg-black/90" : "bg-black/30"
      }`}
    >
      <div className="flex items-center justify-between w-full px-4 md:px-12 py-4">
        {/* LOGO */}
        <Logo />

        {/* 大屏导航 */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, idx) => (
            <NavLink key={idx} href={link.path} title={link.title} />
          ))}
        </div>

        {/* 小屏汉堡菜单 */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >

            {menuOpen ? (
            <XMarkIcon className="w-5 h-5" />
          ) : (
            <Bars3Icon className="w-5 h-5" />
          )}
        </button>
        </div>
      </div>

      {/* 小屏下拉菜单 */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 w-full absolute top-full left-0">
          <ul className="flex flex-col p-4 space-y-4">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

