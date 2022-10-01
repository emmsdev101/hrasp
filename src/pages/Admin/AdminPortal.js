import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../components/header/AdminHeader";
import DashBoard from "../dashboard/DashBoard";
import Application from "../Applications/Application";
import Hiring from "../Hiring/Hiring";
import AdminLogin from "../AdminLogin/AdminLogin";
import axios from "axios";
import { apiBaseUrl } from "../../config";

export default function AdminPortal() {


  const MainRoute=()=>{
    useEffect(()=>{
      const auth = async()=>{
        let authReq
        try{
          authReq = await axios.get(apiBaseUrl+"/admin/",{withCredentials:true});
        }
        catch(e){
          console.log(e)
          e.code === "ERR_BAD_REQUEST"?window.location.replace("/admin/login"):console.log("logged in")
        }
        
      }
      auth()
    },[])
    return(
      <>
      <Header logged = {true} />
      <Container fluid m={0} p={0} className = "Main">
      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
        <Route exact path="/applications" element={<Application />} />
        <Route exact path="/hiring" element={<Hiring />} />
      </Routes>
      </Container>

    </>
    )
  }
  return (
 //   <MainRoute/>
    <Routes>
      <Route exact path="/login" element={<AdminLogin/>}/>
      <Route exact path="/*" element={<MainRoute />} />
    </Routes>
  );
}
