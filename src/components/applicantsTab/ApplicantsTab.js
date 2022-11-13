import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import { apiBaseUrl } from '../../config';
import useApplication from '../../pages/Applications/useApplication';
import ApplicationsTableHeader from '../ApplicantionsTableHeader/ApplicationsTableHeader';
import ApplicantsTable from '../ApplicantsTable/ApplicantsTable';

export default function ApplicantsTab() {
    const [applications, setApplications] = useState([])

    useEffect(()=>{
      const requestApplications = async()=>{
        const request = await axios(apiBaseUrl+"/admin/getApplicants/all",{withCredentials:true})
        try{
          const reqData = request.data
          setApplications(reqData)

        }catch(err){
          console.log(err);
      }
    }
    requestApplications();
    },[])
  const TableRow = ({data})=> {
    return(
      <tr key = {data.account_id}>
      <td>{data.account_id}</td>
      <td>{data.firstname}</td>
      <td>{data.middlename}</td>
      <td>{data.lastname}</td>
      <td>{data.title}</td>
      <td>{data.status}</td>
    </tr>
    )
  }
  return (
    <div className="applicantsBox m-1 p-3">
            <Row>
              <Col md={4}>
                <h4 className="cardTtle">Applicants</h4>
              </Col>
              <Col>
                <ApplicationsTableHeader status="all"/>
              </Col>
            </Row>
            <br></br>
            <div className="applicantsList">
              <ApplicantsTable status = "all"/>
            </div>
          </div>
  )
}
