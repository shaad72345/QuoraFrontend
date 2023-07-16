import React from "react";
import "./AnswerBox.css"
import Anspic from"./NafisImages/Answer.svg"
import Follpic from"./NafisImages/follow.svg"
import Passpic from "./NafisImages/Pass.svg"
import cross from "./NafisImages/cross.svg"
import downvote from "./NafisImages/downvot.svg"
import threedots from "./NafisImages/3dots.svg"
import { Box } from "@chakra-ui/react";

    function Answerbox(props){
        return(
            <div className="Answerbox" style={{marginTop:"5px" ,width:"100%"}}>
                <hr />
                <Box width={{base:"120%", md:"150%"}}>
                <div className="answerinfo" style={{display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>What is Dynamic Programming?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                </Box>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>1 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 18h</p>
                </div>
                
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"15%",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"20%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 3</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"15%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                
                    <div style={{display:"flex",gap:"15%",marginLeft:"30%"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                    
                </div>
               
               
                

                <hr />
                <Box width={{base:"120%", md:"150%"}}>
                <div className="answerinfo" style={{display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>What is Dynamic Programming?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                </Box>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>1 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 18h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"15%",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"20%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 3</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"15%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                
                    <div style={{display:"flex",gap:"15%",marginLeft:"30%"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                    
                </div>
                
                
                    <hr />
                    <Box width={{base:"120%", md:"150%"}}>
                <div className="answerinfo" style={{display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>What is Dynamic Programming?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                </Box>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>1 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 18h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"15%",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"20%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 3</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"15%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                
                    <div style={{display:"flex",gap:"15%",marginLeft:"30%"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                    
                </div>
                
                <hr />
                <Box width={{base:"120%", md:"150%"}}>
                <div className="answerinfo" style={{display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>What is Dynamic Programming?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                </Box>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>1 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 18h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"15%",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"20%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 3</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"15%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                
                    <div style={{display:"flex",gap:"15%",marginLeft:"30%"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                    
                </div>
                
                <hr />
                <Box width={{base:"120%", md:"150%"}}>
                <div className="answerinfo" style={{display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>What is Dynamic Programming?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                </Box>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>1 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 18h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"15%",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"20%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 3</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"15%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                
                    <div style={{display:"flex",gap:"15%",marginLeft:"30%"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                    
                </div>
                
                <hr />
                <Box width={{base:"120%", md:"150%"}}>
                <div className="answerinfo" style={{display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>What is Dynamic Programming?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                </Box>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>1 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 18h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"15%",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"20%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 3</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"15%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                
                    <div style={{display:"flex",gap:"15%",marginLeft:"30%"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                    
                </div>
                
                <hr />
                <Box width={{base:"120%", md:"150%"}}>
                <div className="answerinfo" style={{display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>What is Dynamic Programming?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                </Box>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>1 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 18h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"15%",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"20%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 3</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"15%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                
                    <div style={{display:"flex",gap:"15%",marginLeft:"30%"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                    
                </div>
                
                <hr />
                <Box width={{base:"120%", md:"150%"}}>
                <div className="answerinfo" style={{display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>What is Dynamic Programming?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                </Box>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>1 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 18h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"15%",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"20%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 3</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"15%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                
                    <div style={{display:"flex",gap:"15%",marginLeft:"30%"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                    
                </div>
                
                <hr />
                <Box width={{base:"120%", md:"150%"}}>
                <div className="answerinfo" style={{display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>What is Dynamic Programming?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                </Box>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>1 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 18h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"15%",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"20%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 3</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"15%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                
                    <div style={{display:"flex",gap:"15%",marginLeft:"30%"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                    
                </div>
                
                <hr />
                <Box width={{base:"120%", md:"150%"}}>
                <div className="answerinfo" style={{display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>What is Dynamic Programming?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                </Box>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>1 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 18h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"15%",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"20%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 3</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"15%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                
                    <div style={{display:"flex",gap:"15%",marginLeft:"30%"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                    
                </div>
                
                <hr />
                <Box width={{base:"120%", md:"150%"}}>
                <div className="answerinfo" style={{display:"flex",justifyContent:"space-between",marginTop:"10px",marginLeft:"7px"}}>
                    
                    <b>What is Dynamic Programming?</b> 
                    <img width="17px" src={cross}/>
                    <br />
                    
                </div>
                </Box>
                
                <div style={{display:"flex",color:"darkgray",marginTop:"10px",marginLeft:"7px"}}>
                <p style={{color:"gray",fontSize:"13px"}}> <b>1 Answer · &nbsp;</b></p>
                <p style={{fontSize:"13px"}}> Last followed 18h</p>
                </div>
                
               
                <div className="answerbtn" style={{display:"flex",gap:"4px",marginLeft:"7px",marginTop:"9px"}}>
                    <button style={{  color:"gray",display:"flex",backgroundColor:"white",alignItems:"center",border:"1px solid lightgray" ,borderRadius:"25px",width:"15%",height:"33px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Follpic}/> Answer</button>
                    <button style={{ marginTop:"5px",color:"gray",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"20%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Anspic}/>Follow · 3</button>
                    <button style={{ color:"gray",marginTop:"5px",display:"flex",backgroundColor:"white" ,borderRadius:"25px",width:"15%",height:"30px ",fontSize:"14px"}}><img style={{marginLeft:"10px"}} src={Passpic}/>Pass</button>
                
                    <div style={{display:"flex",gap:"15%",marginLeft:"30%"}}>
                        <img src={downvote} alt="" />
                        <img src={threedots} alt="" />
                    </div>
                    
                </div>
                
                <hr />

            


            </div>
        )
    }
    export {Answerbox}