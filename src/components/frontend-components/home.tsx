import React from 'react';

// style
import './style.css';

//icons and images
import btc from '../../assets/icons/btc.png'
import eth from '../../assets/icons/eth.png'
import bnb from '../../assets/icons/bnb.png'
import sol from '../../assets/icons/scl.png'
import bitcon from '../../assets/images/bitcoin.png'
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
        <div className="flex flex-col">
            <div className="flex justify-center flex-col mx-auto">
                <h3 className='text-gray-400 font-extrabold text-2xl'>Market Recap</h3>
                <p className='text-gray-400 font-light text-sm mx-auto'>For all cryptocurrency</p>
            </div>
            <div>
                <table className='table mx-auto shadow-md px-5 text-left my-10 text-gray-400'>
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

            <div className="flex flex-row justify-center light-purple w-screen">
                <div className="w-4/12">
                    <img src={bitcon} alt="" />
                </div>
                <div className='flex-col flex w-4/12 py-20 px-20'>
                    <h2 className='text-3xl font-extrabold'>Buy and Sell <br /> Crypto</h2>
                    <p className='my-4 font-light'>Send us crypto and recieve  cash <br />at with instant payment  via your<br /> Bank account</p>
                <button className='bg-[#8652A4] w-6/12 text-white font-bold rounded-sm py-2 capitalize'> let's trade</button>
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