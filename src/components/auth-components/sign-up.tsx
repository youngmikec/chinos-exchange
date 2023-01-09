import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

import logo from '../../assets/images/logo.png';
import googleIcon from '../../assets/icons/google-icon.png';
import './style.css';
import { SIGN_UP_USER } from '../../services';
import { ApiResponse } from '../../common';
import { setItem } from '../../utils';

const SignUpComp = () => {
    const url: any = process.env.REACT_APP_BASE_URL || '';
    const [loading, setLoading] = useState<boolean>(false);
    const [isDefault, setIsDefault] = useState<boolean>(true);
    const [firstName, setFirstName] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [lastName, setLastName] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [email, setEmail] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [phone, setPhone] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [country, setCountry] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [password, setPassword] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [confirmPassword, setConfirmPassword] = useState<{value: string, error: boolean}>({value: '', error: false});

    const firstStageCheck = (): boolean => {
        let isValid: boolean = true;
        if(firstName.value === '' || undefined || null){
            isValid = false;
            setFirstName({...firstName, error: true});
        }else{
            setFirstName({...firstName, error: false});
        }

        if(lastName.value === '' || undefined || null){
            isValid = false;
            setLastName({...lastName, error: true});
        }else{
            setLastName({...lastName, error: false})
        }

        if(phone.value === '' || undefined || null){
            isValid = false;
            setPhone({...phone, error: true});
        }else{
            setPhone({...phone, error: false})
        }

        if(country.value === '' || undefined || null){
            isValid = false;
            setCountry({...country, error: true});
        }else{
            setCountry({...country, error: false})
        }

        return isValid;
    }

    const secondStageCheck = (): boolean => {
        let isValid: boolean = true;
        if(email.value === '' || undefined || null){
            isValid = false;
            setEmail({...email, error: true});
        }else{
            setEmail({...email, error: false})
        }

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

        return isValid;
    }

    const inputCheck = () => {
        return (firstStageCheck() && secondStageCheck()) ? true : false;
    }
    
    const handleSignUp = () => {
        setLoading(true);
        if(inputCheck()){
            const data = {
                firstName: firstName.value,
                lastName: lastName.value,
                phone: phone.value,
                email: email.value, 
                password: password.value,
                country: country.value
            };

            SIGN_UP_USER(data).then((res: AxiosResponse<ApiResponse>) => {
                setLoading(false);
                const { id } = res.data.payload;
                setItem('xxid', id);
                window.location.href = '/verify';
            }).catch(err => {
                setLoading(false);
                console.log(err);
            })
        }
    }
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className='hidden md:block lg:block auth-bg flex-1'></div>

                <div className='flex-1'>
                    <div className="flex justify-end mb-4">
                        <div>
                        <Link to='/'>
                            <img src={logo} alt="logo" width="120px" height="120px" />
                        </Link>
                        </div>
                    </div>
                    
                    {
                        isDefault ?
                        <div className="mx-auto w-10/12">  
                            <h1 className='text-3xl font-bold mb-4'>Sign UP</h1>
                            <p className='text-gray-400 my-4 text-sm'>To sign up please enter the following details</p>

                            <div className='my-6'>
                                <label htmlFor="firstName" className='font-bold text-gray-400'>First name</label>
                                <div className={firstName.error ? 'error-border rounded-md' : 'input-border rounded-md'}>
                                    <input 
                                        type="text" 
                                        value={firstName.value}
                                        onChange={(e) => setFirstName({...firstName, value: e.target.value})}
                                        className='w-full border-0 px-4 py-2 text-gray-400' 
                                        placeholder='please enter your first name' 
                                    />
                                </div>
                            </div>

                            <div className='my-6'>
                                <label htmlFor="lastName" className='font-bold text-gray-400'>Last Name</label>
                                <div className={lastName.error ? 'error-border rounded-md' : 'input-border rounded-md'}>
                                    <input 
                                        type="text" 
                                        value={lastName.value}
                                        onChange={(e) => setLastName({...lastName, value: e.target.value})}
                                        className='w-full border-0 px-4 py-2 text-gray-400' 
                                        placeholder='please enter your last name' 
                                    />
                                </div>
                            </div>

                            <div className='my-6'>
                                <label htmlFor="Phone" className='font-bold text-gray-400'>Phone Number</label>
                                <div className={phone.error ? 'error-border rounded-md' : 'input-border rounded-md'}>
                                    <input 
                                        type="text" 
                                        value={phone.value}
                                        onChange={(e) => setPhone({...phone, value: e.target.value})}
                                        className='w-full border-0 px-4 py-2 text-gray-400' 
                                        placeholder='please enter your phone number' />
                                </div>
                            </div>

                            <div className='my-6'>
                                <label htmlFor="Phone" className='font-bold text-gray-400'>Country</label>
                                <div className={country.error ? 'error-border rounded-md' : 'input-border rounded-md'}>
                                    <select 
                                        name="country" 
                                        id="country" 
                                        className='w-full border-0 px-4 py-2 text-gray-400'
                                        onChange={(e) => setCountry({...country, value: e.target.value})}
                                    >
                                        <option value="">Select country</option>
                                        <option value="NG">Nigeria</option>
                                        <option value="GH">Ghana</option>
                                    </select>
                                </div>
                            </div>


                            <div className="relative my-6 text-center">
                                <hr className='border-[#8652a48f] w-full' />
                                <p className='text-[#8652A4] text-sm px-4 bg-white absolute -top-3 left-24 sm:left-60 md:left-32 lg:left-56 xl:left-80 '>or sign in with</p>
                                <img src={googleIcon} className="my-4 mx-auto" alt="google" />
                            </div>

                            <div className="w-8/12 my-4 mx-auto text-center">
                                <button 
                                    onClick={() => {
                                        if(firstStageCheck()){
                                            setIsDefault(false);
                                        }
                                    } } 
                                    className='bg-[#8652A4] text-white mb-6 block w-full rounded-lg py-4'
                                >
                                    Next
                                </button>
                                <p className='text-[#8652a48f] text-sm block my-4'>Already have an account?   
                                    <span className='text-[#8652A4] font-bold'><Link to="/sign-in">Sign in</Link></span>
                                </p>
                            </div>
                        </div> :

                        <div className="mx-auto w-10/12">  
                            <h1 className='text-3xl font-bold mb-4'>Sign UP</h1>
                            <p className='text-gray-400 my-4 text-sm'>To sign up please enter the following details</p>

                            <div className='my-6'>
                                <label htmlFor="email" className='font-bold text-gray-400'>Email</label>
                                <div className={password.error ? 'error-border rounded-md' : 'input-border rounded-md'}>
                                    <input 
                                        type="email" 
                                        value={email.value}
                                        onChange={(e) => setEmail({...email, value: e.target.value})}
                                        className='w-full border-0 px-4 py-2 text-gray-400' 
                                        placeholder='please enter your email' 
                                    />
                                </div>
                            </div>

                            <div className='my-6'>
                                <label htmlFor="password" className='font-bold text-gray-400'>Password</label>
                                <div className={password.error ? 'error-border rounded-md' : 'input-border rounded-md'}>
                                    <input 
                                        type="password" 
                                        value={password.value}
                                        onChange={(e) => setPassword({...password, value: e.target.value})}
                                        className='w-full border-0 px-4 py-2 text-gray-400' 
                                        placeholder='please enter your password' 
                                    />
                                </div>
                            </div>

                            <div className='my-6'>
                                <label htmlFor="confirmPassword" className='font-bold text-gray-400'>Confirm password</label>
                                <div className={confirmPassword.error ? 'error-border rounded-md' : 'input-border rounded-md'}>
                                    <input 
                                        type="password" 
                                        value={confirmPassword.value}
                                        onChange={(e) => setConfirmPassword({...confirmPassword, value: e.target.value})}
                                        className='w-full border-0 px-4 py-2 text-gray-400' 
                                        placeholder='confirm your password' />
                                </div>
                            </div>


                            <div className="relative my-6 text-center">
                                <hr className='border-[#8652a48f] w-full' />
                                <p className='text-[#8652A4] text-sm px-4 bg-white absolute -top-3 left-24 sm:left-60 md:left-32 lg:left-56 xl:left-80 '>or sign in with</p>
                                <img src={googleIcon} className="my-4 mx-auto" alt="google" />
                            </div>

                            <div className="w-8/12 my-4 mx-auto text-center">
                                <button 
                                    onClick={() => handleSignUp() } 
                                    className='bg-[#8652A4] text-white mb-6 block w-full rounded-lg py-4'
                                >
                                    Sign Up
                                </button>
                                <p className='text-[#8652a48f] text-sm block my-4'>Already have an account?   
                                    <span className='text-[#8652A4] font-bold'><Link to="/sign-in">Sign in</Link></span>
                                </p>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default SignUpComp;