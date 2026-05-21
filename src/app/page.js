"use client";

import { useEffect } from "react";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    // 处理页面加载时的锚点滚动
    const hash = window.location.hash;
    if (hash) {
      // 等待页面渲染完成后再滚动
      setTimeout(() => {
        const targetId = hash.substring(1); // 移除 # 号
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
                    // For 'about' and 'contact' sections, center them. For others, align to top.
          const blockPosition = (targetId === 'about' || targetId === 'contact') ? 'center' : 'start';
          targetElement.scrollIntoView({ behavior: 'smooth', block: blockPosition });
        }
      }, 100);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="w-full mt-16 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />

        {/* ⭐ 把你的项目展示区插在这里 */}
        <ProjectsSection />

        {/* Contact section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
