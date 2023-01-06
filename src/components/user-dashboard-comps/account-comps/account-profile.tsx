import React from 'react';

import profile from '../../../assets/images/arash.png';

const AccountProfile = () => {
  return (
    <>
        <div>
            <div className='w-full border-b-2 border-[#7f7f8056] py-5 px-5'>
                <div className='flex justify-start'>
                    <div className='mx-3'>
                        <div className="rounded-full bg-[#b1bbdf] p-1">
                            <img src={profile} alt="profile" className='' width='80px' height='80px'  />
                        </div>
                    </div>

                    <div className='mx-3 my-auto'>
                        <button className='hover:bg-[#8652A4] border-2 border-[#8652A4] text-[#8652A4] hover:text-white rounded-md py-1 px-6'>
                            Upload
                        </button>
                    </div>

                    {/* <div className='mx-3 my-auto'>
                        <button className='text-[#8652A4] border-2 border-[#8652A4] rounded-md py-1 px-6'>
                            Upload
                        </button>
                    </div> */}
                    <div></div>
                </div>
            </div>

            <div className='mt-6 py-5 px-5'>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:space-x-2">
                    <div className='my-4'>
                        <label htmlFor="firstName" className='text-[#7F7F80] text-sm font-bold'>First Name</label>
                        <div className='border-2 border-gray-100 rounded-xl mt-2'>
                            <input type="text" name="firstName" className='w-full px-4 py-2'/>
                        </div>
                    </div>
                    <div className='my-4'>
                        <label htmlFor="lastName" className='text-[#7F7F80] text-sm font-bold'>Last Name</label>
                        <div className='border-2 border-gray-100 rounded-xl mt-2'>
                            <input type="text" name="lastName" className='w-full px-4 py-2'/>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:space-x-2">
                    <div className='my-4'>
                        <label htmlFor="email" className='text-[#7F7F80] text-sm font-bold'>Email Address</label>
                        <div className='border-2 border-gray-100 rounded-xl mt-2'>
                            <input type="eamil" name="email" className='w-full px-4 py-2'/>
                        </div>
                    </div>

                    <div className='my-4'>
                        <label htmlFor="phone" className='text-[#7F7F80] text-sm font-bold'>Phone Number</label>
                        <div className='border-2 border-gray-100 rounded-xl mt-2'>
                            <input type="text" name="phone" className='w-full px-4 py-2'/>
                        </div>
                    </div>
                </div>

                <div className='mt-6 flex justify-center'>
                    <button className='rounded-md bg-[#8652A4] text-white px-6 py-3'>Save Change</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AccountProfile;