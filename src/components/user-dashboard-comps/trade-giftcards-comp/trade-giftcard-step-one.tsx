import React, { useState } from 'react';

const TradeGiftcardStepOne = () => {
    return (
        <>
            <div className='w-full'>
                <div className='my-4'>
                    <label htmlFor="amount" className='text-[#7F7F80] text-sm'>Amount</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input type="number" placeholder='Enter amount you want to sell' name="amount" className='w-full px-4 py-2'/>
                    </div>
                </div>
                
                <div className='my-4'>
                    <label htmlFor="cardType" className='text-[#7F7F80] text-sm'>Card Type</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <select name="cardType" id="crypto" className='w-full px-4 py-2'>
                            <option value="amazon">Amazon Giftcard</option>
                            <option value="steam">Steam Giftcard</option>
                            <option value="steam">Steam Giftcard</option>
                        </select>
                    </div>
                </div>

                <div className='my-4'>
                    <label htmlFor="recieptType" className='text-[#7F7F80] text-sm'>reciept Type</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <select name="recieptType" id="crypto" className='w-full px-4 py-2'>
                            <option value="amazon">Use Amazon Giftcard receipt</option>
                            <option value="steam">Steam Giftcard</option>
                            <option value="steam">Steam Giftcard</option>
                        </select>
                    </div>
                </div>

                <div className='my-4'>
                    <label htmlFor="receivingCurrency" className='text-[#7F7F80] text-sm'>Receiving Currency</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input type="text" name='receivingCurrency' className='w-full px-4 py-2'/>
                    </div>
                </div>
                
                <div className='my-4 flex justify-center'>
                    <button className='rounded-md bg-[#8652A4] text-white px-6 py-3'>Proceed</button>
                </div>
            </div>
        </>
    )
}

export default TradeGiftcardStepOne;