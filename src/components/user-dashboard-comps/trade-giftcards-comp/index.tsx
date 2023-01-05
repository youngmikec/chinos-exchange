import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';


import Card from '../../../shared/card';
import { ApiResponse, Step } from '../../../common';
import { RETREIVE_GIFTCARD } from '../../../services';
import StepHeader from '../../../shared/step-header';
import TradeGiftcardStepTwo from './trade-giftcard-step-two';
import TradeGiftcardStepOne from './trade-giftcard-step-one';
import TradeGiftcardStepThree from './trade-giftcard-step-three';
import { GiftCard } from '../../../common/giftcard';


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

    //states
    const [step, setStep] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [giftcards, setGiftcards] = useState<GiftCard[]>([]);

    const retreiveGiftCards = () => {
        setLoading(true);
        RETREIVE_GIFTCARD().then((res: AxiosResponse<ApiResponse>) => {
            const { message, success, payload } = res.data;
            if(success){
                setLoading(false);
                console.log(message);
                setGiftcards(payload);
            }
        }).catch(err => {
            const { message } = err.resposne.data;
            setLoading(false);
            console.log(message);
        })
    }

    useEffect(() => {
        retreiveGiftCards()
    }, [])

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
                        {/* {
                            step === 1 &&
                            <TradeGiftcardStepOne changeStep={setStep} giftcards={giftcards} />
                        } */}
                        {/* {
                            step === 2 &&
                            <TradeGiftcardStepTwo />
                        }
                        {
                            step === 3 &&
                            <TradeGiftcardStepThree />
                        } */}
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
                            {
                                giftcards.length > 0 ?
                                giftcards.map((item: GiftCard, idx: number) => {
                                    return (
                                        <div key={idx} className="flex justify-between my-3">
                                            <div><p className='text-[#7F7F80] font-thin text-sm'><strong>{item?.name}</strong></p></div>
                                            <div><p className='text-[#8652A4] font-thin'><strong>{item?.rate}/$</strong></p></div>
                                        </div>
                                    )
                                }):
                                <div>
                                    <p className='text-[#7F7F80] font-thin text-sm'><strong>No Card available</strong></p>
                                </div>

                            }
                            
                        </div>
                        {/* Crypto rates */}
                    </Card>
                </div>
            </div>
        </>
    )
}

export default TradeGiftCardsComp;