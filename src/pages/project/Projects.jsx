import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <section id='projects' className='w-full py-16 bg-white scroll-mt-18'>

      {/* Heading */}
      <div className='text-center mb-10'>
        <h1 className='text-3xl sm:text-4xl font-bold'>My Projects</h1>
        <h3 className='text-lg sm:text-xl font-semibold text-[#ed143d] my-1'>
          Projects Done
        </h3>
      </div>

      {/* Container */}
      <div className='max-w-6xl mx-auto px-5 sm:px-10'>

        <Swiper
           spaceBetween={20}
            loop={true}   
            speed={500}   
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
          }}
        >

          {/* Slide */}
          {[
            {
              img: "../images/travel-agency.jpg",
              title: "Travel Agency Website",
              desc: "A frontend practice website built to explore and implement different UI designs, layouts, and web development concepts, helping improve skills through hands-on experimentation.",
              link: "https://rohanshinde8725.github.io/practice/",
            },
            {
              img: "../images/ems.jpg",
              title: "Employee Management System",
              desc: "An Employee Management System web application designed to manage employee data efficiently, allowing users to add, update, delete, and view employee records through a simple and user-friendly interface.",
              link: "https://rohanshinde8725.github.io/Employee-Management-System/",
            },
            {
              img: "../images/ets.png",
              title: "Expense Tracker",
              desc: "A simple and user-friendly expense tracker web application that helps users manage their daily income and expenses, track spending, and maintain a clear financial overview.",
              link: "https://rohanshinde8725.github.io/expense-tracker-system/",
            },
            {
              img: "../images/foodies.png",
              title: "Foodies",
              desc: "A visually appealing food website designed to explore various dishes and cuisines, featuring a clean layout, responsive design, and interactive elements for an engaging browsing experience.",
              link: "https://rohanshinde8725.github.io/Foodies/",
            },
            {
              img: "../images/tic-tac-toe.jpeg",
              title: "Tic Tac Toe",
              desc: "A responsive Tic Tac Toe web game developed with HTML, CSS, and JavaScript, featuring smooth gameplay, turn-based logic, and automatic win/draw detection",
              link: "https://rohanshinde8725.github.io/tic-tac-toe/",
            },
            {
              img: "../images/ben-10.png",
              title: "Ben-10",
              desc: "A modern and responsive React + Tailwind CSS portfolio website inspired by Ben 10, showcasing projects, skills, and personal details with smooth UI design and interactive components.",
              link: "https://benten-10.netlify.app/",
            }
          ].map((project, index) => (
            <SwiperSlide key={index}>
              
              <div className="py-6 text-center flex flex-col items-center transition duration-300 h-full">

                {/* Image */}
                <img
                  className='w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full border-4 border-[#ed143d] 
                  hover:border-teal-400 transition duration-300 cursor-pointer'
                  src={project.img}
                  alt=""
                />

                {/* Title */}
                <h1 className='text-lg sm:text-xl md:text-2xl my-2 font-semibold'>
                  {project.title}
                </h1>

                {/* Description */}
                <p className='text-sm sm:text-base text-gray-600'>
                  {project.desc}
                </p>

                {/* Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='mt-4 inline-block py-2 px-6 border-2 border-[#ed143d] rounded-md 
                  hover:bg-[#ed143d] hover:text-white transition duration-300'
                >
                  View Project
                </a>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  )
}

export default Projects