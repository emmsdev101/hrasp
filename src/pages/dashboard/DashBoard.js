import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeFork } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "../../components/header/Header";
import Sidepanel from "../../components/sidepanel/Sidepanel";

import "./dashboard.css";

export default function DashBoard() {
  return (
        <Container fluid className="p-3">
          <Row>
            <Col sm={12} md={6} lg={4}>
              <div class="card-counter info">
                <FontAwesomeIcon
                  icon={faCodeFork}
                  className="icon"
                ></FontAwesomeIcon>
                <div className="count-info">
                  <span class="count-numbers">12</span>
                  <span class="count-name">new applicants</span>
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
                  <span class="count-name">Under Screening</span>
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
                  <span class="count-name">Job Slot Left</span>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Container fluid>
              <div className="reminder-box m-1 p-3">
              <h4>Applicants</h4>
              <hr></hr>
              <div className="reminders-list">
                  <p>No applicants yet</p>
              </div>
              </div>
            </Container>
          </Row>
        </Container>

  );
}
