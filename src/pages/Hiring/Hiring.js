import { faPlus, faUserCircle, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import JobPostCard from '../../components/JobPostCard/JobPostCard'
import NewPostingModal from '../../components/NewPostingModal/NewPostingModal'
import useHiring from './useHiring'

export default function Hiring() {
  const {show, handleClose, handleShow, jobPosts} = useHiring()
  return (
    <Container fluid className="p-3 applications">
            <NewPostingModal show = {show} handleClose = {handleClose}/>

    <Row>
      <Col md={4}>
        <h4 className="pageTitle mt-2 mb-4">Job Posting</h4>
      </Col>
      <Col className = "d-flex justify-content-end">
          <div>
          {/* <Button onClick  = {handleShow} size = "sm" className = "btn"><FontAwesomeIcon icon = {faPlus}></FontAwesomeIcon> New Posting</Button> */}
          </div>
      </Col>

    </Row>
    <Row>
      <Container fluid>
      <Row className='d-flex justify-content-center'>
        <Col md = {8}>
            {jobPosts.map((jobPost, index)=>(
              <JobPostCard data={jobPost} key = {index} admin = {true}/>
            ))}

        </Col>
      </Row>
      </Container>
    </Row>
  </Container>  
  )
}
