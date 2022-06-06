import React from "react";
import { Button, Card,Col } from "react-bootstrap";

import sampleImage from "./../../images/sampleImages/hiring-job.jpg";

export default function JobPost() {
  return (
       <Col md={4} className = "">
           <Card className="mb-4">
      <Card.Header className="d-flex justify-content-between">
        Now Hiring <Button variant="primary">Apply</Button>
      </Card.Header>
      <Card.Body>
        <Card.Title>Acountant</Card.Title>
        <Card.Text>
          We are in need of 3 accounting personels. We need at least 1 year
          acounting experience.
        </Card.Text>
        <Card.Img variant="bottom" src={sampleImage} />
      </Card.Body>
    </Card>
       </Col>
    
  );
}
