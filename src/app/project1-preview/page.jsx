"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Navbar from "../components/Navbar";
import ProjectNavigation from "../components/ProjectNavigation";
import Footer from "../components/Footer";

export default function Project1Preview() {
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
              The Rivive landscape plan aims to restore a damaged river ecosystem
              for the community's benefit through promoting biodiversity and
              improving water quality.
            </p>
          </div>

          {/* Project Content Area */}
          <div className="text-white space-y-8">

            {/* PROBLEM & CURRENT SITUATION ANALYSIS */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Problem & current situation analysis
              </h2>

              <p className="text-lg text-[#ADB7BE] leading-relaxed">
                The Qiu River is in the middle of the Yellow River and on the left bank of the central Shan-Shaan Region. It is a first-class tributary of the Yellow River, with a 1989km2 basin area. Compared with the Yangtze River which has an average annual precipitation (979.5 billion m³), there is a huge gap.
              </p>

              <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/Project1/page1.png"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  alt="Problem Analysis"
                  unoptimized={process.env.NODE_ENV === 'development'}
                />
              </div>
            </div>

            {/* CAUSES OF THE PROBLEM */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Causes of the problem
              </h2>

              <p className="text-lg text-[#ADB7BE] leading-relaxed">
                These three maps show the changes in precipitation, river flow, vegetation type and cover, settlements, population and infrastructure in the Qiu River basin from 1950 to the present.
              </p>

              <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/Project1/page2.png"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  alt="Causes of the Problem"
                  unoptimized={process.env.NODE_ENV === 'development'}
                />
              </div>
            </div>

            {/* GENEALOGICAL TREE */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Genealogical tree
              </h2>

              <p className="text-lg text-[#ADB7BE] leading-relaxed">
                This diagram shows my thinking process for this project from elements to problems to solution strategies, and it also shows what really caused the river to be in its current bad condition.
              </p>

              <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/Project1/page3.png"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  alt="Genealogical Tree"
                  unoptimized={process.env.NODE_ENV === 'development'}
                />
              </div>
            </div>

            {/* Master Strategies */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Master Strategies
              </h2>
            </div>

            {/* Strategy 1 */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Strategy 1 — Dredging of Silt
              </h3>

              <p className="text-lg text-[#ADB7BE] leading-relaxed">
                This strategy is mainly aimed at the initial restoration of the mountain and river ecosystems.
              </p>

              <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/Project1/page4.png"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  alt="Strategy 1"
                  unoptimized={process.env.NODE_ENV === 'development'}
                />
              </div>
            </div>

            {/* Strategy 2 */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Strategy 2 — Softening of Riverbanks
              </h3>

              <p className="text-lg text-[#ADB7BE] leading-relaxed">
                This diagram shows the specific problems within the river and the corresponding strategies.
              </p>
            </div>

            {/* Strategy 2.1 */}
            <div className="ml-6 space-y-4">
              <h4 className="text-xl md:text-2xl font-medium text-white">
                2.1 Softening of Riverbanks
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/Project1/page5-1.png"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                    alt="Strategy 2"
                    unoptimized={process.env.NODE_ENV === 'development'}
                  />
                </div>

                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/Project1/page5-2.png"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                    alt="Strategy 2"
                    unoptimized={process.env.NODE_ENV === 'development'}
                  />
                </div>
              </div>
            </div>

            {/* Strategy 2.2 */}
            <div className="ml-6 space-y-4">
              <h4 className="text-xl md:text-2xl font-medium text-white">
                2.2 Planting Selection & Optimization
              </h4>
              <p className="text-lg text-[#ADB7BE] leading-relaxed">
                This diagram shows the corresponding profiles and plant species in the steps of riparian revegetation.
              </p>

              <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/Project1/page6.png"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  alt="Strategy 2.2"
                  unoptimized={process.env.NODE_ENV === 'development'}
                />
              </div>
            </div>

            {/* Strategy 3 */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Strategy 3 — Vegetation Remediation
              </h3>

              <p className="text-lg text-[#ADB7BE] leading-relaxed">
                This map focuses on the activities designed for the entire upper and middle reaches of the watershed and the corresponding profiles.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/Project1/page7-1.png"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-xl"
                    alt="Strategy 3 - Image 1"
                    unoptimized={process.env.NODE_ENV === 'development'}
                  />
                </div>

                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/Project1/page7-2.png"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-xl"
                    alt="Strategy 3 - Image 2"
                    unoptimized={process.env.NODE_ENV === 'development'}
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Final Visualization */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Final Visualization
            </h2>

            <p className="text-lg text-[#ADB7BE] leading-relaxed">

            </p>

              <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/Project1/page8.png"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  alt="Final Visualization"
                  unoptimized={process.env.NODE_ENV === 'development'}
                />
              </div>
          </div>

          {/* Project Navigation */}
          <ProjectNavigation currentProjectPath="/project1-preview" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
