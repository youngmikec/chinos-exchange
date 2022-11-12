import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
                <ul className="list-none">
                    <li 
                        className={`${ pathname === '/users-dashboard' && 'bg-[#8652A4] text-white' } my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white` } 
                        title="Dashboard"
                    >
                        <Link to="/users-dashboard">
                            Dashboard       
                        </Link>
                    </li>
                    <li 
                        className={`${ pathname === '/dashboard' && 'bg-[#8652A4] text-white' } my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white` }
                        title="wallet"
                    >
                        <Link to="/dashboard">
                            Wallet       
                        </Link>
                    </li>
                    <li 
                        className={`${ pathname === '/sell-crypto' && 'bg-[#8652A4] text-white' } my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white` }
                        title="sell crypto"
                    >
                        <Link to="/sell-crypto">
                            Sell Crypto       
                        </Link>
                    </li>
                    <li 
                        className={`${ pathname === '/buy-crypto' && 'bg-[#8652A4] text-white' } my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white` }
                        title="buy crypto"
                    >
                        <Link to="/buy-crypto">
                            Buy Crypto       
                        </Link>
                    </li>
                    <li 
                        className={`${ pathname === '/trade-giftcard' && 'bg-[#8652A4] text-white' } my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white` }
                        title="trade giftcard"
                    >
                        <Link to="/trade-giftcard">
                            Trade Giftcard       
                        </Link>
                    </li>
                    <li 
                        className={`${ pathname === '/airtime' && 'bg-[#8652A4] text-white' } my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white` }
                        title="airtime"
                    >
                        <Link to="/airtime">
                            Airtime to Cash      
                        </Link>
                    </li>
                    <li 
                        className={`${ pathname === '/history' && 'bg-[#8652A4] text-white' } my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white` }
                        title="Order history"
                    >
                        <Link to="/history">
                            Order History      
                        </Link>
                    </li>
                    <li 
                        className={`${ pathname === '/account' && 'bg-[#8652A4] text-white' } my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white` }
                        title="Account setting"
                    >
                        <Link to="/account">
                            Account Settings     
                        </Link>
                    </li>

                   
                    
                </ul>
            </div>
        </>
    )
}

export default Sidebar;