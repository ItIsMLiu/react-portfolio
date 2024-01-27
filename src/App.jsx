import React from 'react'
import Contact from "./components/Contact.jsx"
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"
import Project from "./components/Project.jsx"
import ProjectGallery from "./components/ProjectGallery.jsx"
import Footer from "./components/Footer.jsx"
import { useState } from 'react'
import './App.css'


function App() {
  return (
    <>
      <Header />
      <Home />
      <Project />
      <ProjectGallery />
      <Contact />
      <Footer />
    </>
  )
}

export default App
