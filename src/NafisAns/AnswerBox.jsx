import React from "react";
import "./AnswerBox.css"
import Anspic from"./NafisImages/Answer.svg"
import Follpic from"./NafisImages/follow.svg"
import Passpic from "./NafisImages/Pass.svg"
import cross from "./NafisImages/cross.svg"
import downvote from "./NafisImages/downvot.svg"
import threedots from "./NafisImages/3dots.svg"

    function Answerbox(props){
        return(
            <div className="Answerbox" style={{marginTop:"-10px"}}>
                <hr />
                <div className="answerinfo" style={{width:"150%",display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>What is Dynamic Programming?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>1 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 18h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"100px",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"120px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 3</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"100px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                    <div style={{display:"flex",gap:"15px",marginLeft:"180px"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                </div>

                <hr />
                <div className="answerinfo" style={{width:"150%",display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>What is Dynamic Programming?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>1 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 18h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"100px",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"120px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 3</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"100px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                    <div style={{display:"flex",gap:"15px",marginLeft:"180px"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                </div>
                    <hr />

                <div className="answerinfo" style={{width:"150%",display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>What is Dynamic Programming?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>1 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 18h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"100px",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"120px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 3</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"100px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                    <div style={{display:"flex",gap:"15px",marginLeft:"180px"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                </div>

            
                <hr />

                <div className="answerinfo" style={{width:"150%",display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>What is Dynamic Programming?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>1 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 18h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"100px",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"120px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 3</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"100px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                    <div style={{display:"flex",gap:"15px",marginLeft:"180px"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                </div>

                <hr />
                <div className="answerinfo" style={{width:"150%",display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>What is Dynamic Programming?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>1 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 18h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"100px",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"120px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 3</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"100px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                    <div style={{display:"flex",gap:"15px",marginLeft:"180px"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                </div>
                <hr />
                <div className="answerinfo" style={{width:"150%",display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>What is Dynamic Programming?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>1 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 18h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"100px",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"120px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 3</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"100px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                    <div style={{display:"flex",gap:"15px",marginLeft:"180px"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                </div>
                <hr />

                <div className="answerinfo" style={{width:"150%",display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>What is Dynamic Programming?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>1 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 18h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"100px",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"120px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 3</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"100px",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                    <div style={{display:"flex",gap:"15px",marginLeft:"180px"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                </div>


            </div>
        )
    }
    export {Answerbox}