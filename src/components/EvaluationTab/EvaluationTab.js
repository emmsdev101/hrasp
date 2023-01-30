import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import EvaluationModal from './EvaluationModal'

export default function EvaluationTab() {
    const [newEvaluation, setNewEvaluation] = useState(false)

    const toggleNewEvaluation = () => {
        setNewEvaluation(!newEvaluation)
    }
  return (
    <Row>
        <Col>
        <Card>
        <Card.Header className='d-flex flex-direction-row justify-content-between align-items-center'>
                <h6 className='m-0 p-0'>Applicants</h6>
                </Card.Header>
            <Card.Body>

            </Card.Body>
        </Card>
        </Col>
    </Row>
  )
}
