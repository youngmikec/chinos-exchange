import React, { useState } from 'react';
import SuccessAlert from '../../../shared/alerts/success-alert';

const SellCryptoStepFive = () => {
    return (
        <>
            <div className='w-full'>
                <div className='mx-auto w-10/12 mb-4'>
                    <SuccessAlert 
                        title='Great!' 
                        subTitle='Asset recieved' 
                        msg='expect your money if few minutes' 
                    />
                </div>

                
                <div className='my-4 flex justify-center'>
                    <button className='rounded-md bg-[#8652A4] text-white px-6 py-3'>Check Status</button>
                </div>
            </div>
        </>
    )
}

export default SellCryptoStepFive;