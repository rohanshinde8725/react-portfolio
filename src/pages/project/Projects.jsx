import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <div className='w-full py-25'>
        <div className='text-center'>
            <h1 className='text-4xl font-bold'>My Projects</h1>
            <h3 className='text-xl font-semibold text-[#ed143d]'>Projects Done</h3>
        </div>

        <div className='w-[80%] mx-auto py-5 mt-10'>
            <Swiper spaceBetween={50} slidesPerView={3} pagination={{ clickable: true }} className="mySwiper" modules={[Navigation, Pagination]} 
            breakpoints={{320: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 },}}>

                {/* Slide-1 */}
                <SwiperSlide>
                    <div className="flex flex-col items-center justify-center text-black text-center">
                        <img className='h-35 w-35 object-cover rounded-full border-4 border-[#ed143d] 
                        hover:border-teal-400 transition-all duration-300 cursor-pointer' 
                        src="../images/travel-agency.jpg" alt="" />
                        <h1 className='text-2xl my-2 font-semibold'>Travel Agency Website</h1>
                        <p className='text-center text-base'>Built a high performance, responsive travel agency website with modern design
                            using React and JavaScript optimized for speed and scalability across all devices.
                        </p>
                        <button className='py-2 px-7 border-2 border-[#ed143d] rounded-sm mt-4 
                        hover:bg-[#ed143d] hover:text-white cursor-pointer transition-all duration-300'>
                            View Project 
                        </button>
                    </div>
                </SwiperSlide>

                {/* Slide-2 */}
                <SwiperSlide>
                    <div className="flex flex-col items-center justify-center text-black text-center">
                        <img className='h-35 w-35 object-cover rounded-full border-4 border-[#ed143d] 
                        hover:border-teal-400 transition-all duration-300 cursor-pointer' 
                        src="../images/ems.jpg" alt="" />
                        <h1 className='text-2xl my-2 font-semibold'>Employee Management System</h1>
                        <p className='text-center text-base'>Employee Management System is a web-based 
                            application designed to manage employee records efficiently like Create, 
                            Search, Update, and Delete.
                        </p>    
                        <button className='py-2 px-7 border-2 border-[#ed143d] rounded-sm mt-4
                        hover:bg-[#ed143d] hover:text-white cursor-pointer transition-all duration-300'>
                            View Project
                        </button>
                    </div>
                </SwiperSlide>

                {/* Slide-3 */}
                <SwiperSlide>
                    <div className="flex flex-col items-center justify-center text-black text-center">
                        <img className='h-35 w-35 rounded-full border-4 border-[#ed143d] 
                        hover:border-teal-400 transition-all duration-300 cursor-pointer' 
                        src="../images/ets.png" alt="" />
                        <h1 className='text-2xl my-2 font-semibold'>Expense Tracker System</h1>
                        <p className='text-center text-base'>Expense Tracker is a web-based application 
                            that helps users manage their expenses efficiently. It allows users to track 
                            income, categorize expenses, and generate reports for better financial planning.
                        </p>
                        <button className='py-2 px-7 border-2 border-[#ed143d] rounded-sm mt-4
                        hover:bg-[#ed143d] hover:text-white cursor-pointer transition-all duration-300'>
                            View Project
                        </button>
                    </div>
                </SwiperSlide>

                {/* Slide-4 */}
                <SwiperSlide>
                    <div className="flex flex-col items-center justify-center text-black text-center">
                        <img className='h-35 w-35 rounded-full border-4 border-[#ed143d] 
                        hover:border-teal-400 transition-all duration-300 cursor-pointer' 
                        src="../images/foodies.png" alt="" />
                        <h1 className='text-2xl my-2 font-semibold'>Foodies</h1>
                        <p className='text-center text-base'>Foodies brings you fresh, delicious, and 
                            handcrafted meals made with the best ingredients. From healthy bites to 
                            indulgent treats, we serve food that satisfies every craving with love and 
                            quality.
                        </p>
                        <button className='py-2 px-7 border-2 border-[#ed143d] rounded-sm mt-4
                        hover:bg-[#ed143d] hover:text-white cursor-pointer transition-all duration-300'>
                            View Project
                        </button>
                    </div>
                </SwiperSlide>

                {/* Slide-5 */}
                <SwiperSlide>
                    <div className="flex flex-col items-center justify-center text-black text-center">
                        <img className='h-35 w-35 rounded-full border-4 border-[#ed143d] 
                        hover:border-teal-400 transition-all duration-300 cursor-pointer' 
                        src="../images/travel-agency.jpg" alt="" />
                        <h1 className='text-2xl my-2 font-semibold'>Tic-Tac-Toe</h1>
                        <p className='text-center text-base'>Tic-Tac-Toe Game is a web-based application 
                            developed using React.js that allows two players to play the classic 
                            Tic-Tac-Toe game interactively. 
                        </p>
                        <button className='py-2 px-7 border-2 border-[#ed143d] rounded-sm mt-4 
                        hover:bg-[#ed143d] hover:text-white cursor-pointer transition-all duration-300'>
                            View Project
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Projects