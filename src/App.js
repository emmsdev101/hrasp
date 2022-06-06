import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/Header";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import AdminPortal from "./pages/Admin/AdminPortal";
import PortalHome from "./pages/Portal/Home/PortalHome";
import SignIn from "./pages/SignIn/signIn";
import SignUp from "./pages/Signup/Signup";
import Applicant from "./pages/Applicant/Applicant";
import AdminLogin from "./pages/AdminLogin/AdminLogin"


function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route exact path = "/admin/*" element = {<AdminPortal/>}/>
            <Route exact path="/applicant/*" element = {<Applicant/>}/>
            <Route exact path="/signup/" element = {<SignUp/>}/>
            <Route exact path="/signin/" element = {<SignIn/>}/>
            <Route exact path="/admin-signin/" element = {<AdminLogin/>} />
            <Route exact path = "/" element = {<PortalHome/>}/>
          </Routes>
        </BrowserRouter>
  );
}
export default App;
