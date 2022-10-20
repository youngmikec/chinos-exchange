import React from 'react';

// style
import './style.css';

//images and icons
import coin from '../../assets/images/hompage_coin.png'
import logo from '../../assets/images/logo-white.png'
import phone from '../../assets/images/phone.png'
import icon from '../../assets/images/customer-satisfaction.png'
// components
import HeroSection from '../../shared/users-frontend/hero-section';
import { Link } from 'react-router-dom';
import JoinUs from '../../shared/users-frontend/join-us';
import Footer from '../../shared/users-frontend/footer';

const AboutUsComp = () => {
  return (
    <>
        <HeroSection>
            <div className="flex justify-between">
                <div className='py-4 w-full '>
                    <h3 className='text-5xl font-bold my-8 text-white'>Secured And Easy to <br />Use platform</h3>
                    <p className='text-sm font-thin text-justify w-3/4 my-8 text-white'>We provide you with our best services for Crypto Exchange, Airtime Conversion, Giftcard Redeemtion.</p>
                    <button className='rounded-lg my-4 text-white bg-[#FFAB2E] py-3 px-6 hover:bg-white hover:text-[#FFAB2E]'>
                        <Link to="/sign-in">Let's Trade</Link>
                    </button>
                </div>
                <img src={coin} alt="" className='mt-52 mr-0 coin'  />
                <div className='about-bg '>
                    
                </div>
                
            </div>
        </HeroSection>

        <div className='flex w-screen bg-ellipse flex-col  overflow-hidden'>

            <div className="py-8 flex flex-row w-full mb-32">

              <div className="bg-white px-4 py-4 w-5/12 ">
              <div className="about-bg2 w-full py-28 ml-8">
                <img src={logo} alt="" className='mt-5 mx-auto text-white' />
                </div>
              </div>

              <div className=' w-7/12 bg-white flex'>
                <div className='text-left px-52 flex flex-col self-center my-auto w-full'>
                  <h3 className='text-black text-lg font-bold mt-2 mb-8 px-8'>Vision & Mission</h3>
                  <p className='font-light px-8 text-gray-700'>We are reinventing Trust. By delivering quality service every single time,
                     we are setting a standard and blazing the trail for good financial services.
                      We are recognized as the most preferred and 
                      trusted Giftcard trading entity in Africa and beyond</p>
                </div>
              </div> 

            </div>

            <div className='flex flex-col w-screen'>
            <div className='text-center'>
                <h2 className=' font-bold text-black text-xl mb-2 capitalize '>what Makes Us Different</h2>
                <p className='text-sm text-gray-600 font-light'>There'are million reasons to use chinos Exchange platform </p>
            </div>
            <div className='flex flex-row px-10 justify-evenly my-10'>
              <div className='text-center flex justify-center flex-col hover:shadow-lg px-7'>
                  <img src={phone} alt="" width='30' className='self-center mx-auto my-2' />
                  <h3 className='text-purple-800 font-bold text-lg my-4'>Trusted and Secured</h3>
                  <p className=' text-sm font-light'>Our platform is built on the best data  <br /> security networks with absolute care to <br /> make sure your experience is simple and <br /> seamless</p>

              </div>
              <div className='text-center flex justify-center flex-col hover:shadow-lg px-7'>
                  <img src={icon} alt="" width='30' className='self-center mx-auto my-2' />
                  <h3  className='text-purple-800 font-bold text-lg my-4'>Instant Payment</h3>
                  <p className=' text-sm font-light'>Don’t worry our team are always onboard <br /> to recieve your order and release funds <br /> ASAP to your bank account</p>

              </div>
              <div className='text-center flex justify-center flex-col hover:shadow-lg px-7'>
                  <img src={phone} alt="" width='30' className='self-center mx-auto my-2' />
                  <h3 className='text-purple-800 font-bold text-lg my-4'>24/7 Hours Trade</h3>
                  <p className=' text-sm font-light'>we understand the need for someone of <br /> our users that would love to trade at <br /> midnight. Our team members are always <br /> available.</p>

              </div>
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

export default AboutUsComp;