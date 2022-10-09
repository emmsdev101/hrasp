import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Col, Container, Form, Row, Table,Button } from "react-bootstrap";
import { apiBaseUrl } from '../../config';
import useApplication from '../../pages/Applications/useApplication';

export default function AcceptanceTab() {
    const [applications, setApplications] = useState([])

    useEffect(()=>{
      const requestApplications = async()=>{
        const request = await axios(apiBaseUrl+"/admin/getApplicants",{withCredentials:true})
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
      <td><Button size = "sm" className = "m-e-2">Accept</Button><Button size = "sm" variant = "secondary" >Reject</Button></td>
    </tr>
    )
  }
  return (
    <div className="applicantsBox m-1 p-3">
            <Row>
              <Col md={4}>
                <h4 className="cardTtle">Applicants</h4>
              </Col>
              <Col className="d-flex justify-content-evenly">
              
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
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((data, index)=>(
                    <TableRow data = {data} key = {data.account_id}/>
                  ))}

                </tbody>
              </Table>
            </div>
          </div>
  )
}
