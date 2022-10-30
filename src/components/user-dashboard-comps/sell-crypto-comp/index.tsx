import React from 'react';
import { Step } from '../../../common';
import StepHeader from '../../../shared/step-header';

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
                <div></div>
            </div>
        </>
    )
}

export default SellCryptoComp;