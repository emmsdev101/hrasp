import React from 'react'
import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";

export default function FirstStep({next, back}) {
  return (
    <Container className="signup-box second-step">
        <h2 className="text-center">
          West Visayas State University <br /> HRASP
        </h2>
        <h4 className="mt-4 mb-4 text-center">Registration</h4>
        <Form>
          <Row>
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group>
                <Form.Label htmlFor="firstname">Firstname</Form.Label>
                <Form.Control type="text" id="firstname"></Form.Control>
              </Form.Group>
            </Col>
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group>
                <Form.Label htmlFor="Middle Name">Middlename</Form.Label>
                <Form.Control type="text" id="Middle Name"></Form.Control>
              </Form.Group>
            </Col>
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group>
                <Form.Label htmlFor="lastname">Lastname</Form.Label>
                <Form.Control type="text" id="lastname"></Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group className="mb-2">
                <Form.Label htmlFor="gender">Gender</Form.Label>
                <Form.Select id="gender">
                  <option>Male</option>
                  <option>Female</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group>
                <Form.Label htmlFor="age">Age</Form.Label>
                <Form.Control type="number" id="age"></Form.Control>
              </Form.Group>
            </Col>
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group>
                <Form.Label htmlFor="lastname">Birthday</Form.Label>
                <Form.Control type="date" id="lastname"></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group>
                <Form.Label htmlFor="contact">Contact Number</Form.Label>
                <Form.Control type="tel" id="contact"></Form.Control>
              </Form.Group>
            </Col>
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group>
                <Form.Label htmlFor="email">Email Address</Form.Label>
                <Form.Control type="email" id="email"></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Container className="d-flex justify-content-between">
            <Button onClick={next}>Next</Button>
            
            <Button variant = "secondary">Signin</Button>
          </Container>
        </Form>
      </Container>
  )
}
