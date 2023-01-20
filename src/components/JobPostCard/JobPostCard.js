import { faCheck, faDotCircle, faEdit, faPen, faStamp, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Badge, Button, Card, Col, FloatingLabel } from "react-bootstrap";
import { apiBaseUrl } from "../../config";

import './postStyle.css'

export default function JobPostCard({ data, cancelRequest, admin }) {
  const image = apiBaseUrl + "/" + data.poster;
  const title = data.title;
  const description = data.description;
  const status = data.status
  
  const [qualifications, setQualifications] = useState([])

  useEffect(()=>{
    const parseJson = async()=>{
      const qualsObj = await JSON.parse(data.qualifications)
      setQualifications(qualsObj.qualifications)
    }
    parseJson()
  },[])

  const approve = async(id) => {
    const approveReq = await axios.post(apiBaseUrl+"/admin/approve-request",{id},{withCredentials:true})
    window.location.reload()
  }
  const QualificationItem = ({title, id}) => {
    return(
                <div className="d-flex flex-direction-row justify-content-left align-items-center">
                  <FontAwesomeIcon icon={faDotCircle} color = "orange" size = "xs" className="me-1" />
                <p className="p-0 m-0">{title}</p>
                </div>
        
    )
}
  console.log(image);
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between mb-2">
          <Card.Title><Badge>Hiring</Badge> {data.departmentType}</Card.Title>
          <div className="d-flex justify-content-between">
            <h5><Badge bg={status === "approved"? "warning":"secondary"}>{status}</Badge></h5>
            {status !== "approved" && !admin?(
              <Button size="sm" variant="none" href = {"/panel/edit-hiring/"+data.id}>
              <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
            </Button>
            ):""}
          </div>
        </div>
        <h6>Department: <Badge bg="info">{data.department}</Badge></h6> 
        <h6>Position: <Badge bg="info">{data.title}</Badge></h6> 
        <h6 className = "mb-3">Person Needed: <Badge bg="info">{data.num_persons}</Badge></h6>

        <p className="description">{description}</p>
        <p>Qualifications:</p>
        <div className="ps-5 ">
        {qualifications.map((quals, idx)=>(
          <QualificationItem title={quals} id = {idx}/>
        ))}
        </div>
        <Card.Text className = "text-muted mt-5 mb-0">Posted on: {data.date}</Card.Text>
      </Card.Body>
      <Card.Footer className="">
        {status === "approved"?(<Button size="sm" className="me-1" variant="warning">
          Mark Close
        </Button>):<Button size="sm" variant="danger" className="me-1" onClick={()=>cancelRequest(data.id)}>
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Cancel 
        </Button>}

        {admin && status === "pending"? 
        <Button size="sm" variant="primary" className="me-1"  onClick={()=>approve(data.id)}>
        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Approve
      </Button>
        :""}
      </Card.Footer>
    </Card>
  );
}
