import { useEffect, useRef,useState } from "react";
import Lanyard from "./Components/Lanyard/Lanyard.jsx";
import SPlitText from "./TextAnimations/SplitText/SplitText.jsx";
import RunningText from "./Components/Running/Running.jsx";

export function App() {
  const navigationContainer = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    return () => {
      window.removeEventListener("scroll", navigationAnimated);
    };
  }, []);

  return (
    <div className="">
      <nav className="w-full flex justify-center items-center py-4 fixed z-50">
        <div
          ref={navigationContainer}
          className="w-11/12 md:w-auto py-3 px-6 md:px-8 flex justify-center rounded-full transition-all duration-300"
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

      <main className="">
        <div className="w-full flex flex-col md:flex-row min-h-screen">
          <div className="w-full md:w-1/2 lg:w-2/5 h-[50vh] md:h-auto flex items-center justify-center">
            <Lanyard gravity={[0, -40, 0]} fov={10}></Lanyard>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 py-10 md:py-20">
            <div className="flex gap-4 w-max items-center px-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg mb-6">
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
    </div>
  );
}