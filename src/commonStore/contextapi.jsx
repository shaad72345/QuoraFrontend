import axios from 'axios';
import React, { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [postdata, setpostdata]=useState([]);
  const [inputdata, setinputdata]=useState({data:'', img:''});

  useEffect(()=>{
    axios.get("http://localhost:3000/posts").then((res)=>{
        console.log(res.data)
        setpostdata(res.data)
      })
  },[inputdata])
  
  

  function postuser(userdes, im){
    axios.post("http://localhost:3000/posts", {des:userdes.data, imgs:im}).then((res)=>{
        console.log(res.data)
      })
  }

  return (
    <div>
    <AuthContext.Provider value={{ isAuth, setpostdata, setinputdata, postuser, postdata, inputdata, setIsAuth}}>
      {children}
    </AuthContext.Provider>
    </div>
  );
};


