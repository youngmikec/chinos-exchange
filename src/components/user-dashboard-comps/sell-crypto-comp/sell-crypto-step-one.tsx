import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CryptoCurrency } from '../../../common';
import { APPEND_TO_SELL_CRYPTO_ORDER } from '../../../store/orders';

type Props = {
    changeStep: (data: number) => any,
    cryptos?: CryptoCurrency[],
}

const SellCryptoStepOne = ({ changeStep, cryptos }: Props) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [cryptoName, setCryptoName] = useState<string | undefined>('');
    const [selectedCrypto, setSelectedCrypto] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [selectedNetwork, setSelectedNetwork] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [amount, setAmount] = useState<{value: number, error: boolean}>({value: 0, error: false});
    const [receivable, setReceivable] = useState<{value: number, error: boolean}>({value: 0, error: false});
    const [rate, setRate] = useState<number | undefined>(0);
    const [networks, setNetworks] = useState<any[] | any>([]);

    const dispatch = useDispatch();

    const getNetworks = (id: string) => {
        const currentCrypto: CryptoCurrency | undefined = cryptos?.find((item) => item.id === id);
        setRate(currentCrypto?.rate);
        setCryptoName(currentCrypto?.shortName);
        setNetworks(currentCrypto?.networks);
    }

    const inputCheck = (): boolean => {
        let isValid: boolean = true;
        if(selectedCrypto.value === '' || undefined || null){
            isValid = false;
            setSelectedCrypto({...selectedCrypto, error: true});
        }else{
            setSelectedCrypto({...selectedCrypto, error: false});
        }
        if(selectedNetwork.value === '' || undefined || null){
            isValid = false;
            setSelectedNetwork({...selectedNetwork, error: true});
        }else{
            setSelectedNetwork({...selectedNetwork, error: false});
        }
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
        
        return isValid;
    }

    const handleProcceed = () => {
        setLoading(true);
        if(inputCheck()){
            const data = { 
                amount: amount.value,
                cryptocurrency: selectedCrypto.value, 
                network: selectedNetwork.value,
                orderType: "SELL_CRYPTO",
                amountReceivable: receivable.value,
                rate
            };
            dispatch(APPEND_TO_SELL_CRYPTO_ORDER(data))
            changeStep(2)
        }
        setLoading(false);
    }

    const calculateReceivable = (id: string) => {
        const crypto: CryptoCurrency | any = cryptos && cryptos.find(item => item.id === id);
        const total: number = !Number.isNaN(amount.value * crypto.rate) ? (amount.value * crypto.rate) : 0;
        setReceivable({value: total, error: false});
    }


    useEffect(() => {
        if(selectedCrypto.value) {
            calculateReceivable(selectedCrypto.value);
        }
    }, [selectedCrypto.value, amount.value]);

    
 

    return (
        <>
            <div className='w-full'>
                <div className='my-4'>
                    <label htmlFor="crypto" className='text-[#7F7F80] text-sm'>Select crypto</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <select 
                            name="crypto" 
                            id="crypto" 
                            className='w-full px-4 py-2'
                            onChange={(e) => {
                                setSelectedCrypto({...selectedCrypto, value: e.target.value});
                                getNetworks(e.target.value)
                            }}
                        >
                            <option value="">select crypto</option>
                            {
                                cryptos && cryptos.length > 0 &&
                                cryptos.map((item: CryptoCurrency, idx: number) => {
                                    return <option key={idx} value={item.id}>{item.shortName}</option>
                                })
                            }
                        </select>
                    </div>
                </div>

                <div className='my-4'>
                    <label htmlFor="network" className='text-[#7F7F80] text-sm'>Network E.g Bep20</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <select 
                            name="network" 
                            id="network" 
                            className='w-full px-4 py-2'
                            onChange={(e) => {
                                setSelectedNetwork({...selectedNetwork, value: e.target.value});
                            }}
                        >
                            <option value="">Select Network</option>
                            {
                                networks && networks.length > 0 && 
                                networks.map((item: any, idx: number) => {
                                    return <option key={idx} value={item.networkName}>{item.networkName}</option>
                                })
                            }
                            
                        </select>
                    </div>
                </div>

                <div className='my-4'>
                    <label htmlFor="amount" className='text-[#7F7F80] text-sm'>Amount in ($)</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input 
                            type="number" 
                            placeholder='Enter amount you want to sell' 
                            name="amount" 
                            min={1}
                            className='w-full px-4 py-2'
                            value={amount.value}
                            onChange={(e) => setAmount({...amount, value: parseInt(e.target.value)})}
                        />
                    </div>
                </div>

                <div className='my-4'>
                    <label htmlFor="receivable" className='text-[#7F7F80] text-sm'>Rate is {!Number.isNaN(rate) ? rate : 0} /$. You will receive in NGN</label>
                    <div className='border-2 border-gray-100 rounded-md mt-2'>
                        <input 
                            type="number" 
                            name="receivable" 
                            disabled={true} 
                            className='w-full px-4 py-2'
                            value={receivable.value}
                        />
                    </div>
                </div>

                <div className='my-4 flex justify-center'>
                    <button 
                        onClick={() => handleProcceed()}
                        className='rounded-md bg-[#8652A4] text-white px-6 py-3'
                    >Proceed</button>
                </div>
            </div>
        </>
    )
}

export default SellCryptoStepOne;