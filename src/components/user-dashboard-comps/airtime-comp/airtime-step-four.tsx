import React, { useState } from 'react';
import Card from '../../../shared/card';

type Props = {
    changeStep: (data: number) => any,
}

const AirtimeStepFour = ({ changeStep }: Props) => {
    return (
        <>
            <div className='w-full'>
                <div className='my-4'>
                    <label htmlFor="accountNumber" className='text-[#7F7F80] text-sm'>Summary</label>
                    <div className='mt-2 w-full flex justify-center shadow-lg'>
                        <Card type='sm'>
                            <div className="flex justify-between text-[#7F7F80] text-sm my-6">
                                <div><p>Sender's phone</p></div>
                                <div>+234903255253</div>
                            </div>
                            <div className="flex justify-between text-[#7F7F80] text-sm my-6">
                                <div><p>Percentage</p></div>
                                <div>10%</div>
                            </div>
                            <div className="flex justify-between text-[#7F7F80] text-sm my-6">
                                <div><p>Amount to receive</p></div>
                                <div>2000.00</div>
                            </div>
                        </Card>
                    </div>
                </div>

                
                <div className='my-4 flex justify-center'>
                    <button className='rounded-md bg-[#8652A4] text-white px-6 py-3'>Check Status</button>
                </div>
            </div>
        </>
    )
}

export default AirtimeStepFour;