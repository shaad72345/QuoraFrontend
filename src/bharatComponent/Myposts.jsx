import React from 'react'
import MypostCard from './MypostCard';
import { useContext ,useEffect} from 'react';
import { myContext } from '../CustomProviderComp';
import { Box,Text } from '@chakra-ui/react';

function Myposts() {
    let {isLogin,mypost, setmypost} = useContext(myContext);

    const  getmyposts = ()=>{

        fetch("https://quoraclonebackend.onrender.com/posts/my", {
          method : "GET",
          headers : {
            'Authorization' : `Bearer ${isLogin}`
          }
        }).then((res)=>res.json())
        .then((res)=>{setmypost(res)})
        .catch((err)=>{console.log(err)})
       }

       useEffect(()=>{getmyposts()},[])
  return (
    <div className="homepage" style={{width:'40%', margin:"auto", paddingTop:"45px"}}>
{mypost.length<1 ? <Box margin="120px"> <Text fontSize="xl" fontWeight="bold" > No post yet!! </Text> </Box>: null}

{  mypost.map(function(elem){
        return <MypostCard props = {elem} />
     })}
    </div>
  )
}

export default Myposts