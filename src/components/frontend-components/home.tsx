import React, { useState, useEffect } from 'react';

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
import JoinUs from '../../shared/users-frontend/join-us';
import Footer from '../../shared/users-frontend/footer';
import { AxiosResponse } from 'axios';
import { ApiResponse, CryptoCurrency } from '../../common';
import { RETREIVE_CRYPTO } from '../../services';

const HomeComp = () => {
    const [cryptos, setCryptos] = useState<CryptoCurrency[]>([]);

    const retrieveCryptos = () => {
        const query: string = `?sort=-name`;
        RETREIVE_CRYPTO(query)
        .then((res: AxiosResponse<ApiResponse>) => {
            const { message, payload } = res.data;
            console.log('success', message);
            setCryptos(payload);
        })
        .catch((err: any) => {
            const { message } = err.response.data;
            console.log('error', message);
        });
    };

    useEffect(() => {
        retrieveCryptos();
    }, []);

    return (
        <>
            <HeroSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className='py-4 w-full '>
                        <h3 className='text-5xl font-bold my-8 text-white'>The Fastest Way To Buy, <br/> Sell And Trade Crypto </h3>
                        <p className='text-sm font-thin text-justify w-3/4 my-8 text-white'>Join over 100,000 users across the globe to trade your digital asset on a fast and secured platform</p>    
                    </div>
                    <div className='wallet-bg'>
                    </div>
                </div>
            </HeroSection>

            <div className="overflow-hidden">
                <div className="text-center mx-auto my-16">
                    <h3 className='text-gray-400 font-extrabold text-2xl'>Market Recap</h3>
                    <p className='text-gray-400 font-light text-sm mx-auto'>For all cryptocurrency</p>
                </div>

                <div className='my-8 flex justify-center w:11/12'>
                    <div className='overflow-x-scroll'>
                        <table className='table border w-full'>
                            <thead>
                                <tr className='border-spacing-y-4'>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Rate</th>
                                </tr>
                            </thead>
                            
                            <tbody className='text-[#7F7F80]'>
                                {
                                    cryptos.length > 0 ?
                                    cryptos.map((item: CryptoCurrency) => {
                                        return <tr key={item.code}>
                                            <td className="text-center py-3">
                                                <img src={item?.cryptoImage } width="25px" height="25px" alt="crypto" />
                                            </td>
                                            <td className="text-center py-3">{item?.name}</td>
                                            <td className="text-center py-3">{ item?.rate}</td>
                                        </tr>
                                    }) : 
                                        <tr>
                                            <td colSpan={7} className="text-center py-3">No Crypto Record available</td>
                                        </tr>
                                }
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="bg-ellipse">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 light-purple w-screen">
                        <div className="mx-auto">
                            <img src={bitcon} alt="bitcoin" />
                        </div>

                        <div className='text-center py-4 my-auto'>
                            <h2 className='text-3xl font-extrabold'>Buy and Sell <br /> Crypto</h2>
                            <p className='my-4 font-light'>Send us crypto and recieve  cash <br />at with instant payment  via your<br /> Bank account</p>
                            <button className='bg-[#8652A4] w-6/12 text-white font-bold rounded-md py-2 capitalize'> let's trade</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  w-screen">
                        <div className='text-center py-8 my-auto'>
                            <h2 className='text-3xl font-extrabold'>Airtime Conversion </h2>
                            <p className='my-4 font-light'>Don’t worry we understand the frustration <br />of excess recharge.  We make it easy for you to <br /> convert airtime on your sim to cash</p>
                            <button className='bg-[#8652A4] w-6/12 text-white font-bold rounded-md py-2 capitalize'> let's trade</button>
                        </div>
                        <div className="vector-bg1">
                            <img src={airtime} alt="" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  w-screen mt-16">
                        <div className="vector-bg2">
                            <img src={giftcard} alt="" />
                        </div>
                        <div className='text-center py-8 my-auto self-center '>
                            <h2 className='text-3xl font-extrabold'>Redeem Giftcards</h2>
                            <p className='my-4 font-light'>Buy and sell Giftcards from <br /> over 20 countries around the world</p>
                            <button className='bg-[#8652A4] w-6/12 text-white font-bold rounded-md py-2 capitalize'> let's trade</button>
                        </div>    
                    </div>

                </div>


                <div className='flex flex-col w-screen mt-16'>
                    <div className='text-center'>
                        <h2 className=' font-bold text-black text-xl mb-2 capitalize '>what Makes Us Different</h2>
                        <p className='text-sm text-gray-600 font-light'>There'are million reasons to use chinos Exchange platform </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 justify-evenly my-10'>
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