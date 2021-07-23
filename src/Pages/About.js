import React from "react";
import "./about.css";
import banner from "../images/banner.png";

function About() {
  return (
    <div className="container">
      <div className="banner">
        <img src={banner} alt="banner image" />
      </div>
      <div className="aboutme">
        <div className="myself">
          <h3>Anjil shakya</h3>
          <p>
            This is abvout myself. hello nice to meet you . welcome to my
            portfolio. i built this using react js.
          </p>
        </div>
        <div className="details">
          <ul>
            <li>Date of Birth: 21/03/1998 </li>
            <li>Date of Birth: 21/03/1998 </li>
            <li>Date of Birth: 21/03/1998 </li>
            <li>Date of Birth: 21/03/1998 </li>
            <li>Date of Birth: 21/03/1998 </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
