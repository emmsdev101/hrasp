import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import JobPost from "../../../components/JobPost/JobPost";

export default function Home() {
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
      <Container fluid className = "d-flex justify-content-center ">
         
           <Row>
           <JobPost />
            <JobPost />
            <JobPost />
            <JobPost />
            <JobPost />
            <JobPost />
            <JobPost />
           </Row>
          
      </Container>
    </div>
  );
}
