import React from "react";
import "./applyStyle.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {useParams} from 'react-router-dom'
import useApply from "./useApply";
export default function Apply({match}) {

  const {title} = useParams()
  const {letter,handleLetter,tor, handleTor, pds, handlePds, certs, handleCerts, submit} = useApply()

  return (
    <Row className="container-fluid flex  justify-content-center">
      <Col sm={12} md={10} lg={8} className="applyDiv">
        <h4> {title}</h4>
        <h6 className="text-muted">
        WVSU-CC Application
        </h6>
        <hr></hr>

        <Form>
          <Row>
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group>
                <Form.Label htmlFor="firstname">Application Letter</Form.Label>
                <Form.Control type="file" accept="application/pdf" id="letter" onChange={handleLetter} multiple></Form.Control>
                {/* <Form.Text className="text-muted">
                Should be in a document format with e-signature.
                </Form.Text> */}
              </Form.Group>
            </Col>
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group>
                <Form.Label htmlFor="Middle Name">
                  Persoanl Data Sheet
                </Form.Label>
                <Form.Control type="file" id="pds" accept="application/pdf" onChange = {handlePds} multiple></Form.Control>
                <Form.Text className="text-muted">
                Personal Data Sheet {"(CS FORM 212)"}  can be downloaded <a style={{color:"green"}} href="http://csc.gov.ph">here</a>
                </Form.Text>
              </Form.Group>
            </Col>
            <Col sm={12} md={6} lg={4} className="form-col">
              <Form.Group>
                <Form.Label htmlFor="lastname">Transcrip of Records</Form.Label>
                <Form.Control type="file" id="tor" accept="image/*" onChange = {handleTor} multiple></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} lg={6} className="form-col">
              <Form.Group>
                <Form.Label htmlFor="firstname">
                  Certificates of Tranings and Seminars
                </Form.Label>
                <Form.Control type="file" multiple id="certs" accept="image/*" onChange = {handleCerts}></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Container className="d-flex justify-content-center">
            <Button variant="outline-secondary" className="m-1" href="/applicant">
              Cancel
            </Button>

            <Button variant="success" className="m-1" onClick={submit}>
              Submit
            </Button>
          </Container>
        </Form>
      </Col>
    </Row>
  );
}
