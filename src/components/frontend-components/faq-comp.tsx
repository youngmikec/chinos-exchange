import React from 'react';

// style
import './style.css';

//  images and icons
import { BsFillCaretUpFill } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import coin from '../../assets/images/hompage_coin.png'

// components
import HeroSection from '../../shared/users-frontend/hero-section';
import JoinUs from '../../shared/users-frontend/join-us';
import Footer from '../../shared/users-frontend/footer';
import FaqTitle from './faq-tile';
import { Faq, faqs } from '../../constants';


const FaqComp = () => {
  return (
    <>
        <HeroSection>
            <div className="w-full">
                <div className='py-4 mt-8'>
                    <h3 className='text-xl lg:text-5xl font-bold mb-1 mt-4 text-white text-center capitalize'>Hi, Do you have any question?</h3> *
                    <p className='text-md font-thin text-center lg:w-3/4 mt-0 mx-auto text-white'>Get answers to any question or inquiry you might have</p>
                    
                    <div className='flex justify-between rounded-md mx-auto border-none bg-white w-full md:w-7/12 lg:w-7/12 my-8'>
                        <input type="text" className='rounded-md border-none bg-white py-3 px-3' placeholder='Enter question here' />
                        <button className='rounded-tr-md rounded-br-md  text-white bg-[#8652A4] py-2 px-6 min-w-max'>
                            Search
                        </button>

                    </div>
                    <div className="image mx-auto justify-center flex">
                        <img src={coin} alt=""  />
                    </div>
                    
                </div>
             
            </div>
        </HeroSection>

        <div className="hero bg-ellipse flex flex-col ">
            <div className="text-gray-600 text-center text-lg my-10">
                <p className='capitalize font-bold'>
                    Frequently asked questions
                </p>
            </div>

            <div className="mx-auto w-full sm:w-9/12 md:w-6/12 lg:w-5/12 shadow-md px-8">
                <div className="flex  mx-auto flex-col  w-full">
                    <div className='flex mx-auto justify-between w-full'>
                    <p className='text-purple-800 text-lg'>How do I get started on the website?</p>
                    <BsFillCaretUpFill className='self-center'/>
                    </div>
                    <div>
                        <ol className=' text-gray-700 text-sm px-4' type='i'>
                            <li className='my-4'>1. Visit  the website @chinos.con and click on sign up</li>
                            <li className='my-4'>2. Put in your information as requested</li>
                            <li className='my-4'>3. Verify your email address with the link sent to you email</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-full sm:w-9/12 md:w-6/12 lg:w-5/12 shadow-md px-8 my-4 py-8">
                <div className="flex  mx-auto flex-col  w-full">
                    <div className='flex mx-auto justify-between w-full'>
                    <p className='text-gray-800 text-md'>How do I get started on the website?</p>
                    <BsFillCaretDownFill className='self-center'/>
                    </div>
                </div>
            </div>

            {
                faqs.length > 0 &&
                faqs.map((item: Faq, idx: number) => {
                    return <FaqTitle key={idx} question={item.question} answers={item.answers} />
                })
            }
            
        </div>

        <div className='my-4'>
            <JoinUs />
        </div>

        <Footer />
    </>
  )
}

export default FaqComp;