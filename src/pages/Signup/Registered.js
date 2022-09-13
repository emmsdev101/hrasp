import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export default function Registered() {
  return (
    <Container className="signup-box">
      <h2 className="text-center">
        West Visayas State University <br /> HRASP
      </h2>
      <h4 className="mt-4 mb-4 text-center">Registration Complete</h4>
      <Row className = "formRow">
      <Col sm={12} md={12} lg={8} className = "">
          <p className='alert alert-success'>You can now log in.</p>
          <Container className = "d-flex flex-direction-row justify-content-center ">
          <Button href='/login'>Back to Login</Button>

          </Container>
          </Col>

      </Row>
      
    </Container>
  )
}
