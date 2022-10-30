import React from 'react';
import { Step } from '../../../common';
import StepHeader from '../../../shared/step-header';

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
                <div className='w-12/12'>
                    <StepHeader 
                        title='Airtime To Cash'
                        steps={airtimeSteps}
                        info="Use USSD Code: Dial *600*Recipient's Number*Amount*PIN#. (Default Pin; 1234). Kindly note that you can only transfer 5,000 at a time and there's a sim daily limit of 100,000."  
                    />
                </div>
                <div></div>
            </div>
        </>
    )
}

export default AirtimeComp