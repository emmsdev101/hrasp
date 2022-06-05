import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeFork, faUserTie } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "../../components/header/AdminHeader";
import Sidepanel from "../../components/sidepanel/Sidepanel";
import CardSecondary from "../../components/dashCardSecondary/CardSecondary";
import "./dashboard.css";
import logo from "./../../images/logo/wvsulogotransparent.png";

export default function DashBoard() {
  return (
    <Container fluid className="p-3 dashboard">
      <Row>
        <h4 className="pageTitle">Dashboard</h4>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <div class="card-counter info">
            <FontAwesomeIcon
              icon={faCodeFork}
              className="icon"
            ></FontAwesomeIcon>
            <div className="count-info">
              <span class="count-numbers">12</span>
              <span class="count-name">Applicants</span>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div class="card-counter success">
            <FontAwesomeIcon
              icon={faCodeFork}
              className="icon"
            ></FontAwesomeIcon>
            <div className="count-info">
              <span class="count-numbers">5</span>
              <span class="count-name">Accepted</span>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div class="card-counter danger">
            <FontAwesomeIcon
              icon={faCodeFork}
              className="icon"
            ></FontAwesomeIcon>
            <div className="count-info">
              <span class="count-numbers">3</span>
              <span class="count-name">Rejected</span>
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
          <CardSecondary dashIcon = {faUserTie} title = "Registrar Clerk" body={5} footer = "Staff"/>
          <CardSecondary dashIcon = {faUserTie} title = "Accountant" body={2} footer = "Staff"/>
          <CardSecondary dashIcon = {faUserTie} title = "Statistics Instructor" body={2} footer = "Faculty"/>
          <CardSecondary dashIcon = {faUserTie} title = "Programming Instructor" body={3} footer = "Faculty"/>
      </Row>
      </Container>
    </Container>
  );
}
