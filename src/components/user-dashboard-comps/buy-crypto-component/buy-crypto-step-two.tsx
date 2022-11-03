import React from 'react'

const BuyCryptoStepTwo = () => {
  return (
    <>
    <div className='w-full'>
        <div className='my-4'>
            <label htmlFor="amount" className='text-[#7F7F80] text-sm'>Amount (N)</label>
            <div className='border-2 border-gray-100 rounded-md mt-2'>
                <select name="amount" id="amount" className='w-full px-4 py-2 outline-none'>
                    <option value="">10,000</option>
                    <option value="">20,000</option>
                    <option value="">100,000</option>
                </select>
            </div>
        </div>
        <div className='my-4'>
            <label htmlFor="network" className='text-[#7F7F80] text-sm'>You will receive</label>
            <div className='border-2 border-gray-100 rounded-md mt-2'>
            <input type="number" placeholder='$1000 ' name="amount" className='w-full px-4 py-2 '/>
            </div>
        </div>


       
        <div className='my-8 flex justify-center'>
            <button className='rounded-md bg-[#8652A4] text-white px-6 py-3'>Proceed</button>
        </div>
    </div>
</>
  )
}

export default BuyCryptoStepTwo