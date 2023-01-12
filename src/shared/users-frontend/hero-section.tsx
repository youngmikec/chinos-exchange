import React, { ReactNode } from 'react';
import Navbar from '../../components/navbar';
import './styles.css';


type Props = {
    children: ReactNode
}

const HeroSection = ({children}: Props) =>  {
  return (
    <>
        <div className='hero-bg w-full'>
            <div className='mx-auto w-10/12 mb-8'>
                <Navbar />
            </div>
            
            <div id="content" className='mx-auto w-11/12 md:w-10/12 lg:w-10/12 mb-8'>
                { children }
            </div>
        </div>
    </>
  )
}

export default HeroSection;