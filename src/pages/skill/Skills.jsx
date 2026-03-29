import React from 'react'
import SkillBar from './SkillBar'

const Skills = () => {

  const skills = [
    { name: "HTML5", percent: 90 },
    { name: "CSS3", percent: 85 },
    { name: "JavaScript", percent: 60 },
    { name: "React", percent: 70 },
    { name: "TailwindCSS", percent: 80 },
    { name: "WordPress", percent: 75 },
  ]

  return (
    <section id='skills' className='w-full bg-black text-white py-16 scroll-mt-18'>

      {/* Heading */}
      <div className='text-center mb-10'>
        <h1 className='text-3xl sm:text-4xl font-bold'>My Skills</h1>
        <h3 className='text-lg sm:text-xl font-semibold text-[#ed143d] mt-2'>
          what i know
        </h3>
      </div>

      {/* Container */}
      <div className='max-w-6xl mx-auto px-5 sm:px-10'>

        {/* Layout */}
        <div className='flex flex-col md:flex-row gap-10'>

          {/* Left Content */}
          <div className='w-full md:w-1/2 flex flex-col justify-center'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold'>
              My creative skills & experiences.
            </h2>

            <p className='mt-4 text-sm sm:text-base text-gray-300 leading-relaxed text-justify'>
              I have a strong foundation in HTML, CSS, and JavaScript, along 
              with hands-on experience in React.js and Tailwind CSS for building modern, 
              responsive user interfaces. I also work with WordPress to develop dynamic and 
              user-friendly websites. I completed a frontend development internship at Cognifyz 
              Technologies, where I contributed to real-world client projects. This experience 
              helped me strengthen my understanding of clean UI design, efficient code structuring, 
              and best development practices.
            </p>
          </div>

          {/* Right Skill Bars */}
          <div className='w-full md:w-1/2'>
            {skills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percent={skill.percent} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills