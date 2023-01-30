import { faEdit, faPen, faPlus, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

export default function EvaluationSheets() {
  const [create, setCreate] = useState(false);
  const newEvaluation = () => {};
  return (
    <Row className="pt-3">
      <Col md={4} className="">
        <Card>
          <Card.Header className="d-flex flex-direction-row justify-content-between align-items-center">
            <h6 className="m-0 p-0">Evaluation Sheets</h6>
            <Button variant="success" size="sm" onClick={newEvaluation}>
              Create <FontAwesomeIcon icon={faPlus} />
            </Button>
          </Card.Header>
          <Card.Body></Card.Body>
        </Card>
      </Col>
      <Col md={8}>
        <Card>
          <Card.Header className="d-flex flex-direction-row justify-content-between">
            <div className="d-flex flex-direction-row align-items-center">
              <h6 className="m-0 pe-3">Title:</h6>
              <Form.Group>
                <Form.Control type="text" />
              </Form.Group>
            </div>
            <div>
                {create?(
                    <Button variant="light" size = "sm">Edit <FontAwesomeIcon icon={faPen}/></Button>
                ):(
                    <Button variant="light" size = "sm">Save <FontAwesomeIcon icon={faSave}/></Button>
                )}
                
            </div>
          </Card.Header>
        </Card>
      </Col>
    </Row>
  );
}
