import React from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import useAddPassword from './useAddPassword';

export default function AddPassword({next}) {

  const {password, handlePassword, retype, handleRetype, submit} = useAddPassword(next)
  return (
    <Container className="signup-box">
      <h2 className="text-center">
        West Visayas State University <br /> HRASP
      </h2>
      <h4 className="mt-4 mb-4 text-center">Create Password</h4>
      <Row className = "formRow">
      <Col sm={12} md={12} lg={8}><p className='alert alert-warning'>Create a strong password with at least 8 characters, 1 special character, 1 number and 1 upper case and lower cause character.</p></Col>

      </Row>
      <Form>
          <Row className = "formRow">
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group>
                  <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control type="password" id="password" onChange = {handlePassword} value = {password}></Form.Control>
              </Form.Group>
            </Col>
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group>
                  <Form.Label htmlFor='repassword'>Retype Password</Form.Label>
                <Form.Control type="password" id="repassword" onChange = {handleRetype} value = {retype}></Form.Control>
              </Form.Group>
            </Col>
            <Col sm={12} md={12} lg={12} className="form-col formRow" >
              <Button onClick = {submit}>Submit</Button>
            </Col>
          </Row>
          </Form>
    </Container>
  )
}
