import React from 'react';

// icons
import transaction from '../../../assets/images/transaction.png';
import Card from '../../../shared/card';

const OrderHistoryComp = () => {
  return (
    <>
        <div className='px-3'>
            <h3 className='text-[#8652A4] text-4xl font-bold mt-3 mb-8'>Order History</h3>
            {/* filter section */}
            <div>

            </div>
            {/* filter section */}

            {/* table */}
            <div>
                {/* <Card type='lg'>
                    <div className='overflow-scroll'>
                        <table className='table table-auto w-full mx-auto border-spacing-y-4 text-[#7F7F80]'>
                            <thead className='text-left'>
                                <tr className='flex justify-around'>
                                    <th>#</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th className='pl-20'>Type</th>
                                    <th className='pl-20'>Amount</th>
                                    <th>Status</th>
                                </tr>
                                <hr/>
                            </thead>
                            <tbody className='w-10/12 text-sm '>
                                <tr className='flex justify-around mb-2 mt-4 pl-12	'>
                                    <td>1</td>
                                    <td className='pl-12'>10-02/2022</td>
                                    <td>10mins : 57secs</td>
                                    <td>Buy Crypto</td>
                                    <td>$200</td>
                                    <td>
                                        <span className='text-[#2CE71C]'>Success</span>
                                    </td>

                                </tr>
                                <tr className='flex justify-around mb-2 mt-4 pl-12	'>
                                    <td>1</td>
                                    <td className='pl-12'>10-02/2022</td>
                                    <td>10mins : 57secs</td>
                                    <td>Buy Crypto</td>
                                    <td>$200</td>
                                    <td>
                                        <span className='text-[#2CE71C]'>Success</span>
                                    </td>

                                </tr>
                                <tr className='flex justify-around mb-2 mt-4 pl-12	'>
                                    <td>1</td>
                                    <td className='pl-12'>10-02/2022</td>
                                    <td>10mins : 57secs</td>
                                    <td>Buy Crypto</td>
                                    <td>$200</td>
                                    <td>
                                        <span className='text-[#2CE71C]'>Success</span>
                                    </td>

                                </tr>
                                <tr className='flex justify-around mb-2 mt-4 pl-12	'>
                                    <td>1</td>
                                    <td className='pl-12'>10-02/2022</td>
                                    <td>10mins : 57secs</td>
                                    <td>Buy Crypto</td>
                                    <td>$200</td>
                                    <td>
                                        <span className='text-[#2CE71C]'>Success</span>
                                    </td>

                                </tr>
                                <tr className='flex justify-around mb-2 mt-4 pl-12	'>
                                    <td>1</td>
                                    <td className='pl-12'>10-02/2022</td>
                                    <td>10mins : 57secs</td>
                                    <td>Buy Crypto</td>
                                    <td>$200</td>
                                    <td>
                                        <span className='text-[#2CE71C]'>Success</span>
                                    </td>

                                </tr>
                            </tbody>

                        </table>
                    </div>
                </Card> */}

                <Card type='lg'>
                    <div className='mt-2 h-32 w-full flex justify-center'>
                        <div className='h-48 my-auto'>
                            <img src={transaction} alt="no transactions" width="100px" height="100px" />
                        </div>
                    </div>
                    <div className='w-full text-center'>
                        <p className='text-[#7F7F80]'>You currently do not have any transaction yet!</p>
                        <p className='text-[#8652A4] font-semibold'>Perform your first trade</p>
                    </div>
                </Card>
            </div>
        </div>
    </>
  )
}

export default OrderHistoryComp;