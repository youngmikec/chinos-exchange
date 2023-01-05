import React from 'react';
import { Link } from 'react-router-dom';

// icons

// image
import image from '../../../assets/images/account-balance-bg.png';
import airtime from '../../../assets/images/aitime_to_cash.png';
import crypto from '../../../assets/images/buy_crypto.png';
import trade from '../../../assets/images/trade-giftcard.png';
import sell from '../../../assets/images/sell_crypto.png'


// style
import "./style.css";

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
                                 <div>
                                     <p className=''>Airtime to Cash</p>
                                     <h5 className='font-normal'>Convert your airtime to cash</h5>

                                     <img src={airtime} alt="" />
                                      <button className='bg-[#8652A4] w-36 rounded-lg text-white absolute my-4 '>
                                        <Link to="/airtime">Convert</Link>
                                      </button>
                                </div>


                            <div>
                                <p className=''>Trade Giftcard</p>
                                <h5 className='font-normal'>Redeem your giftcard with us</h5>
                                <img src={trade} alt="" />
                                <button className='bg-[rgb(134,82,164)] w-36 rounded-lg text-white ab absolute my-4'>
                                    <Link to="/airtime">Convert</Link>
                                </button>

                            </div>  

                            <div>
                                <p className=''>Buy Crypto</p>
                                <h5 className='font-normal'>Buy your crypto currency</h5>
                                <img src={crypto} alt="" />
                                <button className='bg-[#8652A4] w-36 rounded-lg text-white absolute my-4'>
                                    <Link to="/buy-crypto">Buy</Link>
                                </button>

                            </div>   
                            <div>
                                <p className=''>Sell Crypto</p>
                                <h5 className='font-normal'>Sell your crypto currency</h5>
                                <img src={sell} alt="" />
                                <button className='bg-[#8652A4] w-36 rounded-lg text-white absolute my-4'>
                                    <Link to="/sell-crypto">Sell</Link>
                                </button>

                            </div>                            


                        </div>

                        <div>
                            <h4>Recent Transactions</h4>
                        </div>



                        <table className='table mx-auto   my-16'>
                            <thead className='text-left'>
                                <tr className='flex justify-around place-content-center	'>
                                    <th>#</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th className='text-center'>Type</th>
                                    <th className=''>Amount</th>
                                    <th>Status</th>
                                </tr>
                                <hr/>
                            </thead>
                            <tbody className='w-10/12 text-sm  left-0.5	'>
                                <tr className='flex justify-around mb-2 mt-4 	'>
                                    <td>1</td>
                                    <td className=''>10-02/2022</td>
                                    <td className='text-left'>10mins : 57secs</td>
                                    <td>Buy Crypto</td>
                                    <td className=''>$200</td>
                                    <td className=''>Success</td>

                                </tr>

                                <tr className='flex justify-around mb-2 mt-4 	'>
                                    <td>2</td>
                                    <td className='text-right'>10-02/2022</td>
                                    <td>10mins : 57secs</td>
                                    <td>Sell Crypto</td>
                                    <td className=''>$200</td>
                                    <td className=''>Success</td>


                                </tr>
                                
                                <tr className='flex justify-around mb-2 mt-4 	'>
                                    <td>3</td>
                                    <td className=''>10-02/2022</td>
                                    <td className='text-right'>10mins : 57secs</td>
                                    <td>Giftcard</td>
                                    <td className=''>$200</td>
                                    <td className=''>Success</td>


                                </tr>
                                
                                <tr className='flex justify-around mb-2 mt-4 	'>
                                    <td>4</td>
                                    <td className=''>10-02/2022</td>
                                    <td>10mins : 57secs</td>
                                    <td>Airtime</td>
                                    <td className=''>$200</td>
                                    <td className=''>Success</td>


                                </tr>

                                <tr className='flex justify-around mb-2 mt-4 	'>
                                    <td>5</td>
                                    <td className=''>10-02/2022</td>
                                    <td>10mins : 57secs</td>
                                    <td>Giftcard</td>
                                    <td className=''>$200</td>
                                    <td className=''>Success</td>


                                </tr>
                                <tr className='flex justify-around mb-2 mt-4 	'>
                                    <td>6</td>
                                    <td className=''>10-02/2022</td>
                                    <td>10mins : 57secs</td>
                                    <td>Airtime</td>
                                    <td className=''>$200</td>
                                    <td className=''>Success</td>


                                </tr>

                                <tr className='flex justify-around mb-2 mt-4 	'>
                                    <td>7</td>
                                    <td className=''>10-02/2022</td>
                                    <td>10mins : 57secs</td>
                                    <td>Buy Crypto</td>
                                    <td className=''>$200</td>
                                    <td className=''>Success</td>


                                </tr>

                                <tr className='flex justify-around mb-2 mt-4 	'>
                                    <td>8</td>
                                    <td className=''>10-02/2022</td>
                                    <td className=''>10mins : 57secs</td>
                                    <td>Buy Crypto</td>
                                    <td className=''>$200</td>
                                    <td className=''>Success</td>


                                </tr>
                            </tbody>

                        </table>
                    </div>
                </section>
            </div>
        </div>
    </>
  )
}

export default DashboardComp