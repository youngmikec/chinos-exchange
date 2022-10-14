import React from 'react';

// style
import './style.css';

// components
import HeroSection from '../../shared/users-frontend/hero-section';
import { Link } from 'react-router-dom';
import JoinUs from '../../shared/users-frontend/join-us';
import Footer from '../../shared/users-frontend/footer';

const GiftCardsComp = () => {
  return (
    <>
        <HeroSection>
            <div className="flex justify-between">
                <div className='py-4 w-full '>
                    <h3 className='text-5xl font-bold my-8 text-white'>The Fastest Way To Buy, <br/> Sell And Trade Crypto </h3>
                    <p className='text-sm font-thin text-justify w-3/4 my-8 text-white'>Join over 100,000 users across the globe to trade your digital asset on a fast and secured platform</p>

                    <button className='rounded-lg my-4 text-white bg-[#FFAB2E] py-3 px-6 hover:bg-white hover:text-[#FFAB2E]'>
                        <Link to="/sign-in">Let's Trade</Link>
                    </button>
                </div>
                <div className='wallet-bg'></div>
            </div>
        </HeroSection>

        <div className='my-4'>
            <JoinUs />
        </div>

        <Footer />
    </>
  )
}

export default GiftCardsComp;