import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaNodeJs, FaFigma, FaPython, FaWindows, FaLaravel, FaPhp, FaGithub, FaHtml5, FaLinux, FaApple, FaWhatsapp } from 'react-icons/fa';
import { SiApache, SiCloudflare, SiCloudinary, SiCss3, SiElectron, SiExpress, SiFirebase, SiFlutter, SiHono, SiJavascript, SiMariadb, SiMongodb, SiMysql, SiNextdotjs, SiNginx, SiPostgresql, SiRedis, SiRust, SiTauri, SiTypescript, SiWebpack, SiXcode } from 'react-icons/si';
import { FiArrowUpRight } from 'react-icons/fi';
import { DiPhp, DiSwift } from 'react-icons/di';

const projects = [
  {
    image: '/images/gajahweb.jpg',
    title: 'GAJAH ( Web Service )',
    description: 'Sebuah panel kontrol desktop modernuntuk mengelola Nginx, PHP, MariaDB, PostgreSQL, dan Redis di lingkungan Windows.',
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
    <section id="projects" className="py-20 sm:py-24 ">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Proyek Pilihan Saya
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Beberapa proyek dan karya saya yang selama ini saya bangun.
          </p>
        </div>

        <div className="flex flex-col gap-24"> {/* Increased gap for alternating sections */}
          {projects.map((project, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, amount: 0.3 }); // Play animation once when 30% of element is in view

            const variants = {
              hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 }, // Slide from left for even, right for odd
              visible: { opacity: 1, x: 0 },
            };

            return (
              <motion.div
                ref={ref}
                key={index}
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 relative 
                  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                `}
              >
                {/* Project Image/Media */}
                <div className="w-full md:w-1/2 relative group rounded-xl overflow-hidden shadow-2xl transition-all duration-300 transform hover:scale-102">
                  <img 
                    src={project.image} 
                    alt={`Gambar ${project.title}`} 
                    className="object-cover w-full h-64 md:h-80 lg:h-96 transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <h3 className="text-3xl font-bold text-white leading-tight">{project.title}</h3>
                  </div>
                </div>

                {/* Project Details */}
                <div className="w-full md:w-1/2 p-6 md:p-0">
                  <h3 className="text-base font-semibold text-cyan-400 mb-2">Full Projects</h3>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mb-8">
                    {project.stack.map((tech, i) => (
                      <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 rounded-full text-sm font-medium text-gray-200 shadow-md">
                        {tech.icon && <tech.icon className="text-lg text-cyan-300" />}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg shadow-lg transition-all duration-300 hover:from-cyan-700 hover:to-blue-700 transform hover:-translate-y-1"
                      >
                        Lihat Proyek <FiArrowUpRight size={20} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Lihat Kode di GitHub"
                        className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-gray-300 border-2 border-gray-600 rounded-lg transition-colors duration-300 hover:text-white hover:border-gray-400"
                      >
                          <FaGithub size={24} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;