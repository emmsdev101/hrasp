import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/AdminHeader";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import AdminPortal from "./pages/Admin/AdminPortal";
import PortalHome from "./pages/Portal/Home/PortalHome";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/Signup/Signup";
import Applicant from "./pages/Applicant/Applicant";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import Panel from "./pages/Panel/Panel";
import Board from './pages/Board/Board'
import PanelLogin from "./pages/PanelLogin/PanelLogin";
import Conference from "./pages/Conference/Conference";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PortalHome />} />
        <Route exact path="/home/" element={<PortalHome />} />

        <Route exact path="/admin-login/" element={<AdminLogin />} />
        <Route exact path="/admin/*" element={<AdminPortal />} />

        <Route exact path="/signup/" element={<SignUp />} />
        <Route exact path="/login/" element={<SignIn />} />
        <Route exact path="/applicant/*" element={<Applicant />} />

        <Route exact path="/panel-login" element = {<PanelLogin/>}/>
        <Route exact path="/panel/*" element = {<Panel/>}/>
        <Route exact path="/committee-member/*" element = {<Board committee = {true}/>}/>
        <Route exact path="/committee-president/*" element = {<Board head = {true}/>}/>
        <Route exact path="/conference/:roomId" element ={<Conference/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
