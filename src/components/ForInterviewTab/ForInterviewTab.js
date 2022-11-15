import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Table, Button } from "react-bootstrap";
import { apiBaseUrl } from "../../config";
import useApplication from "../../pages/Applications/useApplication";
import ApplicationDetails from "../ApplicaitonDetails/ApplicationDetails";
import ApplicationsTableHeader from "../ApplicantionsTableHeader/ApplicationsTableHeader";
import ApplicantsTable from "../ApplicantsTable/ApplicantsTable";
import ScheduleModal from "../ScheduleModal/ScheduleModal";

export default function ForInterviewTab() {
  const [applications, setApplications] = useState([]);
  const [viewDetails, setViewDetails] = useState(false);

  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState({})

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const setSchedule = (applicantData) => {
    handleShow(true)
    setSelected(applicantData)
    console.log(applicantData)
  }
  const ApplicantsBox = () => {
    return (
      <div className="applicantsBox m-1 p-3">
        <ScheduleModal show={show} handleClose = {handleClose} data = {selected}/>
        <Row>
          <Col md={4}>
            <h4 className="cardTtle">For Interview</h4>
          </Col>
          <Col>
            <ApplicationsTableHeader />
          </Col>
        </Row>
        <br></br>
        <div className="applicantsList">
          <ApplicantsTable status="for-interview" view={setViewDetails} handleShow = {handleShow} setSchedule = {setSchedule}  />
        
        </div>
      </div>
    );
  };
  const IncommingInterview = () => {
    return (
      <div className="applicantsBox m-1 p-3">
        <Row>
          <Col md={6}>
            <h6 className="cardTtle">Incoming Interview</h6>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-end">
              <Button variant="success" className="btn-sm" size="sm" onClick={()=>window.location.replace("/admin/nterview")}>
                Start Now
              </Button>
            </div>
          </Col>
        </Row>
        <br></br>
        <div className="applicantsList">
          <ApplicantsTable status="to-interview" view={setViewDetails} />
        </div>
      </div>
    );
  };
  return (
    <Row className="for-interview-tab">
      <Col md={7}>
        <ApplicantsBox />
      </Col>
      <Col md={5}>
        <IncommingInterview />
      </Col>
    </Row>
  );
}
