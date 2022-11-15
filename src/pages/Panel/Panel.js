import React from 'react'
import { Container, Row } from 'react-bootstrap'
import PanelHeader from '../../components/header/PanelHeader'

export default function Panel() {
  return (
    <>
    <PanelHeader/>
    <Container fluid m={0} p={0} className = "Main">
     <Row>
        <h4 className="pageTitle">Panel</h4>
      </Row>
    </Container>
    </>
  )
}
