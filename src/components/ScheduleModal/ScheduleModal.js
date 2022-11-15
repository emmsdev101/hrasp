import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { apiBaseUrl } from "../../config";

export default function ScheduleModal({ data,show, handleClose, applId }) {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const submit = async () => {
    const appldata = {
      application_id:data.application_id,
      date:date,
      time:time
  
    }
    const scheduleReq = await axios.post(apiBaseUrl+"/admin/setSchedule", appldata,{withCredentials:true})
    console.log(scheduleReq)
     if(scheduleReq.data)window.location.reload()
  };

  return (
    <Modal show={show}>
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title>Schedule Interview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col className="mb-2">
              <p>Applicant</p>
              <h6 className="">{data.firstname+" "+data.middlename+" "+data.lastname} </h6>
              <Form.Group>
                <Form.Label htmlFor="date">Date of Interview</Form.Label>
                <Form.Control type="date" value = {date} onChange = {(e)=>setDate(e.target.value)}></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <p>Applying for</p>
              <h6 className="">{data.title}</h6>
              <Form.Group>
                <Form.Label htmlFor="date">Time</Form.Label>
                <Form.Control type="time" value = {time} onChange = {(e)=>setTime(e.target.value)}></Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={submit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
