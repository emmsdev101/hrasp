import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { apiBaseUrl } from "../../config";

import sampleImage from "./../../images/sampleImages/hiring-job.jpg";

import './JobPost.css'
export default function JobPost({data, noAction}) {

  const title = data.title
  const description = data.description
  const  jobType = data.jobType
  const date = data.date
  const image = apiBaseUrl + "/" + data.poster

  const apply = () => {
    window.location.href = `/applicant/apply/${data.id}/${data.title}`  }
  return (

    <Col md={4} sm = {12}>
    <Card className="mb-4">
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
              <Button className="" onClick={apply} disabled = {noAction}>
                Apply
              </Button>
            </div>
            <a  href = {image}><Card.Img variant="bottom" src={image} /></a>
            </Card.Body>
    </Card>
    </Col>

  );
}
