import React from 'react';
import "../style/ProjectGallery.css"
import "../style/Global.css"

function ProjectGallery() {
  return (
    <div className="container-fluid allContent">
      <div className="row align-items-center" >
        <div className="container-fluid col-lg-2 col-md-12 col-sm-12 secTitleContain"><h2>Portfolio Gallery</h2></div>
        <div className="container-fluid col-lg-10 col-md-12 col-sm-12 section-block">
          <div className="container">
            <div className="row">
              <div className="card col-lg-12 col-md-12 col-sm-12">
                <h5 className="card-title">Description:</h5>
                <p className="card-text">Welcome to my work portfolio showcasing an array of webpage projects crafted with HTML, CSS, and JavaScript. This compilation encapsulates a diverse range of creations, from responsive and interactive websites to dynamic user interfaces. Each project emphasizes the fusion of clean HTML structure, aesthetically pleasing CSS design, and the functionality infused by JavaScript. From engaging landing pages to immersive web applications, this portfolio demonstrates my proficiency in leveraging these core web technologies to create compelling online experiences.</p>
              </div>
              <a href="https://itismliu.github.io/horiseon-seo/" className="card col-lg-12 col-md-12 col-sm-12 img-link">
                <div id="horiseon">
                  <img src="src/assets/images/1.jpg" className="card-img" alt="project placeholder image"></img>
                  <div className="card-img-overlay">
                    <div className="subheading">
                      <h5 className="card-title">Horiseon's SEO</h5>
                      <p className="card-text">HTML/CSS</p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://itismliu.github.io/prework-study-guide/" className="card col-lg-6 col-md-6 col-sm-12 img-link">
                <div id="prework">
                  <img src="src/assets/images/2.jpg" className="card-img" alt="project placeholder image"></img>
                  <div className="card-img-overlay">
                    <div className="subheading">
                      <h5 className="card-title">Prework Study Guide</h5>
                      <p className="card-text">HTML/CSS/JS</p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://github.com/ItIsMLiu/Unit-01-Mini-Project-Landing-Page" className="card col-lg-6 col-md-6 col-sm-12 img-link">
                <div id="mini">
                  <img src="src/assets/images/3.jpg" className="card-img" alt="project placeholder image"></img>
                  <div className="card-img-overlay">
                    <div className="subheading">
                      <h5 className="card-title">Mini Project Landing Page</h5>
                      <p className="card-text">HTML/CSS</p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://github.com/ItIsMLiu/Demo" className="card col-lg-6 col-md-6 col-sm-12 img-link">
                <div id="demo">
                  <img src="src/assets/images/4.jpg" className="card-img" alt="project placeholder image"></img>
                  <div className="card-img-overlay">
                    <div className="subheading">
                      <h5 className="card-title">Demo</h5>
                      <p className="card-text">HTML/CSS</p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://github.com/ItIsMLiu/portfolio-minhuiliu" className="card col-lg-6 col-md-6 col-sm-12 img-link" >
                <div id="portfolio">
                  <img src="src/assets/images/5.jpg" className="card-img" alt="project placeholder image"></img>
                  <div className="card-img-overlay">
                    <div className="subheading">
                      <h5 className="card-title">Portfolio</h5>
                      <p className="card-text">HTML/CSS</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectGallery;
