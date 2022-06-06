import React from 'react'
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import useApplication from '../../pages/Applications/useApplication';

export default function ApplicantsTab() {
    
  return (
    <div className="applicantsBox m-1 p-3">
            <Row>
              <Col md={4}>
                <h4 className="cardTtle">Applicants</h4>
              </Col>
              <Col className="d-flex justify-content-evenly">
                <div className="sortDiv">
                  <Form.Select aria-label="Default select example" size="sm">
                    <option>Status</option>
                    <option value="1">Accepted</option>
                    <option value="2">Pending</option>
                    <option value="2">Rejected</option>
                  </Form.Select>
                </div>
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
              </Col>
            </Row>
            <br></br>
            <div className="applicantsList">
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Lastname</th>
                    <th>Applying for</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Aroyo</td>
                    <td>Accountant</td>
                    <td>For Acceptance</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Aroyo</td>
                    <td>Accountant</td>
                    <td>For Acceptance</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Aroyo</td>
                    <td>Accountant</td>
                    <td>For Acceptance</td>
                  </tr>

                </tbody>
              </Table>
            </div>
          </div>
  )
}
