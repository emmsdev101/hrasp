import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Alert, Button, Card, Col, Container, Form, Row } from "react-bootstrap";

import useRequest from "./useRequest"

export default function RequestHiring({edit}) {
    const {addQualification,
        qualifications,
        handleQualification,
        qualification, 
        removeQualification,
        position,
        handlePosition,
        numPersons,
        handleNumPersons,
        description,
        handleDescription,
        submit
    } = useRequest(edit)
    const QualificationItem = ({title, id}) => {
        return(
                <Alert className="alert alert-sm w-auto h-auto p-2 m-1" variant="info">
                    <div className="d-flex flex-direction-row justify-content-between align-items-center">
                    <p className="p-0 m-0">{title}</p>
                    <FontAwesomeIcon icon={faTimes} onClick = {()=>removeQualification(title)}/>
                    </div>
                </Alert>
            
        )
    }
  return (
    <Container fluid className=" p-3 applications">
      <Row>
        <Col md={4}>
          <h4 className="pageTitle mt-2 mb-4">Edit Job Hiring</h4>
        </Col>
      </Row>
      <Row>
        <Container fluid>
          <Row className="d-flex justify-content-center">
            <Card className="mb-3">
              <Card.Body>
                <Form>
                  <Row>
                    <Col>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Position</Form.Label>
                            <Form.Control type="text" value={position} onChange={handlePosition}></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label>Persons Needed</Form.Label>
                            <Form.Control type="number" value={numPersons} onChange = {handleNumPersons}></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Form.Group className="mb-3">
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                            type="text"
                            as="textarea"
                            rows="10"
                            value={description}
                            onChange = {handleDescription}
                          ></Form.Control>
                        </Form.Group>
                      </Row>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Qualification</Form.Label>
                        <Row>
                          <Col md={10}>
                            <Form.Control type = "text" value={qualification} onChange = {handleQualification}></Form.Control>
                          </Col>
                          <Col>
                            <Button variant="light" onClick={addQualification}>Add</Button>
                          </Col>
                        </Row>
                      </Form.Group>
                      <Form.Label>Qualifications</Form.Label>
                      <div className="qualificationBox" >
                        {qualifications.map((data, idx)=>(
                            <QualificationItem key = {idx} title ={data} id = {idx}/>
                        ))}
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
            <Container className="d-flex flex-direction-row justify-content-center align-items-center">
                <Button className="m-1" variant="light" href="/panel/hiring">Cancel</Button>
                 <Button className="m-1" variant="primary" onClick = {submit}>Submit</Button>
            </Container>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}
