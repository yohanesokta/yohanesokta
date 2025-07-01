import React from 'react';
import ProjectCard from './ProjectCard'; // Sesuaikan path jika perlu

// Ganti dengan icon teknologi Anda dari react-icons
import { FaReact, FaNodeJs, FaFigma, FaPython, FaWindows, FaLaravel, FaPhp } from 'react-icons/fa';
import { SiCloudinary, SiMongodb, SiMysql } from 'react-icons/si';

const projects = [
    
    {
    image: '/images/ejc.png',
    title: 'East Java Culture',
    description: 'East Java Culture adalah jendela digital yang akan membawa anda ke pesona budaya Jawa Timur. Dari festival yang menggembirakan, kesenian yang mempesona, destinasi bersejarah',
    stack: [FaReact, FaNodeJs, SiMongodb],
    link: 'https://east-java-culture.vercel.app/',
  },
   {
    image: '/images/mabautm.png',
    title: 'Maba UTM 2024',
    description: 'Maba UTM adalah platform yang dirancang untuk membantu mahasiswa baru Universitas Trunojoyo Madura dalam beradaptasi dengan lingkungan kampus. Dengan fitur-fitur seperti peta kampus, informasi jadwal kuliah, dan forum diskusi, Maba UTM bertujuan untuk mempermudah transisi mahasiswa baru.',
    stack: [FaLaravel, SiCloudinary, SiMysql],
    link: 'https://github.com/yohanesokta/pendataan-maba-dev',
  },
  {
    image: '/images/mirrorsc.png',
    title: 'Mirror SC',
    description: 'Screen Mirroring Aplikasi Dengan USB, bisa digunakan untuk streaming dan mirror device',
    stack: [FaWindows,FaPython],
    link: 'https://github.com/yohanesokta/Mirror-SC',
  },
  {
    image: '/images/hanzsoft.png',
    title: 'Hanzsoft',
    description: 'Web Software Downloader | Websites are used to download applications easily',
    stack: [ FaPhp, SiMongodb,FaLaravel],
    link: 'https://github.com/yohanesokta/hanzsoft-websites',
  },
  
];

const Projects = () => {
  return (
    <section className="py-24 ">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
                Project Digital Saya
            </h2>
            <p className="mt-4 text-lg text-gray-400">
                Beberapa project pilihan yang telah saya bangun dengan cinta dan kode.
            </p>
        </div>
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;