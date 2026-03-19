import React from 'react'
import Home from './pages/home/Home'
import Navbar from './navbar/Navbar'
import About from './pages/about/About'
import Skills from './pages/skill/Skills'
import Projects from './pages/project/Projects'

const App = () => {
  return (
    <>
      <div className="relative h-screen w-full">
        <Navbar />
        <Home />
      </div>

      <About />
      <Skills />
      <Projects />
    </>
  )
}

export default App