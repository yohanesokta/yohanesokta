import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaWindows } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';
import { FiArrowUpRight } from 'react-icons/fi';

const DsxShowcase = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <section id="dsx-showcase" ref={containerRef} className="py-20 sm:py-24 border-t border-white/5">
      <div className="container px-4 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            DSX Drumb
          </h2>
          <p className="mt-4 text-lg text-green-300 font-medium">
            Audio Hardware & Low-Latency Sampler
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Story and Technical specs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-neutral-900/60 p-6 rounded-2xl border border-white/10 hover:border-green-300/20 transition-all duration-300 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Catatan Ku :)</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4 italic border-l-2 border-green-300 pl-4 bg-neutral-950/40 p-4 rounded-r-xl">
                "Di awal tahun 2026, proyek ini menjadi pelarian saya setelah mengalami patah hati yang mendalam. Alih-alih terpuruk, saya memilih untuk mendedikasikan waktu dan energi untuk membangun sesuatu yang nyata — perpaduan antara perangkat lunak C++ performa tinggi dan perangkat keras fisik yang saya rakit sendiri. Proyek ini bukan sekadar baris kode biasa, melainkan sebuah terapi kreatif yang sangat memengaruhi masa kuliah saya di usia 20 tahun. Saya berharap orang lain di usia saya tidak perlu merasakan kesedihan yang sama, namun jika mereka merasakannya, semoga mereka menemukan pelarian positif yang sama berharganya."
              </p>
              <p className="text-gray-400 text-xs">
                - Yohanes Oktanio
              </p>
            </div>

            <div className="bg-neutral-900/60 p-6 rounded-2xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Spesifikasi Proyek</h3>
              <ul className="space-y-3.5 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-300/10 flex items-center justify-center border border-green-300/30">
                    <div className="w-1.5 h-1.5 bg-green-300 rounded-full"></div>
                  </div>
                  <div>
                    <strong className="text-white">C/C++ Native vs Web Framework</strong>: Menghindari virtual machine bloat dan konsumsi RAM besar dari platform seperti Electron. Menawarkan eksekusi sub-millisecond untuk kebutuhan musikal profesional.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-300/10 flex items-center justify-center border border-green-300/30">
                    <div className="w-1.5 h-1.5 bg-green-300 rounded-full"></div>
                  </div>
                  <div>
                    <strong className="text-white">API Audio XAudio2</strong>: Menggunakan library audio Microsoft XAudio2 untuk pooling suara asinkron yang melimpah (lebih dari 4 tumpang-tindih suara per pad) tanpa stuttering.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-300/10 flex items-center justify-center border border-green-300/30">
                    <div className="w-1.5 h-1.5 bg-green-300 rounded-full"></div>
                  </div>
                  <div>
                    <strong className="text-white">Perangkat Keras Kustom</strong>: Tidak hanya coding, proyek ini juga mencakup perakitan controller fisik eksternal (hardware) mandiri untuk memicu sampler suara secara taktil.
                  </div>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2.5 mt-6 pt-5 border-t border-white/5">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-neutral-800/50 border border-white/5 rounded-full text-xs font-medium text-gray-300">
                  <SiCplusplus className="text-xs text-green-300" />
                  <span>C++17</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-neutral-800/50 border border-white/5 rounded-full text-xs font-medium text-gray-300">
                  <FaWindows className="text-xs text-green-300" />
                  <span>Win32 GDI</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-neutral-800/50 border border-white/5 rounded-full text-xs font-medium text-gray-300">
                  <span className="text-xs text-green-300 font-bold">XAudio2</span>
                  <span>Audio Engine</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/5">
                <a
                  href="https://github.com/yohanesokta/DSX-CSound-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-gray-300 bg-neutral-850 hover:bg-neutral-850 border border-white/5 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  <FaGithub size={14} /> Lihat Source Code <FiArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Video and Image Documentation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Video Player */}
            <div className="bg-neutral-900/60 p-4 rounded-2xl border border-white/10 shadow-xl">
              <h4 className="text-sm font-bold text-gray-400 mb-3 text-center">Demonstrasi Video</h4>
              <div className="w-full overflow-hidden rounded-xl bg-black border border-white/5 relative aspect-video shadow-2xl">
                <video
                  src="https://github.com/user-attachments/assets/9918f9d2-7c5b-424e-8572-f13b9aaa0b91"
                  controls
                  className="w-full h-full object-cover"
                  poster="/images/dsx_rakitan.png"
                />
              </div>
            </div>

            {/* Photo Documentation */}
            <div className="bg-neutral-900/60 p-4 rounded-2xl border border-white/10 shadow-xl">
              <h4 className="text-sm font-bold text-gray-400 mb-3 text-center">Dokumentasi Alat Fisik (DSX Rakitan)</h4>
              <div className="w-full overflow-hidden rounded-xl bg-neutral-950 border border-white/5 relative group/img shadow-2xl">
                <img
                  src="/images/dsx_rakitan.png"
                  alt="DSX Rakitan Ashooy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover/img:scale-103"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DsxShowcase;
