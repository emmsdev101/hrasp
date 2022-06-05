import { faPlus, faUserCircle, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import CardSecondary from '../../components/dashCardSecondary/CardSecondary'

export default function Hiring() {
  return (
    <Container fluid className="p-3 applications">
    <Row>
      <Col md={4}>
        <h4 className="pageTitle mt-2 mb-4">Vacant Positions</h4>
      </Col>
      <Col className = "d-flex justify-content-end">
          <div>
          <Button size = "sm" className = "btn"><FontAwesomeIcon icon = {faPlus}></FontAwesomeIcon> Add Position</Button>
          </div>
      </Col>

    </Row>
    <Row>
      <Container fluid>
      <Row>
          <CardSecondary dashIcon = {faUserTie} title = "Registrar Clerk" body={5} footer = "Staff"/>
          <CardSecondary dashIcon = {faUserTie} title = "Accountant" body={2} footer = "Staff"/>
          <CardSecondary dashIcon = {faUserTie} title = "Statistics Instructor" body={2} footer = "Faculty"/>
          <CardSecondary dashIcon = {faUserTie} title = "Programming Instructor" body={3} footer = "Faculty"/>
      </Row>
      </Container>
    </Row>
  </Container>
  )
}
