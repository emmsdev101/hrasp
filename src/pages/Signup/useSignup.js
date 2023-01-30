import axios from "axios";
import { useState, useEffect } from "react";
import { apiBaseUrl } from "../../config";

export default function useSignup() {
  const [step, setStep] = useState(1);

  const [registration, setRegistration] = useState({});

  useEffect(() => {
    console.log(registration);

    if(step === 4){
      console.log("registring")
      registerRequest(registration);
    }
  }, [registration, step]);

  const savePrimary = async(data) => {
    
    setRegistration(data);
    setStep(step + 1);
    console.log(data);
  };
  const savePassword = (data) => {
    setRegistration({ ...registration, password: data });
    setStep(step + 1);
  };
  const next = () => {
    setStep(step + 1);
  };
  const back = () => {
    setStep(step - 1);
  };

  const verifyEmail = async() =>{
    console.log("Verifying Email")
    const request = await axios.post(apiBaseUrl+"/verifyEmail",{email:registration.email})
    console.log(request.data)
  }
  const verifyCode = async(code) => {
    const request = await axios.post(apiBaseUrl+"/verifyCode",{code:code, email:registration.email})
    return request.data
   
  }
  const registerRequest = async(userData) => {
    const registration = await axios.post(apiBaseUrl + "/applicant/register", {
      userData,
    });
    console.log(registration)
    if(registration.status === 200){
      const registrationData = registration.data
      if(registrationData.status === "success"){
        setStep(0);
      }
    }
  }

  return {
    step,
    next,
    savePrimary,
    savePassword,
    back,
    verifyEmail,
    verifyCode
  };
}


