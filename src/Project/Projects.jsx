import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaNodeJs, FaFigma, FaPython, FaWindows, FaLaravel, FaPhp, FaGithub, FaHtml5, FaLinux, FaApple, FaWhatsapp } from 'react-icons/fa';
import { SiQt ,SiApache, SiCloudflare, SiCloudinary, SiCss3, SiElectron, SiExpress, SiFirebase, SiFlutter, SiHono, SiJavascript, SiMariadb, SiMongodb, SiMysql, SiNextdotjs, SiNginx, SiPostgresql, SiRedis, SiRust, SiTauri, SiTypescript, SiWebpack, SiXcode, SiThreedotjs, SiDocker, SiCplusplus, SiKde } from 'react-icons/si';
import { FiArrowUpRight } from 'react-icons/fi';
import { DiPhp, DiSwift } from 'react-icons/di';
import SpotlightCard from '../Components/SpotlightCard/SpotlightCard.jsx';

const projects = [
  {
    image: '/images/gajahweb.jpg',
    title: 'GAJAH ( Web Service )',
    description: 'Sebuah panel kontrol desktop modern untuk mengelola Nginx, PHP, MariaDB, PostgreSQL, dan Redis di lingkungan Windows.',
    stack: [
      { name: 'Flutter', icon: SiFlutter },
      { name: 'Nginx', icon: SiNginx },
      { name: 'Postgres', icon: SiPostgresql },
      { name: 'Apache', icon: SiApache },
      { name: 'Redis', icon: SiRedis },
      { name: 'MariaDB', icon: SiMariadb },
    ],
    github: 'https://github.com/yohanesokta/WebServices-Gajah',
    link: "https://www.gajahweb.tech"
  },
  {
    image: '/images/glfps.png',
    title: 'GL-FPS',
    description: 'Game penembak sudut pandang pertama (First-Person Shooter) 3D interaktif yang berjalan sepenuhnya di peramban web. Menggunakan WebGL dan Three.js untuk rendering grafis 3D realtime yang lancar, lengkap dengan sistem deteksi tabrakan (collision detection) dan navigasi peta yang dinamis.',
    stack: [
      { name: 'Three.js', icon: SiThreedotjs },
      { name: 'WebGL', icon: SiThreedotjs },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'Javascript', icon: SiJavascript }
    ],
    github: 'https://github.com/yohanesokta/GL-FPS',
    link: 'https://yohanesokta.github.io/GL-FPS/'
  },
  {
    image: '/images/codelabjai.png',
    title: 'Codelab-JAI',
    description: 'Platform portal tugas pemrograman (coding assignment portal) berbasis fullstack Next.js. Menggunakan MariaDB dan Drizzle ORM untuk manajemen data, dengan engine eksekusi kode otomatis berbasis Python yang berjalan di dalam container Docker secara aman.',
    stack: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'MariaDB', icon: SiMariadb },
      { name: 'Docker', icon: SiDocker },
      { name: 'Python', icon: FaPython }
    ],
    github: 'https://github.com/yohanesokta/Codelab-JAI'
  },
  {
    image: '/images/cavapanel.png',
    title: 'CavaPanel',
    description: 'Widget desktop Plasma 6 yang menyediakan visualisasi audio (audio visualizer) realtime terintegrasi. Menggunakan backend berbasis C++ untuk antarmuka dengan CAVA, serta QML untuk integrasi shell Plasma KDE yang responsif dan lancar.',
    stack: [
      { name: 'C++', icon: SiCplusplus },
      { name: 'KDE Plasma', icon: SiKde },
      { name: 'Qt Engine', icon: SiQt },
      { name: 'Linux', icon: FaLinux }
    ],
    github: 'https://github.com/yohanesokta/Cavapanel'
  },
  {
    image: '/images/mkos-battery.png',
    title: 'mcOS BS Inline Battery',
    description: 'mcOS BS Inline Battery - Plasmoid for KDE 6',
    stack: [
      { name: 'QT Engine', icon: SiQt },
    ],
    github: 'https://github.com/yohanesokta/mcOS-BS-Inline-Battery',
    link: "https://store.kde.org/p/2353015"
  },
    {
    image: '/images/octaforce.png',
    title: 'OctaForge ( Git )',
    description: 'Sebuah panel self hosted git platfrom layaknya github pribadi',
    stack: [
      { name: 'Nginx', icon: SiNginx },
    ],
    github: 'https://github.com/yohanesokta/OctaForge-Self_GIT',
    link: "https://github.com/yohanesokta/OctaForge-Self_GIT"
  },
  {
    image: '/images/promind.jpg',
    title: 'Pro MIND',
    description: 'Proyek ini adalah proyek untuk perlombaan Gemastik 2025 dan hak cipta keseluruhan milik Gemastik 2025',
    stack: [
      { name: 'Flutter', icon: SiFlutter },
      { name: 'Firebase', icon: SiFirebase },
    ],
    link: 'https://github.com/yohanesokta/Pro-Mind',
    github: "https://github.com/yohanesokta/Pro-Mind"
  },
  {
    image: '/images/personalchats.jpg',
    title: 'Personal Chat Apps',
    description: 'Platfrom untuk melakukan chating secara private 2 orang. Cocok untuk pasangan',
    stack: [
      { name: 'Flutter', icon: SiFlutter },
      { name: 'Firebase', icon: SiFirebase },
      { name: "Cloudflare", icon: SiCloudflare },
      { name: "Hono", icon: SiHono },
    ],
    link: 'https://github.com/yohanesokta/Personal-Messenger',
    github: "https://github.com/yohanesokta/Personal-Messenger"
  },
  {
    image: '/images/glink.png',
    title: 'Glink - Short Link!',
    description: 'Platfrom untuk kalian jika ingin membuat shortlink premium gratis! dan bisa di edit kapanpun.',
    stack: [
      { name: 'PHP', icon: DiPhp },
      { name: 'Nginx', icon: SiNginx },
    ],
    link: 'https://glink.gt.tc',
    github: "https://github.com/yohanesokta/Glink"
  },
  {
    image: '/images/yohancloud.png',
    title: 'YohanCloud - Lets Build!',
    description: 'Platfrom untuk kalian jika ingin membuat website pribadi, tugas, maupun perusahaan, yohancloud siap mewujudkan impian mu',
    stack: [
      { name: 'Next Js', icon: SiNextdotjs },
      { name: 'Typescript', icon: SiTypescript },
    ],
  },
  {
    image: '/images/remindu.png',
    title: 'Remind U',
    description: 'Aplikasi iOS untuk Caregiver dengan fitur notifikasi reminder sebagai pengingat keluarga pasien untuk mengintervensi minum obat pasien secara rutin.',
    stack: [
      { name: 'Swift', icon: DiSwift },
      { name: 'Xcode', icon: SiXcode },
      { name: "Apple", icon: FaApple },
    ],
    link: 'https://github.com/yohanesokta/RemindU-AppleDeveloperFoundation',
    github: 'https://github.com/yohanesokta/RemindU-AppleDeveloperFoundation',
  },
  {
    image: '/images/timers.png',
    title: 'Timers',
    description: 'Ya Timers!',
    stack: [
      { name: 'Tauri', icon: SiTauri },
      { name: "Rust", icon: SiRust },
      { name: "Linux", icon: FaLinux },
      { name: "Mac OS", icon: FaApple },
      { name: "Windows", icon: FaWindows }
    ],
    link: 'https://github.com/yohanesokta/Timers/releases/tag/v0.4.0',
    github: 'https://github.com/yohanesokta/Timers',
  },
  {
    image: '/images/wa-desktop-linux.png',
    title: 'Whatsapp Desktop Linux',
    description: 'Platform Desktop Whatsapp untuk di jalan kan di linux dengan fitur tambahan',
    stack: [
      { name: 'WebView', icon: SiWebpack },
      { name: 'Electron', icon: SiElectron },
      { name: "Linux", icon: FaLinux },
      { name: "Windows", icon: FaWindows }
    ],
    link: 'https://github.com/yohanesokta/Whatsapp-Desktop-Unix/releases',
    github: 'https://github.com/yohanesokta/Whatsapp-Desktop-Unix',
  },
  {
    image: '/images/bila-tofl.png',
    title: 'Web TOEFL',
    description: 'Platform toefl online dan ujian toefl, Tugas dari mahasiswa informatika untuk dasar pemrograman web',
    stack: [
      { name: 'Html5', icon: FaHtml5 },
      { name: 'Css', icon: SiCss3 },
      { name: "Javascript", icon: SiJavascript }
    ],
    link: 'https://yohanesokta.github.io/tofl_apps',
    github: 'https://github.com/yohanesokta/tofl_apps',
  },
  {
    image: '/images/lumino-api.png',
    title: 'Lumino RESTful api',
    description: 'Api resource dari proyek "Course Online" integrasi dengan midtrans sebagai payment',
    stack: [
      { name: 'Express', icon: SiExpress },
      { name: "Typescript", icon: SiTypescript },
      { name: "PostgreSql", icon: SiPostgresql }
    ],
    link: 'https://github.com/yohanesokta/lumino_api',
    github: 'https://github.com/yohanesokta/lumino_api',
  },
  {
    image: '/images/n8n-wa.png',
    title: 'n8n Whatsapp Getway',
    description: 'Aplikasi ini menyediakan antarmuka web untuk memindai QR code dan menyediakan webhook untuk integrasi dengan layanan lain seperti n8n.',
    stack: [
      { name: 'Express', icon: SiExpress },
      { name: "Baileys", icon: FaWhatsapp },
      { name: "Nodejs", icon: FaNodeJs }
    ],
    link: 'https://github.com/yohanesokta/n8n-whatsapp',
    github: 'https://github.com/yohanesokta/n8n-whatsapp',
  },
  {
    image: '/images/nontonaja.png',
    title: 'Nonton Aja',
    description: 'Platfrom untuk kalian menonton film favorit dengan mudah. Tugas dari mahasiswa informatika untuk dasar pemrograman web',
    stack: [
      { name: 'Next Js', icon: SiNextdotjs },
      { name: 'Typescript', icon: SiTypescript },
    ],
    link: 'https://github.com/yohanesokta/dasar-pemrograman-web-4',
    github: 'https://github.com/yohanesokta/dasar-pemrograman-web-4',
  },
  {
    image: '/images/mabautm.png',
    title: 'Maba UTM 2024',
    description: 'Platform untuk membantu mahasiswa baru Universitas Trunojoyo Madura beradaptasi dengan lingkungan kampus.',
    stack: [
      { name: 'Laravel', icon: FaLaravel },
      { name: 'Cloudinary', icon: SiCloudinary },
      { name: 'MySQL', icon: SiMysql }
    ],
    link: 'https://github.com/yohanesokta/pendataan-maba-dev',
    github: 'https://github.com/yohanesokta/pendataan-maba-dev',
  },
  {
    image: '/images/mirrorsc.png',
    title: 'Mirror SC',
    description: 'Aplikasi Screen Mirroring via USB, dirancang untuk streaming dan mirroring perangkat dengan mudah.',
    stack: [
      { name: 'Python', icon: FaPython },
      { name: 'Windows', icon: FaWindows }
    ],
    link: 'https://github.com/yohanesokta/Mirror-SC',
    github: 'https://github.com/yohanesokta/Mirror-SC',
  },
  {
    image: '/images/ejc.png',
    title: 'East Java Culture',
    description: 'Jendela digital yang membawa Anda ke pesona budaya Jawa Timur, dari festival hingga destinasi bersejarah.',
    stack: [
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'MongoDB', icon: SiMongodb }
    ],
    link: 'https://east-java-culture.vercel.app/',
    github: 'https://github.com/yohanesokta/EastJava-Culture'
  },
  {
    image: '/images/hanzsoft.png',
    title: 'Hanzsoft',
    description: 'Website downloader perangkat lunak yang dirancang untuk kemudahan mengunduh berbagai aplikasi.',
    stack: [
      { name: 'PHP', icon: FaPhp },
      { name: 'Laravel', icon: FaLaravel },
      { name: 'MongoDB', icon: SiMongodb }
    ],
    link: 'https://github.com/yohanesokta/hanzsoft-websites',
    github: 'https://github.com/yohanesokta/hanzsoft-websites',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Proyek Pilihan Saya
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Beberapa proyek dan karya saya yang selama ini saya bangun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const cardRef = useRef(null);
            const isInView = useInView(cardRef, { once: true, amount: 0.15 });

            return (
              <motion.div
                ref={cardRef}
                key={index}
                initial={{ opacity: 0, y: 45 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: "easeOut" }}
                className="h-full"
              >
                <SpotlightCard 
                  className="h-full flex flex-col p-6 bg-neutral-900/60 border border-neutral-800/80 hover:border-green-300/20 transition-all duration-300" 
                  spotlightColor="rgba(52, 211, 153, 0.12)"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      {/* Project Image */}
                      {project.image && (
                        <div className="w-full h-48 sm:h-52 overflow-hidden rounded-xl mb-5 relative group/img">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="object-cover w-full h-full transition-transform duration-500 group-hover/img:scale-105" 
                          />
                        </div>
                      )}
                      
                      {/* Project Title */}
                      <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-200">
                        {project.title}
                      </h3>
                      
                      {/* Project Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.stack.map((tech, i) => (
                          <div 
                            key={i} 
                            className="flex items-center gap-1.5 px-3 py-1 bg-neutral-800/50 border border-white/5 rounded-full text-xs font-medium text-gray-300 shadow-sm"
                          >
                            {tech.icon && <tech.icon className="text-xs text-green-300" />}
                            <span>{tech.name}</span>
                          </div>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-neutral-950 bg-green-300 rounded-lg hover:bg-green-400 transition-all duration-200 cursor-pointer shadow-md"
                          >
                            Live Demo <FiArrowUpRight size={14} />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-gray-300 bg-neutral-800 hover:bg-neutral-700 border border-white/5 rounded-lg transition-all duration-200 cursor-pointer"
                          >
                            <FaGithub size={14} /> GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
