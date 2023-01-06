import { url } from 'inspector';
import React from 'react'

type Props = {
    image: string;
}

const DashboardCard = ({image}: Props) => {
    const style = {
        background: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        blendMode: "overlay",
        backgroundColor: '#8652A4',
        opacity: 0.95
    }

  return (
    <>
        <div>
            <div className='w-full py-4 px-6 text-white' style={style}>
                <p className='font-medium text-lg text-white mb-10 mt-4'>Account Balance</p> 
                <div className='mb-4'>
                        <h1 className='text-4xl font-semibold'>NGN 0.00</h1>
                </div>

                <div className='flex justify-between'>
                    <div> 
                        <button className='bg-[#CFBADB] rounded-md px-8 py-1'>Found</button> 
                    </div>
                    <div>
                        <button className='bg-[#CFBADB] rounded-md px-8 py-1'>Withdraw</button>
                    </div>
                </div>
            </div>           
        </div>
    </>
  )
}

export default DashboardCard