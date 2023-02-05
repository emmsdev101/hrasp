import {
  faCancel,
  faCheck,
  faEdit,
  faPen,
  faPlus,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { questions } from "./useEvaluation";
import Question from "./Question";
import "./style.css";
export default function EvaluationSheets() {
  const [create, setCreate] = useState(false);

  const [considiration, setConsideration] = useState("")
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      let rating = {
        mainRate: 0,
        minRates: [],
      };

      for (let j = 0; j < q.questions.length; j++) {
        rating.minRates.push(0);
      }
      setRatings((current) => [...current, rating]);
    }
  }, []);

  const submit = () => {
    console.log("ratings", ratings, considiration);
  };

  const Information = ({ label, value }) => {
    return (
      <Row className="w-100">
        <Col className=" ">
          <p className="text textLabel">{label} : </p>
        </Col>
        <Col md={8} className=" ">
          <p className="textInfo"> {value}</p>
        </Col>
      </Row>
    );
  };

  return (
    <Row className="pt-3 d-flex justify-content-center pb-5 evaluation">
      <Col md={10} sm={12}>
        <Card>
          <Card.Header className="d-flex flex-column align-items-center justify-content-center p-5 ">
            <div className="d-flex align-items-center">
              <h6 className="m-0 pe-3">INTERVIEW FORM</h6>
            </div>
            <Row className="w-100 mt-5">
              <Col
                md={8}
                className="d-flex flex-column justify-content-start align-items-start "
              >
                <Information label="Name of Applicant" value={"no data"} />
                <Information label="Interview Date" value={"no data"} />
                <Information
                  label="Line of Training & Experience"
                  value={
                    "no dataddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
                  }
                />
                <Information label="Position" value={"no data"} />
                <Information label="Remarks" value={"no data"} />
              </Col>
              <Col md={4} className="">
                <p className="textLabel">Recommendation:</p>
                <Form.Check
                  label="Unfavorable"
                  name="recomendation"
                  type="radio"
                  className=""
                  size="xsm"
                  id="recomendation-1"
                  onChange={()=>{
                    setConsideration(1)
                  }}
                />
                <Form.Check
                  label="Possible further consideration"
                  name="recomendation"
                  type="radio"
                  className=""
                  size="xsm"
                  id="recomendation-2"
                  onChange={()=>{
                    setConsideration(2)
                  }}
                />
                <Form.Check
                  label="Definitely to be considered"
                  name="recomendation"
                  type="radio"
                  className=""
                  size="xsm"
                  id="recomendation-3"
                  onChange={()=>{
                    setConsideration(3)
                  }}
                />

                <div className="interviewer d-flex justify-content-center flex-column align-items-center mt-5">
                  <p className="interviewerLabel"></p>
                  <p className="labelText">Interviewer</p>
                </div>
              </Col>
            </Row>
          </Card.Header>

          <Card.Body className="d-flex flex-column align-items-start justify-content-center p-5">
            {ratings.length
              ? questions.map((vals, idx) => (
                  <Question
                    key={idx}
                    sectionTitle={vals.title}
                    pointLabel={vals.pointLabel}
                    sectionQuestions={vals.questions}
                    setRatings={setRatings}
                    index={idx}
                    ratings={ratings}
                  />
                ))
              : ""}
            <div className="d-flex justify-content-center ms-auto ps-5">
              <p className="textLabel ms-3">Total</p>
              <Form.Control type="number" className="m-0 totalRateInput" />
            </div>
          </Card.Body>
        </Card>
        <Container fluid className="d-flex justify-content-center p-3">
          <Button variant="danger" className="">
            <FontAwesomeIcon icon={faCancel} className="pe-1" />
            Cancel
          </Button>
          <Button variant="success" className="ms-1" onClick={submit}>
            <FontAwesomeIcon icon={faCheck} className="pe-1" />
            Submit
          </Button>
        </Container>
      </Col>
    </Row>
  );
}
