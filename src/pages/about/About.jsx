import React from 'react'
import { ReactTyped } from 'react-typed'

const About = () => {
  return (
    <div className='w-full bg-white py-25'>
        <div className='text-center'>
            <h1 className='text-4xl font-bold'>About Me</h1>
            <h3 className='text-xl font-semibold text-[#ed143d]'>who i am </h3>
        </div>

        <div className='w-[90%] mx-auto pt-10 flex'>
            <div className='w-[40%] px-10 '>
                <img className='h-100 w-130 object-cover rounded-lg' src="../images/me.jpg" alt="" />
            </div>

            <div className='w-[60%] flex flex-col justify-center gap-5 pl-15'>
                <h1 className='text-black text-2xl font-bold'>I'm Rohan Shinde and I'm a {" "} 
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
                <p className='pr-10 text-[17px] text-justify text-[#222222]'>
                    I am Rohan Vitthal Shinde, a 21-year-old graduate from Mumbai University with a 
                    degree in Information Technology. I am a passionate web developer focused on 
                    building visually appealing and highly functional websites. I have hands-on 
                    experience with HTML5, CSS3, JavaScript, React.js, Tailwind CSS, and WordPress, 
                    allowing me to create responsive and user-friendly web applications. I am a quick 
                    learner with a strong curiosity for exploring new technologies and continuously 
                    improving my skill set. Currently, I am expanding my expertise in backend development 
                    by learning Node.js.
                </p>

                <button className='py-3 w-60 bg-white text-[#ed143d] border-2 border-[#ed143d] 
                text-xl rounded-md cursor-pointer hover:bg-[#ed143d] hover:text-white transition-all
                duration-300 font-semibold'>
                    Download RESUME
                </button>
            </div>
        </div>
    </div>
  )
}

export default About