import React from 'react';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { Step } from '../../common';

type Props = {
    title: string;
    steps: Step[]
}

const AccountStepHeader = ({ title, steps }: Props) => {
    return (
        <>
            <div className="w-full">
                <h3 className='text-[#8652A4] text-4xl font-bold mt-3 mb-8'> { title } </h3>

                <div className="w-full bg-[#d9d9d92d] rounded-t-xl px-4 py-6">
                    <div className="flex flex-row">
                        {
                            steps.length > 0 && 
                            steps.map((step: Step, key: number) => {
                                return <div className={`px-6 py-2 mx-2 rounded-md capitalize text-sm hover:cursor-pointer  ${ step.isActive ? 'bg-[#8652A4] text-white' : 'text-[#7F7F80]'}`} key={key}>
                                <p >{ step.name }</p>
                            </div>
                            })
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default AccountStepHeader;