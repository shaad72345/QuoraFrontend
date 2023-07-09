import React, { useState } from 'react'
import { createContext } from 'react'


export const myContext = createContext();



function CustomProviderComp({children}) {
    const [pageNo, setPageNo] = useState(5);
   const [isLogin, setLogin] = useState("");
   const [Name, setName] = useState("");
   const [allpost, setAllpost] = useState([]);
   const [mypost, setmypost] = useState([]);
   const [Signupmsg, setSignupmsg] = useState("");
   const [Signuperr, setSignuperr] = useState("");
   
  //  const login = ()=>{
  //   setLogin(true);
  //  }
   const logout= ()=>{
    setLogin("");
   }
//    const handleWelcome = ()=>{
//     setWelcome(true);
//    }                                    //////////, login
  return (
   <myContext.Provider value = {{isLogin,setLogin, setName, Name,logout,allpost,setAllpost, mypost, setmypost,pageNo, setPageNo,Signupmsg, setSignupmsg,Signuperr, setSignuperr}}>
    {children}
   </myContext.Provider>
  )
}

export default CustomProviderComp