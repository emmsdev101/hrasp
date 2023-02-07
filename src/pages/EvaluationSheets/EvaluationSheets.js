import {
  faCancel,
  faCheck,
  faEdit,
  faPen,
  faPlus,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { questions } from "./useEvaluation";
import Question from "./Question";
import "./style.css";
import axios from "axios";
import { apiBaseUrl } from "../../config";
import { useParams } from "react-router-dom";
export default function EvaluationSheets({ view, panel }) {
  const { id, applicationId } = useParams();
  const [evaluatoinData, setEvaluationData] = useState({});

  const [considiration, setConsideration] = useState("");
  const [ratings, setRatings] = useState([]);

  const [training, setTraining] = useState();
  const [remarks, setRemarks] = useState("");

  const [total, setTotal] = useState("");

  const computeTotal = () => {
    let sum = 0.0;
    for (let i = 0; i < ratings.length; i++) {
      const rate = ratings[i].mainRate;
      sum += rate;
    }
    setTotal(sum);
  };

  useEffect(() => {
    const initRatings =()=> {
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
    }
    if(!view)initRatings()
    getEvaluationData();
  }, []);

  const getEvaluationData = async () => {
    let reqUrl = apiBaseUrl + "/admin/getEvaluationData/" + id;
    if (panel) reqUrl = apiBaseUrl + "/panel/getEvaluationData/" + id;
    const request = await axios.get(reqUrl, { withCredentials: true });

    console.log(request.data);
    const evaluationData = request.data[0];
    if (request.data) {
      setEvaluationData(evaluationData);
      if (view) {
        setRemarks(evaluationData.remarks);
        setConsideration(evaluationData.recommendation);
        setTraining(evaluationData.training);

        const dataRatings = await JSON.parse(evaluationData.ratings);
        setRatings(dataRatings);
        setTotal(evaluationData.total);
      }
    }
  };

  const submit = async () => {
    const submitReq = await axios.post(
      apiBaseUrl + "/panel/evaluate",
      {
        applicationId,
        id,
        training,
        remarks,
        considiration,
        ratings,
        total,
      },
      { withCredentials: true }
    );
    console.log("submitting", submitReq.data);

    if (submitReq.data) {
      window.location.href = "../applicants/evaluation";
    }
  };

  return evaluatoinData ? (
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
                <Information
                  label="Name of Applicant"
                  value={evaluatoinData.fullname}
                />
                <Information
                  label="Interview Date"
                  value={evaluatoinData.date}
                />
                <Information
                  label="Line of Training & Experience"
                  toEdit={!view}
                  value={remarks}
                  setMyVal={setRemarks}
                />
                <Information label="Position" value={evaluatoinData.title} />
                <Information
                  label="Remarks"
                  toEdit={!view}
                  value={training}
                  setMyVal={setTraining}
                />
              </Col>
              <Col md={4} className="">
                <p className="textLabel">Recommendation:</p>
                <Form.Check
                  label="Unfavorable"
                  name="recomendation"
                  checked={considiration === "Unfavorable"}
                  type="radio"
                  className=""
                  size="xsm"
                  id="recomendation-1"
                  onChange={() => {
                    setConsideration("Unfavorable");
                  }}
                  disabled = {view}
                />
                <Form.Check
                  label="Possible further consideration"
                  name="recomendation"
                  type="radio"
                  className=""
                  checked={considiration === "Possible further consideration"}
                  size="xsm"
                  id="recomendation-2"
                  onChange={() => {
                    setConsideration("Possible further consideration");
                  }}
                  disabled = {view}

                />
                <Form.Check
                  label="Definitely to be considered"
                  name="recomendation"
                  type="radio"
                  className=""
                  size="xsm"
                  id="recomendation-3"
                  checked={considiration === "Definitely to be considered"}
                  onChange={() => {
                    setConsideration("Definitely to be considered");
                  }}
                  disabled = {view}

                />

                <div className="interviewer d-flex justify-content-center flex-column align-items-center mt-5">
                  <p className="interviewerLabel">
                    {evaluatoinData.interviewer}
                  </p>
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
                    editeble={vals.editeble}
                    setRatings={setRatings}
                    index={idx}
                    ratings={ratings}
                    computeTotal={computeTotal}
                    view = {view}
                  />
                ))
              : ""}
            <div className="d-flex justify-content-center ms-auto ps-5">
              <p className="textLabel ms-3">Total</p>
              <Form.Control
                type="number"
                className="m-0 totalRateInput"
                value={total}
                readOnly
              />
            </div>
          </Card.Body>
        </Card>
        <Container fluid className="d-flex justify-content-center p-3">
          {!view ? (
            <React.Fragment>
              <Button variant="danger" className="">
                <FontAwesomeIcon icon={faCancel} className="pe-1" />
                Cancel
              </Button>
              <Button variant="success" className="ms-1" onClick={submit}>
                <FontAwesomeIcon icon={faCheck} className="pe-1" />
                Submit
              </Button>
            </React.Fragment>
          ) : (
            ""
          )}
        </Container>
      </Col>
    </Row>
  ) : (
    ""
  );
}
const Information = ({ label, value, toEdit, handle, myref, setMyVal }) => {
  return (
    <Row className="w-100">
      <Col className=" ">
        <p className="text textLabel">{label} : </p>
      </Col>
      <Col md={8} className=" ">
        {toEdit ? (
          <Form.Control
            ref={myref}
            type="text"
            className="textInfo"
            value={value}
            onChange={(e) => {
              setMyVal(e.target.value);
            }}
          />
        ) : (
          <p ref={myref} type="text" className="textInfo">
            {value}
          </p>
        )}
      </Col>
    </Row>
  );
};
