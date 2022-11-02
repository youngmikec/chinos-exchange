import React from 'react';
import { Step } from '../../../common';
import Card from '../../../shared/card';
import StepHeader from '../../../shared/step-header';
import SellCryptoStepFive from './sell-crypto-step-five';
import SellCryptoStepFour from './sell-crypto-step-four';
import SellCryptoStepOne from './sell-crypto-step-one';
import SellCryptoStepThree from './sell-crypto-step-three';
import SellCryptoStepTwo from './sell-crypto-step-two';

const SellCryptoComp = () => {
    const steps: Step[] = [
        {
            name: 'Choose asset',
            isActive: true
        },
        {
            name: 'account details',
            isActive: false
        },
        {
            name: 'upload proof',
            isActive: false
        },
        {
            name: 'status',
            isActive: false
        },
    ]

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                <div className='w-12/12'>
                    <StepHeader 
                        title='Sell Crypto'
                        steps={steps}
                        info="While trading with us, make sure you copy the right address for your deposit to avoid lost of fund. upload a screenshot of your transaction as well."  
                    />

                </div>
            </div>

            <div className='flex flex-row my-4'>
                <div className='w-8/12 ml-auto mr-8'>
                    {/* <h3 className="mb-3 text-[#7F7F80]">Select Provider</h3> */}
                    <Card type="lg">
                        {/* sell crypto steps */}
                        <SellCryptoStepOne />
                        <SellCryptoStepTwo />
                        <SellCryptoStepThree />
                        <SellCryptoStepFour />
                        <SellCryptoStepFive />

                        {/* sell crypto steps */}
                    </Card>
                </div>

                <div className='w-4/12'>
                    <Card type="lg">
                        {/* Crypto rates */}
                        <div className="my-4 text-center">
                            <h3 className='text-[#8652A4] font-bold text-xl'>Current Rate Price</h3>
                        </div>
                        <div>
                            <div className="flex justify-between my-3">
                                <div><p className='text-[#77777e]'><strong>Name</strong></p></div>
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

export default SellCryptoComp;