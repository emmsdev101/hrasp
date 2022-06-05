import React, { useState } from 'react'

export default function useSignup() {
    const [step, setStep] = useState(1);
    const next = ()=>{
        setStep(step+1);
    }
    const back = () => {
        setStep(step - 1);
    }
  return {
    step,
    next,
    back
  }
}
