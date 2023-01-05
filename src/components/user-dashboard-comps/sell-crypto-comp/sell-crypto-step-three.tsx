import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { APPEND_TO_SELL_CRYPTO_ORDER } from '../../../store/orders';

type Props = {
    changeStep: (data: number) => any,
}

const SellCryptoStepThree = ({ changeStep }: Props) => {
    const dispatch = useDispatch();
    const [bankName, setBankName] = useState<{value: string, error: boolean}>({value: '', error: false})
    const [accountName, setAccountName] = useState<{value: string, error: boolean}>({value: '', error: false})
    const [accountNumber, setAccountNumber] = useState<{value: string, error: boolean}>({value: '', error: false})

    const inputcheck = (): boolean => {
        let isValid: boolean = true;
        if(bankName.value === '' || undefined) {
            setBankName({...bankName, error: true})
            isValid = false;
        }else{
            setBankName({...bankName, error: false})
        }
        if(accountName.value === '' || undefined) {
            setAccountName({...accountName, error: true})
            isValid = false;
        }else{
            setAccountName({...accountName, error: false})
        }
        if(accountNumber.value === '' || undefined) {
            setAccountNumber({...accountNumber, error: true})
            isValid = false;
        }else{
            setAccountNumber({...accountNumber, error: false})
        }
        return isValid
    }

    const handleProceed = () => {
        if(inputcheck()){
            const data = {
                bankName: bankName.value,
                accountName: accountName.value,
                accountNumber: accountNumber.value
            }
            dispatch(APPEND_TO_SELL_CRYPTO_ORDER(data))
            changeStep(4)
        }
    }

    return (
        <>
            <div className='w-full'>
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
                {/* <div className='my-4'>
                    <label htmlFor="confirmAccountNumber" className='text-[#7F7F80] text-sm'>Confirm Account Number</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input type="text" name="confirmAccountNumber" className='w-full px-4 py-2'/>
                    </div>
                </div> */}
                <div className='my-4'>
                    <label htmlFor="accountNumber" className='text-[#7F7F80] text-sm'>Account Number</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input 
                            type="text" 
                            name='accountNumber' 
                            className='w-full px-4 py-2'
                            value={accountNumber.value}
                            onChange={(e) => setAccountNumber({...accountNumber, value: e.target.value})}
                        />
                    </div>
                </div>

                <div className='my-4 flex justify-center'>
                    <button 
                        className='rounded-md bg-[#8652A4] text-white px-6 py-3'
                        onClick={() => handleProceed()}
                    >Proceed</button>
                </div>
            </div>
        </>
    )
}

export default SellCryptoStepThree;