import React from "react";
import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import Header from "../../components/header/AdminHeader";
import Registration from "./Registration";
import ConfirmEmail from "./ConfirmEmail";
import "./signup.css";
import AddPassword from "./AddPassword";
import useSignup from "./useSignup";
import Registered from "./Registered";
export default function Signup() {
  const { step, next, savePrimary, savePassword, back, verifyEmail,
    verifyCode
        
  } = useSignup();


  return (
    <Container fluid className="signup">
      {step === 0 ? <Registered /> : ""}
      {step === 1 ? <Registration step={step} back={back} next={savePrimary}   /> : ""}
      {step === 2 ? <ConfirmEmail step={step} back={back} next={next} verifyEmail = {verifyEmail} verifyCode = {verifyCode}/> : ""}
      {step === 3 ? <AddPassword step={step} back={back} next={savePassword} /> : ""}
    </Container>
  );
}
