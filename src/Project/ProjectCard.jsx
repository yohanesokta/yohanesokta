import React, { useRef } from 'react';

const ProjectCard = ({ image, title, description, stack, link }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    // Calculate rotation values based on cursor position
    const x = (clientX - left - width / 2) / 20; // divisor controls sensitivity
    const y = (clientY - top - height / 2) / 20;
    cardRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)';
  };

  return (
    <div
      className="relative w-full max-w-lg mx-auto transition-all duration-10 group"
      style={{ perspective: '900px' }} // perspective moved here
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ease-in-out preserve-3d"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* -- PERBAIKAN UTAMA ADA DI SINI --
          Kita gabungkan overlay dan konten menjadi satu.
          Menggunakan gradient dari bawah ke atas (gelap ke transparan).
        */}
        <div 
          className="absolute inset-0 flex flex-col justify-end p-6 text-white transition-all duration-300 ease-in-out  
                     bg-gradient-to-t from-black/90 via-black/60 to-transparent"
        >
          {/* Konten Kartu (Teks, Icon, Tombol) */}
          <div className="preserve-3d">
            <h3
              className="text-3xl font-bold transition-transform duration-500 ease-out transform group-hover:-translate-y-2"
              style={{ transform: 'translateZ(60px)' }}
            >
              {title}
            </h3>
            <p
              className="mt-2 text-sm transition-all duration-500 ease-out opacity-0 hidden group-hover:block group-hover:opacity-100"
              style={{ transform: 'translateZ(40px)' }}
            >
              {description}
            </p>
            <div
              className="flex items-center justify-between mt-6 transition-transform duration-500 ease-out"
              style={{ transform: 'translateZ(50px)' }}
            >
              <div className="flex ">
                {stack.map((Icon, index) => (
                  <Icon
                    key={index}
                    className="w-8 h-8 p-1 text-white "
                  />
                ))}
              </div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-semibold text-black transition-all duration-300 bg-white rounded-lg opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-gray-200"
              >
                Lihat Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;