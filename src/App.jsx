import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import { skills, experiences, projects } from './constants'
import { arrow } from './assets/icons'

const App = () => {
  return (
    <section className='max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]'>
      <h1 className='font-bold text-3xl'>Hello I'm <span className='bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent'>YOHANES</span></h1>

      <div className="mt-5 flex flex-col gap-3">
        <p>Saya <span className="font-bold">Yohanes Oktanio</span> seorang mahasiswa Teknik Informatika di Universitas Trunojoyo Madura yang berusia 19 tahun. Saat ini, saya sedang mendalami bidang backend development dengan fokus pada pengelolaan database, pengembangan API, serta integrasi sistem. Saya memiliki ketertarikan terhadap teknologi open-source dan senang mengelola server dengan Nginx untuk kebutuhan proyek saya.</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className='font-semibold sm:text-xl text-xl relative font-poppins'>My Skills</h3>
      </div>
      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div className="block-container w-20 h-20">
            <div className='btn-back rounded-xl'>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="py-16">
        <h3 className='font-semibold sm:text-xl text-xl relative font-poppins'>Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusantium consequuntur minima quasi! Praesentium eos modi dolore eius suscipit ipsa!</p>

          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experiences) => (
                <VerticalTimelineElement
                  date={experiences.date}
                  icon={<div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experiences.icon}
                      alt={experiences.company_name} className='w-[60%] h-[60%] object-contain'
                    />
                  </div>}
                  iconStyle={{ background: experiences.iconBg }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experiences.iconBg,
                    boxShadow: "none"
                  }}
                >
                  <div className="">
                    <h3 className='text-black text-xl font-semibold'>
                      {experiences.title}
                    </h3>
                    <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>
                      {experiences.company_name}
                    </p>
                  </div>
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experiences.points.map((point, index) => (
                      <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                        {point}
                      </li>
                    ))}

                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>


      <div className="py-16">
        <h3 className='font-semibold sm:text-xl text-xl relative font-poppins'>Projects</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>Berisi kumpulan proyek yang telah saya kerjakan, mencakup pengembangan aplikasi, pengelolaan database, dan integrasi sistem sesuai kemampuan saya dalam backend development dan teknologi yang saya kuasai.</p>
        </div>

        <div className="flex flex-wrap my-20 gap-16">
          {projects.map((project) => (
            <div className="lg:w-[400px] w-full" key={project.name}>
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`}>
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img src={project.iconUrl} alt="Project Icon"
                      className='w-1/2 h-1/2 object-contain'
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                  <h4 className='text-2xl font-semibold'>
                    {project.name}
                  </h4>
                  <p className='mt-2 text-slate-500'>
                    {project.description}
                  </p>
                  <div className="mt-5 items-center gap-2">
                    <a href={project.link}
                      target='_blank'
                      className='font-semibold text-blue-600'
                    >Live Link</a>
                    <img 
                      src={arrow}
                      alt='arrow'
                      className='w-4 h-4 object-contain'
                    />
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default App