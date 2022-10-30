import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = {
    sidebarMenus?: any[]
}

const Sidebar = ({sidebarMenus}: Props) => {
    const location = useLocation();
    return (
        <>
            <div className="bg-white min-h-screen max-h-fit px-4 py-5">
                <ul className="list-none">
                    <li className='my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white' title="Dashboard">
                        <Link to="/dashboard">
                            Dashboard       
                        </Link>
                    </li>
                    <li className='my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white' title="Dashboard">
                        <Link to="/dashboard">
                            Wallet       
                        </Link>
                    </li>
                    <li className='my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white' title="Dashboard">
                        <Link to="/sell-crypto">
                            Trade Crypto       
                        </Link>
                    </li>
                    <li className='my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white' title="Dashboard">
                        <Link to="/dashboard">
                            Trade Giftcard       
                        </Link>
                    </li>
                    <li className='my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white' title="Dashboard">
                        <Link to="/airtime">
                            Airtime to Cash      
                        </Link>
                    </li>
                    <li className='my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white' title="Dashboard">
                        <Link to="/dashboard">
                            Order History      
                        </Link>
                    </li>
                    <li className='my-6 py-3 px-4 text-center rounded-md hover:bg-[#8652A4] hover:text-white' title="Dashboard">
                        <Link to="/dashboard">
                            Account Settings     
                        </Link>
                    </li>

                   
                    
                </ul>
            </div>
        </>
    )
}

export default Sidebar;