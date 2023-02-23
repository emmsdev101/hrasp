import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { apiBaseUrl } from "../../config";
import useApplication from "../../pages/Applications/useApplication";
import ApplicationDetails from "../ApplicaitonDetails/ApplicationDetails";
import ApplicationsTableHeader from "../ApplicantionsTableHeader/ApplicationsTableHeader";
import ApplicantsTable from "../ApplicantsTable/ApplicantsTable";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
export default function RegistrationTab() {
  const [accounts, setAccounts] = useState([]);

  const [showAccept, setShowAccept] = useState(false)
  const [showDecline, setShowDecline] = useState(false)
  const [showDeactivate, setShowDeactivate] = useState(false)

  let selected = useRef()

  useEffect(()=>{
    getAccounts()
  },[])

  const getAccounts = async()=>{
    const accountReq = await axios.get(apiBaseUrl+"/admin/getAccounts",{withCredentials:true})
    const accountData = accountReq.data
    setAccounts(accountData)
  }

  const acceptAccount = async()=>{
    const acceptReq = await axios.post(apiBaseUrl+"/admin/acceptAccount",{
        accountId:selected.current
    },{withCredentials:true})
    if(acceptReq.data)getAccounts()
    setShowAccept(false)
  }
  const declineAccount = async()=>{
    const acceptReq = await axios.post(apiBaseUrl+"/admin/decline",{
        accountId:selected.current 
    },{withCredentials:true})
    if(acceptReq.data)getAccounts()
    setShowDecline(false)
  }
  const deactivateAccount = async()=>{
    const acceptReq = await axios.post(apiBaseUrl+"/admin/deactivate",{
        accountId:selected.current 
    },{withCredentials:true})
    if(acceptReq.data)getAccounts()
    setShowDeactivate(false)
  }

  const TableRow = ({data}) => {
    const fullname = [data.firstname, data.middlename, data.lastname].join(" ")
    return(
        <tr>
            <td>{fullname}</td>
            <td>{data.gender}</td>
            <td>{data.age}</td>
            <td>{data.birthday}</td>
            <td>{data.contact}</td>
            <td>{data.email}</td>
            <td>{data.status}</td>
            <td>
                {data.status === "pending"?(
                    <React.Fragment>
                        <Button variant="success" className="ms-1" size="sm" onClick={()=>{
                            selected.current = data.account_id
                            setShowAccept(true)
                        }}>Accept</Button>
                        <Button variant="danger" className="ms-1" size="sm" onClick={()=>{
                            setShowDecline(true)
                            selected.current = data.account_id
                        }}>Decline</Button>
                    </React.Fragment>
                ):""}
                {data.status === "active"?
                (<Button variant="danger" size="sm" onClick={()=>{
                  setShowDeactivate(true)
                  selected.current = data.account_id
                  }}>Deactivate</Button>): data.status != "pending"?
                  (<Button variant="success" size="sm" onClick={()=>{
                    setShowAccept(true)
                    selected.current = data.account_id
                    }}>Activate</Button>):""}
            </td>

        </tr>
    )
}
  const ApplicationsBox = () => {
    return (
      <div className="applicantsBox m-1 p-3">
        <ConfirmModal confirm={acceptAccount} title={"Accept?"} message = "Are you going to accept this account?" show={showAccept} handleClose={()=>setShowAccept(false)}/>
        <ConfirmModal confirm={declineAccount} title={"Decline?"} message = "Are you going to decline this account?" show={showDecline} handleClose={()=>setShowDecline(false)}/>
        <ConfirmModal confirm={deactivateAccount} title={"Deactivate?"} message = "Are you going to deactivate this account?" show={showDeactivate} handleClose={()=>setShowDeactivate(false)}/>
        
        
        <Row>
          <Col md={4}>
            <h4 className="cardTtle">Applicants</h4>
          </Col>
          <Col>
            <div className="d-flex justify-content-evenly">
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
                <Form.Select aria-label="Default select example" size="sm">
                  <option>Status</option>
                  <option value="1">Accepted</option>
                  <option value="2">Pending</option>
                  <option value="2">Rejected</option>
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
            </div>
          </Col>
        </Row>
        <br></br>
        <div className="applicantsList">
        <Table hover responsive>
      <thead>
          <tr>
            <th>Fullname</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Birthday</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
      </thead>
      <tbody>
            {accounts.map((data,idx)=>(
                <TableRow data={data} key = {idx}/>
            ))}

        </tbody>
        </Table>
        </div>
      </div>
    );
  };
  return <ApplicationsBox />;


  
}

