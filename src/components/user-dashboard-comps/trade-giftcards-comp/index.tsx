import React from 'react';
import { Step } from '../../../common';
import Card from '../../../shared/card';
import StepHeader from '../../../shared/step-header';
import TradeGiftcardStepOne from './trade-giftcard-step-one';
import TradeGiftcardStepThree from './trade-giftcard-step-three';
import TradeGiftcardStepTwo from './trade-giftcard-step-two';


const TradeGiftCardsComp = () => {
    const steps: Step[] = [
        {
            name: 'Choose Card Type',
            isActive: false
        },
        {
            name: 'Upload picture',
            isActive: true
        },
        {
            name: 'Status',
            isActive: false
        }
    ]

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                <div className='w-12/12'>
                    <StepHeader 
                        title='Trade Giftcard'
                        steps={steps}
                        info="While trading with us, make sure you keep your reciept/ invoice used in purchasing the giftcard. Enter your gift card details in each field below to calculate how much naira"  
                    />

                </div>
            </div>

            <div className='flex flex-row my-4'>
                <div className='w-8/12 ml-auto mr-8'>
                    {/* <h3 className="mb-3 text-[#7F7F80]">Select Provider</h3> */}
                    <Card type="lg">
                        {/* trade giftcard steps */}
                        
                        <TradeGiftcardStepOne />
                        <TradeGiftcardStepTwo />
                        <TradeGiftcardStepThree />
                        {/* trade giftcard steps */}
                    </Card>
                </div>

                <div className='w-4/12'>
                    <Card type="lg">
                        {/* Crypto rates */}
                        <div className="my-4 text-center">
                            <h3 className='text-[#8652A4] font-bold text-xl'>Best Giftcard so far</h3>
                        </div>
                        <div>
                            <div className="flex justify-between my-3">
                                <div><p className='text-[#77777e]'><strong>Name</strong></p></div>
                                <div><p className='text-[#7F7F80]'><strong>Rate</strong></p></div>
                            </div>
                            <div className="flex justify-between my-3">
                                <div><p className='text-[#7F7F80] font-thin text-sm'><strong>Steam Gift Card</strong></p></div>
                                <div><p className='text-[#8652A4] font-thin'><strong>530/$</strong></p></div>
                            </div>
                            <div className="flex justify-between my-3">
                                <div><p className='text-[#7F7F80] font-thin text-sm'><strong>Steam Gift Card</strong></p></div>
                                <div><p className='text-[#8652A4] font-thin'><strong>530/$</strong></p></div>
                            </div>
                            <div className="flex justify-between my-3">
                                <div><p className='text-[#7F7F80] font-thin text-sm'><strong>Steam Gift Card</strong></p></div>
                                <div><p className='text-[#8652A4] font-thin'><strong>530/$</strong></p></div>
                            </div>
                            <div className="flex justify-between my-3">
                                <div><p className='text-[#7F7F80] font-thin text-sm'><strong>Steam Gift Card</strong></p></div>
                                <div><p className='text-[#8652A4] font-thin'><strong>530/$</strong></p></div>
                            </div>
                            <div className="flex justify-between my-3">
                                <div><p className='text-[#7F7F80] font-thin text-sm'><strong>Steam Gift Card</strong></p></div>
                                <div><p className='text-[#8652A4] font-thin'><strong>530/$</strong></p></div>
                            </div>
                            <div className="flex justify-between my-3">
                                <div><p className='text-[#7F7F80] font-thin text-sm'><strong>Steam Gift Card</strong></p></div>
                                <div><p className='text-[#8652A4] font-thin'><strong>530/$</strong></p></div>
                            </div>
                            <div className="flex justify-between my-3">
                                <div><p className='text-[#7F7F80] font-thin text-sm'><strong>Steam Gift Card</strong></p></div>
                                <div><p className='text-[#8652A4] font-thin'><strong>530/$</strong></p></div>
                            </div>

                            
                        </div>
                        {/* Crypto rates */}
                    </Card>
                </div>
            </div>
        </>
    )
}

export default TradeGiftCardsComp;