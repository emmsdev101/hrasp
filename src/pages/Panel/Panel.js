import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import PanelHeader from '../../components/header/PanelHeader'
import { apiBaseUrl } from '../../config'
import Conference from '../Conference/Conference'
import EvaluationSheets from '../EvaluationSheets/EvaluationSheets'
import PanelDashboard from '../PanelDashboard/PanelDashboard'
import PanelHiring from '../PanelHiring/PanelHiring'
import Profile from '../Profile/Profile'
import RequestHiring from '../RequestHiring/RequestHiring'

import Application from './../Applications/Application'
export default function Panel() {

  const [profileDetails, setProfileDetails] = useState("")
  useEffect(()=>{
    const auth = async()=>{
      let authReq
      try{
        authReq = await axios.get(apiBaseUrl+"/panel/getProfileDetails",{withCredentials:true});
        const authData = authReq.data
        console.log(authData)
        setProfileDetails(authData)

      }
      catch(e){
        console.log(e)
       e.code === "ERR_BAD_REQUEST"?window.location.replace("/panel-login"):console.log("logged in")
      }        
    }
    auth()
  },[])
  return (
    <>
    <PanelHeader profileDetails = {profileDetails}/>
    <Container fluid m={0} p={0} className = "Main p-0 m-0">
    <Routes>
      <Route exact path="/" element={<PanelDashboard />} />
      <Route exact path="/dashboard" element={<PanelDashboard />} />
      <Route exact path='/hiring' element={<PanelHiring/>}/>
      <Route exact path="/profile" element={<Profile panel={true} />} />
      <Route exact path='/request-hiring' element={<RequestHiring/>}/>
      <Route exact path='/edit-hiring/:id' element={<RequestHiring edit = {true}/>}/>
      <Route exact path="/applicants/:tab" element = {<Application panel = {true}/>}/>
      <Route exact path="/conference/:roomId/:applicantionsId" element ={<Conference panel={true} profileData = {profileDetails}/>}/>
      <Route exact path="/evaluation/:id/:applicationId" element={<EvaluationSheets panel={true} head={false} committee = {false}/>}/>
      <Route exact path="/view-evaluation/:id" element = {<EvaluationSheets view = {true} panel = {true}/> }/>


    </Routes>
    </Container>
    </>
  )
}
