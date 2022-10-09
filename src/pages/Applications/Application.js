import React from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import AcceptanceTab from "../../components/AcceptanceTab/AcceptanceTab";
import ApplicantsTab from "../../components/applicantsTab/ApplicantsTab";
import ForInterviewTab from "../../components/ForInterviewTab/ForInterviewTab";
import PrequalificationTab from "../../components/PrequalificationTab/PrequalificationTab";
import TabNavigation from "../../components/tabNavigation/TabNavigation";
import useTabNavigation from "../../components/tabNavigation/useTabNavigation";
import "./applications.css";
export default function Application() {
  const {tab,gotoTab} = useTabNavigation()
  return (
    <Container fluid className="p-3 applications">
      <Row>
        <Col md={2}>
          <h4 className="pageTitle mt-2 mb-4">Applications</h4>
        </Col>
        <Col>
          <TabNavigation tab = {tab} gotoTab = {gotoTab}/>
        </Col>
      </Row>
      <Row>
        <Container fluid>
          {tab === "applicants"?<ApplicantsTab/>:''}
          {tab === "for-acceptance"? <AcceptanceTab/>:''}
          {tab === "for-prequalification"?<PrequalificationTab/>:""}
          {tab === "for-interview"?<ForInterviewTab/>:''}
        </Container>
      </Row>
    </Container>
  );
}
