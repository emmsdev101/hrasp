import {
  faPlus,
  faUserCircle,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import JobPostCard from "../../components/JobPostCard/JobPostCard";
import NewPostingModal from "../../components/NewPostingModal/NewPostingModal";
import useHiring from "./useHiring";

export default function PanelHiring() {
  const { show, handleClose, handleShow, jobPosts, cancelRequest, confirmCancel, handleCancel,prepareCancel } = useHiring();
  
  return (
    <Container fluid className="p-3 applications">
      <ConfirmModal title={"Cancel Request?"} confirm = {confirmCancel} show={cancelRequest} handleClose = {handleCancel} message = "Are you going to cancel this request?"/>
      <NewPostingModal show={show} handleClose={handleClose} />

      <Row>
        <Col md={4}>
          <h4 className="pageTitle mt-2 mb-4">Job Hiring</h4>
        </Col>
        <Col className="d-flex justify-content-end">
          <div>
            <Button href="/panel/request-hiring" size="sm" className="btn">
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Request Hiring
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Container fluid>
          <Row className="d-flex justify-content-center">
            <Col md={6}>
              {jobPosts.map((jobPost, index) => (
                <JobPostCard data={jobPost} key={index} cancelRequest = {prepareCancel} />
              ))}
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}
