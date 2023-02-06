import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../components/header/AdminHeader";
import DashBoard from "../dashboard/DashBoard";
import Application from "../Applications/Application";
import Hiring from "../Hiring/Hiring";
import axios from "axios";
import { apiBaseUrl } from "../../config";
import Conference from "../Conference/Conference";
import Panel from "../Panels/Panels"
import ScreeningComittee from "../ScreeningComittee/ScreeningComittee";
import EvaluationSheets from "../EvaluationSheets/EvaluationSheets";

export default function AdminPortal() {

  const [render, setRender] = useState(false) 

  useEffect(()=>{
    const auth = async()=>{
      let authReq
      try{
        authReq = await axios.get(apiBaseUrl+"/admin/",{withCredentials:true});
        setRender(true)

      }
      catch(e){
        setRender(true)
        console.log(e)
        e.code === "ERR_BAD_REQUEST"?window.location.replace("/admin-login"):console.log("logged in")
      }        
    }
    auth()
  },[])
  return render?(
    <>
    <Header logged = {true} />
    <Container fluid m={0} p={0} className = "Main">
    <Routes>
      <Route exact path="/" element={<DashBoard />} />
      <Route exact path="/dashboard" element={<DashBoard />} />
      <Route exact path="/applications/:tab" element={<Application />} />
      <Route exact path="/applications" element={<Application />} />
      <Route exact path="/hiring" element={<Hiring />} />
      <Route exact path="/conference/:roomId/:applicantionsId" element ={<Conference admin = {true}/>}/>
      <Route exact path="/panels" element={<Panel/>}/>
      <Route exact path="/boards" element={<ScreeningComittee />} />
    </Routes>
    </Container>

  </>
  ):""
} 
