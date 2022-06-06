import React from "react";
import {Button, Col, Container, Form, Nav, Row } from "react-bootstrap";

export default function SecondStep({next, back}) {
  return (
    <Container className="signup-box">
      <h2 className="text-center">
        West Visayas State University <br /> HRASP
      </h2>
      <h4 className="mt-4 mb-4 text-center">Confirmation</h4>
      <p className="text-center">We've send a confirmation code to your email. Please provide your confirmation code here.</p>
      <Form>
          <Row className = "formRow">
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group>
                <Form.Control type="text" id="code"></Form.Control>
              </Form.Group>
            </Col>
            <Col sm={12} md={12} lg={12} className="form-col formRow" >
              <Button onClick = {next}>Submit</Button>
            </Col>
          </Row>
          </Form>
          <Button className="btn-secondary" onClick={back}>Back</Button>
    </Container>
  );
}
