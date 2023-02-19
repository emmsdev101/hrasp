import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, NavLink, Row } from "react-bootstrap";
import { apiBaseUrl } from "../../config";
import ApplicationsTableHeader from "../ApplicantionsTableHeader/ApplicationsTableHeader";
import EvaluationTable from "../EvaluationTable/EvaluationTable";
import Filter from "../Filter/Filter";
import "./evaluation.css";

export default function EvaluationResultTab({ panel, head, committee }) {
  const [evaluations, setEvaluations] = useState([]);
  const [detailedEvaluation, setDetailedEvaluation] = useState([])
  const [viewDetails, setviewDetails] = useState(false)

  

  const fetchEvaluations = async () => {
    let reqUrl = apiBaseUrl + "/admin/getEvaluationResults";
    if (head)
      reqUrl = apiBaseUrl + "/panel/getEvaluationResultsForCommitteeHead";
    else if (committee)
      reqUrl = apiBaseUrl + "/panel/getEvaluationResultsForCommitteeMember";
    else if (panel) reqUrl = apiBaseUrl + "/panel/getEvaluationResults";
    const evaluationRequest = await axios.get(reqUrl, {
      withCredentials: true,
    });
    const evaluationData = evaluationRequest.data;
    if (evaluationData) {
      setEvaluations(evaluationData);
    }
  };
  useEffect(() => {
    fetchEvaluations();
  }, []);

  useEffect(()=>{
    if(viewDetails){
      getPanelEvaluations()
    }
  }, [viewDetails])

  const getPanelEvaluations = async()=>{
    const reqUrl = apiBaseUrl + "/admin/getPanelEvaluations/"+viewDetails.id;
  const evaluationRequest = await axios.get(reqUrl, {
    withCredentials: true,
  });
  const evaluationData = evaluationRequest.data;
  if (evaluationData) {
    setDetailedEvaluation(evaluationData);
  }
  }

  const viewEvaluation = (data) => {
    window.location.href = "../view-evaluation/"+data.id
  }
  const viewEvaluationResult = (data) =>{
    setviewDetails(data)
  }
  return viewDetails ?(<ViewResult data = {viewDetails} evaluations = {detailedEvaluation}/>):(
    <Result evaluations={evaluations} panel = {panel} viewEvaluation = {viewEvaluation} viewEvaluationResult = {viewEvaluationResult}/>
  )
}
  


const Result = ({evaluations, panel,viewEvaluation, viewEvaluationResult }) => {
  return(
    <Row className="w-100 evalduation">
      <Col>
        <Card>
          <Card.Header className="p-3 m-3">
            <Row>
              <Col>
                <div className="d-flex justify-content-between align-items-center">
                  <h5>Evaluation Results</h5>
                  <div className="d-flex justify-content-end align-items-center">
                    <Form.Label htmlFor="search" className="m-0 me-2">
                      Search
                    </Form.Label>
                    <Form.Control type="text" id="search" size="sm" />
                  </div>
                </div>
              </Col>
              <Col className="d-flex justify-content-end align-items-center">
                <Filter
                  title="Recommendation"
                  list={["To be considered"]}
                  id="recommendation"
                  defaultValue="SICT"
                  handler={null}
                />

                <Filter
                  title="Recommendation"
                  list={["To be considered"]}
                  id="recommendation"
                  defaultValue="SICT"
                  handler={null}
                />
                <Filter
                  title="Department"
                  list={["SICT", "SOA", "COE", "BSBA"]}
                  id="filter"
                  defaultValue="SICT"
                  handler={null}
                />
              </Col>
            </Row>
          </Card.Header>
          <Card.Body className="p-3">
            <EvaluationTable action = {panel?viewEvaluation:viewEvaluationResult} data={evaluations} panel = {panel}/>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

const ViewResult = ({data, evaluations}) =>{
  return (
  <Row className="w-100 evalduation">
      <Col>
        <Card>
          <Card.Header className="p-3 m-3">
            <Container fluid className="mb-2 p-0 d-flex justify-content-start alert-items-center">
            <FontAwesomeIcon icon={faArrowLeft} size="lg" onClick={()=>window.location.href = "../applications/evaluation-result"}/>

            <p className="p-2 m-0 me-2 alert alert-info">Applying: {data.title}</p>
                  <p className="p-2 m-0 me-2 alert alert-info">For: {data.department}</p>
            </Container>
            <Row>
              <Col>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="p-0 m-0">{data.applicant_name}</h5>
                </div>
              </Col>
              <Col className="d-flex justify-content-end align-items-center">
                <Filter
                  title="Filter"
                  list={["To be considered"]}
                  id="recommendation"
                  defaultValue="SICT"
                  handler={null}
                />
                <p className="alert alert-danger m-0 p-2 w-auto">Total: {data.total}</p>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body className="p-3">
            <EvaluationTable details={true} action = {null} data={evaluations} panel = {false}/>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}