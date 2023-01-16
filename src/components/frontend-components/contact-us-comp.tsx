import React,{useState} from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosResponse } from 'axios';

// style
import './style.css';

//icons and images
import coin from '../../assets/images/hompage_coin.png'
import { BsTelephoneFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import {BsEnvelopeFill} from "react-icons/bs";

// components
import HeroSection from '../../shared/users-frontend/hero-section';
import JoinUs from '../../shared/users-frontend/join-us';
import Footer from '../../shared/users-frontend/footer';
import { ApiResponse } from '../../common';
import { CREATE_MAIL } from '../../services';

const ContactUsComp = () => {
    const[toggle,setToggle] = useState(true);
    const[toggle1,setToggle1] = useState(true);
    const[toggle2,setToggle2] = useState(true);
    
    const [loading, setLoading] = useState<boolean>(false);
    const [fullname, setFullname] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [phone, setPhone] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [email, setEmail] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [subject, setSubject] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [message, setMessage] = useState<{value: string, error: boolean}>({value: '', error: false});

    const inputCheck = (): boolean => {
        let isValid: boolean = true;
        if(fullname.value === '' || undefined || null){
            isValid = false;
            setFullname({...fullname, error: true});
        }else{
            setFullname({...fullname, error: false});
        }
        if(phone.value === '' || undefined || null){
            isValid = false;
            setPhone({...phone, error: true});
        }else{
            setPhone({...phone, error: false})
        }
        if(email.value === '' || undefined || null){
            isValid = false;
            setEmail({...email, error: true});
        }else{
            setEmail({...email, error: false})
        }
        if(subject.value === '' || undefined || null){
            isValid = false;
            setSubject({...subject, error: true});
        }else{
            setSubject({...subject, error: false})
        }
        if(message.value === '' || undefined || null){
            isValid = false;
            setMessage({...message, error: true});
        }else{
            setMessage({...message, error: false})
        }
        return isValid;
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

    const clearStates = ( ) => {
        setLoading(false);
        setFullname({value: '', error: false});
        setPhone({value: '', error: false});
        setEmail({value: '', error: false});
        setSubject({value: '', error: false});
        setMessage({value: '', error: false});
    }

    const handleSendMail = () => {
        setLoading(true);
        if(inputCheck()){
            const data = { 
                fullName: fullname.value,
                phone: phone.value,
                email: email.value,
                subject: subject.value,
                message: message.value,
            };
            CREATE_MAIL(data).then((res: AxiosResponse<ApiResponse>) => {
                setLoading(false);
                const { success, message } = res.data;
                if(success){
                    setLoading(false);
                    notify('success', message);
                    clearStates();
                }
                
            }).catch(err => {
                setLoading(false);
                const { message } = err.response.data;
                notify('error', message);
            })
        }
        setLoading(false);
    }

    return (
        <>
            <HeroSection>
                <div className="flex justify-center flex-row">
                    <div className='py-4 w-full my-8 '>
                        <div className='mt-8'>
                            <h3 className='text-5xl font-bold mt-8 mb-4 text-white text-center'>We’re Available 24/7 to Attend <br /> To Our Customer</h3>
                            <p className='text-sm font-thin text-center w-3/4 mt-4 mb-6 mx-auto text-white'>Get answers to any question or inquiry you might have</p>
                            <img src={coin} alt="" className=' my-8 mx-auto animate-pulse duration-75'  />
                        </div>
                    </div>
                </div>
            </HeroSection>

            <div className='w-10/12 mx-auto'>
                <div className="text-center my-14">
                    <h3 className="text-gray-800 font-bold text-xl">
                        24/7 available 
                    </h3>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 z-10 my-20' >
                    <div 
                        className={toggle? 'social-box w-max p-4 hover:rounded-lg':'text-center social-box-hover w-max p-4 hover:rounded-lg'}
                        onMouseLeave={()=>setToggle(true)} onMouseOver={()=>setToggle(false)}
                    >
                        <div className='text-center'>
                            <BsWhatsapp className='mx-auto mt-4 text-3xl'/>
                            <h3 className={toggle ? 'text-center my-8 social-box-text':'text-center my-8 social-box-hover-text'}>+234 703 162 5759</h3>
                        </div>

                    </div>

                    <div 
                        className={toggle1? 'social-box w-max p-4 hover:rounded-lg':'text-center social-box-hover w-max p-4 hover:rounded-lg'}
                        onMouseLeave={()=>setToggle1(true)} onMouseOver={()=>setToggle1(false)}
                    >
                        <BsEnvelopeFill className='mx-auto mt-4 text-3xl'/>
                        <h3 className={toggle1 ? 'text-center my-8 social-box-text':'text-center my-8 social-box-hover-text'}>chinoexchange@gmail</h3>
                    </div>

                    <div
                    className={toggle2? 'social-box w-max p-4 hover:rounded-lg':'text-center social-box-hover w-max p-4 hover:rounded-lg'}
                    onMouseLeave={()=>setToggle2(true)} onMouseOver={()=>setToggle2(false)}
                    >
                        <BsTelephoneFill className='mx-auto mt-4 text-3xl'/>
                        <h3 className={toggle2 ? 'text-center my-8 social-box-text':'text-center my-8 social-box-hover-text'}>+234 703 162 5759</h3>
                    </div>

                </div>

                <div className='p-4 shadow-lg w-full mx-auto mt-20'>
                    <div className="grid grid-cols-1 
                        sm:grid-cols-2 sm:space-x-2
                        md:grid-cols-2 md:space-x-2
                        lg:grid-cols-2 lg:space-x-2 my-4 mx-auto">
                        <div className='my-6'>
                            <label htmlFor="fullname" className='font-bold text-gray-400'>Full name</label>
                            <div className={fullname.error ? 'error-border rounded-md' : 'input-border rounded-md'}>
                                <input 
                                    type="text" 
                                    value={fullname.value}
                                    onChange={(e) => setFullname({...fullname, value: e.target.value})}
                                    className={`w-full border-0 px-4 py-2 text-gray-400`}
                                    placeholder='please enter your fullname'
                                />
                            </div>
                        </div>

                        <div className='my-6'>
                            <label htmlFor="fullname" className='font-bold text-gray-400'>Phone Number</label>
                            <div className={phone.error ? 'error-border rounded-md' : 'input-border rounded-md'}>
                                <input 
                                    type="text"
                                    max={11}
                                    value={phone.value}
                                    onChange={(e) => setPhone({...phone, value: e.target.value})}
                                    className={`w-full border-0 px-4 py-2 text-gray-400 `} 
                                    placeholder='please enter your phone number'
                                />
                            </div>
                        </div>
                    
                    </div>

                    <div className="grid grid-cols-1 
                        sm:grid-cols-2 sm:space-x-2
                        md:grid-cols-2 md:space-x-2
                        lg:grid-cols-2 lg:space-x-2 my-4"
                    >
                        
                        <div className='my-6'>
                            <label htmlFor="email" className='font-bold text-gray-400'>Email Address</label>
                            <div className={email.error ? 'error-border rounded-md' : 'input-border rounded-md'}>
                                <input 
                                    type="email" 
                                    value={email.value}
                                    onChange={(e) => setEmail({...email, value: e.target.value})}
                                    className={`w-full border-0 px-4 py-2 text-gray-400 `} 
                                    placeholder='please enter your phone number'
                                />
                            </div>
                        </div>

                        <div className='my-6'>
                            <label htmlFor="subject" className='font-bold text-gray-400'>Subject</label>
                            <div className={subject.error ? 'error-border rounded-md' : 'input-border rounded-md'}>
                                <input 
                                    type="text" 
                                    value={subject.value}
                                    onChange={(e) => setSubject({...subject, value: e.target.value})}
                                    className={`w-full border-0 px-4 py-2 text-gray-400 `} 
                                />
                            </div>
                        </div>
                        
                    </div>

                    <div className='my-6'>
                        <label htmlFor="subject" className='font-bold text-gray-400'>Subject</label>
                        <div className={subject.error ? 'error-border rounded-md' : 'input-border rounded-md'}>
                            <textarea 
                                rows={5}
                                value={message.value}
                                onChange={(e) => { setMessage({...message, value: e.target.value })}}
                                className={`w-full border-0 px-4 py-2 text-gray-400`}
                            ></textarea>
                        </div>
                    </div>

                    <div className='my-10 text-center'>
                        <button 
                            className='button rounded-md'
                            onClick={() => handleSendMail()}
                        >{ loading ? 'Sending...' : 'Send Message' }</button>
                    </div>
                </div>
            </div>

            <div className='my-4'>
                <JoinUs />
            </div>

            <Footer />
            <ToastContainer />
        </>
    )
}

export default ContactUsComp;