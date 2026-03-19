import React from 'react'
import { ReactTyped } from 'react-typed'

const Home = () => {
  return (
    <div className="flex flex-col top-40 pl-30 text-white z-10 relative">
      
      <h2 className="text-2xl mb-2">Hello, my name is</h2>

      <h1 className="text-7xl font-bold mb-4 leading-25">
        Rohan Shinde
      </h1>

      <h3 className="text-4xl text-white font-semibold mb-6">
        And I'm a { " "} <span className="text-[#ed143d]">
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
      </h3>

      <button className='relative px-8 py-3 text-white text-2xl font-semibold rounded-xl bg-[#0b1437] 
        border-4 border-transparent bg-linear-to-r from-[#0b1437] via-[#0b1437] to-[#0b1437]
        before:absolute before:-inset-1 before:rounded-xl before:bg-linear-to-r before:from-[#ed143d] 
        before:via-[#9b59b6] before:to-[#3498db] before:animate-gradientBorder before:z-[-1] 
        overflow-hidden transition-all max-w-40 mt-2 cursor-pointer '>
        Hire Me
      </button>

    </div>
  )
}

export default Home;