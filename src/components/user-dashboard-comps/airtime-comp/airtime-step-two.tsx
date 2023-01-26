import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { RootState } from '../../../store';
import { APPEND_TO_AIRTIME_ORDER } from '../../../store/orders';


type Props = {
    changeStep: (data: number) => any
}

const AirtimeStepTwo = ({ changeStep }: Props) => {
    const airtimeOrderState = useSelector((state: RootState) => state.AirtimeOrderSlice.value);
    const dispatch = useDispatch();

    const [rate, setRate] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [bankName, setBankName] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [accountName, setAccountName] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [accountNumber, setAccountNumber] = useState<{value: string, error: boolean}>({value: '', error: false});

    const inputCheck = (): boolean => {
        let isValid: boolean = true;
        if(bankName.value === '' || undefined || null){
            isValid = false;
            setBankName({...bankName, error: true});
        }else{
            setBankName({...bankName, error: false});
        }
        if(accountName.value === '' || undefined || null){
            isValid = false;
            setAccountName({...accountName, error: true});
        }else{
            setAccountName({...accountName, error: false});
        }
        if(accountNumber.value === '' || undefined || null){
            isValid = false;
            setAccountNumber({...accountNumber, error: true});
        }else{
            setAccountNumber({...accountNumber, error: false});
        }
        return isValid;
    }

    const handleProcceede = () => {
        setLoading(true);
        if(inputCheck()){
            const data = { 
                bankName: bankName.value, 
                accountName: accountName.value,
                accountNumber: accountNumber.value,
                paymentMethod: "BANK"
            };
            dispatch(APPEND_TO_AIRTIME_ORDER(data))
            changeStep(3)
        }
    }
    // useEffect(() => {
    //     if(airtimeOrderState !== null){
    //         setAccountName({value: airtimeOrderState.accountName, error: false});
    //         setAccountNumber({value: airtimeOrderState.accountNumber, error: false});
    //         setBankName({value: airtimeOrderState.bankName, error: false});
    //     }
    // }, [])

    return (
        <>
            <div className='w-full'>
                <div className='my-4'>
                    <label htmlFor="accountNumber" className='text-[#7F7F80] text-sm'>Account Number</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input 
                            type="text" 
                            name='accountNumber'
                            min={10}
                            max={10}
                            className='w-full px-4 py-2'
                            value={accountNumber.value}
                            onChange={(e) => setAccountNumber({...accountNumber, value: e.target.value})}
                        />
                    </div>
                </div>
                
                <div className='my-4'>
                    <label htmlFor="accountName" className='text-[#7F7F80] text-sm'>Account Name</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input 
                            type="text" 
                            name='accountName' 
                            className='w-full px-4 py-2'
                            value={accountName.value}
                            onChange={(e) => setAccountName({...accountName, value: e.target.value})}
                        />
                    </div>
                </div>

                <div className='my-4'>
                    <label htmlFor="bankName" className='text-[#7F7F80] text-sm'>Bank Name</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input 
                            type="text" 
                            name="bankName" 
                            className='w-full px-4 py-2'
                            value={bankName.value}
                            onChange={(e) => setBankName({...bankName, value: e.target.value})}
                        />
                    </div>
                </div>

                <div className='my-4 flex justify-center'>
                    <button 
                        className='rounded-md bg-[#8652A4] text-white px-6 py-3'
                        onClick={
                            (e) => {
                                e.preventDefault();
                                handleProcceede();
                            }
                        }
                    >Proceed</button>
                </div>
            </div>
        </>
    )
}

export default AirtimeStepTwo;