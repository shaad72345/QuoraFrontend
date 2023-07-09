import { Routes, Route } from "react-router-dom";
import { Messagepage } from "../bharatComponent/messgaepage";
import Hompage from "../Components/Faizan's Components/Hompage";
import { Answer } from "../NafisAns/Answer";
import Profile from "../amitcomponent/Profile/Profile";
import { LoginLandingPage } from "../SComponent/ShaadLogin";
import PrivateRoute from "../PrivateRoute";
import Myposts from "../bharatComponent/Myposts";
import DeleteComp from "../bharatComponent/DeleteComp";

const AllRoutes=()=>{
    return <>
       <Routes>
       <Route path="/" element={<LoginLandingPage />} />
        <Route path="/home" element={<PrivateRoute><Hompage /></PrivateRoute>} />
        <Route path="/message" element={<PrivateRoute><Messagepage/></PrivateRoute>}/>
        <Route path="/answer" element={<PrivateRoute><Answer/></PrivateRoute>}/>
        <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
        <Route path="/myposts" element={<PrivateRoute><Myposts/></PrivateRoute>}/>
        <Route path="/delete/:id" element={<PrivateRoute><DeleteComp/></PrivateRoute>}/>
       </Routes>
    </>
}

export {AllRoutes}