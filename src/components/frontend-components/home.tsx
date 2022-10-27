import React from 'react';

// style
import './style.css';

//icons and images
import btc from '../../assets/icons/btc.png'
import eth from '../../assets/icons/eth.png'
import bnb from '../../assets/icons/bnb.png'
import sol from '../../assets/icons/scl.png'
import bitcon from '../../assets/images/bitcoin.png'
import airtime from '../../assets/images/airtime.png'
import phone from '../../assets/images/phone.png'
import icon from '../../assets/images/customer-satisfaction.png'
import giftcard from '../../assets/images/redeem.png'
// components
import HeroSection from '../../shared/users-frontend/hero-section';
import { Link } from 'react-router-dom';
import JoinUs from '../../shared/users-frontend/join-us';
import Footer from '../../shared/users-frontend/footer';

const HomeComp = () => {
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
        <div className="flex flex-col overflow-hidden">
            <div className="flex justify-center flex-col mx-auto my-16">
                <h3 className='text-gray-400 font-extrabold text-2xl'>Market Recap</h3>
                <p className='text-gray-400 font-light text-sm mx-auto'>For all cryptocurrency</p>
            </div>
            <div>
                <table className='table mx-auto shadow-md px-5 my-16 text-gray-400'>
                    <thead className='text-left' >
                        <tr className='flex justify-around '>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Change</th>
                            <th>Volume</th>
                        </tr>
                        <hr />
                    </thead>
                    <tbody className='w-10/12 text-sm '>
                        <tr className='flex justify-around mb-2 mt-4'>
                            <td>1</td>
                            <td className='flex flex-row '>
                            <img src={btc} alt="" />
                            BTC
                            </td>
                            <td>NGN 8,515,123.90</td>
                            <td>+20.1%</td>
                            <td>18,818.30M</td>
                        </tr>
                        <hr />
                        <tr className='flex justify-around  mb-2 mt-4'>
                            <td>2</td>
                            <td  className='flex flex-row '>
                                <img src={eth} alt="" />
                                ETH
                            </td>
                            <td>
                            NGN 1,515,123.90
                            </td>
                            <td>
                            +20.1%
                            </td>
                            <td>
                            7,542.96M
                            </td>
                        </tr>
                        <hr />
                        <tr className='flex justify-around  mb-2 mt-4'>
                            <td>3</td>
                            <td className='flex flex-row '>
                                <img src={bnb} alt="" />
                                BNB</td>
                            <td>
                        NGN 202,123.12
                            </td>
                            <td>
                            +20.1%
                            </td>
                            <td>
                            7,542.96M
                            </td>
                        </tr>
                        <hr />
                        <tr className='flex justify-around  mb-2 mt-4 text-left'>
                            <td>3</td>
                            <td className='flex flex-row '>
                                <img src={sol} alt="" />
                                SOL</td>
                            <td>
                        NGN 202,123.12
                            </td>
                            <td>
                            +20.1%
                            </td>
                            <td>
                            7,542.96M
                            </td>
                        </tr>
                        <hr />
                    </tbody>
                </table>
            </div>


            <div className="flex flex-col bg-ellipse">

            <div className="flex flex-row justify-center light-purple w-screen">
                <div className="w-4/12 mx-auto">
                    <img src={bitcon} alt="" />
                </div>
                <div className='flex-col flex w-5/12 py-20 px-20 ml-44 self-center'>
                    <h2 className='text-3xl font-extrabold'>Buy and Sell <br /> Crypto</h2>
                    <p className='my-4 font-light'>Send us crypto and recieve  cash <br />at with instant payment  via your<br /> Bank account</p>
                <button className='bg-[#8652A4] w-6/12 text-white font-bold rounded-sm py-2 capitalize'> let's trade</button>
                </div>
            </div>

            <div className="flex flex-row-reverse justify-center  w-screen">
                <div className="w-4/12 ml-20">
                    <img src={airtime} alt="" />
                </div>
                <div className='flex-col flex w-5/12 py-20 px-20 mr-10 self-center'>
                    <h2 className='text-3xl font-extrabold'>Airtime Conversion </h2>
                    <p className='my-4 font-light'>Don’t worry we understand the frustration <br />of excess recharge.  We make it easy for you to <br /> convert airtime on your sim to cash</p>
                <button className='bg-[#8652A4] w-6/12 text-white font-bold rounded-sm py-2 capitalize'> let's trade</button>
                </div>
            </div>

            <div className="flex flex-row justify-evenly  w-screen mt-16">
                <div className="w-4/12 mx-auto">
                    <img src={giftcard} alt="" />
                </div>
                <div className='flex-col flex w-5/12 py-20 px-20 ml-20 self-center '>
                    <h2 className='text-3xl font-extrabold'>Redeem Giftcards</h2>
                    <p className='my-4 font-light'>Buy and sell Giftcards from <br /> over 20 countries around the world</p>
                <button className='bg-[#8652A4] w-6/12 text-white font-bold rounded-sm py-2 capitalize'> let's trade</button>
                </div>    
            </div>

            </div>


            <div className='flex flex-col w-screen mt-16'>
            <div className='text-center'>
                <h2 className=' font-bold text-black text-xl mb-2 capitalize '>what Makes Us Different</h2>
                <p className='text-sm text-gray-600 font-light'>There'are million reasons to use chinos Exchange platform </p>
            </div>
            <div className='flex flex-row sm:flex-col md:flex-row px-10 justify-evenly my-10'>
              <div className='text-center flex justify-center flex-col hover:shadow-lg px-7 hover:bg-white'>
                  <img src={phone} alt="" width='30' className='self-center mx-auto my-2' />
                  <h3 className='text-purple-800 font-bold text-lg my-4'>Trusted and Secured</h3>
                  <p className=' text-sm font-light'>Our platform is built on the best data  <br /> security networks with absolute care to <br /> make sure your experience is simple and <br /> seamless</p>

              </div>
              <div className='text-center flex justify-center flex-col hover:shadow-lg px-7 hover:bg-white'>
                  <img src={icon} alt="" width='30' className='self-center mx-auto my-2' />
                  <h3  className='text-purple-800 font-bold text-lg my-4'>Instant Payment</h3>
                  <p className=' text-sm font-light'>Don’t worry our team are always onboard <br /> to recieve your order and release funds <br /> ASAP to your bank account</p>

              </div>
              <div className='text-center flex justify-center flex-col hover:shadow-lg px-7 hover:bg-white'>
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

export default HomeComp;