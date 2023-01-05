import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GiftCard } from '../../../common/giftcard';
import { RootState } from '../../../store';
import { APPEND_TO_BUY_GIFTCARD_ORDER } from '../../../store/orders';

type Props = {
    changeStep: (data: number) => any,
    giftcards?: GiftCard[],
}

const TradeGiftcardStepOne = ({ changeStep, giftcards }: Props) => {
    const dispatch = useDispatch();

    const [amount, setAmount] = useState<{value: number, error: boolean}>({value: 0, error: false});
    const [receivable, setReceivable] = useState<{value: number, error: boolean}>({value: 0, error: false});
    const [cardType, setCardType] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [giftcard, setGiftcard] = useState<{value: string, error: boolean}>({value: '', error: false});

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
        if(cardType.value === '' || undefined || null){
            isValid = false;
            setCardType({...cardType, error: true});
        }else{
            setCardType({...cardType, error: false});
        }
        if(giftcard.value === '' || undefined || null){
            isValid = false;
            setGiftcard({...giftcard, error: true});
        }else{
            setGiftcard({...giftcard, error: false});
        }
        
        return isValid;
    }

    const handleProcceede = () => {
        if(inputCheck()){
            const data = { 
                amount: amount.value, 
                amountReceivable: receivable.value,
                cardType: cardType.value,
                giftcard: giftcard.value
            };
            dispatch(APPEND_TO_BUY_GIFTCARD_ORDER(data))
            changeStep(2)
        }
    }

    const calculateReceivable = (id: string) => {
        const card: GiftCard | any = giftcards && giftcards.find(item => item.id === id);
        const total: number = !Number.isNaN(amount.value * card.rate) ? (amount.value * card.rate) : 0;
        setReceivable({value: total, error: false});
    }


    useEffect(() => {
        if(giftcard.value) {
            calculateReceivable(giftcard.value);
        }
    }, [giftcard.value, amount.value]);
 
    return (
        <>
            <div className='w-full'>
                <div className='my-4'>
                    <label htmlFor="cardType" className='text-[#7F7F80] text-sm'>Card Type</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <select 
                            name="cardType" 
                            id="cardType" 
                            className='w-full px-4 py-2'
                            onChange={(e) => {
                                setCardType({...cardType, value: e.target.value})
                            }}
                        >
                            <option value="">select card type</option>
                            <option value="PHYSICAL">Physical</option>
                            <option value="ECODE">Ecode</option>
                        </select>
                    </div>
                </div>

                <div className='my-4'>
                    <label htmlFor="giftcard" className='text-[#7F7F80] text-sm'>Card Name</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <select 
                            name="giftcard" 
                            id="giftcard" 
                            className='w-full px-4 py-2'
                            onChange={(e) => {
                                setGiftcard({...giftcard, value: e.target.value})
                                calculateReceivable(e.target.value)
                            }}
                        >
                            <option value="">Choose Giftcard</option>
                            {
                                giftcards && giftcards.length > 0 && 
                                giftcards.map((item: GiftCard, idx:number) => {
                                    return (
                                        <option key={idx} value={item.id}>{ item?.name }</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>

                <div className='my-4'>
                    <label htmlFor="amount" className='text-[#7F7F80] text-sm'>Amount($)</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input 
                            type="number" 
                            placeholder='Enter amount you want to sell' 
                            name="amount" 
                            className='w-full px-4 py-2'
                            value={amount.value}
                            onChange={(e) => {
                                setAmount({...amount, value: parseInt(e.target.value)})
                                calculateReceivable(giftcard.value);
                            }}
                        />
                    </div>
                </div>

                {/* <div className='my-4'>
                    <label htmlFor="recieptType" className='text-[#7F7F80] text-sm'>Recipient Type</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <select name="recieptType" id="crypto" className='w-full px-4 py-2'>
                            <option value="amazon">Use Amazon Giftcard receipt</option>
                            <option value="steam">Steam Giftcard</option>
                            <option value="steam">Steam Giftcard</option>
                        </select>
                    </div>
                </div> */}

                <div className='my-4'>
                    <label htmlFor="amountReceivalble" className='text-[#7F7F80] text-sm'>Receiving Amount</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input 
                            type="text" 
                            disabled={true}
                            name='amountReceivalble' 
                            value={receivable.value}
                            onChange={(e) => setReceivable({...receivable, value: parseInt(e.target.value)})}
                            className='w-full px-4 py-2'
                        />
                    </div>
                </div>
                
                <div className='my-4 flex justify-center'>
                    <button 
                        className='rounded-md bg-[#8652A4] text-white px-6 py-3'
                        onClick={() => handleProcceede()}
                    >Proceed</button>
                </div>
            </div>
        </>
    )
}

export default TradeGiftcardStepOne;