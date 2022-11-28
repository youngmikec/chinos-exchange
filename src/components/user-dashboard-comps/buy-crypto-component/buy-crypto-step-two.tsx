import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { APPEND_TO_BUY_GIFTCARD_ORDER } from '../../../store/orders/buy-giftcard-order';

type Props = {
    changeStep: (data: number) => any,
}

const BuyCryptoStepTwo = ({ changeStep }: Props) => {
    const dispatch = useDispatch();
    const buyCryptoState = useSelector((state: RootState) => state.BuyGiftcardOrderSlice.value);

    const [amount, setAmount] = useState<{value: number, error: boolean}>({value: 0, error: false});
    const [amountReceivable, setAmountReceivable] = useState<{value: number, error: boolean}>({value: 0, error: false});
    const [rate, setRate] = useState<number>(0);

    const inputCheck = (): boolean => {
        let isValid: boolean = true;
        if(amount.value === 0 || undefined || null){
            isValid = false;
            setAmount({...amount, error: true});
        }else if(amount.value < 1000){
            isValid = false;
            //show notification about amount
        }else{
            setAmount({...amount, error: false});
        }
        if(amountReceivable.value === 0 || undefined || null){
            isValid = false;
            setAmountReceivable({...amountReceivable, error: true});
        }else{
            setAmountReceivable({...amountReceivable, error: false});
        }
        
        return isValid;
    }

    const calcReceivable = (data: number): number => {
        const num = data / rate;
        return parseFloat(num.toFixed(2));
    }

    const handleProcceede = () => {
        if(inputCheck()){
            const data = { 
                amount: amount.value, 
                amountReceivable: amountReceivable.value
            };
            dispatch(APPEND_TO_BUY_GIFTCARD_ORDER(data))
            changeStep(3)
        }
    }

    useEffect(() => {
        buyCryptoState?.rate && setRate(buyCryptoState.rate)
        console.log(buyCryptoState);
    }, [buyCryptoState])

    return (
        <>
        <div className='w-full'>
            <div className='my-4'>
                <label htmlFor="amount" className='text-[#7F7F80] text-sm'>Amount (N)</label>
                <div className='border-2 border-gray-100 rounded-md mt-2'>
                    <input 
                        type="number" 
                        placeholder='1000 ' 
                        name="amount" 
                        className='w-full px-4 py-2 '
                        value={amount.value}
                        onChange={(e) => {
                            setAmount({...amount, value: parseInt(e.target.value)})
                            setAmountReceivable({...amountReceivable, value: calcReceivable(parseInt(e.target.value))})
                        }}
                    />
                </div>
            </div>
            <div className='my-4'>
                <label htmlFor="amountReceivable" className='text-[#7F7F80] text-sm'>You will receive</label>
                <div className='border-2 border-gray-100 rounded-md mt-2'>
                    <input 
                    type="number" 
                    placeholder='1000 ' 
                    name="amountReceivable" 
                    className='w-full px-4 py-2 '
                    disabled={true}
                    value={amountReceivable.value}
                />
                </div>
                <p className="text-sm text-[#7F7F80] "> Minimuim we sell is 1,0000</p>
            </div>


        
            <div className='my-8 flex justify-center'>
                <button className='rounded-md bg-[#8652A4] text-white px-6 py-3'onClick={
                    (e) => {
                        e.preventDefault();
                        handleProcceede();
                    }
                }>Submit</button>
            </div>
        </div>
    </>
    )
}

export default BuyCryptoStepTwo