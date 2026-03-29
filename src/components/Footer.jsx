import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#3586ff] py-12 px-5 sm:px-10 flex flex-col items-center justify-center overflow-hidden">

      {/* Heading */}
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10 font-semibold text-center">
        Connect with me on :)
      </h2>

      {/* Social Icons */}
      <ul className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 relative">
        
        <li className="icon-box" style={{ "--clr": "#1beeab", "--bg": "#000" }}>
          <a href="https://github.com/rohanshinde8725" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </li>

        <li className="icon-box" style={{ "--clr": "#e1306c", "--bg": "#000" }}>
          <a href="https://www.instagram.com/_rohan_.0710" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </li>

        <li className="icon-box" style={{ "--clr": "#0077b5", "--bg": "#000" }}>
          <a href="http://www.linkedin.com/in/rohan-shinde-397195256" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </li>

      </ul>

      {/* Footer Text */}
      <p className="text-white mt-8 text-sm sm:text-base md:text-lg text-center">
        Created by{" "}
        <span className="text-black hover:underline cursor-pointer">
          Rohan Shinde
        </span>{" "}
        | © 2026
      </p>

      {/* Waves */}
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>

    </footer>
  );
};

export default Footer;