import React from 'react'
import { ReactTyped } from 'react-typed'

const About = () => {
  return (
    <section id='about' className='w-full bg-white py-16 scroll-mt-18'>

      {/* Heading */}
      <div className='text-center mb-10'>
        <h1 className='text-3xl sm:text-4xl font-bold'>About Me</h1>
        <h3 className='text-lg sm:text-xl font-semibold text-[#ed143d]'>
          who i am
        </h3>
      </div>

      {/* Container */}
      <div className='max-w-6xl mx-auto px-5 sm:px-10'>

        {/* Flex Layout */}
        <div className='flex flex-col md:flex-row items-center gap-10'>

          {/* Image */}
          <div className='w-full md:w-[40%] flex justify-center'>
            <img
              className='lg:w-80 sm:w-50 md:w-full h-auto object-cover rounded-lg'
              src="../images/me.jpg"
              alt=""
            />
          </div>

          {/* Content */}
          <div className='w-full md:w-[60%] flex flex-col justify-center gap-5 text-center md:text-left'>

            <h1 className='text-xl sm:text-2xl font-bold text-black'>
              I'm Rohan Shinde and I'm a{" "}
              <span className='text-[#ed143d]'>
                <ReactTyped
                  strings={[
                    "Frontend Developer",
                    "Web Developer",
                    "Software Developer",
                    "React Developer",
                    "Coder",
                  ]}
                  typeSpeed={80}
                  backSpeed={50}
                  backDelay={1000}
                  loop
                />
              </span>
            </h1>

            <p className='text-sm sm:text-base md:text-[17px] text-[#222222] leading-relaxed md:pr-5 text-justify'>
              I am Rohan Vitthal Shinde, a 21-year-old graduate from Mumbai University with a 
              degree in Information Technology. I am a passionate web developer focused on 
              building visually appealing and highly functional websites. I have hands-on 
              experience with HTML5, CSS3, JavaScript, React.js, Tailwind CSS, and WordPress, 
              allowing me to create responsive and user-friendly web applications. I am a quick 
              learner with a strong curiosity for exploring new technologies and continuously 
              improving my skill set. Currently, I am expanding my expertise in backend development 
              by learning Node.js.
            </p>

            {/* Button */}
            <button className='mt-3 py-3 px-6 w-fit mx-auto md:mx-0 
              bg-white text-[#ed143d] border-2 border-[#ed143d] 
              text-base sm:text-lg rounded-md cursor-pointer 
              hover:bg-[#ed143d] hover:text-white transition-all duration-300 font-semibold'>
              Download RESUME
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About