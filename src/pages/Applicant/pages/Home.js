import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import JobPost from "../../../components/JobPost/JobPost";
import useHome from "./useHome";

export default function Home() {

  const {jobPosts} = useHome();
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
      <Container fluid>
        <Row>
        <Container>
        <Card>
          <Card.Header>Application Status</Card.Header>
        </Card>
        </Container>
        </Row>
        <Row className="d-flex justify-content-center ">
          <Col md={9} className="">
            {jobPosts.map((post, index)=>(
              <JobPost data = {post} key = {index} />
            ))}
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}
