import { Button } from "react-bootstrap";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

import "./signin.css";
import useSignin from "./useSignin";

export default function SignIn() {
  const {email, handleEmail, password, handlePassword, submit } = useSignin()
  return (
    <Container fluid className="signin">
      <Col md = {4} lg = {4} sm = {6}>
      <Container className="signin-box">
        <h4 className="text-center">
          West Visayas State University <br /> HRASP
        </h4>
        <h4 className="mt-4 mb-4 text-center">Log In</h4>
        <Row className="formRow"></Row>
        <Form>
        <Form.Group>
                <Form.Label htmlFor="username">Email</Form.Label>
                <Form.Control type="email" id="username" value={email} onChange={handleEmail}></Form.Control>
              </Form.Group>
              <br></br>
              <Form.Group>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control type="password" id="password" value={password} onChange={handlePassword}></Form.Control>
              </Form.Group>
              <Form.Group className="d-flex justify-content-center mt-2">
                <Button onClick={submit}>Submit</Button>
              </Form.Group>
        </Form>
      </Container>
      </Col>
    </Container>
  );
}
