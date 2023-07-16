// import React from "react";
import { Sidebar } from "./Sidebar";
import { Middle } from "./Middle";
import { Right } from "./Right";
import { Stack, HStack, VStack, Box } from '@chakra-ui/react'

    function Answer(props){
        return (
           <div style={{display:"flex",backgroundColor:"#F0F0F0", marginTop:'50px', width:"100%" }}>
                <Box w="23%" display={{base:"none", md:"inline-flex"}}>
                <Sidebar />
                </Box>
                <Box w={{base:"100%", md:'50%'}} >
                <Middle />
                </Box>
                <Box w={{base:"20%", md:'35%'}} display={{base:"none", md:"inline-flex"}}>
                <Right/>
                </Box>
               
                
           </div>
           
            
        )
    }
    export {Answer};