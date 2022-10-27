import React,{useState} from 'react';

// style
import './style.css';

//icons and images
import coin from '../../assets/images/hompage_coin.png'
import { BsTelephoneFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import {BsEnvelopeFill} from "react-icons/bs";

// components
import HeroSection from '../../shared/users-frontend/hero-section';
import { Link } from 'react-router-dom';
import JoinUs from '../../shared/users-frontend/join-us';
import Footer from '../../shared/users-frontend/footer';

const ContactUsComp = () => {
const[toggle,setToggle] = useState(true)
const[toggle1,setToggle1] = useState(true)
const[toggle2,setToggle2] = useState(true)
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
        <div className='w-screen container overflow-hidden'>
            <div className="flex justify-center my-14">
                <h3 className="text-gray-800 font-bold text-xl">
                24/7 available 
                </h3>
            </div>
            <div className=' small-screen-col flex flex-row justify-evenly z-10 my-20' >
                <div 
                className={toggle? 'flex flex-col justify-center social-box w-2/12 hover:rounded-lg':'flex flex-col justify-center social-box-hover w-2/12 hover:rounded-lg'}
                onMouseLeave={()=>setToggle(true)} onMouseOver={()=>setToggle(false)}
                >
                   <BsWhatsapp className='mx-auto mt-4 text-3xl'/>

                   <h3 className={toggle ? 'text-center my-8 social-box-text':'text-center my-8 social-box-hover-text'}>+234 703 162 5759</h3>
                </div>
                <div 
                className={toggle1? 'flex flex-col justify-center social-box w-2/12 hover:rounded-lg':'flex flex-col justify-center social-box-hover w-2/12 hover:rounded-lg'}
                onMouseLeave={()=>setToggle1(true)} onMouseOver={()=>setToggle1(false)}
                >
                    <BsEnvelopeFill className='mx-auto mt-4 text-3xl'/>
                    <h3 className={toggle1 ? 'text-center my-8 social-box-text':'text-center my-8 social-box-hover-text'}>chinoexchange@gmail</h3>
                </div>
                <div
                 className={toggle2? 'flex flex-col justify-center social-box w-2/12 hover:rounded-lg':'flex flex-col justify-center social-box-hover w-2/12 hover:rounded-lg'}
                 onMouseLeave={()=>setToggle2(true)} onMouseOver={()=>setToggle2(false)}
                 >
                    <BsTelephoneFill className='mx-auto mt-4 text-3xl'/>
                    <h3 className={toggle2 ? 'text-center my-8 social-box-text':'text-center my-8 social-box-hover-text'}>+234 703 162 5759</h3>
                </div>

            </div>
            <div className='flex flex-col justify-center px-0 shadow-lg w-11/12 mx-auto mt-20'>

                <div className="flex w-9/12 justify-between mx-auto my-4">
                   
                    <div className='flex flex-col w-5/12 '>
                    <label htmlFor="" className=''>Full name</label> 
                    <input type="text" name="" id="" className='input-border rounded-md py-3 outline-none'/>
                    </div>
                   
                    <div className='flex flex-col w-5/12'>
                    <label htmlFor="">Phone Number </label> 
                    <input type="text" name="" id="" className='input-border rounded-md py-3 outline-none'/>
                    </div> 
                </div>
                <div className="flex w-9/12 justify-between mx-auto my-4">
                    
                    <div className='flex flex-col w-5/12'>
                    <label htmlFor="">Email Address</label> 
                    <input type="text" name="" id="" className='input-border rounded-md py-3  outline-none'/>
                    </div>
                    
                    <div className='flex flex-col w-5/12 '>
                    <label htmlFor="">Subject</label> 
                    <input type="text" name="" id="" className='input-border rounded-md py-3 outline-none'/> 
                    </div>
                </div>
                <div className="flex w-9/12 mx-auto my-4">
                
                <textarea name="" id="" className='input-border scrollable-none py-5 w-full rounded-md outline-none mt-4'></textarea>
                </div>
                <div className='flex w-9/12 justify-end my-10 self-center '>
                    <input type="button" value="Send Message"  className='button rounded-md ' />
                </div>
            </div>
        </div>
        <div className='my-4'>
            <JoinUs />
        </div>

        <Footer />
    </>
  )
}

export default ContactUsComp;