import { LoginLandingPage } from "./SComponent/ShaadLogin";
import Hompage from "./Components/Faizan's Components/Hompage";
import { AllRoutes } from "./allroutes/Allroute";
import { useContext } from "react";
import { myContext } from "./CustomProviderComp";
import { useNavigate,Navigate } from "react-router-dom";
function PrivateRoute({children}) {
   
    const {isLogin}=  useContext(myContext);
    const navi =   useNavigate();
      
      if(isLogin){
    return (
    children
    )
      }
      else{
         return   <Navigate to="/"/>
      }
  }

export default PrivateRoute