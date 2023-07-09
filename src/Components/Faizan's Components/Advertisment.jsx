import React from 'react';
import "../Faizan's Components/homapage.css"
import { Box,Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

function Advertisment(props) {
    return (
        <Box border="0.1px solid lightgray" bg="white" w="30%" textAlign='center' height='3rem' position='absolute' >
            <Box bg="rgb(241,242,242)" p='0.7rem'></Box>

            <Box >
                <Text fontSize="xs">ADVERTISMENT</Text>
                <Image width="100%"  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuS2_ErMhnPwMAD67wSO_3psuh0XdGH-fBhQ&usqp=CAU' />
                    
                
            </Box>
            <br />
            <Box >
                <Text fontSize="xs">ADVERTISMENT</Text>
                <Image width="100%"  src='https://shoutmehindi.com/wp-content/uploads/2018/06/Facebook-%E0%A4%AE%E0%A5%87%E0%A4%82-Ad-Campaign-%E0%A4%95%E0%A5%88%E0%A4%B8%E0%A5%87-Create-%E0%A4%94%E0%A4%B0-Publish-%E0%A4%95%E0%A4%B0%E0%A5%87%E0%A4%82-featured.png' />
                    
                
            </Box>
        </Box>
    );
}

export default Advertisment;