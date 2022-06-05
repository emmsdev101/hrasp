import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import Applicant from "../Applicant/Applicant";

import "./acceptance.css";

export default function AcceptanceTab() {
  return (
    <div className="applicantsBox p-0">
      <Row>
        <Col md={5}>
          <div className="applicantsListCol">
            <h4 className="cardTtle">Applicants</h4>
            <div className="applicants">
              <div className="d-flex justify-content-start">
                <div className="listControl">
                  <Form.Select aria-label="Default select example" size="sm">
                    <option>Position</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </Form.Select>
                </div>
                <div className="listControl">
                  <Form.Select aria-label="Default select example" size="sm">
                    <option>Type</option>
                    <option value="1">Faculty</option>
                    <option value="2">Staff</option>
                  </Form.Select>
                </div>
                <div className="listControl">
                  <div className="d-flex justify-content-center align-items-center">
                    <Form.Label htmlFor="search">Search</Form.Label>&nbsp;
                    <Form.Control
                      aria-label="Search"
                      id="search"
                      size="sm"
                      className="text-muted"
                      type="text"
                    ></Form.Control>
                  </div>
                </div>
              </div>
              <br></br>
              <Row>
                <Col md={8} className="d-flex justify-content-start">
                  Name
                </Col>
                <Col className="d-flex justify-content-start">Position</Col>
              </Row>
              <hr className="mt-0"></hr>
              <div className="forAcceptanceList">
                <Applicant />
                <Applicant />
                <Applicant />
                <Applicant />
                <Applicant />
                <Applicant />
                <Applicant />
                <Applicant />
                <Applicant />
                <Applicant />
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="applicantDetails">
            <Row>
              <Col>
                <h4 className="cardTtle">Details</h4>
              </Col>
              <Col>
                <div className="d-flex justify-content-end">
                <Button>Accept</Button>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
