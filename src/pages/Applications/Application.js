import React from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import AcceptanceTab from "../../components/AcceptanceTab/AcceptanceTab";
import ApplicantsTab from "../../components/applicantsTab/ApplicantsTab";
import EvaluationResultTab from "../../components/EvaluationResultTab/EvaluationResultTab";
import EvaluationTab from "../../components/EvaluationTab/EvaluationTab";
import ForInterviewTab from "../../components/ForInterviewTab/ForInterviewTab";
import PrequalificationTab from "../../components/PrequalificationTab/PrequalificationTab";
import RegistrationTab from "../../components/RegistraionTab/Registration";
import TabNavigation from "../../components/tabNavigation/TabNavigation";
import useTabNavigation from "../../components/tabNavigation/useTabNavigation";
import "./applications.css";
export default function Application({panel,committee, head, admin}) {
  const {tab,gotoTab} = useTabNavigation({panel, committee, head})
  return (
    <Container fluid className="p-3 applications">
      <Row>
        <Col md={2}>
          <h4 className="pageTitle mt-2 mb-4">Applications</h4>
        </Col>
        <Col>
          <TabNavigation tab = {tab} gotoTab = {gotoTab} panel = {panel} committee = {committee} admin = {admin}/>
        </Col>
      </Row>
      <Row>
        <Container fluid>
          {tab === "registration"?<RegistrationTab/>:''}
          {tab === "applicants"?<ApplicantsTab panel = {panel} head={head} committee = {committee}/>:''}
          {tab === "for-acceptance"? <AcceptanceTab panel = {panel} head={head} committee = {committee}/>:''}
          {tab === "for-prequalification"?<PrequalificationTab panel = {panel} head={head} committee = {committee}/>:""}
          {tab === "for-interview"?<ForInterviewTab panel = {panel} head={head} committee = {committee}/>:''}
          {tab === "evaluation"?<EvaluationTab panel = {panel} head = {head} committee = {committee}/>:''}
          {tab === "evaluation-result"?<EvaluationResultTab panel = {panel} head = {head} committee = {committee}/>:''}
        </Container>
      </Row>
    </Container>
  );
}
