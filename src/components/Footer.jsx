import React from 'react';
import "../style/Footer.css"
import "../style/Global.css"

function Footer() {
  return <>
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-12 col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Minhui Liu</h5>
                            <p className="card-text">Front-end Web Developer</p>
                            <a href="mailto:xxxx@outlook.com" className="btn btn-primary">Email Now!</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-12 col-md-12">
                    <p>&copy; 2024 - Minhui Liu</p>
                </div>            
            </div>
        </div>
    </footer>
  </>
}

export default Footer;