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
    link: 'https://github.com/yohanesokta/Pro-Mind',
    github: "https://github.com/yohanesokta/Pro-Mind"
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
    <section id="projects" className="py-20 sm:py-24 bg-gradient-to-b ">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Proyek Pilihan Saya
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Beberapa proyek dan karya saya yang selama ini saya bangun.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between p-6 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2"
            >
              <div>
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img src={project.image} alt={`Gambar ${project.title}`} className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed mb-6">{project.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  {project.stack.map((tech, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                      <tech.icon className="text-cyan-400" />
                      <span className="text-xs text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-colors bg-cyan-600 rounded-md hover:bg-cyan-700"
                  >
                    Lihat Proyek <FiArrowUpRight />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Lihat Kode di GitHub"
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;