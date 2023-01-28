import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Col, Container, Form, Row, Table,Button } from "react-bootstrap";
import { apiBaseUrl } from '../../config';
import useApplication from '../../pages/Applications/useApplication';
import ApplicationDetails from '../ApplicaitonDetails/ApplicationDetails';
import ApplicationsTableHeader from '../ApplicantionsTableHeader/ApplicationsTableHeader';
import ApplicantsTable from '../ApplicantsTable/ApplicantsTable';

export default function PrequalificationTab({panel,head, committee}) {
    const [viewDetails, setViewDetails] = useState(false)

  const ApplicantsBox = () => {
    return(
      <div className="applicantsBox m-1 p-3">
      <Row>
        <Col md={4}>
          <h4 className="cardTtle">For Pre-Qualification</h4>
        </Col>
        <Col >
          <ApplicationsTableHeader status = "for-prequalification"/>  
        </Col>
      </Row>
      <br></br>
      <div className="applicantsList">
       <ApplicantsTable status = "prequalification" view = {setViewDetails} panel = {panel} head={head} committee = {committee}/>
      </div>
    </div>
    )
  }
  return viewDetails?<ApplicationDetails close = {setViewDetails} applicantionId = {viewDetails} panel = {panel}  />:<ApplicantsBox/>


}
