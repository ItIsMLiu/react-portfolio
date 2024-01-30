import React from 'react';
import "../style/Global.css"
import "../style/Project.css"

function Project(props) {
  return <>
    <div className="card col-lg-6 col-md-6 col-sm-12 img-link" id="project">
      <img src={ props.image } className="card-img" alt={`${ props.title } project image`}></img>
      <div className="card-img-overlay">
        <div className="subheading">
          <h5 className="card-title"><strong>Project Title:</strong> { props.title }</h5>
          <p className="card-text">
            <strong>Deployed App:</strong>
            <a href={`${ props.deployed }`} class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"> {props.deployed}</a>
          </p>
          <p className="card-text">
            <strong>Repo Link:</strong>
            <a href={`${ props.repo }`} class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"> {props.repo}</a>
          </p>
        </div>
      </div>
    </div>
  </>
}

export default Project;
