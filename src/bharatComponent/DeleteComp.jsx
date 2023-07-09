import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { myContext } from '../CustomProviderComp';
import { useContext } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'
function DeleteComp() {
    const [isdeleted , setIsDeleted] = useState(false);
    const {isLogin} = useContext(myContext);
    const {id}= useParams();
    function gotomyposts(){
        navigate("/myposts");
       }
       const navigate = useNavigate();
    const backtomyposts =()=>{
        navigate("/myposts")
       }

       const handleDelete = async()=>{
         await fetch(`https://quoraclonebackend.onrender.com/posts/delete/${id}`, {
            method : "DELETE",
            headers : {
                'Authorization' : `Bearer ${isLogin}`
          }
        }
            )

            setIsDeleted(true);

           
         const myTimeout = setTimeout(gotomyposts, 1000)

       }
  return (
    <div style={{paddingTop:"200px", textAlign:"center"}}>
     { isdeleted ?  <div><h2 style={{color:"teal"}}>Deleted Succesfully...</h2></div> :
        <div style={{color:"black"}}>
        <h2>Are you sure to delete this post ?</h2><br />
 <Button onClick={handleDelete}>Yes</Button>
        
         &nbsp;&nbsp;
         <Button onClick={backtomyposts}>No</Button>
         
    </div>}
    </div>
  )
}

export default DeleteComp