import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosResponse } from 'axios';
import moment from "moment";

// image
import image from '../../../assets/images/account-balance-bg.png';
import airtime from '../../../assets/images/aitime_to_cash.png';
import crypto from '../../../assets/images/buy_crypto.png';
import trade from '../../../assets/images/trade-giftcard.png';
import sell from '../../../assets/images/sell_crypto.png'


// style
import "./style.css";
import ServiceCard from '../../service-card';
import DashboardCard from './dashbord-card';
import { ApiResponse, Order } from '../../../common';
import { RETREIVE_ORDERS } from '../../../services';
import { getItem } from '../../../utils';
import Card from '../../../shared/card';

const DashboardComp = () => {
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
        const userId: string = getItem('clientId');
        const queryString: string = `?_id=${userId}&sort=-createdAt&limit=10&populate=airtime,cryptocurrency,giftcard`;
        RETREIVE_ORDERS(queryString).then((res: AxiosResponse<ApiResponse>) => {
            setLoading(false);
            const { success, message, payload } = res.data;
            if(success){
                notify('success', `${message} ${payload.length} records found!`);
                setOrderRecords(payload);
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
            <div>    
                {/* FIRST SECTION STARTS HERE */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                    <div>
                        <DashboardCard image={image} />
                    </div>

                    {/* <div className='shadow-sm bg-white lg:h-52'></div>

                    <div className=''>
                        <img src={image} alt=""  className=' bg-[#FFAB2E] lg:h-52' id='bg'/>
                    </div> */}
                </div>

                {/* service card */}
                <section>

                    <div>
                        <h3 className='text-[#121212] my-12'>What we offer</h3>

                        <div className='grid grid-cols-1 space-y-2
                            sm:grid-cols-2  sm:space-x-2 sm:space-y-3
                            md:grid-cols-2  md:space-x-2 md:space-y-3
                            lg:grid-cols-4  lg:space-x-2 lg:space-y-0
                            ' 
                        >
                            <div>
                                <ServiceCard
                                    title="Airtime to Cash"
                                    subTitle='Convert your airtime to cash'
                                    link='/airtime'
                                    linkText='Convert'
                                    img={airtime}
                                />
                            </div>


                            <div>
                                <ServiceCard
                                    title="Trade Giftcard"
                                    subTitle='Redeem your giftcard with us'
                                    link='/trade-giftcard'
                                    linkText='Convert'
                                    img={trade}
                                />
                                
                            </div>  

                            <div>
                                <ServiceCard
                                    title="Buy Crypto"
                                    subTitle='Buy your crypto currency'
                                    link='/buy-crypto'
                                    linkText='Buy'
                                    img={crypto}
                                />
                            </div>   
                            <div>
                                <ServiceCard
                                    title="Sell Crypto"
                                    subTitle='Sell your crypto currency'
                                    link='/sell-crypto'
                                    linkText='Sell'
                                    img={sell}
                                />

                            </div>                            


                        </div>

                        <section>
                            <div className='my-4'>
                                <h4>Recent Transactions</h4>
                            </div>

                            <div>
                                <Card type='sm'>
                                    <div className='overflow-x-scroll p-4'>
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
                                </Card>
                            </div>
                        </section>

                    </div>
                </section>
                {/* service card */}
            </div>

            <ToastContainer />
        </>
    )
}

export default DashboardComp