import React, { useState } from 'react';

const AirtimeStepOne = () => {
    return (
        <>
            <div className='w-full'>
                <div className='my-4'>
                    <label htmlFor="sendersPhone" className='text-[#7F7F80] text-sm'>Sender's Phone</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input type="text" placeholder='0902233242' name='sendersPhone' className='w-full px-4 py-2'/>
                    </div>
                </div>
                <div className='my-4'>
                    <label htmlFor="amount" className='text-[#7F7F80] text-sm'>Amount</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input type="number" placeholder='Enter amount you want to sell' name="amount" className='w-full px-4 py-2'/>
                    </div>
                </div>
                <div className='my-4'>
                    <label htmlFor="percentage" className='text-[#7F7F80] text-sm'>Percentage</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input type="number" name='percentage' disabled={true} className='w-full px-4 py-2'/>
                    </div>
                </div>
                <div className='my-4'>
                    <label htmlFor="receivable" className='text-[#7F7F80] text-sm'>Amount you will receive</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input type="number" name="receivable" disabled={true} className='w-full px-4 py-2'/>
                    </div>
                </div>
                <div className='my-4 flex justify-center'>
                    <button className='rounded-md bg-[#8652A4] text-white px-6 py-3'>Proceed</button>
                </div>
            </div>
        </>
    )
}

export default AirtimeStepOne;