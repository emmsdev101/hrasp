import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import "./applicant.css";
import Header from "../../components/header/ApplicantHeader";
import Home from "./pages/Home";
import { from } from "form-data";
import Apply from "./pages/Apply/Apply";

export default function Applicant() {
  return (
    <div className="applicant">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/apply/:id/:title" element={<Apply/>}/>
      </Routes>
    </div>
  );
}
