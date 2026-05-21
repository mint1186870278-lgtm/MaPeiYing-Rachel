"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Navbar from "../components/Navbar";
// 👇 **新增这一行**：从 next/image 导入 Image 组件
import Image from "next/image";
import ProjectNavigation from "../components/ProjectNavigation";
import Footer from "../components/Footer"; 

export default function Project2Preview() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="w-full mx-auto px-4 md:px-12 py-4 pt-20">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <button
            onClick={() => router.back()}
            className="mb-6 flex items-center gap-2 text-neutral-800 hover:text-neutral-600 dark:text-white dark:hover:text-[#ADB7BE] transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Back to Projects</span>
          </button>

          {/* Project Header */}
          <div className="mb-8">
            <p className="text-lg text-neutral-600 dark:text-[#ADB7BE]">
              The Confluentia tidal park proposal aims to create a sustainable public space at the meeting point 
              of two rivers, providing wildlife habitat and recreation opportunities for the local community.
            </p>
          </div>

          {/* Project Content Area */}
          <div className="text-neutral-900 dark:text-white space-y-8">
            {/* PROBLEM & CURRENT SITUATION ANALYSIS Section */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                Location & analysis
              </h2>
              <p className="text-lg text-neutral-600 dark:text-[#ADB7BE] leading-relaxed">
                The site is located at the confluence of the Yellow River and the Qushui River basin, on one side of which lies the ancient town of Moraine Kou, a town with a history of over two hundred years. This area is a natural oasis with a history of over 2,000 years.
              </p>
              
              {/* Image placeholder */}
              <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/Project2/page1.png"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  alt="Problem Analysis"
                  quality={85}
                  priority
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            </div>
            {/* SITE CONDITION */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                Site condition
              </h2>

              <p className="text-lg text-neutral-600 dark:text-[#ADB7BE] leading-relaxed">
                The site of the project follows the previous project, specifically the confluence of the Yellow River and the Qushui River in Morakou Town, Linxian County, Lvliang City, Shanxi Province, where the river is nearly broken and the flood season is very short, which is suitable for the design of a tidal park.
              </p>

              <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/Project2/page2.png"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  alt="Causes of the Problem"
                  quality={85}
                  priority
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            </div>

            {/* GENEALOGICAL TREE */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                Site type & planting selection
              </h2>

              <p className="text-lg text-neutral-600 dark:text-[#ADB7BE] leading-relaxed">
                
              </p>

              <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/Project2/page3.png"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  alt="Genealogical Tree"
                  quality={85}
                  priority
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            </div>

            {/* MASTERPLAN and DESIGN COMPONENTS */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                Masterplan & design components
              </h2>

              <p className="text-lg text-neutral-600 dark:text-[#ADB7BE] leading-relaxed">
                This plan shows the designed Moraine Town Tidal Park at constant water level, together with axonometric drawings of important nodes and the spatial distribution of the design elements. This plan also shows the detailed design of the wetland island, children's pool and bird habitat.
              </p>

              <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/Project2/page4.png"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  alt="Genealogical Tree"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            </div>

            {/* SECTION of WETLAND ISLAND */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                Section of wetland island
              </h2>

              <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/Project2/page5.png"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  alt="Genealogical Tree"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            </div>

            {/* SECTION of CHILDREN'S POOL and BIRD HABITAT */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                Section of children's pool & bird habitat
              </h2>

              <p className="text-lg text-neutral-600 dark:text-[#ADB7BE] leading-relaxed">
                This drawing shows the current and designed profiles of the site and highlights the children's play pool and a bird habitat that was designed to allow no human disturbance.
              </p>

              <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/Project2/page6.png"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  alt="Genealogical Tree"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            </div>

            {/* Key section & Details */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
              Key section & Details
              </h2>

              <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/Project2/page7.png"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  alt="Genealogical Tree"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            </div>

            {/* Vision map */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
              Vision map
              </h2>

              <p className="text-lg text-neutral-600 dark:text-[#ADB7BE] leading-relaxed">
                This image shows a future view of the design scheme.
              </p>

              <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/Project2/page8.png"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  alt="Genealogical Tree"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            </div>

          </div>

          {/* Project Navigation */}
          <ProjectNavigation currentProjectPath="/project2-preview" />
        </div>
      </div>
      <Footer />
    </div>
  );
}