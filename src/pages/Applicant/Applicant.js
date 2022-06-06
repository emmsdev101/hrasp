import React from 'react'
import {Container} from 'react-bootstrap'
import './applicant.css'
import Header from "../../components/header/ApplicantHeader";
import Home from './pages/Home';

export default function Applicant() {
  return (
    <div className = "applicant m-0">
        <Header />
        <Home/>
    </div>
  )
}
