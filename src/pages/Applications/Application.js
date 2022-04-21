import React from "react";
import { Container, Row } from "react-bootstrap";

export default function Application() {
  return (
    <Container className="applicants">
      <Row>
        <Container fluid>
          <div className="reminder-box m-1 p-3">
            <h4>Applicants</h4>
            <hr></hr>
            <div className="reminders-list">
              <p>No applicants yet</p>
            </div>
          </div>
        </Container>
      </Row>
    </Container>
  );
}
