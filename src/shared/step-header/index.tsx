import React, { useEffect, useState } from 'react';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { Step } from '../../common';

type Props = {
    title: string;
    info: string;
    steps: Step[];
    step?: number;
}

const StepHeader = ({ title, info, steps, step }: Props) => {
    const [stepsArray, setStepArray] = useState<Step[]>([]);

    useEffect(() => {
        setStepArray(steps);
    }, []);

    useEffect(() => {
        steps.forEach((item, idx) => {
            ((idx + 1) === step) ? item.isActive = true : item.isActive = false;
        })
        setStepArray(steps);
    }, [step]);

    return (
        <>
            <div className="w-full">
                <h3 className='text-[#8652A4] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-3 mb-8'> { title } </h3>

                <div className="w-full flex justify-start">
                    {
                        stepsArray.length > 0 && 
                        stepsArray.map((step: Step, key: number) => {
                            return <div className='text-center' key={key}>
                            <p className='text-[#7F7F80] text-lg'>Step {key + 1} </p>
                            <p className={`px-3 sm:px-4 md:px-5 lg:px-6 py-3 capitalize text-[0.6rem] lg:text-sm ${ step.isActive ? 'bg-[#8652A4] text-white' : 'bg-[#D9D9D9] text-[#7F7F80]'}`}>{ step.title }</p>
                        </div>
                        })
                    }
                </div>

                {/* info section */}
                <div className="my-6 rounded-md border-2 border-[#d30b0b4b] p-4 flex justify-start">
                    <div className='mr-6 my-auto h-4'>
                        <AiFillExclamationCircle className="text-[#d30b0baf]" />
                    </div>
                    <div>
                        <p className='text-[#7F7F80] text-sm'>{ info }</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepHeader;