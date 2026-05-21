"use client"
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsTag from "./ProjectsTag";
import { useLanguage } from "@/context/LanguageContext";

const projectsData = [
  {
    id: "UIProject1",
    titleKey: "UIProject1",
    descriptionKey: "UIProject1",
    imgUrl: "/ui project1/ui project-1.png",
    blurImgUrl: "/ui project1/ui project-1.png",
    codeLink: "",
    previewLink: null,
    projectLink: "https://focuspal-ten.vercel.app/", // TODO: 替换为项目网页链接
    tag: ["All", "UI/UX"]
  },
  {
    id: "UIProject2",
    titleKey: "UIProject2",
    descriptionKey: "UIProject2",
    imgUrl: "/ui project2/ui project-2.png",
    blurImgUrl: "/ui project2/ui project-2.png",
    codeLink: "",
    previewLink: null,
    projectLink: "https://www.skillswap.lat/", // TODO: 替换为项目网页链接
    tag: ["All", "UI/UX"]
  },
  {
    id: "UIProject3",
    titleKey: "UIProject3",
    descriptionKey: "UIProject3",
    imgUrl: "/ui project3/ui project-3.png",
    blurImgUrl: "/ui project3/ui project-3.png",
    codeLink: "",
    previewLink: null,
    projectLink: "https://legicheck.vercel.app/", // TODO: 替换为项目网页链接
    tag: ["All", "UI/UX"]
  },
  {
    id: "UIProject4",
    titleKey: "UIProject4",
    descriptionKey: "UIProject4",
    imgUrl: "/ui project4/ui project-4.png",
    blurImgUrl: "/ui project4/ui project-4.png",
    codeLink: "",
    previewLink: null,
    projectLink: "https://whatifstudio.saurlax.com/",
    tag: ["All", "UI/UX"]
  },
  {
    id: "Project1",
    titleKey: "Project1",
    descriptionKey: "Project1",
    imgUrl: "/images/projects/Project1.png",
    blurImgUrl: "/images/projectsBlur/Project1(blur).png",
    codeLink: "https://github.com/your-repo-1",
    previewLink: "/project1-preview",
    tag: ["All", "Architecture"]
  },
  {
    id: "Project2",
    titleKey: "Project2",
    descriptionKey: "Project2",
    imgUrl: "/images/projects/Project2.png",
    blurImgUrl: "/images/projectsBlur/Project2(blur).png",
    codeLink: "https://github.com/your-repo-2",
    previewLink: "/project2-preview",
    tag: ["All", "Architecture"]
  },
  {
    id: "Project3",
    titleKey: "Project3",
    descriptionKey: "Project3",
    imgUrl: "/images/projects/Project3.png",
    blurImgUrl: "/images/projectsBlur/Project3(blur).png",
    codeLink: "https://github.com/your-repo-3",
    previewLink: "/project3-preview",
    tag: ["All", "Architecture"]
  },
  {
    id: "Project4",
    titleKey: "Project4",
    descriptionKey: "Project4",
    imgUrl: "/images/projects/Video cover1.png",
    blurImgUrl: "/images/projects/Video cover1.png",
    codeLink: "https://github.com/your-repo-4",
    previewLink: "/video1-preview",
    tag: ["All", "Video"]
  },
  {
    id: "Project5",
    titleKey: "Project5",
    descriptionKey: "Project5",
    imgUrl: "/images/projects/Video cover2.2.png",
    blurImgUrl: "/images/projects/Video cover2.2.png",
    codeLink: "https://github.com/your-repo-5",
    previewLink: "/video2-preview",
    tag: ["All", "Video"]
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const { t } = useLanguage();

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter(project =>
    tag === "All" || project.tag.includes(tag)
  );

  const getProjectTitle = (p) => p.titleKey ? t(`projects.items.${p.titleKey}.title`) : p.title;
  const getProjectDesc = (p) => p.descriptionKey ? t(`projects.items.${p.descriptionKey}.description`) : p.description;

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-neutral-900 dark:text-white mb-10">
        {t("projects.title")}
      </h2>

      <div className="flex w-full flex-wrap items-center justify-between gap-y-2 gap-x-1 py-6 md:justify-center md:gap-x-3">
        <ProjectsTag onClick={handleTagChange} name={t("projects.tags.all")} value="All" isSelected={tag === "All"} />
        <ProjectsTag onClick={handleTagChange} name={t("projects.tags.uiux")} value="UI/UX" isSelected={tag === "UI/UX"} />
        <ProjectsTag onClick={handleTagChange} name={t("projects.tags.architecture")} value="Architecture" isSelected={tag === "Architecture"} />
        <ProjectsTag onClick={handleTagChange} name={t("projects.tags.video")} value="Video" isSelected={tag === "Video"} />
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={getProjectTitle(project)}
            description={getProjectDesc(project)}
            imgUrl={project.imgUrl}
            blurImgUrl={project.blurImgUrl}
            codeLink={project.codeLink}
            previewLink={project.previewLink}
            projectLink={project.projectLink}
            priority={index < 3}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
