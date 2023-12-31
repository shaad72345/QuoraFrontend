import React from 'react';
import "../Faizan's Components/homapage.css"
import {Box,Divider,Text,Button, HStack, Link ,Stack} from '@chakra-ui/react';
import {MdOutlineAddBox} from 'react-icons/md'



function Sidebar(props) {
    return (
        <div className="sidebar" style={{display:'flex', justifyContent:'end'}}>
            {/* <Box border="none" p="0.3rem 0.5rem" borderRadius="3px" bg="rgb(205, 221, 221)">
                
              <MdOutlineAddBox style={{fontSize:"1.2rem",marginRight:"-5px",color:"grey"}} />

              <p style={{fontSize:"0.8rem",color:"grey"}}>Create Space</p>
            </Box> */}
            <Button leftIcon={<MdOutlineAddBox/>} size="sm" bg="rgb(236,237,237)" color="rgb(100, 100, 100)">
                Create Space

            </Button>
            <div>
                <img src="https://qph.cf2.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg" alt="History" />
                <p>History</p>
            </div>
            
            <div>
                <img src="https://qph.cf2.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg" alt="Business" />
                <p>Business</p>
            </div>
            
            
            <div>
                <img src="https://qph.cf2.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg" alt="Psychology" />
                <p>Psychology</p>
            </div>
            
        
            <div>
                <img src="https://globalhealthcenter.umn.edu/sites/globalhealthcenter.umn.edu/files/styles/folwell_full/public/2020-08/Global_Health_Day_2020.png?itok=OBqPFWl5" alt="Health" />
                <p>Health</p>
            </div>
            
        
            <div>
                <img src="https://qph.cf2.quoracdn.net/main-thumb-t-843-100-W7FzODceTO2aQmp8D7E4rKZ8YgSv21eR.jpeg" alt="Movies" />
                <p>Movies</p>
            </div>
            
        
            <div>
                <img src="https://render.fineartamerica.com/images/rendered/medium/poster/8/8/break/images/artworkimages/medium/1/circuit-board-technology-setsiri-silapasuwanchai.jpg" alt="Technology" />
                <p>Technology</p>
            </div>
            
        
            <div>
                <img src="https://render.fineartamerica.com/images/rendered/medium/poster/8/8/break/images/artworkimages/medium/1/circuit-board-technology-setsiri-silapasuwanchai.jpg" alt="Science" />
                <p>Science</p>
            </div>
            
        
            <div>
                <img src="https://qph.cf2.quoracdn.net/main-thumb-t-1605514-100-lcvffzqooyacrpircfxhqcmrpjiahwqa.jpeg" alt="Quora Upvotes" />
                <p>Quora Upvotes</p>
            </div>

            <hr />

            <Box display='flex' flexDirection='column' >
                <HStack spacing={0} mb='-20px'>
                    <Link><Text fontSize="0.3rem">About•</Text></Link>
                    <Link><Text fontSize="xs">Careers•</Text></Link>
                </HStack>
                
                <HStack spacing={0}  mb='-20px'>
                    <Link><Text fontSize="xs">Terms•</Text></Link>
                    <Link><Text fontSize="xs">Privacy•</Text></Link>
                </HStack>
                <HStack spacing={0}  mb='-20px'>
                    <Link><Text fontSize="xs">Acceptable Use•</Text></Link>
                </HStack>
                <HStack spacing={0}  mb='-20px'>
                    <Link><Text fontSize="xs">Business•</Text></Link>
                    <Link><Text fontSize="xs">Press•</Text></Link>
                </HStack>
                <HStack spacing={0}  mb='-20px'>
                    <Link><Text fontSize="xs">Your Ad Choices•</Text></Link>
                </HStack>
                <HStack   mt='0px'>
                    <Link><Text fontSize="xs">Grienvance Officer</Text></Link>
                </HStack>
            </Box>
        </div>
    );
}

export default Sidebar;