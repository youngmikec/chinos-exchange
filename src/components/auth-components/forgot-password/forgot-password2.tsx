import React, {useEffect, useState, useRef} from 'react'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosResponse } from 'axios';

import { ApiResponse } from '../../../common';
import { getItem, setItem } from '../../../utils';
import { VERIFY_RESET_CODE } from '../../../services';

// icons && images
import { AiFillLeftCircle } from 'react-icons/ai';
import logo from "../../../assets/images/logo-white.png";
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

    const notify = (type: string, msg: string) => {
        if (type === "success") {
          toast.success(msg, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
    
        if (type === "error") {
          toast.error(msg, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
    };

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
          const { message } = err.response.data;
          notify('error', message);
          changeStep(2)
        })
    }
    }

   useEffect(()=>{
    if(currentFocus){
      changeFocuse(currentFocus&&currentFocus);
    }
   },[inputs])
  

  return (
    <>
      <div className="auth-bg py-0 sm:py-8 md:py-8 lg:py-8">
        <div className='fixed left-8 top-8'>
          <div>
              <Link to='/'>
                  <img src={logo} alt="logo" width="120px" height="120px" />
              </Link>
          </div>
        </div>

        <div className='fixed right-8 top-8'>
          <div className='text-white'>
              <p className='text-white text-xl inline-flex cursor-pointer' onClick={() => changeStep(1)}>
                <AiFillLeftCircle className='mr-2 my-auto' />
                <span>Back</span>
              </p>
          </div>
        </div>

        <div className="mx-auto w-full sm:w-9/12 md:w-7/12 lg:w-5/12 bg-white h-screen rounded-lg px-8 py-8">
          <div className='text-center my-10'>
              <h1 className='text-3xl font-bold mb-4'>Forgot Password</h1>
              <p className='text-gray-400 my-4 text-sm'>Please, Enter the verification code sent to your registered email</p>
          </div> 

          <div className='my-10'>
              <div className='my-2 text-center'>
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
                      className="rounded-md w-2/12 h-14 text-center ml-2 my-6  outline-none border-gray-400 border-solid border"
                    />
                    )
                })}

              </div>
          </div>

          <div className="w-8/12 my-4 mx-auto text-center">
            <button 
              onClick={() => handleVerifyCode()}
              className="bg-[#8652A4] text-white mb-6 block w-full rounded-lg py-3 sm:py-3 md:py-5 lg:py-6">
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
      <ToastContainer />
    </>
  )
  
}

export default ForgotPassword2