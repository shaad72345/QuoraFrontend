
import React from "react";
import "./SidebarOption.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions" style={{marginLeft:"-50px",marginTop:"30px"}}>
      <p style={{ display: "flex", marginLeft: "174px",color:"#686868",borderBottom:"1px solid lightgray", paddingBottom:"7px" }}>
         <b>Questions</b></p>
         
      <div style={{display:"flex",flexDirection:"column",width:"200px",marginLeft:"155px",alignItems:"flex-start"}}>
       
      
        <div className="sidebarOption"  >
          <p style={{fontSize:"14px",color:"#606060",paddingRight:"57px"}}>Questions for You</p>
        </div>
        <div className="sidebarOption" style={{marginTop:"-7px",marginBottom:"-7px"}} >

          <p style={{fontSize:"14px",color:"#606060",paddingRight:"65px"}}>
            Answer requests</p>
        </div>

        <div className="sidebarOption" >

          <p style={{fontSize:"14px",color:"#606060",paddingRight:"130px"}}>
            Drafts</p>
        </div>
      </div>




    </div>
  );
}

export default SidebarOptions;