import React from 'react';

import UserLayout from '../../../shared/layouts/user-layout';
import DashboardComp from '../../../components/user-dashboard-comps/dashboard-comp';
// style link end 

const Dashboard = () => {

    return (

        <UserLayout>
            <DashboardComp />
        </UserLayout>
    )
}

export default Dashboard;


