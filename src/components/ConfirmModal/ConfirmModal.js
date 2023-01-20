import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function ConfirmModal({show, handleClose, confirm, decline, title, message}) {
  return (
    <Modal show={show}>
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={handleClose}>
          No
        </Button>
        <Button variant="danger" onClick={confirm}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
