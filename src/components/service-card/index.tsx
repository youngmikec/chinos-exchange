import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/card';

type Props = {
    title: string;
    subTitle: string;
    img: string;
    link: string;
    linkText: string;
}

const ServiceCard = ({title, subTitle, img, link, linkText}: Props) => {
    return (
        <>
            <div className='w-full text-center'>
                <Card type='sm'>
                    <p className=''>{title}</p>
                    <h5 className='font-normal'>{subTitle}</h5>

                    <div className='flex justify-center mb-3'>
                        <img src={img} alt="service card" />
                    </div>
                    <button className='bg-[#8652A4] w-10/12 rounded-lg text-white my-4 '>
                        <Link to={link}>{linkText}</Link>
                    </button>
                </Card>
            </div>
        </>
    )
}

export default ServiceCard;