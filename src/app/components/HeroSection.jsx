"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <section className="pt-8 md:pt-8 md:min-h-[calc(100vh-4rem)] md:flex md:items-center md:overflow-x-hidden">
      <div className="w-full md:w-screen px-4 md:px-12 md:relative md:left-1/2 md:-translate-x-1/2">
        <div className="grid grid-cols-1 sm:grid-cols-12 max-w-7xl md:max-w-none md:mx-0 md:ml-1">
          <div className="col-span-7 place-self-center text-center sm:text-left md:place-self-start md:text-left">
            <h1 
              className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"
              style={isDesktop ? { fontSize: '5rem', lineHeight: '1.2' } : {}}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600">
                Hello, I'm {""}
              </span>
              <br></br>
              <span style={isDesktop ? { display: 'block', marginTop: '3.5rem' } : {}}>
                <TypeAnimation
                  sequence={[
                    'Rachel',
                    1000,
                    'Architect',
                    1000,
                    'UI/UX Designer',
                    1000,
                    'Visual Designer',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl md:text-2xl mb-6 md:mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptuous.
            </p>
            <div>
              <button 
                onClick={() => {
                  // 如果在主页，直接滚动到contact section
                  if (window.location.pathname === '/') {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    // 如果不在主页，先导航到主页的contact section
                    window.location.href = '/#contact';
                  }
                }}
                className="px-6 md:px-8 py-3 md:py-4 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white md:text-lg"
              >
                Hire me
              </button>
              <button 
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/cv/Peiying_Ma_CV.pdf";
                  link.download = "Peiying_Ma_CV.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="px-1 py-1 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full bg-transparent hover:bg-slate-800 text-white mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 md:px-6 py-2 md:py-3 md:text-lg">
                  Download CV
                </span>
              </button>
            </div>
          </div>
          <div className="col-span-5 place-self-center mt-4 md:mt-8 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] relative">
              <Image
                src="/images/hero-image-2.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] object-contain"
                width={350}
                height={350}
                priority
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

