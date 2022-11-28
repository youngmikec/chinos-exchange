import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSetting, AiOutlineDollar } from 'react-icons/ai';
import { RiDashboardFill } from 'react-icons/ri';
import { IoCardOutline, IoCopyOutline } from 'react-icons/io5';
import { MdOutlineDashboardCustomize } from 'react-icons/md';

import logo from '../../assets/images/logo.png';

type Props = {
    sidebarMenus?: any[]
}

const Sidebar = ({sidebarMenus}: Props) => {
    const location = useLocation();
    const { pathname } = location;
    return (
        <>
            <div className="bg-white min-h-screen max-h-fit px-4 py-5">
                <div className="my-5 px-4">
                    <img src={logo} alt="logo" width="100px" height="100px" />
                </div>
                <ul className="list-none text-[#8c8c8c]">
                    <li 
                        className={`${ pathname === '/users-dashboard' && 'bg-[#8652A4] text-white' } my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white` } 
                        title="Dashboard"
                    >
                        <Link to="/users-dashboard">
                            <div className='flex justify-start'>
                                <div><span><RiDashboardFill className='text-xl'/></span></div>
                                <div className='mx-2'>Dashboard</div>
                            </div>     
                        </Link>
                    </li>
                    {/* <li 
                        className={`${ pathname === '/dashboard' && 'bg-[#8652A4] text-white' } my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white` }
                        title="wallet"
                    >
                        <Link to="/dashboard">
                            <div className='flex justify-start'>
                                <div><span><RiDashboardFill className='text-xl'/></span></div>
                                <div className='mx-2'>Wallet</div>
                            </div>     
                        </Link>
                    </li> */}
                    <li 
                        className={`${ pathname === '/sell-crypto' && 'bg-[#8652A4] text-white' } my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white` }
                        title="sell crypto"
                    >
                        <Link to="/sell-crypto">
                            <div className='flex justify-start'>
                                <div><span><AiOutlineDollar className='text-xl'/></span></div>
                                <div className='mx-2'>Sell Crypto</div>
                            </div>           
                        </Link>
                    </li>
                    <li 
                        className={`${ pathname === '/buy-crypto' && 'bg-[#8652A4] text-white' } my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white` }
                        title="buy crypto"
                    >
                        <Link to="/buy-crypto">
                            <div className='flex justify-start'>
                                <div><span><AiOutlineDollar className='text-xl'/></span></div>
                                <div className='mx-2'>Buy Crypto</div>
                            </div>                
                        </Link>
                    </li>
                    <li 
                        className={`${ pathname === '/trade-giftcard' && 'bg-[#8652A4] text-white' } my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white` }
                        title="trade giftcard"
                    >
                        <Link to="/trade-giftcard">
                            <div className='flex justify-start'>
                                <div><span><IoCardOutline  className='text-xl'/></span></div>
                                <div className='mx-2'>Trade Giftcard</div>
                            </div>                       
                        </Link>
                    </li>
                    <li 
                        className={`${ pathname === '/airtime' && 'bg-[#8652A4] text-white' } my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white` }
                        title="airtime"
                    >
                        <Link to="/airtime">
                            <div className='flex justify-start'>
                                <div><span><IoCopyOutline className='text-xl'/></span></div>
                                <div className='mx-2'>Airtime to cash</div>
                            </div>                             
                        </Link>
                    </li>
                    <li 
                        className={`${ pathname === '/history' && 'bg-[#8652A4] text-white' } my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white` }
                        title="Order history"
                    >
                        <Link to="/history">
                            <div className='flex justify-start'>
                                <div><span><MdOutlineDashboardCustomize className='text-xl'/></span></div>
                                <div className='mx-2'>Order History</div>
                            </div>                                   
                        </Link>
                    </li>
                    <li 
                        className={`${ pathname === '/account' && 'bg-[#8652A4] text-white' } my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white` }
                        title="Account setting"
                    >
                        <Link to="/account">
                            <div className='flex justify-start'>
                                <div><span><AiOutlineSetting className='text-xl'/></span></div>
                                <div className='mx-2'>Account Settings</div>
                            </div>                                   
                        </Link>
                    </li>

                   
                    
                </ul>
            </div>
        </>
    )
}

export default Sidebar;