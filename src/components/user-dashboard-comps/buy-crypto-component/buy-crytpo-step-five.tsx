import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import SuccessAlert from '../../../shared/alerts/success-alert';
import { CLEAR_BUY_GIFTCARD_ORDER } from '../../../store/orders';

type Props = {
  changeStep: (data: number) => any,
}

const BuyCryptoStepFive = ({ changeStep }: Props) => {
  const dispatch = useDispatch();

  const clearState = () => {
    dispatch(CLEAR_BUY_GIFTCARD_ORDER());
  }

  return (
   <>
   <div className="w-full">
      <div className="self-center flex my-20">
        <SuccessAlert 
          title='Great!' 
          subTitle='Order Created'
          msg="expect your money if few minutes"
        />
      </div>
      <div className='my-8 flex justify-center'>
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

export default BuyCryptoStepFive;