import React from "react";
import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import Header from "../../components/header/AdminHeader";
import Registration from "./Registration";
import ConfirmEmail from "./ConfirmEmail";
import "./signup.css";
import AddPassword from "./AddPassword";
import useSignup from "./useSignup";
export default function Signup() {
  const {step, next, back} = useSignup();
  return (
    <Container fluid className="signup">
      {step === 1? 
      <Registration step = {step} back = {back} next = {next}/>:''}
     {step === 2?
     <ConfirmEmail step = {step} back = {back} next = {next}/>: ''}
      {step === 3?
      <AddPassword step = {step} back = {back} next = {next}/>:''}
    </Container>
  );
}
