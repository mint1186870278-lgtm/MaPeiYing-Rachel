"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>React</li>
        <li>Github</li>
        <li>Adobe Photoshop</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Master of Science in Advanced Architectural Design</li>
        <li>The University of Hong Kong</li>
      </ul>
    )
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
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
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>

          <p className="text-base md:text-lg">
            As a multidisciplinary designer with an architecture background and an advanced Master's degree, I am committed to translating complex architectural and product concepts into clear, user-centric visual solutions, spanning sustainable design, UI/UX iteration, and visual communication. I am proficient in multi-domain tools like Figma, Adobe Creative Suite, and Rhino/AutoCAD, and excel at leveraging data analysis to drive design decisions and achieve measurable results. I am a fast learner and a proactive team player, eager to create impactful, smooth-experience products within cross-functional teams.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton 
              selectTab={() => handleTabChange("skills")} 
              active={tab === "skills"}
            >
              Skills
            </TabButton>

            <TabButton 
              selectTab={() => handleTabChange("education")} 
              active={tab === "education"}
            >
              Education
            </TabButton>

            <TabButton 
              selectTab={() => handleTabChange("certification")} 
              active={tab === "certification"}
            >
              Certification
            </TabButton>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
