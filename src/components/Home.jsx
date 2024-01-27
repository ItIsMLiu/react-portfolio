import React from 'react';
import "../style/Home.css"
import "../style/Global.css"

function Home() {
  return <>
    <div className="mb-4" id="home">
      <div className="container-fluid hero">
        <h1 className="display-5 fw-bold">Minhui Liu</h1>
        <p className="col-md-8 fs-4">Front End Developer</p>
        <button className="btn btn-primary btn-lg" type="button"><a href="#git">Get in Touch!</a></button>
      </div>
    </div>
      
    <div className="container-fluid allContent">  
      <div className="row align-items-center" id="skills">
        <div className="container-fluid col-lg-2 col-md-12 col-sm-12 secTitleContain"><h2>Skills</h2></div>
        <div className="container-fluid col-lg-10 col-md-12 col-sm-12 section-block">
          <div className="container">
            <div className="row">
              <div className="card col-lg-12 col-md-12 col-sm-12">
                <h5 className="card-title">Technical Skills:</h5>
                <p className="card-text">
                  <strong>Front-End Development:</strong>
                  Proficient in HTML, CSS, and JavaScript to create modern, responsive, and interactive websites.
                  <br></br>
                  <strong>User Experience (UX) Design:</strong>
                  Expertise in designing intuitive and visually captivating user interfaces.
                  <br></br>
                  <strong>Responsive Design:</strong>
                  Skilled in developing websites that seamlessly adapt to diverse screen sizes and devices, ensuring accessibility and user satisfaction.
                </p>
              </div>
              <div className="card col-lg-12 col-md-12 col-sm-12">
                <h5 className="card-title">Professional Skills:</h5>
                <p className="card-text">
                  <strong>Cross-Disciplinary Insights:</strong>
                  My background in architecture enhances my ability to approach web design from a unique perspective, emphasizing aesthetics, structure, and functionality.
                  <br></br>
                  <strong>Problem-Solving:</strong>
                  Strong analytical skills enable me to tackle coding challenges with efficiency and creativity.
                  <br></br>
                  <strong>Collaboration:</strong>
                  Experienced in working within cross-functional teams, facilitating effective communication between designers and back-end developers.
                  <br></br>
                  <strong>Adaptability:</strong>
                  Committed to staying current with the latest web development trends and best practices.
                </p>
              </div>
              <div className="card col-lg-12 col-md-12 col-sm-12">
                <h5 className="card-title">Language Skill:</h5>
                <p className="card-text">English, Cantonese & Mandarin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row align-items-center" id="about">
        <div className="container-fluid col-lg-2 col-md-12 col-sm-12 secTitleContain"><h2>About</h2></div>
        <div className="container-fluid col-lg-10 col-md-12 col-sm-12 section-block">
          <div className="container">
            <div className="row">
              <div className="card col-lg-12 col-md-12 col-sm-12">
                <h5 className="card-title">About Me:</h5>
                <p className="card-text">
                  Highly motivated and detail-oriented junior front-end web developer with a unique background as a registered building architect, combining creative design expertise with a strong foundation in web development. Passionate about crafting visually appealing, responsive, and user-friendly websites, I bring a fresh perspective to the field. 
                  My dedication to continuous self-improvement ensures that I stay at the forefront of web development, making me an asset to contribute effectively in cutting-edge projects. I possess a creative flair for design, an eye for detail, and a commitment to delivering seamless, intuitive user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Home;
