import React from 'react';
import { Step } from '../../../common';
import Card from '../../../shared/card';
import StepHeader from '../../../shared/step-header';
import BuyCryptoStepOne from './buy-crypto-step-one';
import BuyCryptoStepTwo from './buy-crypto-step-two';

const BuyCryptoComp = () => {
    const steps: Step[] = [
        {
            name: 'Choose asset',
            isActive: true
        },
        {
            name: 'amount',
            isActive: false
        },
        {
            name: 'account info',
            isActive: false
        },
        {
            name: 'upload proof',
            isActive: false
        },
    ]

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                <div className='w-12/12'>
                    <StepHeader 
                        title='Buy Crypto'
                        steps={steps}
                        info="While trading with us, make sure you copy the right address for your deposit to avoid lost of fund. upload a screenshot of your transaction as well."  
                    />

                </div>
            </div>

            <div className='flex flex-row my-4'>
                <div className='w-8/12 ml-auto mr-8'>
                    {/* <h3 className="mb-3 text-[#7F7F80]">Select Provider</h3> */}
                    <Card type="lg">
                        {/* airtime steps */}
                        <BuyCryptoStepOne />
                        <BuyCryptoStepTwo />

                        {/* airtime steps */}
                    </Card>
                </div>

                <div className='w-4/12'>
                    <Card type="lg">
                        {/* Crypto rates */}
                        
                        <div>
                            <div className="flex justify-between my-3">
                                <div><p className='text-[#7F7F80]'><strong>Name</strong></p></div>
                                <div><p className='text-[#7F7F80]'><strong>Rate</strong></p></div>
                            </div>
                            <div className="flex justify-between my-3">
                                <div><p className='text-[#7F7F80]'><strong>USDT</strong></p></div>
                                <div><p className='text-[#8652A4] font-thin'><strong>730/$</strong></p></div>
                            </div>
                            <div className="flex justify-between my-3">
                                <div><p className='text-[#7F7F80]'><strong>BNB</strong></p></div>
                                <div><p className='text-[#8652A4] font-thin'><strong>730/$</strong></p></div>
                            </div>
                            <div className="flex justify-between my-3">
                                <div><p className='text-[#7F7F80]'><strong>ETH</strong></p></div>
                                <div><p className='text-[#8652A4] font-thin'><strong>730/$</strong></p></div>
                            </div>
                            <div className="flex justify-between my-3">
                                <div><p className='text-[#7F7F80]'><strong>BTC</strong></p></div>
                                <div><p className='text-[#8652A4] font-thin'><strong>730/$</strong></p></div>
                            </div>
                            <div className="flex justify-between my-3">
                                <div><p className='text-[#7F7F80]'><strong>BTC</strong></p></div>
                                <div><p className='text-[#8652A4] font-thin'><strong>730/$</strong></p></div>
                            </div>
                        </div>
                        {/* Crypto rates */}
                    </Card>
                </div>
            </div>
        </>
    )
}

export default BuyCryptoComp;