import { useEffect, useRef, useState } from "react";
import { embeds } from "../static/experiences";
import { FiArrowUpRight } from 'react-icons/fi';

const InstagramEmbed = ({ embedKey }) => {
  const containerRef = useRef(null);
  const html = embeds[embedKey];

  useEffect(() => {
    if (!html) return;
    
    // Inject the HTML blockquote
    if (containerRef.current) {
      containerRef.current.innerHTML = html;
    }

    // Load and process Instagram embeds
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, [embedKey, html]);

  return (
    <div 
      ref={containerRef}
      className="instagram-embed-container w-full my-4 overflow-hidden rounded-xl bg-neutral-900/40 p-2 flex justify-center border border-white/5 shadow-inner min-h-[400px] items-center"
    />
  );
};

const ExperienceCard = ({ experience }) => {
  const [activeEmbedIndex, setActiveEmbedIndex] = useState(0);

  return (
    <div className="p-6 rounded-2xl shadow-xl bg-neutral-900/80 border border-white/10 w-full transition-all duration-300 hover:border-green-300/30">
      <p className="mb-2 text-sm font-semibold text-green-300">{experience.date}</p>
      <h3 className="text-xl font-bold text-white mb-1">{experience.name}</h3>
      <p className="mb-4 text-sm font-medium text-gray-400">{experience.title}</p>
      
      {experience.story && (
        <p className="text-gray-300 text-sm italic leading-relaxed mb-5 bg-neutral-950/40 p-4 rounded-xl border-l-2 border-green-300">
          "{experience.story}"
        </p>
      )}

      <div className="space-y-2.5 mb-2">
        {experience.jobs.map((job, idx) => (
          <div key={idx} className="flex items-start">
            <svg className="w-4 h-4 text-green-300 mr-2.5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <p className="text-gray-300 text-sm leading-relaxed">{job}</p>
          </div>
        ))}
      </div>

      {experience.image && (
        <div className="w-full max-h-72 overflow-hidden rounded-xl my-4 border border-white/5 relative group/exp-img shadow-md">
          <img 
            src={experience.image} 
            alt={experience.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover/exp-img:scale-102"
          />
        </div>
      )}

      {experience.link && (
        <div className="mt-4 flex">
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-gray-300 bg-neutral-800 hover:bg-neutral-700 border border-white/5 rounded-lg transition-all duration-200 cursor-pointer"
          >
            Lihat Dokumentasi <FiArrowUpRight size={14} />
          </a>
        </div>
      )}

      {experience.embeds && experience.embeds.length > 0 && (
        <div className="mt-6 border-t border-white/5 pt-4">
          {experience.embeds.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {experience.embeds.map((embedKey, idx) => {
                let label = `Dokumentasi ${idx + 1}`;
                if (embedKey === "visioncane1") label = "Tim PKM-KC";
                if (embedKey === "visioncane2") label = "HIMATIF UTM";
                if (embedKey === "visioncane3") label = "WargaLab";

                const isActive = activeEmbedIndex === idx;
                return (
                  <button
                    key={embedKey}
                    onClick={() => setActiveEmbedIndex(idx)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 border cursor-pointer ${
                      isActive
                        ? "bg-green-300 text-neutral-950 border-green-300 font-bold scale-105"
                        : "bg-neutral-800 text-gray-400 border-white/5 hover:text-white hover:bg-neutral-700"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          )}
          <InstagramEmbed embedKey={experience.embeds[activeEmbedIndex]} />
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
