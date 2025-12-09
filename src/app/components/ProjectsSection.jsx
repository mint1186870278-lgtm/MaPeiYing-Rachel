"use client"
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsTag from "./ProjectsTag";

const projectsData = [
  {
    id: "Project1",
    title: "RIVIVE: RESTORING LIFE TO OUR BROKEN RIVER",
    description: "The Rivive landscape plan aims to restore a damaged river ecosystem for the community's benefit through promoting biodiversity and improving water quality.",
    imgUrl: "/images/projects/Project1.png",
    blurImgUrl: "/images/projectsBlur/Project1(blur).png",
    codeLink: "https://github.com/your-repo-1",
    previewLink: "/project1-preview",
    tag: ["All", "Architecture"]
  },
  {
    id: "Project2",
    title: "RIVIVE: COMMUNITY CONFLUENTIA: A TIDAL PARK FOR NATURE AND",
    description: "The Confluentia tidal park proposal aims to create a sustainable public space at the meeting point of two rivers, providing wildlife habitat and recreation opportunities for the local community.",
    imgUrl: "/images/projects/Project2.png",
    blurImgUrl: "/images/projectsBlur/Project2(blur).png",
    codeLink: "https://github.com/your-repo-2",
    previewLink: "/project2-preview",
    tag: ["All", "Architecture"]
  },
  {
    id: "Project3",
    title: "RIVIVE: FRESH LINK",
    description: "The vegetable supply station aims to provide fresh produce to an urban village community and create a new relationship between people and vegetables, while also offering part-time job opportunities for college students.",
    imgUrl: "/images/projects/Project3.png",
    blurImgUrl: "/images/projectsBlur/Project3(blur).png",
    codeLink: "https://github.com/your-repo-3",
    previewLink: "/project3-preview",
    tag: ["All", "Architecture"]
  },
  {
    id: "Project4",
    title: "BETWEEN TULOUS",
    description: "A year-long project by HKU’s Master of Advanced Architectural Design students, exploring interventions in historic tulou architecture through research, fabrication, and on-site construction.",
    imgUrl: "/images/projects/Video cover1.png",
    blurImgUrl: "/images/projects/Video cover1.png",
    codeLink: "https://github.com/your-repo-4",
    previewLink: "/video1-preview",
    tag: ["All", "Video"]
  },
  {
    id: "Project5",
    title: "SO DIFFICULTY TO BEND",
    description: "In the April 2025 Shenzhen workshop, we explored curved long-span structures with limited materials, documenting the process through photography and video to capture spatial and structural exploration.",
    imgUrl: "/images/projects/Video cover2.2.png",
    blurImgUrl: "/images/projects/Video cover2.2.png",
    codeLink: "https://github.com/your-repo-5",
    previewLink: "/video2-preview",
    tag: ["All", "Video"]
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter(project =>
    tag === "All" || project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mb-10">
        My Projects
      </h2>

      {/* 按钮组 */}
      <div className="flex justify-center items-center gap-2 py-6">
        <ProjectsTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectsTag onClick={handleTagChange} name="Architecture" isSelected={tag === "Architecture"} />
        <ProjectsTag onClick={handleTagChange} name="Video" isSelected={tag === "Video"} />
      </div>

      {/* 项目卡片 */}
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            blurImgUrl={project.blurImgUrl}
            codeLink={project.codeLink}
            previewLink={project.previewLink}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
