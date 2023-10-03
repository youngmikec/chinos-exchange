import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSetting, AiOutlineDollar } from 'react-icons/ai';
import { RiDashboardFill } from 'react-icons/ri';
import { IoCardOutline, IoCopyOutline } from 'react-icons/io5';
import { MdOutlineDashboardCustomize } from 'react-icons/md';

import logo from '../../assets/images/logo.png';
import { CgLogOff } from 'react-icons/cg';

type Props = {
    sidebarMenus?: any[]
}

const notify = (type: string, msg: string) => {
    if (type === "success") {
      toast.success(msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    if (type === "error") {
      toast.error(msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
};

export const handleLogout = (msg:string = '') => {
    if(msg !== ''){
        notify('success', msg);
        setTimeout(() => {
            localStorage.removeItem("auth");
            localStorage.removeItem("clientId");
            localStorage.removeItem("clientID");
            localStorage.removeItem("clientD");
            localStorage.removeItem("clientToken");
            window.location.href = "/sign-in";
        }, 1500)
    }else {
        localStorage.removeItem("auth");
        localStorage.removeItem("clientId");
        localStorage.removeItem("clientID");
        localStorage.removeItem("clientD");
        localStorage.removeItem("clientToken");
        window.location.href = "/sign-in";
    }
};

const Sidebar = ({sidebarMenus}: Props) => {
    const location = useLocation();
    const { pathname } = location;

    const logout = () => {
        handleLogout('Logged Out')
    }

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

                    <li 
                        className={"cursor-pointer my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white" }
                        title="account"
                        onClick={() => logout()}
                    >
                        <div className='flex justify-start'>
                            <div><span><CgLogOff className='text-xl'/></span></div>
                            <div className='mx-2'>Log Out</div>
                        </div>           
                    </li>

                   
                    
                </ul>
            </div>

            <ToastContainer />
        </>
    )
}

export default Sidebar;