import React, { useState } from 'react';

const AirtimeStepTwo = () => {
    return (
        <>
            <div className='w-full'>
                <div className='my-4'>
                    <label htmlFor="accountNumber" className='text-[#7F7F80] text-sm'>Account Number</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input type="text" name='accountNumber' className='w-full px-4 py-2'/>
                    </div>
                </div>
                <div className='my-4'>
                    <label htmlFor="confirmAccountNumber" className='text-[#7F7F80] text-sm'>Confirm Account Number</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input type="text" name="confirmAccountNumber" className='w-full px-4 py-2'/>
                    </div>
                </div>
                <div className='my-4'>
                    <label htmlFor="accountName" className='text-[#7F7F80] text-sm'>Account Name</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input type="number" name='accountName' disabled={true} className='w-full px-4 py-2'/>
                    </div>
                </div>
                <div className='my-4'>
                    <label htmlFor="bankName" className='text-[#7F7F80] text-sm'>Bank Name</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input type="number" name="bankName" disabled={true} className='w-full px-4 py-2'/>
                    </div>
                </div>
                <div className='my-4 flex justify-center'>
                    <button className='rounded-md bg-[#8652A4] text-white px-6 py-3'>Proceed</button>
                </div>
            </div>
        </>
    )
}

export default AirtimeStepTwo;