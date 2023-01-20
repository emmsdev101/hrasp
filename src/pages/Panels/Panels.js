import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { editableInputTypes } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal';
import NewAccountModal from '../../components/NewAccountModal/NewAccountModal';
import { apiBaseUrl } from '../../config';
export default function Panels() {
    const [applications, setApplications] = useState([])
    const [newAcount, setNewAccout] = useState(false)
    const [toEdit, setToEdit] = useState(null)

    const [delData, setDelData] = useState(false)
    const [toDelete, setToDelete] = useState(0)

    const [deleteMessage, setDeleteMessage] = useState("")

    useEffect(()=>{

    fetchPanels();
    },[])
    const fetchPanels = async()=>{
      const request = await axios(apiBaseUrl+"/admin/getPanels",{withCredentials:true})
      try{
        const reqData = request.data
        setApplications(reqData)
        console.log(reqData)

      }catch(err){
        console.log(err);
    }
  }
    const handleNewAccount =()=>{
      setToEdit()
      setNewAccout(!newAcount)
    }
    const handleDelData = () => {
      setDelData(!delData)
    }
    const editData=async(data)=>{
      setToEdit(data)
      setNewAccout(true)
    }

    const deleteData=async()=>{
      const request = await axios.post(apiBaseUrl+"/admin/deletePanel",{id:toDelete},{withCredentials:true})
      if(!request.data.success)return alert("Failed to Delete")
      alert("Successfully Deleted")
      fetchPanels() 
    }
  
    const TableRow = ({data})=> {
        return(
          <tr key = {data.account_id}>
          <td>{data.email}</td>
          <td>{data.firstname}</td>
          <td>{data.middlename}</td>
          <td>{data.lastname}</td>
          <td>{data.department}</td>
          <td>{data.position}</td>
          <td>{data.departmentType}</td>
          <td><Button size='sm' className='me-1' variant='light'><FontAwesomeIcon icon={faEdit} onClick={()=>editData(data)}/></Button>
          <Button size='sm' variant='light'><FontAwesomeIcon icon={faTrash} className = "text-danger" onClick={()=>{
            setToDelete(data.account_id)
            setDelData(true)
            setDeleteMessage("Are you sure to delete an account for "+data.email+"?")
          }}/></Button>
          </td>
        </tr>
        )
      }

  return (
    <Container fluid className="p-3 applications">
        <NewAccountModal refresh={fetchPanels} show = {newAcount} handleClose = {handleNewAccount} payload = {toEdit}/>
        <ConfirmModal show={delData} handleClose={handleDelData} title = "Delete" message={deleteMessage} confirm = {deleteData}/>
      <Row>
        <Col md={6}>
          <h4 className="pageTitle mt-2 mb-4">Screening Comittee</h4>
        </Col>
        <Col md={6} className="d-flex flex-direction-row justify-content-end">
            <div className='p-1'>
            <Button onClick={handleNewAccount} variant="light"><FontAwesomeIcon icon={faPlus}/> New</Button>
            </div>
        </Col>
      </Row>
      <Row>
      <div className="applicantsBox m-1 p-3">
            <Row>
              <Col md={4}>
                <h4 className="cardTtle">Panels</h4>
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
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Lastname</th>
                    <th>Department</th>
                    <th>Position</th>
                    <th>Type</th>
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

      </Row>
      </Container>
    
  )
}
