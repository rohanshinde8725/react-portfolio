const Navbar = () => {
  return (
    <>
      <div className="absolute top-0 left-0 h-170 w-full -z-10">
        <img
          className="h-full w-full object-cover"
          src="./images/home-bg.jpeg"
          alt=""
        />
      </div>

      <nav className="h-30 w-full flex justify-between items-center px-30 absolute top-0 left-0 z-10">
        <h1 className="text-4xl text-white font-bold">
          Rohan Vitthal <span className="text-[#ed143d]">Shinde</span>
        </h1>

        <ul className="text-white text-lg font-semibold flex gap-10 cursor-pointer">
          <li className="hover:text-[#ed143d] transition-all duration-300">Home</li>
          <li className="hover:text-[#ed143d] transition-all duration-300">About</li>
          <li className="hover:text-[#ed143d] transition-all duration-300">Skills</li>
          <li className="hover:text-[#ed143d] transition-all duration-300">Projects</li>
          <li className="hover:text-[#ed143d] transition-all duration-300">Contact</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;