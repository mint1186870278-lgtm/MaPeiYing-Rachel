"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Navbar from "../components/Navbar";
import ProjectNavigation from "../components/ProjectNavigation";
import Footer from "../components/Footer";

export default function Video2Preview() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#121212]">
      <Navbar />
      <div className="flex items-center justify-center p-4 pt-20">
        <div className="w-full max-w-6xl">
          {/* Back button */}
          <button
            onClick={() => router.back()}
            className="mb-6 flex items-center gap-2 text-white hover:text-[#ADB7BE] transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Back to Projects</span>
          </button>

        {/* Video player */}
        <div className="bg-[#181818] rounded-xl overflow-hidden shadow-2xl">
          <video
            controls
            autoPlay
            className="w-full h-auto"
            style={{ maxHeight: "80vh" }}
          >
            <source src="/videos/video2.mp4" type="video/mp4" />
            <source src="/videos/video2.webm" type="video/webm" />
            <source src="/videos/video2.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video info */}
        <div className="mt-6 text-white">
          <h1 className="text-3xl font-bold mb-2">SO DIFFICULTY TO BEND</h1>
          <p className="text-[#ADB7BE] text-lg">
            In the April 2025 Shenzhen workshop, we explored curved long-span structures 
            with limited materials, documenting the process through photography and video 
            to capture spatial and structural exploration.
          </p>
        </div>

        {/* Project Navigation */}
        <ProjectNavigation currentProjectPath="/video2-preview" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

