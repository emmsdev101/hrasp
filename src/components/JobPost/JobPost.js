import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { apiBaseUrl } from "../../config";

import sampleImage from "./../../images/sampleImages/hiring-job.jpg";

import './JobPost.css'
export default function JobPost({data}) {

  const title = data.title
  const description = data.description
  const  jobType = data.jobType
  const date = data.date
  const image = apiBaseUrl + "/" + data.poster

  const apply = () => {
    window.location.href = `/applicant/apply/${data.id}/${data.title}`  }
  return (

  
    <Card className="mb-4 ">
      <Row className="no-gutters">        
          <Col md={5}>
          <Card.Body>
            <div>
              <Card.Title>{title}</Card.Title>
              <Card.Text className="text-muted">{jobType}</Card.Text>
              <Card.Text>
                {description}
              </Card.Text>
              <Card.Text className="text-muted">Posted: {date}</Card.Text>
            </div>
            <div className="mt-2">
              <Button className="" onClick={apply}>
                Apply
              </Button>
            </div>
            </Card.Body>
          </Col>
          <Col md={7}>
            <Card.Img variant="bottom" src={image} />
          </Col>
        </Row>
    </Card>
  );
}
