import React from "react";
import { Form } from "react-bootstrap";

export default function ApplicationsTableHeader({ status }) {
  return (
    <div className="d-flex justify-content-evenly">
      <div className="sortDiv">
        <Form.Select aria-label="Default select example" size="sm">
          <option>Position</option>
          <option value="1">One</option>
          <option value="2">Two</option>
        </Form.Select>
      </div>
      <div className="sortDiv">
        <Form.Select aria-label="Default select example" size="sm">
          <option>Type</option>
          <option value="1">Faculty</option>
          <option value="2">Staff</option>
        </Form.Select>
      </div>
      {status === "all" ? (
        <div className="sortDiv">
          <Form.Select aria-label="Default select example" size="sm">
            <option>Status</option>
            <option value="1">Accepted</option>
            <option value="2">Pending</option>
            <option value="2">Rejected</option>
          </Form.Select>
        </div>
      ) : (
        ""
      )}
      <div className="sortDiv">
        <div className="d-flex justify-content-center align-items-center">
          <Form.Label htmlFor="search">Search</Form.Label>&nbsp;
          <Form.Control
            aria-label="Search"
            id="search"
            size="sm"
            className="text-muted"
            type="text"
          ></Form.Control>
        </div>
      </div>
    </div>
  );
}
