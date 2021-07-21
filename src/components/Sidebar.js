import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <nav className="nav-menu">
        <div className="image">
          <img
            src="https://media.istockphoto.com/vectors/portrait-of-a-shorthaired-girl-androgin-lookingwith-asidelongglance-vector-id1190626181?k=6&m=1190626181&s=612x612&w=0&h=gzVlHCmPHddOqCX3XCXspeR8eJRq228rORz3e7WKh0g="
            alt=""
          />
        </div>
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => {
            return (
              <li key="index" className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
