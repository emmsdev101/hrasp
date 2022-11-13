import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft
  } from "@fortawesome/free-solid-svg-icons";

import './style.css'
import axios from "axios";
import { apiBaseUrl } from "../../config";

export default function ApplicationDetails({close, applicantionId}) {
    const [pds, setPds] = useState([])
    const [tors, setTors] = useState([])
    const [certs, setCerts] = useState([])
    

    useEffect(()=>{
        const fetch = async() => {
            const getApplicationDetails = await axios.get(apiBaseUrl+"/admin/getApplicationDetails/"+applicantionId, {
                withCredentials: true,
              } )
            const appdata = getApplicationDetails.data
            
            const pdsJson = JSON.parse(appdata.pds)
            const torsJson = JSON.parse(appdata.tor)
            const certsJson = JSON.parse(appdata.certificates)
            console.log(certsJson)
            setPds(pdsJson.pds)
            setTors(torsJson.tors)
            setCerts(certsJson.certificates)
        }
        fetch()
    },[])
  return (
    <div className="applicantsBox m-1 p-3">
      <Row>
        <Col md={4} className = "d-flex flex-direction-row align-items-center">
        <button className="btn bg-transparent" onClick={()=>close(false)}><FontAwesomeIcon icon={faArrowLeft}/> </button>
          <h4 className="cardTtle p-0 m-0">Application Details</h4>
        </Col>
        <Col className="d-flex justify-content-end">
          <div><Button className="btn-success me-2" size = "sm">Accept</Button></div>
         <div> <Button variant="secondary" size = "sm">Reject</Button></div>
        </Col>
      </Row>
      <br></br>
      <div className="ps-4 pe-4 pb-4">        
        <h6 className = "mb-3">Personal Data Sheet:</h6>
        <hr></hr>
        <Row>
            {pds.map((path, idx)=>(
               <Col md = {4} className = "p-2"> <img className="imgs" src={apiBaseUrl+'/'+path} alt = ""/></Col>
            ))}
            
        </Row>
        <h6 className = "mb-3 mt-3">Transcript of Records:</h6>
        <hr></hr>
        <Row>
        {tors.map((path, idx)=>(
               <Col md = {4} className = "p-2"> <img src={apiBaseUrl+'/'+path} className="imgs" alt = ""/></Col>
            ))}
        </Row>
      
        <h6 className = "mb-3 mt-3">Seminar/Training Certificates:</h6>
          <hr/>
        <Row>
        {certs.map((path, idx)=>(
               <Col md = {4} className = "p-2"> <img src={apiBaseUrl+'/'+path} className="imgs" alt = ""/></Col>
            ))}
        </Row>
      </div>
    </div>
  );
}
