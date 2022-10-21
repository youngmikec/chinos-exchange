import React from 'react';

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
        <div>
            <div className="flex justify-center my-14">
                <h3 className="text-gray-800 font-bold text-xl">
                24/7 available 
                </h3>
            </div>
            <div className="flex flex-row justify-evenly">
                <div className=" flex flex-col justify-center social-box w-2/12 hover:rounded-lg ">
                   <BsWhatsapp className='mx-auto mt-4 text-3xl'/>

                   <h3 className='text-center my-8 '>+234 703 162 5759</h3>
                </div>
                <div className=" flex flex-col justify-center social-box w-2/12 hover:rounded-lg">
                    <BsEnvelopeFill className='mx-auto mt-4 text-3xl'/>
                    <h3 className='text-center my-8 w-full '>chinoexchange@gmail</h3>
                </div>
                <div className=" flex flex-col justify-center social-box w-2/12 hover:rounded-lg">
                    <BsTelephoneFill className='mx-auto mt-4 text-3xl'/>
                    <h3 className='text-center my-8 '>+234 703 162 5759</h3>
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