import { Box, Button, CloseButton, Flex, HStack, Image, Input, Modal, ModalContent, ModalOverlay, Spacer, Text, useDisclosure } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import spaces from './images/spaces.svg';
import downarrow from './images/downarrow.svg';
import rightfillarrow from './images/rightfillarrow.svg';
import downdarkarrow from './images/downdarkarrow.svg';
import { Bharataction } from '../commonStore/Bharatacred/BharatAction';
import { useContext, useState } from 'react';
import { Store } from '../commonStore/comStore';
import { AuthContext } from '../commonStore/contextapi';
import axios from 'axios';
import { myContext } from '../CustomProviderComp';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Addquestion = () => {
    const {isLogin,allpost, setAllpost} = useContext(myContext);
  const [post, setPost] = useState({Title:"", description:""})
  const [uploadMsg, setUploadMsg] = useState("");
  const [Post_Image, setImage] = useState("")
const navi = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { postuser, setinputdata, postdata, inputdata } = useContext(AuthContext);
    // const [images, setimages] = useState("")

    function call() {
        const {Title, description} = post;
        // console.log(Post_Image);
       const payload = {Title,Post_Image, description}
         fetch("https://quoraclonebackend.onrender.com/posts/create", {
           method:"POST",
           headers : {
             'Content-Type':'application/json',
             'Authorization' : `Bearer ${isLogin}`
          },
           body : JSON.stringify(payload)
         }).then((res)=>res.json())
         .then((res)=>{setUploadMsg(res.message);toast(res.message) })
         .catch((err)=>{toast(err.message)})
         navi("/answer")
        //  titlebox ="" 
        onClose();

    }
    const convertToBase64 = (e)=>{
        //console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload =() =>{
         // console.log(reader.result)
          setImage(reader.result);
          console.log(Post_Image);
          
        }
         }


    return <>

        <Button onClick={onOpen} boxShadow='inner' px='10px' h={'29px'} borderRadius='50px 0 0 50px' colorScheme='red' size='sm' maxWidth='110px' minWidth='100px'>
            <Text fontSize='xs'> Add Question</Text>
        </Button>
        <Button onClick={onOpen} boxShadow='inner' h={'29px'} px='10px' borderRadius='0px 50px 50px 0px' colorScheme='red' size='sm'>
            <Image color='white' w='20px' src={downarrow}   />
        </Button>

        <Modal isOpen={isOpen} blockScrollOnMount={false} size='3xl' isCentered onClose={onClose}>
            <ModalOverlay />
            <ModalContent h='420px' p='10px' color='gray'>
                <CloseButton size='lg' onClick={onClose} />
                <HStack pb='10px'>
                    <Text w='50%' color='blackAlpha.800' textAlign='center'>Add Question</Text>
                    <Text w='50%' color='blackAlpha.800' textAlign='center'>Create Post</Text>
                </HStack>
                <hr />
                <HStack py='20px' px='10px'>
                    <Image mr='10px' w='25px' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
                    <Image w='15px' src={rightfillarrow} />
                    <Button boxShadow='inner' borderRadius='50px' bg='white' border='1px solid silver' size='sm'>
                        <Image w='20px' src={spaces} />

                        <Text pl='5px' fontSize='xs'>Public</Text>
                        <Image color='black' ml={'5px'} w='15px' src={downdarkarrow} />
                    </Button>

                </HStack>
                <Input onChange={(e)=>{setPost({...post,Title:e.target.value})}} variant='flushed' size='lg' placeholder='Start your question with "What","How","Why",etc.' />
           
           {/* onChange={(e)=>{setPost({...post,Title:e.target.value})}} */}
                <Input variant='flushed' size='lg' placeholder='Description' onChange={(e)=>{setPost({...post, description:e.target.value})}} />
                <Text size='xs' color="teal">File size must be less than 60Kb</Text>
                <Input variant='flushed' type='file' size='sm'  accept='image/*'
     onChange={convertToBase64} />


                {/* <Box h={"160px"}></Box> */}
                <hr />
                <Flex mt={"10px"} mr={'10px'}>
                    <Spacer />
                    <Button onClick={onClose} w={"70px"} mr={'10px'} borderRadius={'20px'}><Text fontSize='xs'>Cancel</Text></Button>
                    <Button onClick={call} w={"130px"} colorScheme='blue' borderRadius={'20px'}><Text fontSize='xs'>Add Question</Text></Button>
                </Flex>
            </ModalContent>
        </Modal>

    </>
}
export { Addquestion };