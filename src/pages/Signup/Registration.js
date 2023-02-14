import { faArrowRight, faSign, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import useRegistration from './useRegistration';

export default function FirstStep({next, back}) {
  const {
    firstname, handleFirstname,
    middlename, handleMiddlename,
    lastname, handleLastname,
    gender, handleGender,
    age, handleAge,
    birthday, handleBirthday,
    contact, handleContact,
    email, handleEmail,
    submit
  } = useRegistration(next);
  return (
    <Row>
      <Col md = {12} className = "d-flex flex-column justify-content-center align-items-center">
      <Container fluid className="signup-box second-step pt-5">
        <h2 className="text-center">
          Applicant Hiring Portal
        </h2>
        
        <h4 className="mt-4 mb-4 text-center">Registration</h4>
        <div className='mb-5'></div>

        <hr/>
        <div className='mb-5'></div>

        <Form>
          <Row>
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group>
                <Form.Label htmlFor="firstname">Firstname</Form.Label>
                <Form.Control type="text" id="firstname" onChange = {handleFirstname} value = {firstname} required></Form.Control>
              </Form.Group>
            </Col>
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group>
                <Form.Label htmlFor="Middle Name">Middlename</Form.Label>
                <Form.Control type="text" id="Middle Name" onChange = {handleMiddlename} value = {middlename} required></Form.Control>
              </Form.Group>
            </Col>
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group>
                <Form.Label htmlFor="lastname">Lastname</Form.Label>
                <Form.Control type="text" id="lastname" onChange = {handleLastname} value = {lastname} Rrequired></Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group className="mb-2">
                <Form.Label htmlFor="gender">Gender</Form.Label>
                <Form.Select id="gender" onChange = {handleGender} value = {gender}>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group>
                <Form.Label htmlFor="age">Age</Form.Label>
                <Form.Control type="number" id="age" onChange = {handleAge} value = {age} required></Form.Control>
              </Form.Group>
            </Col>
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group>
                <Form.Label htmlFor="lastname">Birthday</Form.Label>
                <Form.Control type="date" id="lastname" onChange = {handleBirthday} value = {birthday} Rrequired></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group>
                <Form.Label htmlFor="contact">Contact Number</Form.Label>
                <Form.Control type="tel" placeholder='+639xxxxxxxxx' match = "^\+[1-9]{1}[0-9]{3,14}$" id="contact" onChange = {handleContact} value = {contact} Rrequired></Form.Control>
              </Form.Group>
            </Col>
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group>
                <Form.Label htmlFor="email">Email Address</Form.Label>
                <Form.Control type="email" id="email" onChange = {handleEmail} value = {email} Rrequired></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Container className="d-flex justify-content-center">
            <Button onClick={submit} variant = "success">Next <FontAwesomeIcon icon={faArrowRight}/></Button>            
          </Container>
        </Form>
      </Container>
      <p className='text text-secondary m-3'> If you already have an account</p>
      <Button variant='outline-secondary' href='/login'>Sign in here</Button>
      </Col>
    </Row>
  )
}
