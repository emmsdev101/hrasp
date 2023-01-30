import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Form, Modal } from 'react-bootstrap'

export default function EvaluationModal({show, handleClose}) {
  return (
    <Modal show = {show} onBackdropClick = {handleClose}>
        <Modal.Header>
            <h6 className='m-0'>Create new Evaluation Sheet</h6>
            <FontAwesomeIcon icon={faClose}/>
        </Modal.Header>
        <Modal.Body>
            <Form.Group>
                <Form.Label>Tittle</Form.Label>
            </Form.Group>

        </Modal.Body>
    </Modal>
  )
}
