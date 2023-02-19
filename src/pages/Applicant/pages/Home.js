import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import JobPost from "../../../components/JobPost/JobPost";
import useHome from "./useHome";

export default function Home() {
  const { jobPosts, application, interviewDate } = useHome();
  return (
    <Container fluid className="m-0 p-0">
      <div className="top-control">
        <h5 className="m-0">Hiring Positions</h5>
      </div>
      <div className="p-2"></div>
      <Row className="w-100 m-0 p-0 d-flex justify-content-center">
        {application ? (
          <Col md={9} className = "d-flex justify-content-center align-items-center m-0 pb-3">
              <Card className="alert w-100 alert-warning p-0 m-0">
                <Card.Header>
                  <h5>Your Application </h5>
                </Card.Header>
                <Card.Body>
                  <Container className="">
                    <div className="d-flex flex-direction-row justify-content-between"> 
                      <p>Position Applied</p>
                      <span className="status-text">{application.title}</span>
                    </div>
                    <div className="d-flex flex-direction-row justify-content-between"> 
                      <p>Department Type</p>
                      <span className="status-text">{application.departmentType}</span>
                    </div>
                    <div className="d-flex flex-direction-row justify-content-between"> 
                      <p>Status</p>
                      <span className="status-text">{application.status}</span>
                    </div>
        
                  {application.status === "to-interview" ? (
                    <div className="d-flex flex-direction-row justify-content-between"> 
                      <p>Date of Interview: </p>
                      <p className="text-danger fw-bold ms-2">
                        {interviewDate.date + " " + interviewDate.time}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  </Container>
                  <Container className="d-flex flex-column align-items-center">
                  {application.status === "to-interview"? interviewDate.status === "starting"?
                    (<Button size = "sm" href={"/applicant/conference/"+interviewDate.room_id} variant="success">Join Interview</Button>):((<Button size = "sm" disabled variant="success">Join Interview</Button>)):""}
                  </Container>
                </Card.Body>
              </Card>
          </Col>
        ) : (
          ""
        )}
      </Row>
      <Container fluid className="d-flex justify-content-center ">
        <Col md={9} className="">
          <Row>
            {jobPosts.map((post, index) => (
              <JobPost
                data={post}
                key={index}
                noAction={application ? true : false}
              />
            ))}
          </Row>
        </Col>
      </Container>
    </Container>
  );
}
