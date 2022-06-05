import React from 'react'
import { Button,Card, Col } from 'react-bootstrap'

export default function JobOffers() {
  return (
    <Col sm={12} md = {6} lg = {4} className = "offering">
    <Card>
            <Card.Header>Now Hiring</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Apply Now</Button>
            </Card.Body>
          </Card>
          </Col>
  )
}
