import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CryptoCurrency } from '../../../common';
import { APPEND_TO_BUY_GIFTCARD_ORDER } from '../../../store/orders/buy-giftcard-order';

type Props = {
    changeStep: (data: number) => any,
    cryptos?: CryptoCurrency[],
}

const BuyCryptoStepOne = ({ changeStep, cryptos }: Props) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedCrypto, setSelectedCrypto] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [selectedNetwork, setSelectedNetwork] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [walletAddress, setWalletAddress] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [sendersPhone, setSendersPhone] = useState<{value: string, error: boolean}>({value: '', error: false});
    const [rate, setRate] = useState<number | undefined>(0);
    const [networks, setNetworks] = useState<any[] | any>([]);

    const dispatch = useDispatch();

    const getNetworks = (id: string) => {
        const currentCrypto: CryptoCurrency | undefined = cryptos?.find((item) => item.id === id);
        setRate(currentCrypto?.rate);
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
        if(walletAddress.value === '' || undefined || null){
            isValid = false;
            setWalletAddress({...walletAddress, error: true});
        }else{
            setWalletAddress({...walletAddress, error: false});
        }
        if(sendersPhone.value === '' || undefined || null){
            isValid = false;
            setSendersPhone({...sendersPhone, error: true});
        }else{
            setSendersPhone({...sendersPhone, error: false});
        }
        console.log(selectedCrypto.value, selectedNetwork.value, walletAddress.value, sendersPhone.value)
        
        return isValid;
    }

    const handleProcceede = () => {
        setLoading(true);
        if(inputCheck()){
            const data = { 
                cryptocurrency: selectedCrypto.value, 
                walletAddress: walletAddress.value,
                network: selectedNetwork.value,
                sendersPhone: sendersPhone.value,
                orderType: "BUY_CRYPTO",
                rate
            };
            dispatch(APPEND_TO_BUY_GIFTCARD_ORDER(data))
            changeStep(2)
        }
        setLoading(false);
    }


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
                                return <option key={idx} value={item.networkId}>{item.networkId}</option>
                            })
                        }
                        
                    </select>
                </div>
            </div>

            <div className='my-4'>
                <label htmlFor="walletAddress" className='text-[#7F7F80] text-sm'>Paste Your Address</label>
                
                <div className='border-2 border-gray-100 rounded-md mt-2'>
                    <input 
                    type="text" 
                    placeholder='AERJKOPO12345GHNBY67626 ' 
                    name="walletAddress" 
                    className='w-full px-4 py-2 '
                    value={walletAddress.value}
                    onChange={(e) => setWalletAddress({...walletAddress, value: e.target.value})}
                />
                </div>
            </div>

            <div className='my-4'>
                <label htmlFor="sendersPhone" className='text-[#7F7F80] text-sm'>Paste Your Address</label>
                
                <div className='border-2 border-gray-100 rounded-md mt-2'>
                    <input 
                        type="text" 
                        placeholder='0902213 ' 
                        name="sendersPhone" 
                        className='w-full px-4 py-2 '
                        value={sendersPhone.value}
                        onChange={(e) => setSendersPhone({...sendersPhone, value: e.target.value})}
                    />
                </div>
            </div>

        
            <div className='my-8 flex justify-center'>
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

export default BuyCryptoStepOne