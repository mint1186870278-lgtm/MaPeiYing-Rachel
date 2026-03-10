"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { useLanguage } from "@/context/LanguageContext";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const { t } = useLanguage();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const skills = t("about.skills");
  const education = t("about.education");
  const certification = t("about.certification");
  const skillsList = Array.isArray(skills) ? skills : [];
  const educationList = Array.isArray(education) ? education : [];
  const certificationList = Array.isArray(certification) ? certification : [];

  const tabContent = {
    skills: (
      <ul className="list-disc pl-2">
        {skillsList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    ),
    education: (
      <ul className="list-disc pl-2">
        {educationList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    ),
    certification: (
      <ul className="list-disc pl-2">
        {certificationList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    ),
  };

  return (
    <section id="about" className="text-white min-h-screen flex items-center scroll-mt-24">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <Image 
          src="/images/about-image.png" 
          width={500} 
          height={500}
          alt="about image"
          priority
          quality={85}
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">{t("about.title")}</h2>

          <p className="text-base md:text-lg">
            {t("about.bio")}
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton 
              selectTab={() => handleTabChange("skills")} 
              active={tab === "skills"}
            >
              {t("about.tabs.skills")}
            </TabButton>

            <TabButton 
              selectTab={() => handleTabChange("education")} 
              active={tab === "education"}
            >
              {t("about.tabs.education")}
            </TabButton>

            <TabButton 
              selectTab={() => handleTabChange("certification")} 
              active={tab === "certification"}
            >
              {t("about.tabs.certification")}
            </TabButton>
          </div>

          <div className="mt-8">
            {tabContent[tab]}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
