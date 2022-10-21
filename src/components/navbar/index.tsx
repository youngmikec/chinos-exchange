import React from 'react';
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
                    <li className='mx-4 text-white font-semibold hover:border-b-2 hover:border-b-white'><Link to="/services">Services</Link></li>
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