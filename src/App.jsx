import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Contact from "./components/Contact.jsx"
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"
import Project from "./components/Project.jsx"
import ProjectGallery from "./components/ProjectGallery.jsx"
import Footer from "./components/Footer.jsx"

import { useState } from 'react'
import './App.css'
import "./style/Global.css"


function App() {
  return (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<Project />} />
      <Route path="blog" element={<ProjectGallery />} />
      <Route path="contact/*" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
  )
}

export default App
