import React from "react";
import {Link} from "react-router-dom"
import "./home.css";
import "./pagesetup.css";
import { FaBeer, FaFacebook,FaInstagram,FaGithub,FaLinkedin,FaTwitter } from "react-icons/fa";

function Home() {
  return (
    <div className="row">
      <div className="col1">
        <img
          src="https://media.istockphoto.com/vectors/portrait-of-a-shorthaired-girl-androgin-lookingwith-asidelongglance-vector-id1190626181?k=6&m=1190626181&s=612x612&w=0&h=gzVlHCmPHddOqCX3XCXspeR8eJRq228rORz3e7WKh0g="
          alt=""
        />
      </div>
      <div className="col2">
        <div className="name">
          <h1>ANJIL SHAKYA</h1>
        </div>
        <div className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa amet
          laborum quae veniam voluptatum explicabo quos id. Velit, eius
          veritatis.
        </div>
        <div className="socialicons">
          <ul>
            <li>
              <a href="https://www.facebook.com/anjil.shakya.1/" target="_blank"><FaFacebook /></a>
            </li>
            <li>
              <a href="https://instagram.com/shakyanjil" target="_blank"><FaInstagram /></a>
            </li>
            <li>
              <a href="https://github.com/shakyanjil" target="_blank"><FaGithub /></a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
