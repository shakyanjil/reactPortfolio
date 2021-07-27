import React, { useState } from "react";
import "./about.css";
import Mydetails from "./Mydetails";
import More from "../components/More";
function About() {
  return (
    <div className="container">
      <div className="banner"></div>
      <div className="aboutme">
        <div className="myself">
          <h3>Anjil shakya</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor a
            nunc ultrices in pharetra, egestas lectus venenatis. Accumsan, est
            placerat semper lectus urna, eget ised est egestas viverra egestas
            non. Aliquam egestas lacus egestas porta velit, turSit quam euismod
            tialiqua.
          </p>          
        </div>
        <div className="details">
          <div className="title">
            <ul>
              {Mydetails.map((item, index) => {
                return (
                  <li key={index}>
                    <span>{item.title}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="field">
            <ul>
              {Mydetails.map((item, index) => {
                return (
                  <li key={index} className="field-details">
                    <span>{item.field}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

      </div>
      <div className="more">
      <More title={"ReadMore"} />

      </div>

    </div>
  );
}

export default About;
