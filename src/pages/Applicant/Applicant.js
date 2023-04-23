import React, {useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import "./applicant.css";
import Header from "../../components/header/ApplicantHeader";
import Home from "./pages/Home";
import { from } from "form-data";
import Apply from "./pages/Apply/Apply";
import axios from "axios";
import { apiBaseUrl } from "../../config";
import Conference from "../Conference/Conference";
import Profile from "../Profile/Profile";


export default function Applicant() {
  const [profileData, setProfileData] = useState("")
  useEffect(()=>{
    const checkAuth = async()=>{
      try{
        const authReq = await axios(apiBaseUrl+"/applicant/getProfileDetails",{withCredentials:true})
        const authData = await authReq.data
        console.log("applicant",authData)
        setProfileData(authData)
      }catch(err){
        window.location.replace("/login")
      }
      
    }
    checkAuth();
  },[])
  return (
    <div className="applicant m-0 p-0">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/apply/:id/:title" element={<Apply/>}/>
        <Route exact path="/conference/:roomId/" element ={<Conference applicant = {true} profileData={profileData}/>} />
        <Route exact path="/profile/" element ={<Profile/>}/>

      </Routes>
    </div>
  );
}
