import React from 'react'

const BuyCryptoStepFour = () => {
  return (
    <>
            <div className='w-full'>
               <div className="text-center">
               <h2 className='text-[#7F7F80] text-lg my-16'>Upload Proof</h2>
               <p className='text-[#7F7F80] text-sm '>Kindly upload a proof your transaction</p>
               </div>
                <div className='my-4'>
                    {/* <label htmlFor="accountNumber" className='text-[#7F7F80] text-sm '>Kindly upload a proof your transaction</label> */}
                    <div className='border-2 border-gray-100 rounded-md mt-2 h-32 w-full flex justify-center'>
                        <button className='text-center text-[#7F7F80]'>
                            + <br /> Choose file
                        </button>
                        <input type="file" className='hidden' />
                    </div>
                </div>

                
                <div className='my-10 flex justify-center'>
                    <button className='rounded-md bg-[#8652A4] text-white px-6 py-3'>Finish</button>
                </div>
            </div>
        </>
  )
}

export default BuyCryptoStepFour;