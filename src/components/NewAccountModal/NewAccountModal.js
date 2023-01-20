import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

import "./modal.css";
import useNewAccount from "./useNewAccount";

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
    departmentType,
    handleDepartmentType,
    department,
    handleDepartment,
    position,
    handlePosition,
    firstname,
    handleFirstname,
    middlename,
    handleMiddlename,
    lastname,
    handleLastname,
  } = useNewAccount(handleClose, payload, refresh);

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

  return (
    <Modal show={show}>
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title>{payload ? "Edit Details" : "Add Deparment"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="#deptType">Type</Form.Label>
                <Form.Select
                  onChange={handleDepartmentType}
                  id="deptType"
                  value={departmentType}
                >
                  <option value="Non Teaching">Non Teaching</option>
                  <option value="Teaching">Teaching</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="#department">Department</Form.Label>
                <Form.Select
                  onChange={handleDepartment}
                  id="department"
                  value={department}
                >
                  {departmentType === "Teaching" ? (
                    teaching.map((office,idx) => (
                       <option value={office} key = {idx}>{office}</option>
                    ))
                  ) : (
                    nonTeaching.map((office,idx) => (
                      <option value={office} key = {idx}>{office}</option>
                   ))
                  )}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          {/* <Form.Group className="mb-2">
            <Form.Label htmlFor="#title">Position</Form.Label>
            <Form.Select
              onChange={handlePosition}
              id="department"
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
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
