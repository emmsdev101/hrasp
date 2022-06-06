import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import './modal.css';

const apiBase = "http://localhost:4000" 
export default function NewPostingModal({ show, handleClose }) {
  return (
    <Modal show={show}>
        <Form action={apiBase+"/admin/postJob"} method="post">
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title>New Job Posting</Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="#title">Job Title</Form.Label>
                <Form.Control type="text" id="title" name  = "title"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="#description">Description</Form.Label>
                <Form.Control as = "textarea" id="description" name  = "description"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="#poster">Poster</Form.Label>
                <Form.Control type="file" accept="image/*" id="poster" name  = "poster"></Form.Control>
            </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit">Post</Button>
      </Modal.Footer>
      </Form>
    </Modal>
  );
}
