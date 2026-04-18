import React from "react";
import { ReactTyped } from "react-typed";

const Home = () => {
  
  return (
    <section id="home" className="relative h-100 md:min-h-screen flex items-center text-white 
    scroll-mt-18">

      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          src="./images/home-bg.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-5 sm:px-10 w-full">

        <div className="max-w-3xl text-center md:text-left">

          {/* Intro */}
          <h2 className="text-lg sm:text-xl md:text-2xl mb-2">
            Hello, my name is
          </h2>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-3">
            Rohan Shinde
          </h1>

          {/* Typing */}
          <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
            And I'm a{" "}
            <span className="text-[#ed143d]">
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

          {/* Button */}
          <a href="#contact">
            <button className="px-8 py-4 bg-[#0e1538] text-white rounded-xl font-semibold 
              cursor-pointer text-2xl inset-4 border-2 border-gray-500">
              Hire Me
            </button>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Home;