import { faDotCircle, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { apiBaseUrl } from "../../config";

import sampleImage from "./../../images/sampleImages/hiring-job.jpg";

import "./JobPost.css";
export default function JobPost({ data, noAction }) {
  const title = data.title;
  const department = data.department;
  const departmentType = data.departmentType;
  const description = data.description;
  const jobType = data.jobType;
  const date = data.date;
  const numPersons = data.num_persons
  const image = apiBaseUrl + "/" + data.poster;


  const [qualifications, setQualifications] = useState([])

  useEffect(()=>{
    const parseQuals = async()=>{
      setQualifications(await JSON.parse(data.qualifications).qualifications)
    }
    parseQuals()
  },[])

  const apply = () => {
    window.location.href = `/applicant/apply/${data.id}/${data.title}`;
  };

  const QualificationItem = ({ label, id }) => {
    return (
      <div className="d-flex flex-direction-row justify-content-left align-items-center">
        <FontAwesomeIcon
          icon={faDotCircle}
          color="orange"
          size="xs"
          className="me-1"
        />
        <p className="p-0 m-0">{label}</p>
      </div>
    );
  };
  return (
    <Col md={12} sm={12}>
      <Card className="mb-4">
        <Card.Body>
          <div>
            <div className="d-flex flex-direction-row justify-content-between">
              <Card.Title>
                <Badge bg="warning" className="me-1">
                  {department}
                </Badge>
                {title}
              </Card.Title>
              <div>
                <Button
                  className="btn btn-sm btn-light"
                  onClick={apply}
                  disabled={noAction}
                >
                  <FontAwesomeIcon icon={faSuitcase} className="me-1" />
                  Apply
                </Button>
              </div>
            </div>
            <h6>
              <Badge bg="info">{departmentType}</Badge>
            </h6>
            <h6>
                Person/s Needed:
                <Badge bg="info" className="me-1">
                  {numPersons}
                </Badge>
              </h6>
            <Card.Text className="text-muted">{jobType}</Card.Text>
            <div>
              <p>{description}</p>
              <h6>Qualifications:</h6>
              <div className="ps-5 ">
                {qualifications.map((quals, idx) => (
                  <QualificationItem label={quals} id={idx} key = {idx} />
                ))}
              </div>
            </div>
            <Card.Text className="text-muted">Posted: {date}</Card.Text>
          </div>
          
        </Card.Body>
      </Card>
    </Col>
  );
}
