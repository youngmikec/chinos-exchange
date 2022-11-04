import React from 'react';

import { Step } from '../../../common';
import AccountStepHeader from '../../../shared/account-step-header';

// components
import AccountProfile from './account-profile';
import ActivityLog from './activity-log';
import BankDetails from './bank-details';
import AccountSecurity from './security';


const AccountComp = () => {
    const accountSettingSteps: Step[] = [
        {
            name: 'Profile',
            isActive: true
        },
        {
            name: 'Bank Settings',
            isActive: false
        },
        {
            name: 'Security',
            isActive: false
        },
        {
            name: 'Activity log',
            isActive: false
        },
    ]

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                <div className='w-12/12'>
                    <AccountStepHeader 
                        title='Account Settings'
                        steps={accountSettingSteps}
                    />

                    <div className='mt-8'>
                        <div className='bg-[#d9d9d92d] rounded-b-xl pt-5 pb-8'>
                            <AccountProfile />
                            <BankDetails />
                            <AccountSecurity />
                            <ActivityLog />
                        </div>
        
                        
                    </div>
                </div>

                <div>

                </div>
            </div>
        </>
    )
}

export default AccountComp;