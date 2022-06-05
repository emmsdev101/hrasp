import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import JobOffers from "./components/JobOffers/JobOffers";

import "./home.css";
export default function PortalHome() {
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
              Human Resource Applicant Screening Portal
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
      <Row>
          <JobOffers/>
          <JobOffers/>
          <JobOffers/>
      </Row>
      </Container>
      <Footer/>
    </Container>
  );
}
