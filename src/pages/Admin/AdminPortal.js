import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../components/header/AdminHeader";
import DashBoard from "../dashboard/DashBoard";
import Application from "../Applications/Application";
import Hiring from "../Hiring/Hiring";

export default function AdminPortal() {
  return (
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
  );
}
