import {useState, useEffect } from 'react'

export default function useSignup() {
    const [step, setStep] = useState(1);

    const [registration, setRegistration] = useState({})

useEffect(()=>{
  console.log(registration)
},[registration])
    const savePrimary = (data)=>{
        setStep(step+1);
        setRegistration(data)
        console.log(data)
    }
    const savePassword = (data)=>{
      setStep(step+1);
      setRegistration({...registration, password:data})
  }
  const next = ()=>{
    setStep(step + 1);
  }
    const back = () => {
        setStep(step - 1);
    }
  return {
    step,
    next,
    savePrimary,
    savePassword,
    back,
  }
}
