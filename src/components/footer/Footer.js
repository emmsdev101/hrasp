import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
  return (
    <Container fluid className='footer'>
        <Container className='d-flex justify-content-center align-items-center'>
        <h6>West Visayas State University Calinog Campus</h6>
        
        </Container>
        <hr/>
        <Container className='d-flex justify-content-center align-items-center'>
                <a href = "#" className='m-1'>Contact Us</a>
                <a href = "/admin" className='m-1' >Admin Portal</a>
                <a href = "#" className='m-1'>About Us</a>
        </Container>
    </Container>
  )
}
