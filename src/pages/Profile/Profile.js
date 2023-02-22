import { faPen, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Card, Container, Button, Form } from "react-bootstrap";
import { apiBaseUrl } from "../../config";

import Filter from "../../components/Filter/Filter";
import ChangePassword from "./ChangePassword";

export default function Profile({ panel, committee }) {
  const [data, setData] = useState({});
  const [edit, setEdit] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("Male");
  const [changePassword, setChangePassword] = useState(false)

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const handleMiddlename = (e) => {
    setMiddlename(e.target.value);
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleBirthday = (e) => {
    setBirthday(e.target.value);
    console.log(e.target.value)
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleContact = (e) => {
    setContact(e.target.value);
  };

  const editProfile = () => {
    setEdit(true);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let url = `${apiBaseUrl}/applicant/getProfileDetails`;
    if (committee) url = `${apiBaseUrl}/panel/getCommitteeProfileDetails`;
    else if (panel) url = `${apiBaseUrl}/panel/getProfileDetails`;

    const request = await axios.get(url, { withCredentials: true });
    const requestData = request.data;
    console.log(requestData);
    setData(requestData);
    setFirstname(requestData.firstname)
    setMiddlename(requestData.middlename)
    setLastname(requestData.lastname)
    setGender(requestData.gender)
    setBirthday(requestData.birthday)
    setEmail(requestData.email)
    setContact(requestData.contact)

  };
  const submit = async()=>{
    let url = `${apiBaseUrl}/applicant/editProfile`

    const editRequest = await axios.post(url,{
      firstname,
      middlename,
      lastname,
      gender,
      birthday,
      contact
    },{withCredentials:true})

    const result = editRequest.data
    if(result.success){
      fetchData();      
      setEdit(false)
    }
    else{
      alert("Failed to update account")
    }
  }
  const handleClose  = () => {
    setChangePassword(!changePassword)
  }
  return (
    <Row className="w-100 d-flex justify-content-center">
      <ChangePassword show={changePassword} handleClose = {handleClose}/>
      <Col md={6}>
        <Card className="mt-3">
          <Card.Header>
            <Card.Title>Profile</Card.Title>
          </Card.Header>
          <Card.Body>
            <Container className="d-flex align-items-center flex-column">
              <div className="devider">
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="profileAvatar"
                />
              </div>
              {data ? (
                <Container className="p-0 w-100">
                  {!edit ? (
                    <Container className="infoBox p-0 p-2 d-flex justify-content-between align-items-center">
                      <p className="m-0 p-0">Firstname:</p>
                      <p className="m-0 p-0 ps-1 info">{data.firstname}</p>
                    </Container>
                  ) : (
                    <Form.Control
                      className="mb-2"
                      placeholder="Firstname"
                      value={firstname}
                      onChange={handleFirstname}
                    />
                  )}
                  {!edit ? (
                    <Container className="infoBox p-0 p-2 d-flex justify-content-between align-items-center">
                      <p className="m-0 p-0">Middlename:</p>
                      <p className="m-0 p-0 ps-1 info">{data.middlename}</p>
                    </Container>
                  ) : (
                    <Form.Control
                      className="mb-2"
                      placeholder="Middlename"
                      value={middlename}
                      onChange={handleMiddlename}
                    />
                  )}
                  {!edit ? (
                    <Container className="infoBox p-0 p-2 d-flex justify-content-between align-items-center">
                      <p className="m-0 p-0">Lastname:</p>
                      <p className="m-0 p-0 ps-1 info">{data.lastname}</p>
                    </Container>
                  ) : (
                    <Form.Control
                      className="mb-2"
                      placeholder="Lastname"
                      value={lastname}
                      onChange={handleLastname}
                    />
                  )}
                  {!edit ? (
                    <Container className="infoBox p-0 p-2 d-flex justify-content-between align-items-center">
                      <p className="m-0 p-0">Gender:</p>
                      <p className="m-0 p-0 ps-1 info">{data.gender}</p>
                    </Container>
                  ) : (
                    <Form.Select
                      className="mb-2"
                      placeholder="Gender"
                      value={gender}
                      onChange={handleGender}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      </Form.Select>
                  )}
                  {!edit ? (
                    <Container className="infoBox p-0 p-2 d-flex justify-content-between align-items-center">
                      <p className="m-0 p-0">Birthday:</p>
                      <p className="m-0 p-0 ps-1 info">{data.birthday}</p>
                    </Container>
                  ) : (
                    <Form.Control
                      type = "date"
                      className="mb-2"
                      placeholder="Birthday"
                      value={birthday}
                      onChange={handleBirthday}
                    ></Form.Control>
                  )}
                  {!edit ? (
                    <Container className="infoBox p-0 p-2 d-flex justify-content-between align-items-center">
                      <p className="m-0 p-0">Email:</p>
                      <p className="m-0 p-0 ps-1 info">{data.email}</p>
                    </Container>
                  ) : (
                    ""
                  )}
                  {!edit ? (
                    <Container className="infoBox p-0 p-2 d-flex justify-content-between align-items-center">
                      <p className="m-0 p-0">Contact:</p>
                      <p className="m-0 p-0 ps-1 info">{data.contact}</p>
                    </Container>
                  ) : (
                    <Form.Control
                      className="mb-2"
                      placeholder="Contact"
                      value={contact}
                      onChange={handleContact}
                    />
                  )}
                  {edit?(
                    <React.Fragment>
                      <Button variant="success" className=" me-1" onClick={submit}>
                    Save
                  </Button>
                  <Button variant="danger" className=" lightButton me-1" onClick={()=>setEdit(false)}>
                      Cancel
                    </Button>

                    </React.Fragment>
                  ):(
                    <React.Fragment>
                    <Button variant="secondary" className="lightButton me-1" onClick={handleClose}>
                      Change Password
                    </Button>
                    <Button
                      variant="light"
                      className="lightButton me-1"
                      onClick={editProfile}
                    >
                      Update Profile
                    </Button>
                    </React.Fragment>
                  )}
                </Container>
              ) : (
                <p>Loading...</p>
              )}
            </Container>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
