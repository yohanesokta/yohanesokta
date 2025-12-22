import { useEffect, useRef, useState } from "react";
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

  const navigationAnimated = () => {
    const scrollY = window.scrollY;
    if (navigationContainer.current) {
      let percen = Math.min(1, scrollY / 400);
      navigationContainer.current.style.background = `rgba(38, 38, 38, ${percen})`;
      navigationContainer.current.style.width = `${100 - percen * 100}%`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navigationAnimated);

    const updateScrollProgress = () => {
      if (timelineContainerRef.current && progressLineRef.current) {
        const section = timelineContainerRef.current;
        const line = progressLineRef.current;

        const sectionRect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate progress based on when the section enters and leaves the viewport
        // The line should start filling when the bottom of the viewport hits the top of the section
        // And be fully filled when the top of the viewport hits the bottom of the section
        
        // This value goes from `viewportHeight` (when section top is at viewport bottom)
        // down to `-section.clientHeight` (when section bottom is at viewport top)
        const progressRaw = viewportHeight - sectionRect.top;

        // Total scrollable distance for the section within the viewport
        const totalScrollableDistance = viewportHeight + section.clientHeight;

        let progress = progressRaw / totalScrollableDistance;

        progress = Math.max(0, Math.min(progress, 1)); // Clamp between 0 and 1
        
        line.style.height = `${progress * 100}%`;
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial update in case the page loads scrolled

    return () => {
      window.removeEventListener("scroll", navigationAnimated);
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="">
      <DelayedCursor />
      <nav className="w-full flex justify-center items-center py-4 fixed z-50">
        <div
          ref={navigationContainer}
          className="w-11/12 md:w-auto py-3 px-6 md:px-8 flex justify-center rounded-xl md:rounded-full min-w-max"
        >
          <div className="flex items-center justify-between">
            <div className="hidden md:flex gap-10 lg:gap-20 text-md font-semibold text-white">
              <a href="#about" className="hover:text-green-300 transition-colors">About</a>
              <a href="#experience" className="hover:text-green-300 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-green-300 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-green-300 transition-colors">Contact</a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <ul className="flex flex-col items-center gap-4 text-md font-semibold text-white">
                <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2">About</a></li>
                <li><a href="#experience" onClick={() => setIsMenuOpen(false)} className="block py-2">Experience</a></li>
                <li><a href="#projects" onClick={() => setIsMenuOpen(false)} className="block py-2">Projects</a></li>
                <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2">Contact</a></li>
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
            <div  className="flex gap-4 w-max items-center px-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg mb-6">
              <div className="w-2.5 h-2.5 bg-green-300 rounded-full"></div>
              <p className="text-sm sm:text-base">Hallo Semua</p>
            </div>
            <SPlitText
              text="Fullstack Developer"
              className="text-gray-300 text-4xl sm:text-5xl lg:text-6xl font-black"
            />
            <p className="py-8 text-gray-300 text-base sm:text-lg lg:text-xl">
              Saya <span className="text-green-300">Yohanes Oktanio</span> seorang mahasiswa Teknik Informatika di Universitas Trunojoyo Madura yang berusia 19 tahun. Saat ini, saya sedang mendalami bidang backend development dengan fokus pada pengelolaan database, pengembangan API, serta integrasi sistem. Saya memiliki ketertarikan terhadap teknologi open-source dan senang mengelola server dengan Nginx untuk kebutuhan proyek saya.
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



      <div className="px-3 md:px-10 lg:px-20 bg-neutral-900 relative" id="experience" ref={experienceRef}>
        <div className="absolute bottom-0 h-100 w-full cat-grad left-0"></div>
        <h1 className="font-bold text-4xl text-center mx-0 md:mx-10 text-white py-15 pb-20">Experience</h1>
        {/* start loop */}
        <div ref={timelineContainerRef} className="relative wrap overflow-hidden p-10 h-full max-w-4xl mx-auto">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
          {/* Progress Line (light orange) */}
          <div ref={progressLineRef} className="absolute w-0.5 bg-orange-400" style={{ left: '50%', top: 0, height: '0%' }}></div>
          {experience.map((data, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className="order-1 w-5/12"></div> {/* Empty div to push content */}
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
        <Projects/>
        <div className="pb-50"></div>
      </div>
      <Contact />

    </div>


  );
}