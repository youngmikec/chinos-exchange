import React, { useState } from 'react';
import ForgotPassword4 from '../../components/auth-components/forgot-password/forgot-password-final'
import ForgotPasswordComp from '../../components/auth-components/forgot-password/forgot-password1'
import ForgotPassword2 from '../../components/auth-components/forgot-password/forgot-password2'
 import ForgotPassword3 from '../../components/auth-components/forgot-password/forgot-password3';

const ForgotPassword = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <>
      {
        step === 1 && 
        <ForgotPasswordComp changeStep={setStep} />
      }
      {
        step === 2 && 
        <ForgotPassword2 changeStep={setStep}/>
      }
      {
        step === 3 && 
        <ForgotPassword3 changeStep={setStep}/>
      }
      {
        step === 4 && 
        <ForgotPassword4 changeStep={setStep}/>
      }
    
    </>
  )
}

export default ForgotPassword;