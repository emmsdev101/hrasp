import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { apiBaseUrl } from "../../config";
import ApplicationsTableHeader from "../ApplicantionsTableHeader/ApplicationsTableHeader";
import EvaluationTable from "../EvaluationTable/EvaluationTable";
import Filter from "../Filter/Filter";
import "./evaluation.css";

export default function EvaluationResultTab({ panel, head, committee }) {
  const [evaluations, setEvaluations] = useState([]);

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
      console.log(evaluationData);
      setEvaluations(evaluationData);
    }
  };
  useEffect(() => {
    fetchEvaluations();
  }, []);
  return (
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
            <EvaluationTable data={evaluations} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
