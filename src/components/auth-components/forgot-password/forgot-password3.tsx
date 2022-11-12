import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AxiosResponse } from "axios";

import { ApiResponse } from "../../../common";
import logo from "../../../assets/images/logo.png";
import { RESET_PASSWORD } from "../../../services";
import googleIcon from "../../../assets/icons/google-icon.png";
import { getItem } from "../../../utils";

type Prop = {
  changeStep: (data: number) => any
}

const ForgotPassword3 = ({ changeStep }: Prop) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<{value: string, error: boolean}>({value: '', error: false});
  const [confirmPassword, setConfirmPassword] = useState<{value: string, error: boolean}>({value: '', error: false});

  const inputCheck = (): boolean => {
      let isValid: boolean = true;
      
      if(password.value === '' || undefined || null){
          isValid = false;
          setPassword({...password, error: true});
      }else{
          setPassword({...password, error: false})
      }

      if(confirmPassword.value === '' || undefined || null){
          isValid = false;
          setConfirmPassword({...confirmPassword, error: true});
      }else{
          setConfirmPassword({...confirmPassword, error: false})
      }

      if(confirmPassword.value !== password.value) isValid = false;

      return isValid;
  }

  const handleChangePassword = () => {
    if(inputCheck()){
          setLoading(true);
          const clientDetail = getItem('clientD');
          const data = { email: clientDetail.email, password: password.value};
          RESET_PASSWORD(data).then((res: AxiosResponse<ApiResponse>) => {
              setLoading(false);
              changeStep(4)
              console.log(res.data.message);
            }).catch(err => {
              setLoading(false);
              changeStep(3)
              console.log(err);
          })
      }
  }

  return (
    <div className="container w-full bg-white  ">
      <img
        src={logo}
        alt=""
        width="120px"
        height="120px"
        className="ml-6 mt-10"
      />
      <div className="flex justify-center  w-screen">
      <div className=" w-10/12 sm:w-9/12 md:w-9/12 lg:w-5/12 mt-6  ">
        <div className="text-center mb-18">
          <div className="justify-around text-center text-4xl font-bold mb-0 text-black ">
            New Password
          </div>
          <div className="text-center text-gray-400 mb-9">
            Please input new password
          </div>

          <div className="text-left mx-auto w-9/12 text-gray-400 uppercase mb-5 ">
            <label htmlFor="password">password</label>
            
            <input
              type="password"
              name="confirmPassword"
              placeholder="Please enter your new password"
              value={password.value}
              onChange={(e) => { setPassword({...password, value: e.target.value})}}
              className={`${ password.error ? 'error-border' : 'input-border' } rounded-md w-full h-12 pl-5 mt-1 outline-none`}
            />
          </div>

          <div className="text-left mx-auto w-9/12 text-gray-400 uppercase ">
            <label htmlFor="confirmPassword"> confirm password</label>
            
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword.value}
              onChange={(e) => { setConfirmPassword({...confirmPassword, value: e.target.value})}}
              placeholder="confirm password"
              className={`${ confirmPassword.error ? 'error-border' : 'input-border' } rounded-md w-full h-12 pl-5 mt-1 outline-none`}
            />
          </div>
        </div>

        <div className="relative my-8 text-center">
          <hr className="border-[#8652a48f] w-9/12 mx-auto"/>
          <p className="text-[#8652A4] text-sm px-4 bg-white absolute -top-3 left-56 mb-3">
            or sign up with
          </p>

          <img src={googleIcon} className="my-5 mx-auto " alt="google" />
        </div>

        <div className="w-8/12 my-4 mx-auto text-center">
          <button 
            onClick={() => handleChangePassword()}
            className="bg-[#8652A4] text-white mb-6 block w-full rounded-lg py-4"
          >
            { loading ? 'loading' : 'Submit' }
          </button>

          <p className="text-[#8652a48f] text-sm block my-4">
            Already have an account?
            <span className="text-[#8652A4] font-bold">
              <Link to="/sign-in">Sign in</Link>
            </span>
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ForgotPassword3;
