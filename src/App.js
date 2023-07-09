import './App.css';
import { AllRoutes } from './allroutes/Allroute';
import { Message } from './bharatComponent/message';
import { Navbar } from './bharatComponent/nav';
import React, { useContext, useEffect, useState } from "react";
import {Route,Routes,Router} from 'react-router-dom';
import { auth } from './SComponent/FireBaseAuth';
import HomeComp from './SComponent/Home';
import { LoginLandingPage } from './SComponent/ShaadLogin';
import { getAuth, signOut } from "firebase/auth";
import { AuthContext } from './commonStore/contextapi';
import { myContext } from './CustomProviderComp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [userName, setUserName] = useState("");
  const { postuser, setinputdata, postdata, inputdata, setIsAuth, isAuth } = useContext(AuthContext);
  const {isLogin} = useContext(myContext);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        console.log(user);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
       <ToastContainer />
     {isLogin ? <Navbar/>: null } 
      <AllRoutes/>
      {isLogin ? <Message/>: null } 
      
      
    </div>
  );
}

export default App;
