import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Table, Button } from "react-bootstrap";
import { apiBaseUrl } from "../../config";
import useApplication from "../../pages/Applications/useApplication";
import ApplicationDetails from "../ApplicaitonDetails/ApplicationDetails";
import ApplicationsTableHeader from "../ApplicantionsTableHeader/ApplicationsTableHeader";
import ApplicantsTable from "../ApplicantsTable/ApplicantsTable";
import ScheduleModal from "../ScheduleModal/ScheduleModal";
import ConfirmModal from "../././ConfirmModal/ConfirmModal"

export default function ForInterviewTab({panel, head, committee}) {
  const [applications, setApplications] = useState([]);
  const [viewDetails, setViewDetails] = useState(false);
  const [renderTable, setRenderTable] = useState(true)
  const [resetSchedule, setResetSchedule] = useState(false)
  const [toReset, setToReset] = useState(0)

  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState({})
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const setSchedule = (applicantData) => {
    handleShow(true)
    setSelected(applicantData)
  }
  const refresh = () => {
    // to refresh the table once schedule is set.
    setRenderTable(false)
    setRenderTable(true)
  }
  const handleResetSchedule = () => {
    setResetSchedule(!resetSchedule)
  }
  const openResetSchedule = (apliId) =>{
    setToReset(apliId)
    handleResetSchedule()
  }

  const confirmResetSchedule = async() => {
    console.log(toReset)
    const scheduleReq = await axios.post(apiBaseUrl+"/admin/resetSchedule", {application_id:toReset},{withCredentials:true})
     if(scheduleReq.data)refresh()
     handleResetSchedule()
  }
  const ApplicantsBox = () => {
    return (
      <div className="applicantsBox m-1 p-3">
        <ScheduleModal show={show} handleClose = {handleClose} refresh = {refresh} data = {selected}  />
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
          {renderTable?<ApplicantsTable status="for-interview" view={setViewDetails} handleShow = {handleShow} panel = {panel} setSchedule = {setSchedule} head={head} committee = {committee}  />:""}
        
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
              
            </div>
          </Col>
        </Row>
        <br></br>
        <div className="applicantsList">
          <ApplicantsTable status="to-interview" view={setViewDetails} panel = {panel}  resetSchedule = {openResetSchedule} head={head} committee = {committee}/>
        </div>
      </div>
    );
  };
  return (
    <Row className="for-interview-tab">
      <ConfirmModal title={"Reset Schedule?"} message = "Are you sure to reset this schedule?" show={resetSchedule} confirm = {confirmResetSchedule} handleClose = {handleResetSchedule}/>
      <Col md={12}>
        {!committee?(<ApplicantsBox />):""}
      </Col>
      <Col md={12}>
        <IncommingInterview />
      </Col>
    </Row>
  );
}
