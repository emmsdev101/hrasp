import { Button } from "react-bootstrap";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import useAdminLogin from "./useAdminLogin";

export default function AdminLogin() {
  const {username, handleUsername, password, handlePassword, submit} = useAdminLogin()
  return (
    <Container fluid className="signin">
      <Col md = {4} lg = {4} sm = {6}>
      <Container className="signin-box">
        <h4 className="text-center">
          West Visayas State University <br /> HRASP
        </h4>
        <h4 className="mt-4 mb-4 text-center">Admin Login</h4>
        <Row className="formRow"></Row>
        <Form>
        <Form.Group>
                <Form.Label htmlFor="username" >Username</Form.Label>
                <Form.Control type="text" id="username" value = {username} onChange = {handleUsername}></Form.Control>
              </Form.Group>
              <br></br>
              <Form.Group>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control type="password" id="password" value = {password} onChange = {handlePassword}></Form.Control>
              </Form.Group>
              <Form.Group className="d-flex justify-content-center mt-2">
                <Button onClick={submit}>Submit</Button>
              </Form.Group>
        </Form>
      </Container>
      </Col>
    </Container>
  )
}
