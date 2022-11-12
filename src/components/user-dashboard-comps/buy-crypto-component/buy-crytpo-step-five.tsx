import React from 'react'

import verified from '../../../assets/images/verified.png'

const BuyCryptoStepFive = () => {
  return (
   <>
   <div className="w-full">
      <div className="self-center flex my-24">
        <img src={verified} alt="" className='justify-center flex mx-auto ' />
      </div>
      <div className='my-8 flex justify-center'>
        <button className='rounded-md bg-[#8652A4] text-white px-6 py-3'>Check Status</button>
      </div>
   </div>
   </>
  )
}

export default BuyCryptoStepFive;