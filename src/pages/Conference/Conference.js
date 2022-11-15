import React from 'react'
import { Container, Row } from 'react-bootstrap'
import PanelHeader from '../../components/header/PanelHeader'

import "./conference.css"
export default function Conference() {

  const Loading = ()=>{
    return(
      <Container fluid className = "loadingBox">
        <h3>Loading</h3>
        <p>Creating a Meeting...</p>
      </Container>
    )
  }
  return (
    <Container fluid m={0} p={0} className = "Main">
      <Loading/>
    </Container>
  )
}
