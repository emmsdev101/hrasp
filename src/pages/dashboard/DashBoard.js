import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeFork, faUserTie } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "../../components/header/AdminHeader";
import Sidepanel from "../../components/sidepanel/Sidepanel";
import CardSecondary from "../../components/dashCardSecondary/CardSecondary";
import "./dashboard.css";
import logo from "./../../images/logo/wvsulogotransparent.png";
import useDashboard from "./useDashboard";

export default function DashBoard() {
  const {jobPosts, registrations, applicants, pending} = useDashboard()
  return (
    <Container fluid className="p-3 dashboard">
      <Row>
        <h4 className="pageTitle">Dashboard</h4>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <a href="/admin/applications/applicants">
          <div className="card-counter info">
            <FontAwesomeIcon
              icon={faCodeFork}
              className="icon"
            ></FontAwesomeIcon>
            <div className="count-info">
              <span className="count-numbers">{applicants}</span>
              <span className="count-name">Applicants</span>
            </div>
          </div>
          </a>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <a href="/admin/applications/for-interview">
          <div className="card-counter success">
            <FontAwesomeIcon
              icon={faCodeFork}
              className="icon"
            ></FontAwesomeIcon>
            <div className="count-info">
              <span className="count-numbers">{pending}</span>
              <span className="count-name">Pending</span>
            </div>
          </div>  
          </a>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <a href = "/admin/applications/registration">
          <div className="card-counter danger">
            <FontAwesomeIcon
              icon={faCodeFork}
              className="icon"
            ></FontAwesomeIcon>
            <div className="count-info">
              <span className="count-numbers">{registrations}</span>
              <span className="count-name">Registration Requests</span>
            </div>
          </div>
          </a>
        </Col>
      </Row>
      &nbsp;
      <Container fluid>
      <Row>
        <h5 className="pageTitle">Vacant Positions</h5>
      </Row>
      <Row>
          {jobPosts.map((data, idx)=>(
             <CardSecondary dashIcon = {faUserTie} data = {data} body={data.num_persons} footer = {data.jobtype} key = {idx}/>
          ))}
      </Row>
      </Container>
    </Container>
  );
}
