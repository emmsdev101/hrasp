import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import BoardHeader from '../../components/header/BoardHeader'
import PanelHeader from '../../components/header/PanelHeader'
import { apiBaseUrl } from '../../config'
import Conference from '../Conference/Conference'
import EvaluationSheets from '../EvaluationSheets/EvaluationSheets'
import PanelDashboard from '../PanelDashboard/PanelDashboard'
import PanelHiring from '../PanelHiring/PanelHiring'
import Profile from '../Profile/Profile'
import RequestHiring from '../RequestHiring/RequestHiring'

import Application from './../Applications/Application'
export default function Panel({head}) {

  const [profileDetails, setProfileDetails] = useState("")
  useEffect(()=>{
    const auth = async()=>{
      let authReq
      try{
        authReq = await axios.get(apiBaseUrl+"/panel/getCommitteeProfileDetails",{withCredentials:true});
        const authData = authReq.data
        console.log("committee data",authData)
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
    <BoardHeader profileDetails = {profileDetails} page = {head?"committee-president":"committee-member"}/>
    <Container fluid m={0} p={0} className = "Main">
    <Routes>
      <Route exact path="/" element={<PanelDashboard head = {head} committee = {true} />} />
      <Route exact path="/dashboard" element={<PanelDashboard head = {head} committee = {true}/>} />
      <Route exact path="/profile" element={<Profile head = {head} committee = {true}/>} />
      <Route exact path="/applicants/:tab" element = {<Application panel={true} head={head} committee = {true} />}/>
      <Route exact path="/evaluation/:id/:applicationId" element={<EvaluationSheets panel={true} head={head} committee = {true}/>}/>
      <Route exact path="/view-evaluation/:id" element = {<EvaluationSheets view = {true} panel = {true}/> }/>
      <Route exact path="/conference/:roomId/:applicantionsId" element ={<Conference head={head} committee = {true} />}/>

    </Routes>
    </Container>
    </>
  )
}
