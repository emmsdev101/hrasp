
import { faPen, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Container, Button } from 'react-bootstrap'
import { apiBaseUrl } from '../../config'

export default function Profile({panel, committee}) {
  const [data, setData] = useState({})
  const [edit, setEdit] = useState(false)

  const [firstname, setFirstname] = useState("")
  const [middlename, setMiddlename] = useState("")
  const [lastname, setLastname] = useState("")
  const [birthDay, setBirthday] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [gender, setGender] = useState("Male")

  const handleFirstname = (e)=>{
    setFirstname(e.target.value)
  }
  const handleMiddlename = (e)=>{
    setMiddlename(e.target.value)
  }
  const handleLastname = (e)=>{
    setLastname(e.target.value)
  }
  const handleGender = (e)=>{
    setGender(e.target.value)
  }
  const handleBirthday = (e)=>{
    setBirthday(e.target.value)
  }
  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  const handleContact = (e)=>{
    setContact(e.target.value)
  }

  useEffect(()=>{

    fetchData()
  },[])
  const fetchData = async()=>{
    let url = `${apiBaseUrl}/applicant/getProfileDetails`
    if(committee)url = `${apiBaseUrl}/panel/getCommitteeProfileDetails`
    else if(panel)url = `${apiBaseUrl}/panel/getProfileDetails`
    
    const request = await axios.get(url,{withCredentials:true})
    const requestData = request.data
    console.log(requestData)
    setData(requestData)
  }
  return (
    <Row className='w-100 d-flex justify-content-center'>
      <Col md={6}>
        <Card className='mt-3'>
          <Card.Header>
            <Card.Title>Profile</Card.Title>
          </Card.Header>
          <Card.Body>
            <Container className='d-flex align-items-center flex-column'>
          <div className='devider'>
          <FontAwesomeIcon icon={faUserCircle} className = "profileAvatar"/>

          </div>
           {data?(
            <Container className='p-0 w-100'>
            <Container className = "infoBox p-0 p-2 d-flex justify-content-between align-items-center">
              <p className='m-0 p-0'>Firstname:</p>
              <p className='m-0 p-0 ps-1 info'>{data.firstname}</p>
            </Container>
            <Container className = "infoBox p-0 p-2 d-flex justify-content-between ">
              <p className='m-0 p-0'>Middlename:</p>
              <p className='m-0 p-0 ps-1'>{data.middlename}</p>
            </Container>
            <Container className = "infoBox p-0 p-2 d-flex justify-content-between ">
              <p className='m-0 p-0'>Lastname:</p>
              <p className='m-0 p-0 ps-1'> {data.lastname}</p>
            </Container>
            <Container className = "infoBox p-0 p-2 d-flex justify-content-between ">
              <p className='m-0 p-0'>Gender:</p>
              <p className='m-0 p-0 ps-1'> {data.gender}</p>
            </Container>
            <Container className = "infoBox p-0 p-2 d-flex justify-content-between ">
              <p className='m-0 p-0'>Birthday:</p>
              <p className='m-0 p-0 ps-1'> {data.birthday}</p>
            </Container>
            <Container className = "infoBox p-0 p-2 d-flex justify-content-between ">
              <p className='m-0 p-0'>Email:</p>
              <p className='m-0 p-0 ps-1'> {data.email}</p>
            </Container>
            <Container className = "infoBox p-0 p-2 d-flex justify-content-between ">
              <p className='m-0 p-0'>Phone:</p>
              <p className='m-0 p-0 ps-1'> {data.contact}</p>
            </Container>
            
            <Button variant='secondary' className='lightButton me-1'>Change Password</Button> 
            <Button variant='light' className='lightButton me-1'>Update Profile</Button> 
           </Container>
           
           ):(<p>Loading...</p>)}
                       </Container>

          </Card.Body>
      
        </Card>
      </Col>

    </Row>
  )
}
