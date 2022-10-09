import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft
  } from "@fortawesome/free-solid-svg-icons";

import './style.css'

export default function ApplicationDetails({close}) {
  return (
    <div className="applicantsBox m-1 p-3">
      <Row>
        <Col md={4} className = "d-flex flex-direction-row align-items-center">
        <button className="btn bg-transparent" onClick={()=>close(false)}><FontAwesomeIcon icon={faArrowLeft}/> </button>
          <h4 className="cardTtle p-0 m-0">Application Details</h4>
        </Col>
        <Col className="d-flex justify-content-end">
          <div><Button className="btn-success me-2" size = "sm">Accept</Button></div>
         <div> <Button variant="secondary" size = "sm">Reject</Button></div>
        </Col>
      </Row>
      <br></br>
      <div className="ps-4 pe-4 pb-4">        

        <h6 className = "mb-3">Personal Information:</h6>
        <hr></hr>
        <Row>
            <Col md={3} sm = {6}>
                <p className="p-info">Emmanuel</p>
                <p className="p-info-label">Firstname</p>
            </Col>
            <Col md={3} sm = {6}>
                <p className="p-info">Despi</p>
                <p className="p-info-label">Middlename</p>
            </Col>
            <Col md={3} sm = {6}>
                <p className="p-info">Katipunan</p>
                <p className="p-info-label">Lastname</p>
            </Col>
            <Col md={3} sm = {6}>
                <p className="p-info">Male</p>
                <p className="p-info-label">Gender</p>
            </Col>
        </Row>
        <Row>
            <Col md={3} sm = {6}>
                <p className="p-info">October 30 1998</p>
                <p className="p-info-label">Birthday</p>
            </Col>
            <Col md={3} sm = {6}>
                <p className="p-info">23</p>
                <p className="p-info-label">Age </p>
            </Col>
            <Col md={3} sm = {6}>
                <p className="p-info">Single</p>
                <p className="p-info-label">Status</p>
            </Col>
            <Col md={3} sm = {6}>
                <p className="p-info">Filipino</p>
                <p className="p-info-label">Citizenship</p>
            </Col>
        </Row>       

        <h6 className = "mb-3 mt-3">Home Address:</h6>
        <hr></hr>
        <Row>
            <Col md={3} sm = {6}>
                <p className="p-info">Malitbog</p>
                <p className="p-info-label">Barangay</p>
            </Col>
            <Col md={3} sm = {6}>
                <p className="p-info">Tapaz</p>
                <p className="p-info-label">Municipality </p>
            </Col>
            <Col md={3} sm = {6}>
                <p className="p-info">Capiz</p>
                <p className="p-info-label">Province/City</p>
            </Col>
            <Col md={3} sm = {6}>
                <p className="p-info">Filipino</p>
                <p className="p-info-label">Citizenship</p>
            </Col>
        </Row>
      
        <h6 className = "mb-3 mt-3">Permanent Address:</h6>
          <hr/>
        <Row>
            <Col md={3} sm = {6}>
                <p className="p-info">Malitbog</p>
                <p className="p-info-label">Barangay</p>
            </Col>
            <Col md={3} sm = {6}>
                <p className="p-info">Tapaz</p>
                <p className="p-info-label">Municipality </p>
            </Col>
            <Col md={3} sm = {6}>
                <p className="p-info">Capiz</p>
                <p className="p-info-label">Province/City</p>
            </Col>
            <Col md={3} sm = {6}>
                <p className="p-info">Filipino</p>
                <p className="p-info-label">Citizenship</p>
            </Col>
        </Row>
       
        <h6 className = "mb-3 mt-3">Contact Information:</h6>
        <hr/>
        <Row>
            <Col md={3} sm = {6}>
                <p className="p-info">09988004567</p>
                <p className="p-info-label">Contact Number</p>
            </Col>
            <Col md={3} sm = {6}>
                <p className="p-info">Tapaz</p>
                <p className="p-info-label">Email Address </p>
            </Col>
            <Col md={3} sm = {6}>
                <p className="p-info">Nida Katipunan</p>
                <p className="p-info-label">Contact Person Name</p>
            </Col>
            <Col md={3} sm = {6}>
                <p className="p-info">09876543123</p>
                <p className="p-info-label">Contact Person Number</p>
            </Col>
        </Row>
        <h6 className = "mb-3 mt-3">Files:</h6>
        <hr/>
        <Row>
            <Col md={3} sm = {6}>
                <p className="p-info">Personal Data Sheet</p>

            </Col>
            <Col md={3} sm = {6}>
                <p className="p-info">Application Letter</p>
            </Col>
            <Col md={3} sm = {6}>
                <p className="p-info">Certificates of Seminars/Trainings</p>
            </Col>

        </Row>
      </div>
    </div>
  );
}
