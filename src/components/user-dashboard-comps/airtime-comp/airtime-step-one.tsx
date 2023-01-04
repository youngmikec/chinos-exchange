import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Airtime } from '../../../common';
import { RootState } from '../../../store';
import { APPEND_TO_AIRTIME_ORDER } from '../../../store/orders';

type Props = {
    changeStep: (data: number) => any,
    product: Airtime | null,
}

const AirtimeStepOne = ({ changeStep, product }: Props) => {
    const airtimeOrderState = useSelector((state: RootState) => state.AirtimeOrderSlice.value);
    const dispatch = useDispatch();

    const [rate, setRate] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [amount, setAmount] = useState<{value: number, error: boolean}>({value: 0, error: false});
    const [receivable, setReceivable] = useState<{value: number, error: boolean}>({value: 0, error: false});
    const [percentage, setPercentage] = useState<{value: number, error: boolean}>({value: 0, error: false});
    const [senderPhone, setSenderPhone] = useState<{value: string, error: boolean}>({value: '', error: false});

    const inputCheck = (): boolean => {
        let isValid: boolean = true;
        if(amount.value === 0 || undefined || null){
            isValid = false;
            setAmount({...amount, error: true});
        }else{
            setAmount({...amount, error: false});
        }
        if(receivable.value === 0 || undefined || null){
            isValid = false;
            setReceivable({...receivable, error: true});
        }else{
            setReceivable({...receivable, error: false});
        }
        if(percentage.value === undefined || null){
            isValid = false;
            setPercentage({...percentage, error: true});
        }else{
            setPercentage({...percentage, error: false});
        }
        if(senderPhone.value === '' || undefined || null){
            isValid = false;
            setSenderPhone({...senderPhone, error: true});
        }else{
            setSenderPhone({...senderPhone, error: false})
        }
        return isValid;
    }

    const handleProcceede = () => {
        setLoading(true);
        if(inputCheck()){
            const data = { 
                amount: amount.value, 
                amountReceivable: receivable.value,
                sendersPhone: senderPhone.value,
            };
            dispatch(APPEND_TO_AIRTIME_ORDER(data))
            changeStep(2)
        }
    }

    useEffect(() => {
        if(product) {
            setRate(product.rate);
            setPercentage({...percentage, value: product.rate});
            dispatch(APPEND_TO_AIRTIME_ORDER({ airtime: product }))
        }
    }, [product]);
    
    useEffect(() => {
        if(product) {
            const discount: number = (percentage.value /100) * amount.value; 
            const total: number = amount.value - discount;
            setReceivable({...percentage, value: total});
        }
    }, [percentage.value, amount.value]);
    
    return (
        <>
            <div className='w-full'>
                <div className='my-4'>
                    <label htmlFor="sendersPhone" className='text-[#7F7F80] text-sm'>Sender's Phone</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input 
                            type="text" 
                            placeholder='0902233242' 
                            name='sendersPhone' 
                            className='w-full px-4 py-2'
                            value={senderPhone.value}
                            onChange={(e) => setSenderPhone({...senderPhone, value: e.target.value})}
                        />
                    </div>
                </div>
                <div className='my-4'>
                    <label htmlFor="amount" className='text-[#7F7F80] text-sm'>Amount</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input 
                            type="number" 
                            placeholder='Enter amount you want to sell' 
                            name="amount" 
                            value={amount.value}
                            onChange={(e) => setAmount({...amount, value: parseInt(e.target.value)})}
                            className='w-full px-4 py-2'
                        />
                    </div>
                </div>
                <div className='my-4'>
                    <label htmlFor="percentage" className='text-[#7F7F80] text-sm'>Percentage</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input 
                            type="number" 
                            name='percentage' 
                            disabled={true} 
                            value={percentage.value}
                            onChange={(e) => setAmount({...percentage, value: parseInt(e.target.value)})}
                            className='w-full px-4 py-2'
                        />
                    </div>
                </div>
                <div className='my-4'>
                    <label htmlFor="receivable" className='text-[#7F7F80] text-sm'>Amount you will receive</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input 
                            type="number" 
                            name="receivable" 
                            disabled={true} 
                            value={receivable.value}
                            onChange={(e) => setReceivable({...receivable, value: parseInt(e.target.value)})}                          
                            className='w-full px-4 py-2'
                        />
                    </div>
                </div>
                <div className='my-4 flex justify-center'>
                    <button className='rounded-md bg-[#8652A4] text-white px-6 py-3' onClick={
                        (e) => {
                            e.preventDefault();
                            handleProcceede();
                        }
                    }>Proceed</button>
                </div>
            </div>
        </>
    )
}

export default AirtimeStepOne;