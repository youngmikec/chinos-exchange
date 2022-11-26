import React from 'react';
import { CiDollar } from 'react-icons/ci';
import { MdCardGiftcard } from 'react-icons/md';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo-white.png';

const Navbar = () => {
  return (
    <>
        <div className='w-full py-4 flex justify-between'>
            <div>
                <Link to='/'>
                    <img src={logo} alt="logo" width="80px" height="80px" />
                </Link>
            </div>
            <div className='pt-3'>
                <ul className='list-none inline-flex'>
                    <li className='mx-4 text-white font-semibold hover:border-b-2 hover:border-b-white'><Link to="/">Home</Link></li>
                    <li className='mx-4 text-white font-semibold hover:border-b-2 hover:border-b-white'>
                        <div
                            className="relative mx-1 pt-0 pb-2 group  mb-1 md:mb-0"
                            id="button_pm">
                        <Link to="/services">Services</Link>
                            {/* <span className="firstlevel hover:text-red-500 whitespace-no-wrap text-gray-600 hover:text-blue-800">
                            <BiEditAlt className="text-blue hover:cursor-pointer inline" />
                            </span> */}
                            <ul className="w-max absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-[#F6F6F6] z-10 hidden group-hover:block">
                                <svg
                                    className="block fill-current text-[#F6F6F6] w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                </svg>
                                <li className="hover:bg-[#8652A4] text-[#8652A4] border-b-2 border-[#f1dbff] hover:cursor-pointer pr-10 p-3 whitespace-no-wrap hover:text-white text-sm md:text-base ">
                                    <Link to="/cryptos"> 
                                        <div className="flex justify-start">
                                            <div className='mr-2 my-auto h-3'><CiDollar /></div>
                                            <div>Trade Crypto</div>
                                        </div>
                                    </Link>
                                </li>

                                <li className="hover:bg-[#8652A4] text-[#8652A4] border-b-2 border-[#f1dbff] hover:cursor-pointer pr-10 p-3 whitespace-no-wrap hover:text-white text-sm md:text-base ">
                                    <Link to="/airtimes"> 
                                        <div className="flex justify-start">
                                            <div className='mr-2 my-auto h-3'><CiDollar /></div>
                                            <div>Airtime to Cash</div>
                                        </div>
                                    </Link>
                                </li>

                                <li className="hover:bg-[#8652A4] text-[#8652A4] border-b-2 border-[#f1dbff] hover:cursor-pointer pr-10 p-3 whitespace-no-wrap hover:text-white text-sm md:text-base ">
                                    <Link to="/giftcards"> 
                                        <div className="flex justify-start">
                                            <div className='mr-2 my-auto h-3'><MdCardGiftcard /></div>
                                            <div>Trade Giftcard</div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='mx-4 text-white font-semibold hover:border-b-2 hover:border-b-white'><Link to="/about-us">About Us</Link></li>
                    <li className='mx-4 text-white font-semibold hover:border-b-2 hover:border-b-white'><Link to="/contact-us">Contact Us</Link></li>
                    <li className='mx-4 text-white font-semibold hover:border-b-2 hover:border-b-white'><Link to="/faqs">Faqs</Link></li>
                </ul>
            </div>

            <div>
                <ul className='list-none inline-flex'>
                    <li className='mx-4 text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#FFAB2E]'><Link to="/sign-in">Sign In</Link></li>
                    <li className='mx-4 text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#FFAB2E]'><Link to="/sign-up">Sign Up</Link></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar