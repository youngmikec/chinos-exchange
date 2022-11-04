import React from 'react';
import OrderHistoryComp from '../../components/user-dashboard-comps/order-history';

import UserLayout from '../../shared/layouts/user-layout';
// style link end 

const OrderHistory = () => {

    return (

        <UserLayout>
            <OrderHistoryComp />
        </UserLayout>
    )
}

export default OrderHistory;


