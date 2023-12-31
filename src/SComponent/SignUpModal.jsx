import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./FireBaseAuth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from "react";
import { myContext } from "../CustomProviderComp";
function SignUpComp() {
  
  const [Error, setError] = useState("");
 
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {setSignupmsg,setSignuperr} = useContext(myContext);
  const [credentail, setCredential] = useState({
    name: "",
    email: "",
    password: "",
  });

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  function handleSignup() {
    if (!credentail.name || !credentail.email || !credentail.password) {
      setError("Fill all fields !");

      return;
    }
    setError("");
    // console.log(credentail);
    setCredential({ name: "", email: "", password: "" });
    


    fetch("https://quoraclonebackend.onrender.com/user/signup", {
          method : "POST",
          headers : {'Content-Type':'application/json' },
          body : JSON.stringify(credentail)
        }).then((res)=>res.json())
        .then((res)=>{console.log(res);setSignupmsg(res.message); setSignuperr(res.error) ; toast(res.messages); onClose();})
        .catch((err)=>setSignuperr(err.message))

    // createUserWithEmailAndPassword(auth, credentail.email, credentail.password)
    //   .then(async (res) => {
    //     console.log(res);
    //     const data = res.user;
    //     await updateProfile(data, { displayName: credentail.name });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
  return (
    <>
      <Button onClick={onOpen} padding={5} ml={{base:"0", md:"14"}} colorScheme="blue" width={{base:"95%", md:"60%"}}>
        Sign Up With Email
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
         <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
         

            <FormControl>
              <FormLabel>Full name</FormLabel>
            
              <Input
                ref={initialRef}
                placeholder="First name"
                onChange={(e) => {
                  setCredential({ ...credentail, name: e.target.value });
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Email"
                type="email"
                onChange={(e) => {
                  setCredential({ ...credentail, email: e.target.value });
                }}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Password"
                type="password"
                onChange={(e) => {
                  setCredential({ ...credentail, password: e.target.value });
                }}
              />
            </FormControl>

            <p style={{ color: "red", marginTop: "10px" }}>{Error}</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSignup}>
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export { SignUpComp };
