"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const projectsData = [
  {
    id: "Project1",
    title: "RIVIVE: RESTORING LIFE TO OUR BROKEN RIVER",
    previewLink: "/project1-preview",
  },
  {
    id: "Project2",
    title: "RIVIVE: COMMUNITY CONFLUENTIA: A TIDAL PARK FOR NATURE AND",
    previewLink: "/project2-preview",
  },
  {
    id: "Project3",
    title: "RIVIVE: FRESH LINK",
    previewLink: "/project3-preview",
  },
  {
    id: "Project4",
    title: "BETWEEN TULOUS",
    previewLink: "/video1-preview",
  },
  {
    id: "Project5",
    title: "SO DIFFICULTY TO BEND",
    previewLink: "/video2-preview",
  },
];

const ProjectNavigation = ({ currentProjectPath }) => {
  // 过滤掉当前项目
  const otherProjects = projectsData.filter(
    (project) => project.previewLink !== currentProjectPath
  );

  if (otherProjects.length === 0) return null;

  return (
    <div className="mt-8 md:mt-24">
      {/* Full-width separator line spanning the page */}
      <div className="w-screen border-t border-white/20 relative left-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-4 md:px-12">
        <div className="pt-8 md:pt-16">
          <p className="text-sm text-[#ADB7BE] mb-6 uppercase tracking-wider font-bold">
            Other Projects
          </p>
          <div className="flex flex-wrap gap-3">
            {otherProjects.map((project) => (
              <Link
                key={project.id}
                href={project.previewLink}
                className="group flex items-center gap-2 pr-3 py-1.5 text-[#ADB7BE] hover:text-white transition-colors text-sm border-b border-transparent hover:border-[#ADB7BE]"
              >
                <span className="truncate max-w-[250px] md:max-w-none">
                  {project.title}
                </span>
                <ArrowRightIcon className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectNavigation;

