import React from 'react'

const BuyCryptoStepThree = () => {
  return (
   <>
   <div className="flex flex-col">
   <div className="text-left">
   <div>
    <h2 className='text-xl text-[#7F7F80] my-10'>Bank Information </h2>
    <p className='text-[#7F7F80] my-5'>
    Kindly make a refundable amount of 100,000 <br /> to the account below
    </p>
   </div>
   <hr />
   <div className='text-[#7F7F80] my-10'>
    <p className='my-4'>Account Name</p>
    <p className='my-4'>Account Number</p>
    <p className='my-4'>Bank Name</p>
   </div>
   </div>
   <div className='my-8 flex justify-center'>
            <button className='rounded-md bg-[#8652A4] text-white px-6 py-3'>Mark paid</button>
        </div>
    </div>
   </>
  )
}

export default BuyCryptoStepThree;