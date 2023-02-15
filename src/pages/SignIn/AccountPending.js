import { faHome, faHouse, faSignIn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export default function AccountPending() {
  return (
    <Container className="signup-box">
      <h2 className="text-center">
        Applicant Hiring Portal
      </h2>
      <h4 className="mt-4 mb-4 text-center">Account not Verified</h4>
      <Row className = "formRow">
      <Col sm={12} md={12} lg={8} className = "">
          <p className='alert alert-success'>Please wait for verification of your account. It will be proccessed within 24 hours upon your registration. We'll let you know when you get verified.</p>
          <Container className = "d-flex flex-direction-row justify-content-center ">
          <Button variant='light' href='/'>Home <FontAwesomeIcon icon={faHome}/></Button>

          </Container>
          </Col>

      </Row>
      
    </Container>
  )
}