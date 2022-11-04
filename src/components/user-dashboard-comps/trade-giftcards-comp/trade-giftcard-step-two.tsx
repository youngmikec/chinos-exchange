import React, { useState } from 'react';

const TradeGiftcardStepTwo = () => {
    return (
        <>
            <div className='w-full'>
                <div className='my-4'>
                    <label htmlFor="cardNumber" className='text-[#7F7F80] text-sm'>Card Number</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input type="text" placeholder='0902233242' name='cardNumber' className='w-full px-4 py-2'/>
                    </div>
                </div>
                <div className='my-4'>
                    <label htmlFor="accountNumber" className='text-[#7F7F80] text-sm'>Kindly upload a proof your transaction</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2 h-32 w-full flex justify-center'>
                        <button className='text-center text-[#7F7F80]'>
                            + <br /> Choose file
                        </button>
                        <input type="file" className='hidden' />
                    </div>
                </div>

                
                <div className='my-4 flex justify-center'>
                    <button className='rounded-md bg-[#8652A4] text-white px-6 py-3'>Proceed</button>
                </div>
            </div>
        </>
    )
}

export default TradeGiftcardStepTwo;