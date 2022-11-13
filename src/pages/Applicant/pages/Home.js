import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import JobPost from "../../../components/JobPost/JobPost";
import useHome from "./useHome";

export default function Home() {

  const {jobPosts, application} = useHome();
  return (
    <div>
      <div className="top-control">
        <h5 className="m-0">Hiring Positions</h5>
        <div className="d-flex justify-content-center align-items-center">
          <div className="form-group searchbox">
            <input placeholder="Search" type="text" id="searchinput"></input>
          </div>
          <Button size="sm" variant="primary">
            search
          </Button>
        </div>
      </div>
      <div className="p-2"></div>
      <Row className="d-flex justify-content-center">
       {application?(
         <Col md = {9}>
         <Container className="mb-5">
         <Card>
           <Card.Header>
             <h5>Your Application </h5>
           </Card.Header>
           <Card.Body className = "d-flex flex-direction-row justify-content-between">
           <p>Position Applied: <span className="status-text">{application.title}</span></p>
           <p>Status: <span className="status-text">{application.status}</span></p>
         </Card.Body>
         </Card>
        
         </Container>
         </Col>
       ):''}
        </Row>
      <Container fluid>

        <Row className="d-flex justify-content-center ">
          <Col md={9} className="">
            {jobPosts.map((post, index)=>(
              <JobPost data = {post} key = {index} noAction = {application?true:false}/>
            ))}
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}
