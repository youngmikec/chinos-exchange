import React, { useEffect, useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { AxiosResponse } from 'axios';

import { Airtime, ApiResponse, Step } from '../../../common';
import Card from '../../../shared/card';
import StepHeader from '../../../shared/step-header';

// airtime icons
import MTN from '../../../assets/icons/mtn.png';
import GLO from '../../../assets/icons/glo.png';
import AIRTEL from '../../../assets/icons/airtel.png';
import NINEMOBILE from '../../../assets/icons/9mobile.png';

// components
import AirtimeStepOne from './airtime-step-one';
import AirtimeStepThree from './airtime-step-three';
import AirtimeStepTwo from './airtime-step-two';
import AirtimeStepFour from './airtime-step-four';
import { RETREIVE_AIRTIME } from '../../../services/airtimes';

const AirtimeComp = () => {
    // states
    const [loading, setLoading] = useState<boolean>(false);
    const [airtimeRecords, setAirtimeRecords] = useState<Airtime[]>([])
    const [step, setStep] = useState<number>(1);
    const [selectedAirtime, setSelectedAirtime] = useState<Airtime | null>(null);


    const airtimeSteps: Step[] = [
        {
            name: 'Choose asset',
            isActive: true
        },
        {
            name: 'account details',
            isActive: false
        },
        {
            name: 'upload proof',
            isActive: false
        },
        {
            name: 'status',
            isActive: false
        },
    ]


    const retreiveAirtimeRecords = () => {
        setLoading(true);
        const queryString: string = `?sort=name`;
        RETREIVE_AIRTIME(queryString).then((res: AxiosResponse<ApiResponse>) => {
            setLoading(false);
            const { message, success, payload } = res.data;
            setAirtimeRecords(payload);
        }).catch(err => {
            setLoading(false);
            console.log(err);
        })
    }

    useEffect(() => {
        retreiveAirtimeRecords();
    }, []);

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                <div className='w-12/12'>
                    <StepHeader 
                        title='Airtime To Cash'
                        steps={airtimeSteps}
                        step={step}
                        info="Use USSD Code: Dial *600*Recipient's Number*Amount*PIN#. (Default Pin; 1234). Kindly note that you can only transfer 5,000 at a time and there's a sim daily limit of 100,000."  
                    />

                    <div className='my-4'>
                        <h3 className="mb-3 text-[#7F7F80]">Select Provider</h3>
        
                        <Card type="lg">
                            <div className="flex justify-start">
                                {
                                    airtimeRecords.length > 0 && 
                                    airtimeRecords.map((item: Airtime, idx: number) => {
                                        return (<div 
                                                    key={idx} 
                                                    onClick={() => setSelectedAirtime(item)}
                                                    className='border-2 border-gray-100 rounded-md relative mx-4 px-4 py-2'
                                                >
                                                <img src={item?.networkImage} alt={item?.shortName} width="50px" height="50px" />
                                                {
                                                    selectedAirtime && selectedAirtime.id === item.id && 
                                                    <AiFillCheckCircle className='text-[#8652A4] absolute top-0 right-0' />
                                                }
                                            </div>)
                                    })
                                }    
                            
                            </div>

                            {/* airtime steps */}

                            {
                                step === 1 && 
                                <AirtimeStepOne changeStep={setStep} product={selectedAirtime} />
                            }
                            {
                                step === 2 && 
                                <AirtimeStepTwo changeStep={setStep}/>
                            }
                            {
                                step === 3 && 
                                <AirtimeStepThree changeStep={setStep}/>
                            }
                            {
                                step === 4 && 
                                <AirtimeStepFour changeStep={setStep}/>
                            }

                            {/* airtime steps */}
                        </Card>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </>
    )
}

export default AirtimeComp