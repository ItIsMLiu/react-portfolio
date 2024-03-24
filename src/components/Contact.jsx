import React from 'react';
import "../style/Contact.css"
import "../style/Global.css"

function Contact() {
  return <>
    <div className="container-fluid allContent">
      <div className="row align-items-center" id="contact">
        <div className="container-fluid col-lg-2 col-md-12 col-sm-12 secTitleContain"><h2>Contact</h2></div>
        <div className="container-fluid col-lg-10 col-md-12 col-sm-12 section-block">
          <div className="container">

            <div className="row">
              <div className="card col-lg-12 col-md-12 col-sm-12">
                <p>Thank you for taking the time to explore my portfolio! If you have any inquiries, collaboration proposals, or just want to say hello, I'd love to hear from you. Feel free to reach out using the contact form below or through the provided contact details.</p>
                <br></br>
                <h5 className="card-title" id="git">Contact Info:</h5>
                <ul className="nav nav-fill nav-underline">
                  <li className="nav-item">
                    <a className="nav-link icon-link" href="mailto:mliu.design@outlook.com">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
                      Email: mliu.design@outlook.com
                    </a>
                  </li>
                  <li className="nav-item icon-link">
                    <a className="nav-link" href="tel: 07759721379">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/><path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
                      Mobile: 07759721379
                    </a>
                  </li>
                  <li className="nav-item icon-link">
                    <a className="nav-link" href="https://www.google.com/maps/place/Bristol/@51.4683734,-2.7555235,11z/data=!3m1!4b1!4m6!3m5!1s0x4871836681b3d861:0x8ee4b22e4b9ad71f!8m2!3d51.454513!4d-2.58791!16zL20vMDk1bDA?entry=ttu">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>  
                      Bristol
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="card col-lg-12 col-md-12 col-sm-12">
                <h5 className="card-title" id="git">Connect with Me on Social Media:</h5>
                <ul className="nav nav-fill nav-underline">
                  <li className="nav-item icon-link">
                    <a className="nav-link" href="https://github.com/ItIsMLiu">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>    
                      Github
                    </a>
                  </li>
                  <li className="nav-item icon-link">
                    <a className="nav-link" href="https://www.linkedin.com/in/minhuiliu">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                      </svg>  
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <div className="row">
              <h5 className="card-title">Contact Form:</h5>
              <form action="https://getform.io/f/e05fc353-4d77-4ad4-84f0-82f69fbd062d" method="POST">
                <div class="mb-3">
                  <label for="name" class="form-label">Name:</label>
                  <input type="text" name="name" class="form-control" id="name"></input>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email address:</label>
                  <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp"></input>
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Message:</label>
                  <textarea type="text" name="message" class="form-control" id="message"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" id="contact">Submit</button>
              </form>
            </div>
            <br />
            <div className="row" id="contactCV">
              <h5 className="card-title">CV:</h5>
              <ul className="nav nav-fill nav-underline">
                <li className="nav-item icon-link">
                  <a 
                    className="nav nav-fill nav-underline" 
                    href="/react-portfolio/assets/images/CV.pdf"
                  >
                  Click here to download a PDF copy of my CV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Contact;