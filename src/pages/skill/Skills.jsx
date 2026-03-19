import React from 'react'
import SkillBar from './SkillBar'

const Skills = () => {

    const skills = [
        { name: "HTML5", percent: 90 },
        { name: "CSS3", percent: 85 },
        { name: "JavaSCript", percent: 60 },
        { name: "React", percent: 70 },
        { name: "TailwindCSS", percent: 80 },
        { name: "Wordpress", percent: 75 },
    ]

  return (
    <div className='w-full bg-black text-white py-25'>
        <div className='text-center'>
            <h1 className='text-4xl font-bold'>My Skiils</h1>
            <h3 className='text-xl font-semibold text-[#ed143d] mt-2'>what i know</h3>
        </div>

        <div className='w-[90%] mx-auto flex gap-15'>
            <div className='w-1/2 pt-15 pl-10 flex flex-col justify-center'>
                <h2 className='text-4xl font-semibold'>
                    My creative skills & experiences.
                </h2>

                <p className='mt-4 text-justify'>I have a strong foundation in HTML, CSS, and JavaScript, along 
                    with hands-on experience in React.js and Tailwind CSS for building modern, 
                    responsive user interfaces. I also work with WordPress to develop dynamic and 
                    user-friendly websites. I completed a frontend development internship at Cognifyz 
                    Technologies, where I contributed to real-world client projects. This experience 
                    helped me strengthen my understanding of clean UI design, efficient code structuring, 
                    and best development practices.
                </p>
                
            </div>
            <div className='w-1/2 pt-15 pr-10'>
                {skills.map((skills, index)=>(
                    <SkillBar key={index} name={skills.name} percent={skills.percent} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills