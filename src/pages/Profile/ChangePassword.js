import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { apiBaseUrl } from "../../config";

export default function ChangePassword({
  show,
  handleClose,
  panel,
  committee,
  admin,
}) {
  const [currPassword, setCurrPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setCurrPassword("");
    setNewPassword("");
    setRetypePassword("");
  }, []);
  const submit = async () => {
    setError("");
    if (!currPassword && !newPassword && !retypePassword) {
      return setError("Fields cannot be empty");
    }
    if (newPassword !== retypePassword) {
      return setError("Your new password do not match");
    }

    let url = `${apiBaseUrl}/applicant/changePassword`;

    if (admin) url = `${apiBaseUrl}/admin/changePassword`;
    if (committee || panel) url = `${apiBaseUrl}/panel/changePassword`;

    const request = await axios.post(
      url,
      { currentPassword: currPassword, newPassword },
      { withCredentials: true }
    );
    const result = request.data;
    if (result.success) {
      alert("Your password has changed successfully");
      handleClose();
    } else {
      setError(result.error);
    }
  };
  return (
    <Modal show={show}>
      <Modal.Header>
        <h6>Change Password</h6>
      </Modal.Header>
      <Modal.Body>
        {error ? <p className="alert alert-warning">{error}</p> : ""}
        <Form.Control
          type="password"
          className="mb-2"
          placeholder="Current Password"
          value={currPassword}
          onChange={(e) => setCurrPassword(e.target.value)}
          autoComplete={false}
        ></Form.Control>
        <Form.Control
          type="password"
          className="mb-2"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          autoComplete={false}
        ></Form.Control>
        <Form.Control
          type="password"
          className="mb-2"
          placeholder="Retype Password"
          value={retypePassword}
          onChange={(e) => setRetypePassword(e.target.value)}
          autoComplete={false}
        ></Form.Control>
        <Container className="d-flex justify-content-end">
          <Button
            variant="warning"
            className="lightButton me-1"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button variant="success" className="lightButton" onClick={submit}>
            Save
          </Button>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
