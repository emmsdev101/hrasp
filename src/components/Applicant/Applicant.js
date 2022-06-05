import React from "react";
import "./applicant.css";

import profilepic1 from "./../../images/sampleImages/profiepic1.jpg";
import { Col, Row } from "react-bootstrap";
export default function Applicant() {
  return (
    <div className="applicantItem">
      <Row>
        <Col md = {8}>
        <div className="applicantInfo">
        <img
            width={40}
            className="applicantProfile"
            src={profilepic1}
            alt="pp"
          />
          <div>Emmanuel Katipunan</div>
        </div>

        </Col>
        <Col className="d-flex justify-content-start align-items-center">Accountant</Col>
      </Row>
    </div>
  );
}
