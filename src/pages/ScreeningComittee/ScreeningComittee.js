import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal'
import NewCommitteeModal from '../../components/NewCommiteeModal/NewCommitteeModal'
import { apiBaseUrl } from '../../config'

export default function ScreeningComittee() {
    const [showDelete, setShowDelete] = useState(false)
    const [newAccount, setNewAccount] = useState(false)
    const [committees, setCommittees] = useState([])

    const [toEdit, setToEdit] = useState(null)

    const [toDelete, setToDelete] = useState(0)

    useEffect(() => {
      fetchCommittees()

    }, [])
    
    
    const handleShowDelete = ()  => {
        setShowDelete(!showDelete)
    }
    const handleNewAccount = () => {
        if(newAccount){
            setToEdit(null)
        }
        setNewAccount(!newAccount)

    }
      const editData=async(data)=>{
        setToEdit(data)
        setNewAccount(true)
      }
    const confirmDelete = async() => {
        const request = await axios.post(apiBaseUrl+"/admin/deletePanel",{id:toDelete},{withCredentials:true})
        if(!request.data.success)return alert("Failed to Delete")
        alert("Successfully Deleted")
        fetchCommittees() 
        setToDelete(null)
        setShowDelete(false)
    }


    const fetchCommittees = async()=>{
        const committeeRequest = await axios(apiBaseUrl+"/admin/getCommittees",{withCredentials:true})
        const committeeData = committeeRequest.data
        setCommittees(committeeData)
    }

    const TableRow = ({data})=> {
        return(
          <tr key = {data.account_id}>
          <td>{data.firstname}</td>
          <td>{data.middlename}</td>
          <td>{data.lastname}</td>
          <td>{data.email}</td>
          <td>{data.committee}</td>
          <td>{data.position}</td>
          <td>{data.departmentType}</td>
          <td><Button size='sm' className='me-1' variant='light'><FontAwesomeIcon icon={faEdit} onClick={()=>editData(data)}/></Button>
          <Button size='sm' variant='light'><FontAwesomeIcon icon={faTrash} className = "text-danger" onClick={()=>{
            setToDelete(data.account_id)
            setShowDelete(true)
          }}/></Button>
          </td>
        </tr>
        )
      }
    
  return (
    <Container fluid className="p-3 applications">
      <ConfirmModal title={"Delete Account?"} confirm = {confirmDelete} show={showDelete} handleClose = {handleShowDelete} message = "Are you going to delete this account?"/>
      <NewCommitteeModal show ={newAccount} handleClose = {handleNewAccount} payload = {toEdit} refresh = {fetchCommittees}/>

      <Row>
        <Col md={4}>
          <h4 className="pageTitle mt-2 mb-4">Job Hiring</h4>
        </Col>
        <Col className="d-flex justify-content-end">
          <div>
            <Button onClick={handleNewAccount} size="sm" className="btn">
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add Comittee
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Container fluid>
          <Row className="d-flex justify-content-center">
            <Col md={6}>
              
            </Col>
          </Row>
        </Container>
      </Row>
      <Row>
      <div className="applicantsBox m-1 p-3">
            <Row>
              <Col md={4}>
                <h4 className="cardTtle">Committee Members</h4>
              </Col>
              <Col className="d-flex justify-content-evenly">
                <div className="sortDiv">
                  <Form.Select aria-label="Default select example" size="sm">
                    <option>Department</option>
                    <option value="1">Accepted</option>
                    <option value="2">Pending</option>
                    <option value="2">Rejected</option>
                  </Form.Select>
                </div>
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
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Association</th>
                    <th>Position</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {committees.map((data, index)=>(
                    <TableRow data = {data} key = {data.account_id}/>
                  ))}

                </tbody>
              </Table>
            </div>
          </div>

      </Row>

    </Container>
  )
}
