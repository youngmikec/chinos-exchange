import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';

//COMPONENTS
import Card from '../../../shared/card';
import StepHeader from '../../../shared/step-header';
import BuyCryptoStepOne from './buy-crypto-step-one';
import BuyCryptoStepTwo from './buy-crypto-step-two';
import BuyCryptoStepThree from './buy-crypto-step-three';
import BuyCryptoStepFour from './buy-crypto-step-four';
import BuyCryptoStepFive from './buy-crytpo-step-five';


import { RETREIVE_CRYPTO } from '../../../services';
import { ApiResponse, CryptoCurrency, Step } from '../../../common';

const BuyCryptoComp = () => {
    const [step, setStep] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [cryptoRecords, setCryptoRecords] = useState<CryptoCurrency[]>([])

    const steps: Step[] = [
        {
            name: 'Choose asset',
            isActive: true
        },
        {
            name: 'amount',
            isActive: false
        },
        {
            name: 'account info',
            isActive: false
        },
        {
            name: 'upload proof',
            isActive: false
        },
    ]

    const retreiveCryptos = () => {
        setLoading(true);
        const queryString: string = `?sort=name`;
        RETREIVE_CRYPTO(queryString).then((res: AxiosResponse<ApiResponse>) => {
            setLoading(false);
            const { message, success, payload } = res.data;
            setCryptoRecords(payload);
            console.log({ cryptoRecords })
        }).catch(err => {
            setLoading(false);
            console.log(err);
        })

    }

    useEffect(() => {
        retreiveCryptos();
    }, [])

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                <div className='w-12/12'>
                    <StepHeader 
                        title='Buy Crypto'
                        steps={steps}
                        step={step}
                        info="While trading with us, make sure you copy the right address for your deposit to avoid lost of fund. upload a screenshot of your transaction as well."  
                    />

                </div>
            </div>

            <div className='flex flex-row my-4'>
                <div className='w-8/12 ml-auto mr-8'>
                    {/* <h3 className="mb-3 text-[#7F7F80]">Select Provider</h3> */}
                    <Card type="lg">
                        {/* airtime steps */}
                        {
                                step === 1 && 
                                // <AirtimeStepOne  product={selectedAirtime} />
                                <BuyCryptoStepOne 
                                    changeStep={setStep}
                                    cryptos={cryptoRecords}
                                />
                            }
                            {
                                step === 2 && 
                                // <AirtimeStepTwo changeStep={setStep}/>
                                <BuyCryptoStepTwo changeStep={setStep} />
                            }
                            {
                                step === 3 && 
                                // <AirtimeStepThree changeStep={setStep} changeStatus={setStatus} />
                                <BuyCryptoStepThree 
                                    changeStep={setStep}
                                    cryptos={cryptoRecords}
                                />
                            }
                            {
                                step === 4 && 
                                // <AirtimeStepFour changeStep={setStep} status={status} />
                                <BuyCryptoStepFour changeStep={setStep} />
                            }
                            {
                                step === 5 && 
                                // <AirtimeStepFour changeStep={setStep} status={status} />
                                <BuyCryptoStepFive changeStep={setStep} />
                            }
                        {/* airtime steps */}
                    </Card>
                </div>

                <div className='w-4/12'>
                    <Card type="lg">
                        {/* Crypto rates */}
                        
                        <div>
                            <div className="flex justify-between my-3">
                                <div><p className='text-[#7F7F80]'><strong>Name</strong></p></div>
                                <div><p className='text-[#7F7F80]'><strong>Rate</strong></p></div>
                            </div>

                            {
                                cryptoRecords.length > 0 ? 
                                cryptoRecords.map((item: CryptoCurrency, idx: number) => {
                                    return <div className="flex justify-between my-3" key={idx}>
                                    <div>
                                        <img src={item?.cryptoImage} width="25px" height="25px" className="rounded-full mx-2 inline-flex" alt="crypto" />
                                        <p className='text-[#7F7F80] font-thin inline'><strong>{item?.shortName}</strong></p>
                                    </div>
                                    <div><p className='text-[#8652A4] font-thin text-sm'><strong>{item?.rate}/$</strong></p></div>
                                </div>
                                }) :

                                <div className="flex justify-between my-3">
                                    <div><p className='text-[#7F7F80]'><strong>No Record found</strong></p></div>
                                    <div><p className='text-[#8652A4] font-thin'><strong>0/$</strong></p></div>
                                </div>
                            }
                            

                        </div>
                        {/* Crypto rates */}
                    </Card>
                </div>
            </div>
        </>
    )
}

export default BuyCryptoComp;