import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosResponse } from 'axios';

import './styles.css';
import { ApiResponse } from '../../common';
import { CREATE_SUBSCRIBER } from '../../services';

type MarketNumber = {
    title: string;
    value: string;
}

const JoinUs = () => {
    const marketNumbers: MarketNumber[] = [
        { title: "Happy Customers", value: "+60k"},
        { title: "Daily Transactions", value: "+500"},
        { title: "Ticket Resolved", value: "+99%"},
    ];

    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');

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

    const handleSubscribe = () => {
        setLoading(true);
        const data = { subscriberEmail: email }
        CREATE_SUBSCRIBER(data).then((res: AxiosResponse<ApiResponse>) => {
            const { message, success } = res.data;
            if(success){
                setLoading(false);
                setEmail('');
                notify('success', message);
                setTimeout(() => {
                    navigate('/sign-in');
                }, 2000);
            }
        }).catch((err: any) => {
            setLoading(false);
            const { message } = err.response.data;
            notify('error', message);
        })
    }


    return (
        <>
            {/* input section */}
            <div className='hero-bg flex justify-center justify-items-center'>
                <div className='text-center my-16 w-10/12 sm:w-7/12 md:w-6/12 lg:w-5/12'>
                    <p className="text-white text-lg font-semibold mb-8">Join Our Growing Community Today</p>

                    <div className='flex w-full justify-between rounded-lg border-none bg-white'>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full rounded-lg border-none bg-white py-3 px-5' 
                        />
                        <button 
                            onClick={() => handleSubscribe()}
                            className='rounded-lg text-white bg-[#8652A4] py-3 px-6 min-w-max'
                        >
                            {/* <Link to="/sign-in"></Link> */}
                            { loading ? 'joining...' : "Let's Trade" }
                        </button>
                    </div>
                </div>
            </div>
            {/* input section */}




            {/* Market Numbers */}
            <div className="w-full">
                <div className="mx-auto w-9/12 my-12">
                    <p className="text-[#585858] text-lg text-center font-semibold my-8">Our Market Growth Numbers</p>
                    {/* market Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 mg:grid-cols-3 lg:grid-cols-3">
                        {
                            marketNumbers.length > 0 &&
                            marketNumbers.map((item: MarketNumber, key: number) => {
                                return <div key={key} className="hover:shadow-lg px-2 py-4 text-center">
                                    <h3 className='my-5 text-[#8652A4] text-3xl font-bold'>{ item.value }</h3>
                                    <p className='text-[#12121271]'>{ item.title }</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <ToastContainer />
            {/* Market Numbers */}
        </>
    )
}

export default JoinUs;