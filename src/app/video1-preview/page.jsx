"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Navbar from "../components/Navbar";
import ProjectNavigation from "../components/ProjectNavigation";
import Footer from "../components/Footer";

export default function Video1Preview() {
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
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-auto"
            style={{ maxHeight: "80vh" }}
          >
            <source
              src="https://res.cloudinary.com/dyikpkc5k/video/upload/v1765355721/video1_wvmuxv.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video info */}
        <div className="mt-6 text-white">
          <h1 className="text-3xl font-bold mb-2">BETWEEN TULOUS</h1>
          <p className="text-[#ADB7BE] text-lg">
            A year-long project by HKU's Master of Advanced Architectural Design students, 
            exploring interventions in historic tulou architecture through research, 
            fabrication, and on-site construction.
          </p>
        </div>

        {/* Project Navigation */}
        <ProjectNavigation currentProjectPath="/video1-preview" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

