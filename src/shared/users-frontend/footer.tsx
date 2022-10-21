import React from 'react';
import { Link } from 'react-router-dom';

// icons
import { IoIosSend } from 'react-icons/io'
import { CgInstagram } from 'react-icons/cg';
import { GrFacebookOption, GrTwitter } from 'react-icons/gr';

import './styles.css';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <>
        <div className='w-full footer-bg py-20'>
            <div className="mx-auto w-10/12">
                <div className="grid lg:space-x-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    {/* column1 */}
                    <div>
                        <div className='mb-6'>
                            <img src={logo} alt="logo" width="80px" height="80px" />
                        </div>
                        <p className='text-justify text-[#666666] my-4 pr-8'>Fastest platform to trade all your digital asset . fast and reliable</p>
                        <ul className='list-none'>
                            <li className='inline-flex mx-3'>
                                <a href="#" className='p-2 bg-white rounded-full'>
                                    <GrFacebookOption className="text-[#8652A4]" />
                                </a>
                            </li>
                            <li className='inline-flex mx-3'>
                                <a href="#" className='p-2 bg-white rounded-full'>
                                    <CgInstagram className="text-[#8652A4]" />
                                </a>
                            </li>

                            <li className='inline-flex mx-3'>
                                <a href="#" className='p-2 bg-white rounded-full'>
                                    <GrTwitter className="text-[#8652A4]" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* column2 */}
                    <div>
                        <h3 className='text-[#666666] text-3xl font-bold mb-6'>Quick Links</h3>

                        <ul className='list-none text-[#666666]'>
                            <li className='my-4 font-light'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='my-4 font-light'>
                                <Link to="/crypto">Buy Crypto</Link>
                            </li>
                            <li className='my-4 font-light'>
                                <Link to="/crypto">Sell Crypto</Link>
                            </li>
                            <li className='my-4 font-light'>
                                <Link to="/faq">FAQS</Link>
                            </li>
                            <li className='my-4 font-light'>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* column3 */}
                    <div>
                        <h3 className='text-[#666666] text-3xl font-bold mb-6'>Contact Info</h3>

                        <ul className='list-none text-[#666666]'>
                            <li className='my-4 font-light'>
                                +234 8107 3996 17
                            </li>
                            <li className='my-4 font-light'>
                                chinosexchange@gmail.com
                            </li>
                            <li className='my-4 font-light'>
                                24/7 Hours
                            </li>
                        </ul>
                    </div>

                    {/* column4 */}
                    <div>
                        <h3 className='text-[#666666] text-3xl font-bold mb-6'>Updates</h3>
                        <p className='text-justify text-[#666666] my-4'>Stay in touch to keep up with the latest offers from us</p>
                        
                        <div className="my-4">
                            <div className='flex w-full justify-between rounded-3xl border-none bg-white'>
                                <input type="text" className='w-full rounded-l-3xl border-none outline-none bg-white py-3 px-5' />
                                <button className='rounded-r-3xl text-white bg-[#8652A4] py-3 px-6 min-w-max'>
                                    <IoIosSend />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer