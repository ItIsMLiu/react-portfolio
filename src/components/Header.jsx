import React from 'react';
import "../style/Header.css"
import "../style/Global.css"

function Header() {
  return <>
    <nav className="navbar sticky-top navbar-expand-lg customNav">
      <div className="container-fluid navContain">
        <a className="navbar-brand" href="#home">Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav nav-pills justify-content-end">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#work" role="button" aria-expanded="false">Work</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#horiseon">Horiseon's SEO</a></li>
                <li><a className="dropdown-item" href="#prework">Prework Study Guide</a></li>
                <li><a className="dropdown-item" href="#mini">Mini Project Landing Page</a></li>
                <li><a className="dropdown-item" href="#demo">Demo</a></li>
                <li><a className="dropdown-item" href="#portfolio">Portfolio</a></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#work">All Projects</a></li>
              </ul>
            </li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#about-contact">About/Contact</a></li>
            <li className="nav-item"><a className="nav-link disabled" aria-disabled="true">CV</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}

export default Header;
