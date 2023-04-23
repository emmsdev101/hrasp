import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Button, Col, Container, Form, FormCheck, Row, Table } from "react-bootstrap";
import { apiBaseUrl } from '../../config';
import useApplication from '../../pages/Applications/useApplication';
import ApplicationDetails from '../ApplicaitonDetails/ApplicationDetails';
import ApplicationsTableHeader from '../ApplicantionsTableHeader/ApplicationsTableHeader';
import ApplicantsTable from '../ApplicantsTable/ApplicantsTable';

export default function ApplicantsTab({panel, head, committee}) {
    const [viewDetails, setViewDetails] = useState(0)

 const ApplicationsBox = ()=>{
  return(
    <div className="applicantsBox m-1 p-3">
            <Row>
              <Col md={4}>
                <h4 className="cardTtle">Applicants</h4>
              </Col>
              <Col className='d-flex flex-column  justify-content-start align-items-end'> 
                <ApplicationsTableHeader status="all"/>
                <div className='m-2'>
                </div>
              </Col>
            </Row>
            <br></br>
            <div className="applicantsList">
              <ApplicantsTable status = "all" view={setViewDetails} panel = {panel} head={head} committee = {committee}/>
            </div>
          </div>
  )
 }
 return viewDetails?<ApplicationDetails close = {setViewDetails} applicantionId = {viewDetails} panel = {panel}/>:<ApplicationsBox/>

}
