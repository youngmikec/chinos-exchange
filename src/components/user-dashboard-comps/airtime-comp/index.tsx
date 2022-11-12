import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

import { Step } from '../../../common';
import Card from '../../../shared/card';
import StepHeader from '../../../shared/step-header';

// airtime icons
import MTN from '../../../assets/icons/mtn.png';
import GLO from '../../../assets/icons/glo.png';
import AIRTEL from '../../../assets/icons/airtel.png';
import NINEMOBILE from '../../../assets/icons/9mobile.png';

// components
import AirtimeStepOne from './airtime-step-one';
import AirtimeStepThree from './airtime-step-three';
import AirtimeStepTwo from './airtime-step-two';
import AirtimeStepFour from './airtime-step-four';

const AirtimeComp = () => {
    const airtimeSteps: Step[] = [
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
                <div className='w-full'>
                    <StepHeader 
                        title='Airtime To Cash'
                        steps={airtimeSteps}
                        info="Use USSD Code: Dial *600*Recipient's Number*Amount*PIN#. (Default Pin; 1234). Kindly note that you can only transfer 5,000 at a time and there's a sim daily limit of 100,000."  
                    />

                    <div className='my-4'>
                        <h3 className="mb-3 text-[#7F7F80]">Select Provider</h3>
        
                        <Card type="lg">
                            <div className="flex justify-start">
                                <div className='border-2 border-gray-100 rounded-md relative mx-4 px-4 py-2'>
                                    <img src={MTN} alt="mtn" width="50px" height="50px" />
                                    <AiFillCheckCircle className='text-[#8652A4] absolute top-0 right-0' />
                                </div>
                                <div className='border-2 border-gray-100 rounded-md relative mx-4 px-4 py-2'>
                                    <img src={GLO} alt="GLO" width="50px" height="50px" />
                                    <AiFillCheckCircle className='text-[#8652A4] absolute top-0 right-0' />
                                </div>
                                <div className='border-2 border-gray-100 rounded-md relative mx-4 px-4 py-2'>
                                    <img src={AIRTEL} alt="AIRTEL" width="50px" height="50px" />
                                    <AiFillCheckCircle className='text-[#8652A4] absolute top-0 right-0' />
                                </div>
                                <div className='border-2 border-gray-100 rounded-md relative mx-4 px-4 py-2'>
                                    <img src={NINEMOBILE} alt="NINEMOBILE" width="50px" height="50px" />
                                    <AiFillCheckCircle className='text-[#8652A4] absolute top-0 right-0' />
                                </div>
                            </div>

                            {/* airtime steps */}

                            <AirtimeStepOne />
                            <AirtimeStepTwo />
                            <AirtimeStepThree />
                            <AirtimeStepFour />

                            {/* airtime steps */}
                        </Card>
                    </div>
                </div>

                <div>
                    
                </div>
            </div>
        </>
    )
}

export default AirtimeComp