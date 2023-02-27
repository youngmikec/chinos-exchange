import React, {useEffect, useState, useRef} from 'react'
import { Link } from "react-router-dom";
import { AxiosResponse } from 'axios';

import { getItem, setItem } from '../../../utils';
import { ApiResponse } from '../../../common';
import logo from "../../../assets/images/logo.png";
import { VERIFY_RESET_CODE } from '../../../services';
import googleIcon from "../../../assets/icons/google-icon.png";
 
  type inputProps={
    type:string,
    placeholder:string,
    focus:boolean,
    value:string,
    id:Number
  }
  type Props = {
    changeStep: (data: number) => any
  }
  
  
const ForgotPassword2 = ( { changeStep }: Props) => {
    const inputRef = useRef<any>();
    let code: string = '';
    const [loading, setLoading] = useState<boolean>(false);
    const [resetCode, setResetCode] = useState<string>('');

    const [inputs, setInput] = useState<inputProps[]> ([
      {type:'text', placeholder:'0', focus: true, value:'', id: 0},
      {type:'text', placeholder:'0', focus: false, value:'', id: 1},
      {type:'text', placeholder:'0', focus: false, value:'', id: 2},
      {type:'text', placeholder:'0', focus: false, value:'', id: 3},
      {type:'text', placeholder:'0', focus: false, value:'', id: 4}
    ])
     const [currentFocus, setCurrentFocus]=useState<Number|undefined>();

    const changeFocuse = (id:Number) => {
      setCurrentFocus(undefined);
      const focusInput: inputProps[] = [...inputs];
      focusInput.map((e,i) => {
         if(e.id === id){
          e.focus = true;
         }
      })
      setInput(focusInput);
    }

    const changeInput=(id:Number, value:string)=>{
      code = `${code}${value}`;
      console.log('resetcode', code);
      setCurrentFocus(id);
      const tempInput:inputProps[]=[...inputs];
      //  const currentObjec=tempInput.find((e:inputProps)=>e.id=id);
     

        tempInput.map((e,i)=>{
          if(e.id==id){
            
            e.value=value;
            e.focus=false;
          }

        });
        setInput(tempInput);
         
    }

    const handleVerifyCode = () => {
      if(!!code){
        setLoading(true);
        const id = getItem('xxid');
        const data = { id, resetCode: code };
        VERIFY_RESET_CODE(data).then((res: AxiosResponse<ApiResponse>) => {
          setLoading(false);
          setItem('clientD', res.data.payload)
          changeStep(3)
        }).catch((err: any) => {
          setLoading(false);
          changeStep(2)
          console.log(err);
        })
    }
    }

   useEffect(()=>{
    if(currentFocus){
      changeFocuse(currentFocus&&currentFocus);
    }
   },[inputs])
  

  return (
    <div className="container w-full bg-white overflow-hidden ">
      <img
        src={logo}
        alt=""
        width="120px"
        height="120px"
        className="ml-8 mt-10"
      />
      <div className="flex justify-center  w-screen">
      <div className=" w-10/12 sm:w-9/12 md:w-9/12 lg:w-5/12 mt-14  ">
        <div className="text-center mb-18">
          <div className=" justify-around text-center text-4xl font-bold mb-4 text-black ">
            Forgot Password
          </div>
          <div className="text-center text-gray-400 mb-14">
          Please, Enter the verification code sent to your registered email
          </div>
          <div className="text-center  mx-auto w-9/12 text-gray-400 uppercase flex justify-between otp ">
            {inputs.map((e,i)=>{
                return(
                  <input
                  key={i}
                  type='text'
                  maxLength={1}
                  ref={e.focus ? inputRef : null}
                  autoFocus={e.focus}
                  placeholder={e.placeholder}
                  onChange={(b)=> { console.log(code += b.target.value)}}
                  className="  rounded-md w-1/5 h-14 text-center ml-2 my-6  outline-none border-gray-400 border-solid border"
                />
                )
            })}
          
          
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
          <button 
            onClick={() => handleVerifyCode()}
            className="bg-[#8652A4] text-white mb-6 block w-full rounded-lg py-4">
            { loading ? 'Verifying' : 'Verify' }
          </button>

          <p className="text-[#8652a48f] text-sm block my-4">
            Already have an account?
            <span className="text-[#8652A4] font-bold mx-2">
              <Link to="/sign-in">Sign in</Link>
            </span>
          </p>
        </div>
      </div>
      </div>
    </div>
  )
  
}

export default ForgotPassword2