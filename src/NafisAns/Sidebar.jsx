import React from "react";
import SidebarOptions from "./SidebarOptions";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar" style={{marginTop:"10px",position:"fixed"}}>
      <SidebarOptions />
    </div>
  );
}

export  {Sidebar};