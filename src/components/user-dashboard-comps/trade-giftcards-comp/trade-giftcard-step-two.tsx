import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosResponse } from 'axios';

import { ApiResponse } from '../../../common';
import { CREATE_ORDER } from '../../../services';
import { RootState } from '../../../store';
import { APPEND_TO_BUY_GIFTCARD_ORDER } from '../../../store/orders';

type Props = {
    changeStep: (data: number) => any,
    changeStatus: (data: string) => any,
}

const TradeGiftcardStepTwo = ({changeStep, changeStatus}: Props) => {
    const giftcardOrderState = useSelector((state: RootState) => state.BuyGiftcardOrderSlice.value);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState<boolean>(false);
    const [cardNumber, setCardNumber] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [bankName, setBankName] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [accountName, setAccountName] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [accountNumber, setAccountNumber] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [proofImage, setProofImage] = useState<{value: string, error: boolean}>({value: '', error: false});
    const fileRef = useRef<HTMLInputElement>(null);

    const openFile = () => {
        return fileRef.current?.click();
    }

    const notify = (type: string, msg: string) => {
        if (type === "success") {
          toast.success(msg, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
    
        if (type === "error") {
          toast.error(msg, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
    };

    const handleFileRead = async (e: any) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setProofImage({...proofImage, value: base64});
        dispatch(APPEND_TO_BUY_GIFTCARD_ORDER({proofImage: base64}))
    }

    const convertBase64 = (file: any): Promise<any> => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        }
        )
    }

    const inputCheck = (): boolean => {
        let isValid: boolean = true;
        if(cardNumber.value === '' || undefined || null){
            isValid = false;
            setCardNumber({...cardNumber, error: true});
        }else{
            setCardNumber({...cardNumber, error: false});
        }
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
        if(proofImage.value === '' || undefined || null){
            isValid = false;
            setProofImage({...proofImage, error: true});
        }else{
            setProofImage({...proofImage, error: false});
        }

        return isValid;
    }

    const handleSubmit = () => {
        if(inputCheck()){
            setLoading(true);
            const data = {
                orderType: "GIFTCARD",
                paymentMethod: 'BANK',
                amount: giftcardOrderState?.amount,
                giftcard: giftcardOrderState?.giftcard,
                cardNumber: cardNumber?.value,
                cardType: giftcardOrderState?.cardType,
                amountReceivable: giftcardOrderState?.amountReceivable,
                proofImage: giftcardOrderState?.proofImage,
                bankName: bankName.value,
                accountName: accountName.value,
                accountNumber: accountNumber.value,
            }
            CREATE_ORDER(data).then((res: AxiosResponse<ApiResponse>) => {
                const { success, message } = res.data;
                if(success){
                    setLoading(false);
                    notify('success', message);
                    changeStatus('success')
                    changeStep(3);
                }
            }).catch((err: any) => {
                setLoading(false);
                const { message } = err.response.data;
                notify('error', message);
                changeStatus('error');
            })
        }
    }

    return (
        <>
            <div className='w-full'>
                <div className='my-4'>
                    <label htmlFor="cardNumber" className='text-[#7F7F80] text-sm'>Card Number</label>
                    <div className={`border-2 ${cardNumber.error ? 'border-red-500' : 'border-gray-100'} rounded-md mt-2`}>
                        <input 
                            type="text" 
                            placeholder='0902233242' 
                            name='cardNumber'
                            minLength={10}
                            maxLength={15}
                            className='w-full px-4 py-2'
                            value={cardNumber.value}
                            onChange={(e) => setCardNumber({...cardNumber, value: e.target.value})}
                        />
                    </div>
                </div>

                <div className='my-4'>
                    <label htmlFor="bankName" className='text-[#7F7F80] text-sm'>Bank Name</label>
                    <div className={`border-2 ${bankName.error ? 'border-red-500' : 'border-gray-100'} rounded-md mt-2`}>
                        <input 
                            type="text" 
                            name='bankName' 
                            className='w-full px-4 py-2'
                            value={bankName.value}
                            onChange={(e) => setBankName({...bankName, value: e.target.value})}
                        />
                    </div>
                </div>

                <div className='my-4'>
                    <label htmlFor="accountName" className='text-[#7F7F80] text-sm'>Account Name</label>
                    <div className={`border-2 ${accountName.error ? 'border-red-500' : 'border-gray-100'} rounded-md mt-2`}>
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
                    <label htmlFor="accountNumber" className='text-[#7F7F80] text-sm'>Account Number</label>
                    <div className={`border-2 ${accountNumber.error ? 'border-red-500' : 'border-gray-100'} rounded-md mt-2`}>
                        <input 
                            type="text" 
                            placeholder='0902233242' 
                            name='accountNumber'
                            minLength={10}
                            maxLength={10}
                            className='w-full px-4 py-2'
                            value={accountNumber.value}
                            onChange={(e) => setAccountNumber({...accountNumber, value: e.target.value})}
                        />
                    </div>
                </div>

                <div className='my-4'>
                    <label htmlFor="accountNumber" className='text-[#7F7F80] text-sm'>Kindly upload a proof your transaction</label>
                    <div className={`border-2 ${proofImage.error ? 'border-red-500' : 'border-gray-100'} rounded-md mt-2 h-32 w-full flex justify-center`}>
                        {
                            proofImage.value ? 
                            <img src={proofImage.value} alt="uploaded" /> :
                            <button className='text-center text-[#7F7F80]' onClick={() => openFile()}>
                                + <br /> Choose file
                            </button>
                        }
                        <input 
                            type="file" 
                            className='hidden'
                            ref={fileRef}
                            onChange={(e) => handleFileRead(e)}
                        />
                    </div>
                </div>

                
                <div className='my-4 flex justify-center'>
                    <button className='rounded-md bg-[#8652A4] text-white px-6 py-3' 
                        onClick={() => handleSubmit()}
                    >
                        { loading ? 'Proccessing' : 'Proceed' }
                    </button>
                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default TradeGiftcardStepTwo;