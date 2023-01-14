import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import JobPost from "../../../components/JobPost/JobPost";
import usePortalHome from './usePortalHome'
import "./home.css";
export default function PortalHome() {

  const {jobPosts} = usePortalHome();
  return (
    <Container fluid className="p-0 m-0">
      <Header logged={false} />

      <Container fluid className="banner">
        <Container fluid className="banner-text-wrapper">
          <h2 className="text1">
            West Visayas State University Calinog Campus
          </h2>
          <Container className="text-center">
            <h4 className="banner-text">
              Applicant Screening Portal
            </h4>
            <p>
              WVSU Calinog as a center of excellence in agriculture and resource
              entrepreneurship
            </p>
          </Container>
        </Container>
      </Container>
      <Container fluid>
      <h4 className="portion-title">Job offerings</h4>
      <Row className = "d-flex justify-content-center">
        <Col md = {10}>
          <Row>
        {jobPosts.map((data,index)=>(
          <JobPost data = {data} key = {index}/>
        ))}
        </Row>
        </Col>
      </Row>
      </Container>
      <Footer/>
    </Container>
  );
}
