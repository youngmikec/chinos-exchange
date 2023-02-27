import React,{useState} from "react";
import { AxiosResponse } from "axios";
import { Link } from "react-router-dom";

import '../style.css';
import { ApiResponse } from "../../../common";
import logo from "../../../assets/images/logo.png";
import { SEND_PASSWORD_RESET_CODE } from '../../../services';
import googleIcon from "../../../assets/icons/google-icon.png";
import { setItem } from "../../../utils";

type Prop = {
  changeStep: (data: number) => any
}
const ForgotPasswordComp = ({ changeStep }: Prop) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<{value: string, error: boolean}>({value: '', error: false});

    const inputCheck = (): boolean => {
      let isValid: boolean = true;
      if(email.value === '' || undefined || null){
          isValid = false;
          setEmail({...email, error: true});
      }else{
          setEmail({...email, error: false});
      }
      return isValid;
    }

    const handleSendResetCode = () => {
        setLoading(true);
        if(inputCheck()){
          SEND_PASSWORD_RESET_CODE(email.value).then((res: AxiosResponse<ApiResponse>) => {
              setLoading(false);
              const { id } = res.data.payload;
              setItem('xxid', id);
              changeStep(2)
            }).catch(err => {
              setLoading(false);
              changeStep(1)
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
        <div className=" w-10/12 sm:w-9/12 md:w-9/12 lg:w-5/12 mt-14  ">
          <div className="text-center mb-18">
            <div className=" justify-around text-center text-4xl font-bold mb-4 text-black ">
              Forgot Password
            </div>
            <div className="text-center text-gray-400 mb-14">
              Please input your email adress to fix the issue
            </div>
            <div className="text-left mx-auto w-9/12 text-gray-400 uppercase ">
              <label> Email</label>
              <br />
              <input
                type="email"
                value={email.value}
                onChange={(e) => setEmail({...email, value: e.target.value})}
                placeholder="Please enter your email"
                className=" input-border rounded-md w-full h-14 pl-5 mt-3 outline-none"
              />
            </div>
          </div>

          {/* <div className="relative my-6 text-center">
            <hr className="border-[#8652a48f] w-full" />
            <p className="text-[#8652A4] text-sm px-4 bg-white absolute -top-3 left-56">
              or sign up with
            </p>

            <img src={googleIcon} className="my-4 mx-auto " alt="google" />
          </div> */}

          <div className="w-8/12 my-4 mx-auto text-center">
            <button onClick={() => handleSendResetCode() }
            className="bg-[#8652A4] text-white mb-6 block w-full rounded-lg py-4">
              { loading ? 'sending' : 'Next' }
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

export default ForgotPasswordComp;
