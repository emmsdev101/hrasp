import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

import "./modal.css";
import usePosting from "./usePosting";

const apiBase = "http://localhost:4000";

export default function NewPostingModal({ show, handleClose }) {
  const { jobtype, numPersons, handleNumPersons, handleJobtype,title, handleTitle, description, handleDescription, poster, handlePoster, submit } = usePosting(handleClose);
  return (
    <Modal show={show}>
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title>New Job Posting</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
            <Form.Group className = "mb-3">
            <Form.Label htmlFor="#jotype">Type</Form.Label>
            <Form.Select onChange = {handleJobtype} id = "jobtype" value={jobtype}>
              <option value="faculty">Faculty Member</option>
              <option value="staff">Staff Member</option>
            </Form.Select>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group className = "mb-3">
            <Form.Label htmlFor="#quantity">Persons Needed</Form.Label>
            <Form.Control type="number" onChange = {handleNumPersons} id = "quantity" value={numPersons}></Form.Control>
          </Form.Group></Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="#title">Job Title</Form.Label>
            <Form.Control
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={handleTitle}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="#description">Description</Form.Label>
            <Form.Control
              as="textarea"
              id="description"
              name="description"
              onChange = {handleDescription}
              value = {description}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="#poster">Poster</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              id="poster"
              name="poster"
              onChange = {handlePoster}
            ></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={submit}>
          Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
