import React, {useEffect} from "react";
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


export default function Applicant() {
  useEffect(()=>{
    const checkAuth = async()=>{
      try{
        const authReq = await axios(apiBaseUrl+"/applicant",{withCredentials:true})
        console.log(authReq.data)
      }catch(err){
        window.location.replace("/login")
      }
      
    }
    checkAuth();
  },[])
  return (
    <div className="applicant">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/apply/:id/:title" element={<Apply/>}/>
        <Route exact path="/conference/:roomId/" element ={<Conference/>}/>

      </Routes>
    </div>
  );
}
