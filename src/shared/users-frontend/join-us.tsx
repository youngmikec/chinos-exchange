import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css';

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


    return (
        <>
            {/* input section */}
            <div className='hero-bg flex justify-center justify-items-center'>
                <div className='text-center my-16 w-10/12 sm:w-7/12 md:w-6/12 lg:w-5/12'>
                    <p className="text-white text-lg font-semibold mb-8">Join Our Growing Community Today</p>

                    <div className='flex w-full justify-between rounded-lg border-none bg-white'>
                        <input type="text" className='w-full rounded-lg border-none bg-white py-3 px-5' />
                        <button className='rounded-lg text-white bg-[#8652A4] py-3 px-6 min-w-max'>
                            <Link to="/sign-in">Let's Trade</Link>
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
            {/* Market Numbers */}
        </>
    )
}

export default JoinUs;