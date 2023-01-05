import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import Card from '../../../shared/card';
import { RootState } from '../../../store';
import SuccessAlert from '../../../shared/alerts/success-alert';
import { CLEAR_AIRTIME_ORDER } from '../../../store/orders';

type Props = {
    changeStep: (data: number) => any,
    status?: string,
}

const AirtimeStepFour = ({ changeStep, status }: Props) => {
    const airtimeOrderState = useSelector((state: RootState) => state.AirtimeOrderSlice.value);
    const dispatch = useDispatch();

    const clearState = () => {
        dispatch(CLEAR_AIRTIME_ORDER());
    }

    useEffect(() => {
        console.log( { airtimeOrderState });
    }, [])

    return (
        <>
            <div className='w-full'>
                <div className='my-4'>
                    <label htmlFor="accountNumber" className='text-[#7F7F80] text-sm'>Summary</label>
                    <div className='mt-2 w-full flex justify-center shadow-lg'>
                        <Card type='sm'>
                            {
                                status === 'success' && 
                                <div className='mb-6'>
                                    <SuccessAlert 
                                        title='Great!' 
                                        subTitle='Order Created'
                                        msg="expect your money if few minutes"
                                    />
                                </div>
                            }
                            <div className="flex justify-between text-[#7F7F80] text-sm my-6">
                                <div><p>Sender's phone</p></div>
                                <div>{ airtimeOrderState?.sendersPhone }</div>
                            </div>
                            <div className="flex justify-between text-[#7F7F80] text-sm my-6">
                                <div><p>Percentage</p></div>
                                <div>{ airtimeOrderState?.airtime?.rate }%</div>
                            </div>
                            <div className="flex justify-between text-[#7F7F80] text-sm my-6">
                                <div><p>Amount to receive</p></div>
                                <div><span className='line-through'>N</span> { airtimeOrderState?.amountReceivable }</div>
                            </div>
                        </Card>
                    </div>
                </div>

                
                <div className='my-4 flex justify-center'>
                    <button 
                        onClick={() => { clearState() }}
                        className='rounded-md bg-[#8652A4] text-white px-6 py-3' 
                    >
                        <Link to="/history">Check Status</Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default AirtimeStepFour;