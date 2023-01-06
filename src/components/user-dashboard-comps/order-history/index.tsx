import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosResponse } from 'axios';
import moment from "moment";

// icons
import Card from '../../../shared/card';
import { RETREIVE_ORDERS } from '../../../services';
import { ApiResponse, Order } from '../../../common';
import transaction from '../../../assets/images/transaction.png';
import { INITIALIZE_ORDERS } from '../../../store/orders/orders';

const OrderHistoryComp = () => {
    const dispatch = useDispatch();
    // const ordersState = useSelector((state: RootState) => state.orderState.value);
    
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
                        <Card type='sm'>
                            <div className='overflow-scroll'>
                                <table className='table table-auto w-full mx-auto border-spacing-y-4'>
                                    <thead className=''>
                                        <tr className='border-spacing-y-4'>
                                            <th className='table-caption text-left'>#</th>
                                            <th>Date</th>
                                            <th>Type</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                        </tr>
                                        <hr/>
                                    </thead>
                                    <tbody>
                                        {   orderRecords && orderRecords.length > 0 ?
                                            orderRecords.map((item: Order, idx: number) => {
                                                return <tr key={idx} className='my-4'>
                                                <td className="text-left border-spacing-y-4">{ idx + 1 }</td>
                                                <td className="text-center py-3">{ moment(item?.createdAt).format("MM-DD-YYYY") }</td>
                                                <td className="text-center py-3">{ item?.orderType }</td>
                                                <td className="text-center py-3"><span className='line-through'>N</span>{ item?.amountReceivable } </td>
                                                <td className="text-center py-3">
                                                    <span className={
                                                        (item.status === 'PENDING' || "DECLINED" || 'CANCLED') ? 'text-[#e7451c]' : (
                                                            (item.status === 'APPROVED' || "COMPLETED" || 'PROOFEd') ? 'text-[#2CE71C]' : 'text-[#1cd9e7]')
                                                        
                                                    }>{ item.status }</span>
                                                </td>

                                            </tr>
                                            }) :

                                            <tr>
                                                <td colSpan={5} className="text-center py-3">No Users available</td>
                                            </tr>
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