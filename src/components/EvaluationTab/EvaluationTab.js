import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import EvaluationModal from './EvaluationModal'
import ApplicationsTableHeader from './../ApplicantionsTableHeader/ApplicationsTableHeader'
import ApplicantsTable from './../ApplicantsTable/ApplicantsTable'
export default function EvaluationTab({panel, committee, head}) {
    const [newEvaluation, setNewEvaluation] = useState(false)


    const toggleNewEvaluation = () => {
        setNewEvaluation(!newEvaluation)
    }
  return (
    <Row>
        <div className="applicantsBox m-1 p-3">
            <Row>
              <Col md={4}>
                <h4 className="cardTtle">Applicants</h4>
              </Col>
              <Col>
                <ApplicationsTableHeader status="all"/>
              </Col>
            </Row>
            <br></br>
            <div className="applicantsList">
              <ApplicantsTable status = "for-evaluation" panel = {panel} head={head} committee = {committee}/>
            </div>
          </div>
    </Row>
  )
}
