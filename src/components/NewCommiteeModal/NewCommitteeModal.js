import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

import "./modal.css";
import useNewAccount from "./useCommitteeModal";

export default function NewAccountModal({
  show,
  handleClose,
  payload,
  refresh,
}) {
  const {
    email,
    handleEmail,
    submit,
    association,
    handleAssociation,
    position,
    handlePosition,
    firstname,
    handleFirstname,
    middlename,
    handleMiddlename,
    lastname,
    handleLastname,
  } = useNewAccount(handleClose, payload, refresh);


  return (
    <Modal show={show}>
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title>{payload ? "Edit Details" : "Add Committee"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="#deptType">Association</Form.Label>
                <Form.Select
                  onChange={handleAssociation}
                  id="deptType"
                  value={association}
                >
                  <option value="Non Teaching">Non Teaching</option>
                  <option value="Teaching">Faculty</option>
                  <option value="All">All</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="#position">Position</Form.Label>
                <Form.Select
                  onChange={handlePosition}
                  id="position"
                  value={position}
                >
                  <option value="president">President</option>
                  <option value="member">Member</option>
            
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          {/* <Form.Group className="mb-2">
            <Form.Label htmlFor="#title">Position</Form.Label>
            <Form.Select
              onChange={handlePosition}
              id="position"
              value={position}
            >
              <option value="Director">Director</option>
              <option value="Head Staff">Head Staff</option>
            </Form.Select>
          </Form.Group> */}
          <Form.Group className="mb-2">
            <Form.Label htmlFor="#firstname">Firstname</Form.Label>
            <Form.Control
              type="text"
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={handleFirstname}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="#middlename">Middlename</Form.Label>
            <Form.Control
              type="text"
              id="middlename"
              name="middlename"
              value={middlename}
              onChange={handleMiddlename}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="#lastname">Lastname</Form.Label>
            <Form.Control
              type="text"
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={handleLastname}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="#firstname">Email / Username</Form.Label>
            <Form.Control
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleEmail}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label htmlFor="#lastname">Password (Default password)</Form.Label>
            <Form.Control
              type="text"
              id="password"
              name="password"
              value={"hrasp"}
              readOnly
            ></Form.Control>
            <Form.Text>Can only be changed by account owner</Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={submit}>
          {payload?"Save Changes":"Create"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
