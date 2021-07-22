import React from "react";
import "./label.css";
import { SidebarData } from "./SidebarData";

function Label() {
  SidebarData.map((item, index) => {
    return <h4 key={index}>{item.title}</h4>;
  });
}

export default Label;
