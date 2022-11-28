import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

// icons
import transaction from '../../../assets/images/transaction.png';
import { ApiResponse, Order } from '../../../common';
import { RETREIVE_ORDERS } from '../../../services';
import Card from '../../../shared/card';
import { RootState } from '../../../store';
import { INITIALIZE_ORDERS } from '../../../store/orders/orders';

const OrderHistoryComp = () => {
    const dispatch = useDispatch();
    const ordersState = useSelector((state: RootState) => state.orderState.value);
    
    const [loading, setLoading] = useState<boolean>(false);
    const [orderRecords, setOrderRecords] = useState<Order[] | []>([]);

    const notify = (type: string, msg: string) => {
        if (type === "success") {
          toast.success(msg, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
    
        if (type === "error") {
          toast.error(msg, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
    };

    const retreiveOrders = () => {
        setLoading(true);
        const queryString: string = `?sort=-createdAt&populate=airtime`;
        RETREIVE_ORDERS(queryString).then((res: AxiosResponse<ApiResponse>) => {
            setLoading(false);
            const { success, message, payload } = res.data;
            if(success){
                notify('success', `${message} ${payload.length} records found!`);
                setOrderRecords(payload);
                dispatch(INITIALIZE_ORDERS(payload));
            }
        }).catch((err: any) => {
            setLoading(false);
            const { message } = err.response.data;
            notify('error', message);
        })
    }

    useEffect(() => {
        retreiveOrders();
    }, [])

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
                    {
                        orderRecords.length > 0 ?
                        <Card type='lg'>
                            <div className='overflow-scroll'>
                                <table className='table table-auto w-full mx-auto border-spacing-y-4 text-[#7F7F80]'>
                                    <thead className='text-left'>
                                        <tr className='flex justify-around'>
                                            <th className='pl-20'>#</th>
                                            <th className='pl-20'>Date</th>
                                            <th className='pl-20'>Type</th>
                                            <th className='pl-20'>Amount</th>
                                            <th className='pl-20'>Status</th>
                                        </tr>
                                        <hr/>
                                    </thead>
                                    <tbody className='w-10/12 text-sm '>
                                        {
                                            orderRecords.map((item: Order, idx: number) => {
                                                return <tr key={idx} className='flex justify-around mb-2 mt-4 pl-12	'>
                                                <td>{ idx + 1 }</td>
                                                <td className=''>{ moment(item?.createdAt).format("MM-DD-YYYY") }</td>
                                                <td>{ item?.orderType }</td>
                                                <td><span className='line-through'>N</span>{ item?.amountReceivable } </td>
                                                <td>
                                                    <span className={
                                                        (item.status === 'PENDING' || "DECLINED" || 'CANCLED') ? 'text-[#e7451c]' : (
                                                            (item.status === 'APPROVED' || "COMPLETED" || 'PROOFEd') ? 'text-[#2CE71C]' : 'text-[#1cd9e7]')
                                                        
                                                    }>{ item.status }</span>
                                                </td>
    
                                            </tr>
                                            })
                                        }
                                    </tbody>

                                </table>
                            </div>
                        </Card> :

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
                    }

                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default OrderHistoryComp;