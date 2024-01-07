import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


// style
import './style.css';

//icons and images
import coin from '../../assets/images/hompage_coin.png';
import userPhone from '../../assets/images/user-phone.png';
import userDashboard from '../../assets/images/user-dashboard.png';
import airtimePhone from '../../assets/images/hand-with-phone.png';
import phone from '../../assets/images/phone.png'
import icon from '../../assets/images/customer-satisfaction.png'
import networks from '../../assets/images/networks.svg';
// components
import HeroSection from '../../shared/users-frontend/hero-section';
import JoinUs from '../../shared/users-frontend/join-us';
import Footer from '../../shared/users-frontend/footer';
import { AxiosResponse } from 'axios';
import { ApiResponse, CryptoCurrency } from '../../common';
import { RETREIVE_CRYPTO } from '../../services';
import ReviewComp from './review';
import WhatsappButton from '../whatsapp-btn';
import AppTable, { TableHeader } from '../../shared/app-table';

const HomeComp = () => {
    const [cryptos, setCryptos] = useState<CryptoCurrency[]>([]);
    const [tableRows, setTableRows] = useState<any[]>([]);

    const tableHeaders: TableHeader[] = [
        { key: 'sn', value: 'S/N' },
        { key: 'image', value: 'Image' },
        { key: 'name', value: 'Name' },
        { key: 'shortName', value: 'Short Name' },
        { key: 'rate', value: 'Buy Rate' },
        { key: 'sellingRate', value: 'Selling Rate' },
    ];

    const retrieveCryptos = () => {
        const query: string = `?sort=-name&status=ACTIVE`;
        RETREIVE_CRYPTO(query)
        .then((res: AxiosResponse<ApiResponse>) => {
            const { message, payload } = res.data;
            setCryptos(payload);
            const mappedDate = payload.map((item: CryptoCurrency, idx: number) => {
                return {
                    sn: idx + 1,
                    image: <img src={item?.cryptoImage } width="25px" height="25px" alt="crypto" />,
                    name: item?.name,
                    shortName: item?.shortName,
                    rate: item?.rate,
                    sellingRate: item?.sellingRate,
                }
            });
            setTableRows(mappedDate);
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-8 md:ml-32 lg:ml-36">
                    <div className='py-4 w-full relative'>
                        <h3 className='text-5xl font-bold my-8 text-white'>The Fastest Way To Buy, <br/> Sell And Trade Crypto </h3>
                        <div className='w-3/4 my-8'>
                            <p className='text-sm font-semibold text-justify my-2 text-white'>Join over 100,000 users across the globe to trade</p> 
                            <p className='text-sm font-semibold text-justify my-2 text-white'>your digital asset on a fast and secured platform</p>   
                        </div>

                        <div className='my-8'>
                            <button className='rounded-lg mt-4 mb-8 text-white bg-[#FFAB2E] py-4 px-7 hover:bg-white hover:text-[#FFAB2E]'>
                                <Link to="/sign-in">Let's Trade</Link>
                            </button>
                        </div>
                        <img src={coin} alt="" className='hidden sm:hidden md:block lg:block absolute right-0 bottom-0 '  />
                    </div>

                    <div className='wallet-bg'>
                    </div>
                </div>
            </HeroSection>

            <div className="overflow-hidden">
                <div className="text-center mx-auto w-5/12 my-16">
                    <h3 className='text-gray-500 font-extrabold text-3xl'>Your Gateway to Crypto Wealth</h3>
                    <p className='text-gray-500 text-lg mx-auto'>
                        Dive into a seamless world of financial innovation with our one-stop crypto platform. 
                        Buy and sell cryptocurrencies effortlessly, exchange giftcards for instant cash, and convert unused airtime into valuable currency. 
                        At <span className="text-[#8652A4] font-bold">Chinos Exchange</span>, we're redefining convenience in the digital economy, making every transaction a gateway to financial empowerment.
                    </p>
                </div>

                {/* <div className='my-8 flex justify-center w:11/12'>
                    <div>
                        <AppTable 
                            tableHeaders={tableHeaders} 
                            tableRows={tableRows} 
                            showSearch={false} 
                            className='w-[350px] sm:w-[450px] md:w-[600px] lg:w-[800px]'
                        />
                    </div>
                </div> */}


                <div className="">
                    <div className="mx-auto w-10/12 phone-vector-bg rounded-md shadow-lg my-8 pt-10 border-t-2 border-[#FF3E1D]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            <div className='mx-auto w-10/12 text-center md:text-left lg:text-left py-4 mt-10 md:my-auto lg:my-auto'>
                                <h1 className='text-5xl font-bold text-gray-700'>Buy and Sell your <br /> Cryptocurrency</h1>
                                <p className='my-4 font-light text-xl text-[#7F7F80E5]'>Send us crypto and recieve cash at with instant <br />payment via your Bank account</p>
                                <p className='text-[#8652A4] font-[Poppins] font-bold rounded-md my-4 py-4 capitalize'> 
                                    <Link to="/sign-in">let's trade</Link>
                                </p>
                            </div>

                            <div className="px-0 md:px-3 lg:px-3 w-11/12 md:w-full lg:w-full ">
                                <img src={userPhone} alt="phoneCoins" className='mb-0' />
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto w-10/12 giftcard-vector-bg rounded-md shadow-lg my-6 pt-10 border-t-2 border-[#3FAFFF]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            <div className="px-0 md:px-3 lg:px-3 w-11/12 md:w-full lg:w-full">
                                <img src={userDashboard} alt="giftcards" />
                            </div>

                            <div className='text-center md:text-left lg:text-left py-4 mt-10 md:my-auto lg:my-auto'>
                                <h1 className='text-5xl font-bold text-gray-700'>Redeem your Gift <br/> card with ease </h1>
                                <p className='my-4 font-light text-xl text-[#7F7F80E5]'>Unlock the World of Savings: Exchange Giftcards from <br /> 20+ Countries.</p>
                                <p className='text-[#8652A4] font-[Poppins] font-bold rounded-md my-4 py-4 capitalize'> 
                                    <Link to="/sign-in">let's trade</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto w-10/12 airtime-vector-bg rounded-md shadow-lg my-6 pt-10 border-t-2 border-[#8652A4]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            <div className="px-0 md:px-3 lg:px-3 w-11/12 md:w-full lg:w-full">
                                <img src={airtimePhone} alt="networks" />
                            </div>

                            <div className='text-center md:text-left lg:text-left py-4 mt-10 md:my-auto lg:my-auto'>
                                <h1 className='text-5xl font-bold text-gray-700'>Convert Airtime <br/> to Cash</h1>
                                <p className='my-4 font-light text-xl text-[#7F7F80E5]'>Don’t worry we understand the frustration <br />of excess recharge.  We make it easy for you to <br /> convert airtime on your sim to cash</p>
                                <p className='text-[#8652A4] font-[Poppins] font-bold rounded-md my-4 py-4 capitalize'> 
                                    <Link to="/sign-in">let's trade</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='flex flex-col w-screen mt-16'>
                    <div className='text-center'>
                        <h2 className='text-gray-700 font-bold text-xl mb-2 capitalize'>what Makes Us Different</h2>
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

            <div className='my-4'>
                <ReviewComp />
            </div>

            {/* whatsapp */}
            <WhatsappButton />

            <Footer />
        </>
    )
}

export default HomeComp;