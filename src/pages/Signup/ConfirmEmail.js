import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import { apiBaseUrl } from "../../config";

export default function SecondStep({ next, back, verifyEmail, verifyCode }) {
  const [count, setCount] = useState(30);
  const [code, setCode] = useState("");
  const [wrong, setWrong] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCode = (e) => setCode(e.target.value);

  useEffect(() => {
    resend();
  }, []);
  useEffect(() => {
    if (wrong) {
      setTimeout(() => {
        setWrong(false);
      }, 3000);
    }
  }, [wrong]);

  const resend = () => {
    startCount();
    verifyEmail();
  };
  const startCount = async () => {
    let lastC = 30;
    while (lastC !== 0) {
      lastC -= 1;
      setCount(lastC);
      if (lastC === 0) return setCount(0);
      await timeout(1000);
    }
  };

  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const submit = async () => {
    setWrong(false);
    setLoading(true);
    const result = await verifyCode(code);
    if (result.correct) return next();
    setWrong(true);
    setLoading(false);
  };
  return (
    <Row className="d-flex align-items-center justify-content-center">
      <Col md={8}>
        <Container className="signup-box">
          <div>
          <Button className="" variant="light" onClick={back}><FontAwesomeIcon icon={faArrowLeft}/></Button>

          </div>
          <h2 className="text-center">Applicant Hiring Portal</h2>
          <h4 className="mt-4 mb-4 text-center">Verification</h4>
          <p className="text-center">
            We've sent you a verification code to your email. Please provide
            your verif' code below.
          </p>
          <Container
            fluid
            className="mb-3 d-flex flex-column justify-content-center align-items-center"
          >
            {count === 0 ? (
              <Button variant="info" size="sm" onClick={resend}>
                Resend
              </Button>
            ) : (
              <p className="text-center">Resend in {count}</p>
            )}
            {wrong ? (
              <Alert variant="warning" className="p-2">
                Wrong code
              </Alert>
            ) : (
              ""
            )}
          </Container>

          <Form>
            <Row className="formRow">
              <Col sm={12} md={6} lg={4} className="form-col">
                <Form.Group>
                  <Form.Control
                    type="text"
                    id="code"
                    value={code}
                    onChange={handleCode}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col sm={12} md={12} lg={12} className="form-col formRow">
                {loading ? (
                  <Button disabled variant="success">
                    Loading...
                  </Button>
                ) : (
                  <Button onClick={submit} variant="success">
                    Submit
                  </Button>
                )}
              </Col>
            </Row>
          </Form>
        </Container>
      </Col>
    </Row>
  );
}
