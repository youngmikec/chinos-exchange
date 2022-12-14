import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// icons
import { FiMenu } from 'react-icons/fi';
import { CiDollar } from 'react-icons/ci';
import { MdCardGiftcard } from 'react-icons/md';
import logo from '../../assets/images/logo-white.png';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const toggleShowDrowdown = () => {
        setShow(!show);
    }

    return (
        <>
            <div>
                <div className='hidden sm:hidden md:flex lg:flex w-full py-4 justify-between'>
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


                {/* mobile view */}
                <div className="block sm:block md:hidden lg:hidden dropdownmenu mx-auto w-11/12">
                    <div className='flex justify-between'>
                        <div className="mt-5" style={{width: '15%'}}>
                            <img src={logo} style={{width: '100%'}} alt="logo" />
                        </div>
                        <div className="flex justify-center">
                            <div>
                                <div className='pt-4 dropdown relative'>
                                    <button className="
                                        dropdown-toggle
                                        px-6
                                        py-2.5
                                        text-white hover:border-b-2 hove                     font-medium
                                        font-lg
                                        leading-tight
                                        uppercase
                                        rounded
                                        hover:bg-white hover:shadow-lg hover:text-[#8652A4]
                                        focus:bg-white focus:text-[#8652A4] focus:shadow-lg focus:outline-none focus:ring-0
                                        active:bg-white active:shadow-lg active:text-[#8652A4]
                                        transition
                                        duration-150
                                        ease-in-out
                                        flex
                                        items-center
                                        whitespace-nowrap
                                        "
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="true"
                                        onClick={() => toggleShowDrowdown()}
                                    >
                                    <span className='font-lg'>
                                        <FiMenu />
                                    </span>
                                
                                    </button>
                                    <ul
                                        className={`dropdown-menu
                                        min-w-6
                                        absolute
                                        ${show ? 'block' : 'hidden'}
                                        bg-white
                                        text-base
                                        z-50
                                        py-2
                                        list-none
                                        text-left
                                        rounded-lg
                                        shadow-lg
                                        mt-1
                                        m-0
                                        bg-clip-padding
                                        border-none
                                        "`}
                                        aria-labelledby="dropdownMenuButton1"
                                        id='dropdownMenuButton1'
                                    >
                                        <li>
                                            <a
                                            className="
                                            dropdown-item
                                            text-sm
                                            py-2
                                            px-4
                                            font-normal
                                            block
                                            w-full
                                            whitespace-nowrap
                                            bg-transparent
                                            text-[#8652A4]
                                            hover:bg-gray-100
                                            "
                                            href='/'
                                            >Home</a>
                                        </li>
                                        <li className='mx-4 text-white font-semibold hover:border-b-2 hover:border-b-white'><Link to="/">Home</Link></li>
                                        {/* <li className='mx-4 text-white font-semibold hover:border-b-2 hover:border-b-white'>
                                            <div
                                                className="relative mx-1 pt-0 pb-2 group  mb-1 md:mb-0"
                                                id="button_pm">
                                                <Link to="/services">Services</Link>
                                                <span className="firstlevel hover:text-red-500 whitespace-no-wrap text-gray-600 hover:text-blue-800">
                                                <BiEditAlt className="text-blue hover:cursor-pointer inline" />
                                                </span>
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
                                        </li> */}
                                        <li>
                                            <a
                                            className="
                                            dropdown-item
                                            text-sm
                                            py-2
                                            px-4
                                            font-normal
                                            block
                                            w-full
                                            whitespace-nowrap
                                            bg-transparent
                                            text-[#8652A4]
                                            hover:bg-gray-100
                                            "
                                            href="/about-us"
                                            >About us</a>
                                        </li>
                                        <li>
                                            <a
                                            className="
                                            dropdown-item
                                            text-sm
                                            py-2
                                            px-4
                                            font-normal
                                            block
                                            w-full
                                            whitespace-nowrap
                                            bg-transparent
                                            text-[#8652A4]
                                            hover:bg-gray-100
                                            "
                                            href='/contact-us'
                                            >Contact Us</a>
                                        </li>
                                        <li>
                                            <a
                                            className="
                                            dropdown-item
                                            text-sm
                                            py-2
                                            px-4
                                            font-normal
                                            block
                                            w-full
                                            whitespace-nowrap
                                            bg-transparent
                                            text-[#8652A4]
                                            hover:bg-gray-100
                                            "
                                            href='/faqs'
                                            >FAQS</a>
                                        </li>
                                        <li>
                                            <a
                                            className="
                                            dropdown-item
                                            text-sm
                                            py-2
                                            px-4
                                            font-normal
                                            block
                                            w-full
                                            whitespace-nowrap
                                            bg-transparent
                                            text-[#8652A4]
                                            hover:bg-gray-100
                                            "
                                            href='/sign-in'
                                            >Sign In</a>
                                        </li>
                                        <li>
                                            <a
                                            className="
                                            dropdown-item
                                            text-sm
                                            py-2
                                            px-4
                                            font-normal
                                            block
                                            w-full
                                            whitespace-nowrap
                                            bg-transparent
                                            text-[#8652A4]
                                            hover:bg-gray-100
                                            "
                                            href='/sign-up'
                                            >Sign Up</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile view */}
            </div>
        </>
    )
}

export default Navbar