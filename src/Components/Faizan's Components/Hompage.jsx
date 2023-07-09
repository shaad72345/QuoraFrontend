import React from 'react';
import Sidebar from './Sidebar';
import {Spacer} from '@chakra-ui/react'
import Advertisment from './Advertisment';
import "../Faizan's Components/homapage.css"
import AddPost from './AddPost';
import PostContainer from './PostContainer';
import { useContext, useState, useEffect } from 'react';
import { myContext } from '../../CustomProviderComp';
import { Button } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import { ToastContainer,toast } from 'react-toastify';


function Hompage(props) {
let {isLogin,allpost, setAllpost,pageNo, setPageNo} = useContext(myContext);


    const  getposts = ()=>{

        fetch(`https://quoraclonebackend.onrender.com/posts?limit=${pageNo}`, {
          method : "GET",
          headers : {
            'Authorization' : `Bearer ${isLogin}`
          }
        }).then((res)=>res.json())
        .then((res)=>{setAllpost(res)})
        .catch((err)=>{toast(err.message)})
       }
function handlepage(){
    setPageNo(pageNo+5);
}
       useEffect(()=>{getposts()},[pageNo])

    return (
        <div id="mainContainer" style={{display:'flex', justifyContent:'center', marginLeft:'5%'}}>
            <div className='homepage-container' style={{marginTop:'60px', position:'absolute', zIndex:'-1', display:'flex'}}> 
                <div style={{width:'73%', position:'fixed'}}>
                <Sidebar />
                </div>
                
                <div className="homepage" style={{width:'55%'}}> 
                    <AddPost/> 
                    <Spacer/> 
                    {  allpost.map(function(elem){
        return <PostContainer props = {elem} />
     })}
            <Center>
              <Button onClick={handlepage} style={{width:"100%",borderRadius:"30px",backgroundColor:"lightteal"}} >more posts...</Button>  </Center>   
                 </div>
                 <div style={{width:'75%', position:'fixed', left:'67%'}}>
                 <Advertisment/>
                 </div>
                 
             </div>
        </div>
    );
}

export default Hompage;