import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap"; // Import gsap
import { FaBars } from 'react-icons/fa'; // Import FaBars for mobile menu
import Lanyard from "./Components/Lanyard/Lanyard.jsx";
import SPlitText from "./TextAnimations/SplitText/SplitText.jsx";
import RunningText from "./Components/Running/Running.jsx";
import DelayedCursor from "./Animations/DelayedCursor/DelayedCursor.jsx";
import SpotlightCard from "./Components/SpotlightCard/SpotlightCard.jsx";
import Projects from "./Project/Projects.jsx";
import Contact from "./Project/Contact.jsx";
import ExperienceCard from "./Project/ExperienceCard.jsx";

import experience from "./static/experience.json";

export function App() {
  const navigationContainer = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const experienceRef = useRef(null);
  const progressLineRef = useRef(null);
  const timelineContainerRef = useRef(null);
  const date = new Date();
  const umur = date.getFullYear() - 2005;

  // State and ref for auto-hide navigation
  const navRef = useRef(null);
  const [navVisible, setNavVisible] = useState(true);
  const hideTimeoutRef = useRef(null);

  const resetHideTimer = () => {
    setNavVisible(true);
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      setNavVisible(false);
    }, 3000); // Auto-hide after 3 seconds of inactivity
  };

  const handleActivity = () => {
    resetHideTimer();
  };

  useEffect(() => {
    // Scroll progress update
    const updateScrollProgress = () => {
      if (timelineContainerRef.current && progressLineRef.current) {
        const section = timelineContainerRef.current;
        const line = progressLineRef.current;

        const sectionRect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const progressRaw = viewportHeight - sectionRect.top;
        const totalScrollableDistance = viewportHeight + section.clientHeight;
        let progress = progressRaw / totalScrollableDistance;

        progress = Math.max(0, Math.min(progress, 1));
        
        line.style.height = `${progress * 100}%`;
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    // Auto-hide navigation logic (proximity-based)
    const handleProximityMove = (e) => {
      if (e.clientY < 100) { // If mouse is within top 100px of the screen
        handleActivity();
      }
    };

    window.addEventListener('scroll', handleActivity); // Still reveal on any scroll
    window.addEventListener('mousemove', handleProximityMove); // Proximity-based mouse activity

    if (navRef.current) {
      navRef.current.addEventListener('mouseenter', () => {
        setNavVisible(true);
        if (hideTimeoutRef.current) {
          clearTimeout(hideTimeoutRef.current);
        }
      });
      navRef.current.addEventListener('mouseleave', () => {
        resetHideTimer();
      });
    }

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('mousemove', handleProximityMove);
      if (navRef.current) {
        navRef.current.removeEventListener('mouseenter', handleActivity); // Corrected cleanup
        navRef.current.removeEventListener('mouseleave', resetHideTimer); // Corrected cleanup
      }
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  // Animate navigation based on navVisible state
  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        y: navVisible ? 0 : -100, // Slide up by 100px when hidden
        opacity: navVisible ? 1 : 0,
        duration: 0.5,
        ease: "power3.out",
        pointerEvents: navVisible ? "auto" : "none",
      });
    }
  }, [navVisible]);


  return (
    <div className="">
      <DelayedCursor />
      <nav ref={navRef} className="w-full flex justify-center items-center py-4 fixed z-50 top-0 left-0 right-0">
        <div
          ref={navigationContainer}
          className="w-11/12 md:w-auto py-3 px-6 md:px-8 flex justify-center rounded-xl md:rounded-full min-w-max backdrop-blur-lg ring-1 ring-white/10 shadow-xl transition-all duration-300"
          style={{ background: 'rgba(38, 38, 38, 0.2)' }} // Initial translucent background
        >
          <div className="flex items-center justify-between">
            <div className="hidden md:flex gap-10 lg:gap-20 text-md font-semibold text-white">
              <a href="#about" className="px-3 py-1 rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-200">About</a>
              <a href="#experience" className="px-3 py-1 rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-200">Experience</a>
              <a href="#projects" className="px-3 py-1 rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-200">Projects</a>
              <a href="#contact" className="px-3 py-1 rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-200">Contact</a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none p-2 rounded-md hover:bg-white/10 transition-colors">
                <FaBars className="w-6 h-6" /> {/* Using FaBars */}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-gray-800/80 p-4 rounded-lg shadow-lg">
              <ul className="flex flex-col items-center gap-4 text-md font-semibold text-white">
                <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-green-300 transition-colors">About</a></li>
                <li><a href="#experience" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-green-300 transition-colors">Experience</a></li>
                <li><a href="#projects" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-green-300 transition-colors">Projects</a></li>
                <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-green-300 transition-colors">Contact</a></li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      <main className="" id="about">
        <div className="w-full flex flex-col md:flex-row min-h-screen">
          <div className="w-full md:w-1/2 lg:w-2/5 h-[50vh] md:h-auto flex items-center justify-center">
            <Lanyard gravity={[0, -40, 0]} fov={10}></Lanyard>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 py-10 md:py-20">
            <div className="flex gap-4 w-max items-center px-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg mb-6">
              <div className="w-2.5 h-2.5 bg-green-300 rounded-full"></div>
              <p className="text-sm sm:text-base">Hallo Semua</p>
            </div>
            <SPlitText text="Yohanes Oktanio" className="inline-block text-green-300 text-4xl pb-5 sm:text-5xl lg:text-6xl font-black" hoverEffect={true} splitType="chars" delay={30} />
            <SPlitText
              text="Mostly web, backend when things get serious"
              className="text-gray-300 text-3xl sm:text-4xl lg:text-5xl font-black mb-4"
              hoverEffect={true}
              splitType="words"
              delay={30}
            />
            <p className="py-8 text-gray-300 text-base sm:text-lg lg:text-xl">
              Mahasiswa Teknik Informatika Universitas Trunojoyo Madura yang masih sering ngoprek.
              Lebih banyak main di backend — database, API, dan integrasi sistem.
              Nyaman pakai Linux, suka open-source, dan kadang ngurus server buat proyek sendiri.
            </p>
            <div>
              <h1 className="font-bold text-white text-xl sm:text-2xl flex items-center">
                Social
                <i className="mx-2 text-sm fa-solid fa-arrows-turn-right rotate-90"></i>
              </h1>
              <ul className="flex flex-wrap gap-4 sm:gap-6 text-gray-300 text-base sm:text-lg my-4">
                <li className="flex gap-2 items-center hover:text-green-300 transition-colors">
                  <i className="fa-brands fa-github"></i>

                  <a href="https://github.com/yohanesokta" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
                <li className="flex gap-2 items-center hover:text-green-300 transition-colors">
                  <i className="fa-brands fa-linkedin"></i>
                  <a href="https://www.linkedin.com/in/yohanesokta/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li className="flex gap-2 items-center hover:text-green-300 transition-colors">
                  <i className="fa-brands fa-instagram"></i>
                  <a href="https://www.instagram.com/yohanesoktanio/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="z-20 w-full overflow-x-hidden py-10">
          <RunningText />
        </div>
      </main>

      <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #101010 0%, #000000 1000px)' }}>
        <div className="px-3 md:px-10 lg:px-20 relative" id="experience" ref={experienceRef}>
          <h1 className="font-bold text-4xl text-center mx-0 md:mx-10 text-white py-15 pb-20">Experience</h1>
          {/* start loop */}
          <div ref={timelineContainerRef} className="relative wrap overflow-hidden p-10 h-full max-w-4xl mx-auto">
            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
            {/* Progress Line (light orange) */}
            <div ref={progressLineRef} className="absolute w-0.5 bg-orange-400" style={{ left: '50%', top: 0, height: '0%' }}></div>
            {experience.map((data, index) => (
              <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="order-1 w-5/12"></div>
                <div className="z-10 flex items-center order-1 bg-gray-800 shadow-xl w-10 h-10 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.628A2.25 2.25 0 0118.75 16H5.25A2.25 2.25 0 013 13.628V10.372A2.25 2.25 0 015.25 8h13.5A2.25 2.25 0 0121 10.372v3.256z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.75 8V6a3 3 0 00-3-3h-3a3 3 0 00-3 3v2m5.25 8v2a3 3 0 01-3 3h-3a3 3 0 01-3-3v-2"></path>
                    </svg>
                  </h1>
                </div>
                <div className="order-1 w-5/12 px-1 py-4">
                  <ExperienceCard experience={data} />
                </div>
              </div>
            ))}
          </div>
          <Projects />
          <div className="pb-50"></div>
          <Contact />
        </div>
      </div>
    </div>


  );
}