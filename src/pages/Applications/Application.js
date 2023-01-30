import React from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import AcceptanceTab from "../../components/AcceptanceTab/AcceptanceTab";
import ApplicantsTab from "../../components/applicantsTab/ApplicantsTab";
import EvaluationTab from "../../components/EvaluationTab/EvaluationTab";
import ForInterviewTab from "../../components/ForInterviewTab/ForInterviewTab";
import PrequalificationTab from "../../components/PrequalificationTab/PrequalificationTab";
import TabNavigation from "../../components/tabNavigation/TabNavigation";
import useTabNavigation from "../../components/tabNavigation/useTabNavigation";
import "./applications.css";
export default function Application({panel,committee, head}) {
  const {tab,gotoTab} = useTabNavigation()
  return (
    <Container fluid className="p-3 applications">
      <Row>
        <Col md={2}>
          <h4 className="pageTitle mt-2 mb-4">Applications</h4>
        </Col>
        <Col>
          <TabNavigation tab = {tab} gotoTab = {gotoTab} committee = {committee}/>
        </Col>
      </Row>
      <Row>
        <Container fluid>
          {tab === "applicants"?<ApplicantsTab panel = {panel} head={head} committee = {committee}/>:''}
          {tab === "for-acceptance"? <AcceptanceTab panel = {panel} head={head} committee = {committee}/>:''}
          {tab === "for-prequalification"?<PrequalificationTab panel = {panel} head={head} committee = {committee}/>:""}
          {tab === "for-interview"?<ForInterviewTab panel = {panel} head={head} committee = {committee}/>:''}
          {tab === "evaluation"?<EvaluationTab panel = {panel} head = {head} committee = {committee}/>:''}
        </Container>
      </Row>
    </Container>
  );
}
