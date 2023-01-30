import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { RootState } from '../../../store';
import { CryptoCurrency } from '../../../common';

type Props = {
  changeStep: (data: number) => any,
  cryptos?: CryptoCurrency[]
}

const BuyCryptoStepThree = ({ changeStep, cryptos }: Props) => {
  const dispatch = useDispatch();
  const buyCryptoState = useSelector((state: RootState) => state.BuyCryptoOrderSlice.value);
  const [crypto, setCrypto] = useState<CryptoCurrency | undefined>();

  const selectCrypto = (id: any) => {
    const retreivedData = cryptos && cryptos.find(item => item.id === id);
    return setCrypto(retreivedData);
  }  

  const handleProcceede = () => {
    changeStep(4)
  }

  useEffect(() => {
    selectCrypto(buyCryptoState?.cryptocurrency);
  }, [buyCryptoState]);


  return (
    <>
      <div className="flex flex-col">
        <div className="text-left">
          <div>
            <h2 className='text-xl text-[#7F7F80] my-10'>Bank Information </h2>
            <p className='text-[#7F7F80] my-5'>
              Kindly make a refundable amount of <span className='line-through'>N</span> { buyCryptoState?.amount } 
              <br /> to the account below
            </p>
          </div>
          <hr />

          <div className='text-[#7F7F80] my-10'>
            <p className='my-4'>Account Name:  <span className='font-bold'>{crypto?.accountName}</span></p>
            <p className='my-4'>Account Number: <span className="font-bold">{crypto?.accountNumber}</span></p>
            <p className='my-4'>Bank Name: <span className="font-bold">{crypto?.bankName}</span></p>
          </div>
        </div>

        <div className='my-8 flex justify-center'>
            <button className='rounded-md bg-[#8652A4] text-white px-6 py-3' onClick={
                () => {
                  handleProcceede();
                }
            }>Mark paid</button>
        </div>
        
      </div>
    </>
  )
}

export default BuyCryptoStepThree;