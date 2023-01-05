import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import logo from '../../assets/images/logo.png';
import googleIcon from '../../assets/icons/google-icon.png';
import { Link } from 'react-router-dom';
import { getItem } from '../../utils';
import { VERIFY_EMAIL } from '../../services';
import { ApiResponse } from '../../common';

const EmailVerificationComp = () => {
    const url: any = process.env.REACT_APP_BASE_URL || '';
    const [loading, setLoading] = useState<boolean>(false);
    const [code, setCode] = useState<{value: string, error: boolean}>({value: '', error: false});

    const inputCheck = (): boolean => {
        let isValid: boolean = true;
        if(code.value === '' || undefined || null){
            isValid = false;
            setCode({...code, error: true});
        }else{
            setCode({...code, error: false});
        }
        return isValid;
    }

    const handleEmailVerification = () => {
        if(inputCheck()){
            const id = getItem('xxid');
            const data = { id, code: code.value };

            VERIFY_EMAIL(data).then((res: AxiosResponse<ApiResponse>) => {
                setLoading(false);
                window.location.href = '/sign-in';
            }).catch(err => {
                setLoading(false);
                console.log(err);
            })
        }
    }

    return (
        <>
            <div className='w-full'>
                <div className='mb-6 flex justify-start'>
                    <div>
                        <img src={logo} alt="logo" width="120px" height="120px" />
                    </div>
                </div>

                <div className="mx-auto w-10/12 sm:w-9/12 md:w-8/12 lg:w-5/12">
                    <div className='text-center mb-6'>
                        <h1 className='text-4xl font-bold mb-4'>Email Verification</h1>
                        <p className='text-gray-400 my-4 text-sm'>Let's verify your email</p>
                        <p className='text-gray-400 my-4 text-sm'>A six digit code has been sent to your registration email ********nonso@gmail.com</p>
                    </div>

                    <div className='my-6'>
                        <label htmlFor="email" className='font-bold text-gray-400 my-5'>Verification Code</label>
                        <div className={code.error ? 'error-border rounded-md' : 'input-border rounded-md'}>
                            <input 
                                type="text" 
                                value={code.value}
                                onChange={(e) => setCode({...code, value: e.target.value})}
                                className='w-full border-0 px-4 py-2 text-gray-400' 
                                placeholder='please enter your verification code' 
                            />
                        </div>
                    </div>

                    <div className="relative my-8 text-center">
                        <hr className='border-[#8652a48f] w-full' />
                        <p className='text-[#8652A4] text-sm px-4 bg-white absolute -top-3 left-56 '>or sign in with</p>
                        <img src={googleIcon} className="my-4 mx-auto" alt="google" />
                    </div>

                    <div className="w-8/12 my-4 mx-auto text-center">
                        <button 
                            onClick={() => handleEmailVerification() } 
                            className='bg-[#8652A4] text-white mb-6 block w-full rounded-lg py-4'
                        >
                            Verify
                        </button>
                        <p className='text-[#8652a48f] text-sm block my-4'>Already have an account?    
                            <span className='text-[#8652A4] font-bold'><Link to="/sign-in">  Sign In</Link></span>
                        </p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default EmailVerificationComp;