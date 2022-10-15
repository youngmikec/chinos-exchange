import React from 'react'
import logo from "../../../assets/images/logo.png";
import success from '../../../assets/images/high_five.png'
import googleIcon from "../../../assets/icons/google-icon.png";
import { Link } from "react-router-dom";
const ForgotPassword4 = () => {
  return (
    <div className="container w-screen bg-white  ">
      <img
        src={logo}
        alt="Logo"
        width="120px"
        height="120px"
        className="ml-6 mt-10"
      />
      <div className="w-screen flex justify-center ">
        <div className="image ">
            <img src={success} 
            alt=""
            className='mx-auto'
             />
        
        <div className="text-center mb-18">
          <div className=" justify-around text-center text-4xl font-bold mb-2 text-purple-800 ">
            Password Recovery Successful
          </div>
          <div className="text-center text-gray-400 mb-4">
            Kindly return to sign in screen
          </div>
          <div className="relative my-6 text-center">
          <hr className="border-[#8652a48f] w-full" />
          <p className="text-[#8652A4] text-sm px-4 bg-white absolute -top-3 left-56">
            or sign up with
          </p>

          <img src={googleIcon} className="my-4 mx-auto " alt="google" />
        </div>

        <div className="w-8/12 my-4 mx-auto text-center">
          <button className="bg-[#8652A4] text-white mb-6 block w-full rounded-lg py-4">
            Verify
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
    </div>
  )
}

export default ForgotPassword4