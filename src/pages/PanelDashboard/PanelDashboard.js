import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeFork, faUserTie } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import CardSecondary from "../../components/dashCardSecondary/CardSecondary";
import "./dashboard.css";
import usePanelDashboard from "./usePanelDashboard";

export default function PanelDashboard() {

    const {jobPosts} = usePanelDashboard()
  return (
    <Container fluid className="p-3 dashboard">
      <Row>
        <h4 className="pageTitle">Dashboard</h4>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <div className="card-counter info">
            <FontAwesomeIcon
              icon={faCodeFork}
              className="icon"
            ></FontAwesomeIcon>
            <div className="count-info">
              <span className="count-numbers">12</span>
              <span className="count-name">Applicants</span>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div className="card-counter success">
            <FontAwesomeIcon
              icon={faCodeFork}
              className="icon"
            ></FontAwesomeIcon>
            <div className="count-info">
              <span className="count-numbers">5</span>
              <span className="count-name">Accepted</span>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div className="card-counter danger">
            <FontAwesomeIcon
              icon={faCodeFork}
              className="icon"
            ></FontAwesomeIcon>
            <div className="count-info">
              <span className="count-numbers">3</span>
              <span className="count-name">Rejected</span>
            </div>
          </div>
        </Col>
      </Row>
      &nbsp;
      <Container fluid>
      <Row>
        <h5 className="pageTitle">Vacant Positions</h5>
      </Row>
      <Row>
          {jobPosts.map((data, idx)=>(
             <CardSecondary dashIcon = {faUserTie} data = {data} footer = {data.jobtype} key = {idx}/>
          ))}
      </Row>
      </Container>
    </Container>
  )
}
