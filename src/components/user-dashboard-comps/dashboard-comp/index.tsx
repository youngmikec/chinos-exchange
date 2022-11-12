import React from 'react';

// icons
import {HiUsers} from 'react-icons/hi'
import{BiMenuAltRight} from 'react-icons/bi';
import{HiOutlineTrash} from 'react-icons/hi';

// image
import image from '../../../assets/images/account-balance-bg.png';
import airtime from '../../../assets/images/aitime_to_cash.png'

// style
import "./style.css";
import Card from '../../../shared/card';

const DashboardComp = () => {
  return (
    <>
        <div>    
            {/* FIRST SECTION STARTS HERE */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                <div>
                    <div className='w-full' >
                    <img src={image} alt="" className=' bg-[#8652A4]' id='bg'/> 
                    <p className=' absolute -mt-56 ml-8 font-medium text-white'>Account Balance</p> 
                    <div>
                           <h1 className='absolute -mt-36 ml-8 font-bold text-white'>NGN 0.00</h1>
                    </div>
                    <div className='flex justify-between'>
                        <div> 
                        <button className='bg-[#CFBADB] text-white rounded-lg absolute -my-14 ml-4 w-36'>Found</button> 

                        </div>
                        <div>
                        <button className='bg-[#CFBADB] text-white rounded-lg  absolute -my-14 -ml-40 w-36'>Withdraw</button>

                        </div>
        

                    </div>
                    </div>           
                </div>

                <div className='shadow-sm'></div>

                <div>
                    <img src={image} alt=""  className=' bg-[#FFAB2E]' id='bg'/>

                </div>
            </div>

            <div className='section-1'>
           

                <section className='section-2'>
                   

                    <div>
                        <h3 className='text-[#121212] my-16'>What we offer</h3>

                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
                            <p>Airtime to Cash</p>

                            <p>Trade Giftcard</p>
                            
                            <p>Buy Crypto</p>
                            <p>Sell Crypto</p>





                        </div>



                        <Card type='lg'>
                        <table className='table mx-auto  px-5 my-16' id='table'>
                            <thead className='text-left'>
                                <tr className='flex justify-around'>
                                    <th>Action(s)</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th className='pl-20'>Created at</th>
                                    <th>Status</th>
                                </tr>
                                <hr/>
                            </thead>
                            <tbody className='w-10/12 text-sm '>
                                <tr className='flex justify-around mb-2 mt-4 pl-12	'>
                                    <td><HiOutlineTrash className='HiOutlineTrash'/></td>
                                    <td className='pl-12'>princess amaka</td>
                                    <td>princesobinan@gmail.com</td>
                                    <td>2021-12-08 19:50:00</td>
                                    <td className='completed'>Completed</td>

                                </tr>
                                <hr />
                                <tr className='flex justify-around mb-2 mt-4 pl-12' >
                                    <td><HiOutlineTrash className='HiOutlineTrash'/></td>
                                    <td className='pl-12'>princess amaka</td>
                                    <td>princesobinan@gmail.com</td>
                                    <td>2021-12-08 19:50:00</td>
                                    <td className='completed'>Completed</td>
                                </tr>
                                <hr />
                                <tr className='flex justify-around mb-2 mt-4 pl-12'>
                                <td className='HiOutlineTrash'><HiOutlineTrash className='HiOutlineTrash'/></td>
                                <td className='pl-12'>princess amaka</td>
                                <td>princesobinan@gmail.com</td>
                                <td>2021-12-08 19:50:00</td>
                                <td className='completed'>Completed</td>
                                </tr>
                                <hr />

                                <tr className='flex justify-around mb-2 mt-4 pl-12'>
                                    <td className='HiOutlineTrash'><HiOutlineTrash className='HiOutlineTrash'/></td>
                                    <td className='pl-12'>princess amaka</td>
                                    <td>princesobinan@gmail.com</td>
                                    <td>2021-12-08 19:50:00</td>
                                    <td className='completed'>Completed</td>
                                </tr>
                                <hr />
                            </tbody>

                        </table>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    </>
  )
}

export default DashboardComp