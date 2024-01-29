import React from 'react';
import { NavLink } from 'react-router-dom';

import "../style/Header.css"
import "../style/Global.css"

function Header() {
  return <>
    <nav className="navbar sticky-top navbar-expand-lg customNav">
      <div className="container-fluid navContain">
        <NavLink 
          to="/react-portfolio"
          end
          className='navbar-brand' 
        >
          Portfolio
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav nav-pills justify-content-end">
            <li className="nav-item">
              <NavLink 
                to="/react-portfolio"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/react-portfolio/projectgallery"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Project Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/react-portfolio/contact"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="/react-portfolio/src/assets/images/CV.pdf"
              >
                CV(PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}

export default Header;
