import React from 'react';
import { Bars, SpinningCircles, Circles, Rings } from 'react-loading-icons'

import './style.css';

type Props = {
    image: string;
    status: 'PENDING' | 'FAILED' | 'COMPLETED';
    title: string;
    value: number;
    loading: boolean;
}

const DashboardCard = ({image, status, title, value, loading}: Props) => {
    let bgColor = (state: string): string => {
        let color: string = '';
        if(state === 'PENDING') color = '#8652A4'
        if(state === 'FAILED') color = '#FF9120'
        if(state === 'COMPLETED') color = '#71DD37'
        return color
    }

    const style = {
        background: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        blendMode: "overlay",
        backgroundColor: bgColor(status),
        borderRadius: '8px',
        opacity: 0.7
    }

  return (
    <>
        <div>
            <div className='w-full py-4 px-6 text-white' style={style}>
                <p className='text-white text-xl'>{ title }</p> 
                <div className='my-4'>
                    <div className='flex gap-6'>
                        <span className='text-xl my-auto'>Total:</span> 
                        {
                            !loading &&
                            <span className='text-4xl'>{ value }</span>
                        }
                        {
                            loading && <SpinningCircles fontSize={3} color='#ffffff' />
                        }
                    </div>
                </div>
            </div>           
        </div>
    </>
  )
}

export default DashboardCard