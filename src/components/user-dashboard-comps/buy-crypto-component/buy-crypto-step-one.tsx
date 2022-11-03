import React from 'react'

const BuyCryptoStepOne = () => {
  return (
    <>
    <div className='w-full'>
        <div className='my-4'>
            <label htmlFor="crypto" className='text-[#7F7F80] text-sm'>Select crypto</label>
            <div className='border-2 border-gray-100 rounded-md mt-2'>
                <select name="crypto" id="crypto" className='w-full px-4 py-2'>
                    <option value="usdt">Usdt</option>
                    <option value="btc">Btc</option>
                    <option value="eth">Eth</option>
                </select>
            </div>
        </div>
        <div className='my-4'>
            <label htmlFor="network" className='text-[#7F7F80] text-sm'>Network E.g Bep20</label>
            <div className='border-2 border-gray-100 rounded-md mt-2'>
                <select name="network" id="network" className='w-full px-4 py-2'>
                    <option value="Bep20">Bep20</option>
                    <option value="Bep20">Bep20</option>
                    <option value="Bep20">Bep20</option>
                </select>
            </div>
        </div>

        <div className='my-4'>
            <label htmlFor="amount" className='text-[#7F7F80] text-sm'>Paste Address</label>
            
            <div className='border-2 border-gray-100 rounded-md mt-2'>
                <input type="number" placeholder='AERJKOPO12345GHNBY67626 ' name="amount" className='w-full px-4 py-2 '/>
            </div>
        </div>

       
        <div className='my-8 flex justify-center'>
            <button className='rounded-md bg-[#8652A4] text-white px-6 py-3'>Proceed</button>
        </div>
    </div>
</>
  )
}

export default BuyCryptoStepOne