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
  const [viewDetails, setviewDetails] = useState(false)
  const viewEvaluation = (data) => {
    window.location.href = "../view-evaluation/"+data.id
  }
  const viewEvaluationResult = (data) =>{
    setviewDetails(data)
  }
  return viewDetails ?(<ViewResult data = {viewDetails}/>):(
    <Result panel = {panel} head = {head} committee = {committee} viewEvaluation = {viewEvaluation} viewEvaluationResult = {viewEvaluationResult}/>
  )
}
  


const Result = ({panel,viewEvaluation, viewEvaluationResult, head, committee }) => {
  const nonTeaching = [
    "Admin",
    "Registrar",
    "Library",
    "School Farm",
    "School Clinic",
    "Cleric",
    "Security",
    "Finance",
    "Job Laborers",
  ];
  const teaching = [
    "COE","COA","CBM","SICT"
]
  const [ evaluations, setEvaluations] = useState([])
  const [departments, setDepartments] = useState(teaching)
  const [selectedDepartment, setSelectedDepartment] = useState("All")
  const [type, setType] = useState("All")
  const [positions, setPositions] = useState([])
  const [selectedPosition, setSelectedPosition] = useState("All")


  const[renderTable, setRenderTable] = useState(false)

  useEffect(()=>{
    fetchEvaluations()
  },[selectedDepartment, type, selectedPosition])
  useEffect(()=>{
    fetchPositions()
  },[selectedDepartment])

  const handleTypeFilter = (e) => {
    const value = e.target.value
    setType(value)
    if(value === "Teaching"){
      setDepartments(teaching)
    }else setDepartments(nonTeaching)
  }

  const handleSelecteDepartment = (e) => {
    const value = e.target.value
    setSelectedDepartment(value)
  }

  const handleSelectedPosition = (e)=>{
    const value = e.target.value
    setSelectedPosition(value)
  }

  const fetchEvaluations = async () => {
    setRenderTable(false)
    let reqUrl = apiBaseUrl + `/admin/getEvaluationResults/${type}/${selectedDepartment}/${selectedPosition}`;
    if (head)
      reqUrl = apiBaseUrl + "/panel/getEvaluationResultsForCommitteeHead";
    else if (committee)
      reqUrl = apiBaseUrl + "/panel/getEvaluationResultsForCommitteeMember";
    else if (panel) reqUrl = apiBaseUrl + "/panel/getEvaluationResults";
    const evaluationRequest = await axios.get(reqUrl, {
      withCredentials: true,
    });
    const evaluationData = evaluationRequest.data;
    console.log(evaluationData)
    if (evaluationData) {
      setEvaluations(evaluationData);
      setRenderTable(true)
    }
  };
  const fetchPositions = async() =>{
    const getPositions = await axios.get(apiBaseUrl+`/admin/getJobPositions/${type}/${selectedDepartment}`,{withCredentials:true})
    const deptPositions = getPositions.data
    setPositions(deptPositions)
  }
  return(
    <Row className="w-100 evalduation">
      <Col>
        <Card>
          <Card.Header className="p-3 m-3">
            <Row className="d-flex justify-content-between align-items-center">
              <Col className="col-sm-12 mb-2 col-md-4 ">
                <div className="d-flex justify-content-between align-items-center">
                  <h5>Evaluation Results</h5>
                  {/* <div className="d-flex justify-content-end align-items-center">
                    <Form.Label htmlFor="search" className="m-0 me-2">
                      Search
                    </Form.Label>
                    <Form.Control type="text" id="search" size="sm" />
                  </div> */}
                </div>
              </Col>
              <Col className="d-flex justify-content-end align-items-center mb-2 col-lg-6">
                <Filter
                  title="Type"
                  list={["Teaching","Non Teaching"]}
                  id="recommendation"
                  defaultValue={type}
                  handler={handleTypeFilter}
                />

                <Filter
                  title="Department"
                  list={departments}
                  id="recommendation"
                  defaultValue={selectedDepartment}
                  handler={handleSelecteDepartment}
                />
                <Filter
                  title="Position"
                  list={positions}
                  object = {true}
                  id="filter"
                  defaultValue={selectedPosition}
                  handler={handleSelectedPosition}
                />
              </Col>
            </Row>
          </Card.Header>
          <Card.Body className="p-3">
            {renderTable?(
                          <EvaluationTable action = {panel?viewEvaluation:viewEvaluationResult} data={evaluations} panel = {panel}/>

            ):""}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

const ViewResult = ({data}) =>{

  const [filterRecom, setFilterRecom] = useState("All")
  const [evaluations, setEvaluations] = useState([])

  useEffect(()=>{
      getPanelEvaluations()
  }, [filterRecom])

  const getPanelEvaluations = async()=>{
    const reqUrl = `${apiBaseUrl}/admin/getPanelEvaluations/${data.id}/${filterRecom}`;
  const evaluationRequest = await axios.get(reqUrl, {
    withCredentials: true,
  });
  const evaluationData = evaluationRequest.data;
  if (evaluationData) {
    setEvaluations(evaluationData);
  }
  }

  const handleFilterRecom = (e) => {
    const value = e.target.value
    setFilterRecom(value)
  }
  return (
  <Row className="w-100 evalduation">
      <Col>
        <Card>
          <Card.Header className="p-3 m-3">
            <Container fluid className="mb-2 p-0 d-flex justify-content-start alert-items-center">
            <FontAwesomeIcon icon={faArrowLeft} size="lg" onClick={()=>window.location.href = "../applications/evaluation-result"}/>

            <p className="p-2 m-0 me-2 alert alert-info">Applying: {data.title}</p>
            <p className="p-2 m-0 me-2 alert alert-info">For: {data.department}</p>
            <p className="alert alert-danger m-0 p-2 ms-auto w-auto">Total: {data.total}</p>

            </Container>
            <Row>
              <Col>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="p-0 m-0 ms-3">{data.applicant_name}</h5>
                </div>
              </Col>
              <Col className="d-flex justify-content-end align-items-center">
                <Filter
                  title="Filter"
                  list={["Definitely to be considered","Possible further consideration","Unfavorable"]}
                  id="recommendation"
                  defaultValue={filterRecom}
                  handler={handleFilterRecom}
                />
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