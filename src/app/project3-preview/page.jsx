"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image"; // ✅ 必须加这一行
import Navbar from "../components/Navbar";
import ProjectNavigation from "../components/ProjectNavigation";
import Footer from "../components/Footer";

export default function Project3Preview() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#121212]">
      <Navbar />
      <div className="w-full mx-auto px-4 md:px-12 py-4 pt-20">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <button
            onClick={() => router.back()}
            className="mb-6 flex items-center gap-2 text-white hover:text-[#ADB7BE] transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Back to Projects</span>
          </button>

          {/* Project Header */}
          <div className="mb-8">
            <p className="text-lg text-[#ADB7BE]">
              The vegetable supply station aims to provide fresh produce to an urban village community and 
              create a new relationship between people and vegetables, while also offering part-time job 
              opportunities for college students.
            </p>
          </div>

          {/* Narrative animation */}
          <div className="text-white space-y-8">
            {/* Narrative animation */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Narrative animation
              </h2>
              <p className="text-lg text-[#ADB7BE] leading-relaxed">
                This picture tells a story about vegetables during a serious epidemic, from which we can see the importance of fresh vegetables in times of disaster. 
              </p>
              
              {/* Image */}
              <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/Project3/page1.png" 
                  width={1200} 
                  height={800} 
                  className="w-full h-auto object-cover rounded-xl"
                  alt="Causes of the Problem"
                  quality={85}
                  priority
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            </div>

            {/* ANALYSIS OF THE CURRENT SITUATION */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Analysis of the current situation
              </h2>
              <p className="text-lg text-[#ADB7BE] leading-relaxed">
                Shuimo Community is located in Zhongguancun North Street, Haidian District, Beijing, with Tsinghua University to the east, Zhongguancun to the south, and Yuanmingyuan Ruins Park to the west, covering an area of about 4.8 hectares.
                Most of the residents in the community are people who have changed their residence to agriculture, and the serious consequences of the "rental housing economy" have made the community still suffer from the typical problems of urban villages, such as poor living environment, illegal additions to houses and lack of public space.
              </p>
              
              {/* Image */}
              <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/Project3/page2.png" 
                  width={1200} 
                  height={800} 
                  className="w-full h-auto object-cover rounded-xl"
                  alt="Causes of the Problem"
                  quality={85}
                  priority
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            </div>

            {/* Site analysis & physical demonstration */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Site analysis & physical demonstration
              </h2>
              <p className="text-lg text-[#ADB7BE] leading-relaxed">
                The diagram below shows the current plan of the Watermill community and the existing problems.
              </p>
              
              {/* Image */}
              <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/Project3/page3.png" 
                  width={1200} 
                  height={800} 
                  className="w-full h-auto object-cover rounded-xl"
                  alt="Causes of the Problem"
                  quality={85}
                  priority
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            </div>

            {/* ANALYSIS OF THE CURRENT SITUATION */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Rooftop vegetable shed & residential building third floor plan
              </h2>
              <p className="text-lg text-[#ADB7BE] leading-relaxed">
                This drawing shows the designed roof terrace and residential building plans within the community.
              </p>
              
              {/* Image */}
              <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/Project3/page4.png" 
                  width={1200} 
                  height={800} 
                  className="w-full h-auto object-cover rounded-xl"
                  alt="Causes of the Problem"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            </div>

            {/* ANALYSIS OF THE CURRENT SITUATION */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Bird's eye view
              </h2>
              <p className="text-lg text-[#ADB7BE] leading-relaxed">
                This picture shows the designed urban village community and the surrounding environment.
              </p>
              
              {/* Image */}
              <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/Project3/page5.png" 
                  width={1200} 
                  height={800} 
                  className="w-full h-auto object-cover rounded-xl"
                  alt="Causes of the Problem"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            </div>

          </div>

          {/* Project Navigation */}
          <ProjectNavigation currentProjectPath="/project3-preview" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
