import React, { useState, useEffect } from "react"; 
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 50);
    });
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 text-white py-3 ${
      scrolled ? "bg-[#ed143d] shadow-lg" : "bg-transparent"
      }`}>
      
      <div className="max-w-6xl mx-auto px-5 sm:px-10 py-4 flex justify-between items-center ">
        
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Rohan Vitthal{" "}
          <span className={`${scrolled ? "text-white" : "text-[#ed143d]"}`}>
            Shinde
          </span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-10 text-base lg:text-lg font-semibold">
          <li><a href="#home" className="text-white hover:text-gray-300 transition duration-300">Home</a></li>
          <li><a href="#about" className="text-white hover:text-gray-300 transition duration-300">About</a></li>
          <li><a href="#skills" className="text-white hover:text-gray-300 transition duration-300">Skills</a></li>
          <li><a href="#projects" className="text-white hover:text-gray-300 transition duration-300">Projects</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-300 transition duration-300">Contact</a></li>
        </ul>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8 text-xl transition-all duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
        }`}>

        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

      </div>
    </nav>
  );
};

export default Navbar;