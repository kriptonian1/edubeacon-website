import React, { useState } from 'react';
import BlueButton from '@/components/common/BlueButton';
import { Duration } from '@/components/courses/assets/Hero';
import Image from 'next/image';
import { Course } from './assets/Hero';
import Link from 'next/link';
import { useRouter } from 'next/router';

export type HeroProps = {
    title: string;
    subtitle: string;
    offeredBy: string;
    courseImage: any;
    duration: {
        total: string;
        weekly: string;
    };
    type: {
        title: string;
        description: string;
    };
    cost: {
        amount: string;
        description: string;
    };
};

const Hero: React.FC<{ data: HeroProps }> = props => {
    const [pdfLink, setPdfLink] = useState('');

    const handlePDF = () => {
        if (props.data.title === 'AI Ops') {
            setPdfLink('https://drive.google.com/file/d/1SXsag8BUSKiGOHnOIcGz_6E7YJv2r62b/view?usp=sharing');
        } else if (props.data.title === 'Data Science') {
            setPdfLink('https://drive.google.com/file/d/1IVHuXz7u6S4pV5W3BrssVWIcEOGwCy9C/view?usp=sharing');
        }
    };
    return (
        <div className={'mt-[150px] flex flex-col gap-y-10 text-white justify-center z-10'}>
            <div className={'lg:w-[80vw] mx-auto flex items-center justify-between gap-x-10 px-5'}>
                <div className={'flex flex-col justify-between gap-y-10 w-[90%] lg:w-[40%]'}>
                    <h1 className={'text-5xl md:text-5xl font-bold'}>{props.data.title}</h1>
                    <h2 className={'text-3xl md:text-2xl font-medium'}>{props.data.subtitle}</h2>
                    <h4 className={'text-[#C8C8DC]'}>{props.data.offeredBy}</h4>
                    <a
                        href={
                            props.data.title === 'Data Science'
                                ? 'https://drive.google.com/file/d/1IVHuXz7u6S4pV5W3BrssVWIcEOGwCy9C/view?usp=sharing'
                                : 'https://drive.google.com/file/d/1SXsag8BUSKiGOHnOIcGz_6E7YJv2r62b/view?usp=sharing'
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BlueButton onClick={() => handlePDF()} className={'w-fit'}>
                            Request more info
                        </BlueButton>
                    </a>
                </div>

                <Image
                    className={'w-fit lg:block hidden md:flex'}
                    src={props.data.courseImage}
                    width={500}
                    height={500}
                    alt={`${props.data.title} thumb`}
                />
            </div>
            {/*For large screen*/}
            <div className={'lg:flex gap-x-5 hidden'}>
                <div className={'bg-prussianBlue/30 w-[85vw]'}>
                    <div className={'lg:w-[67vw] mx-auto flex justify-between gap-5 items-center p-8 '}>
                        <div className={'flex gap-x-3'}>
                            <Duration />
                            <div className={'flex flex-col gap-y-3'}>
                                <div>{props.data.duration.total}</div>
                                <div>{props.data.duration.weekly}</div>
                            </div>
                        </div>
                        <div className={'flex gap-x-3'}>
                            <Duration />
                            <div className={'flex flex-col gap-y-3'}>
                                <div>{props.data.type.title}</div>
                                <div>{props.data.type.description}</div>
                            </div>
                        </div>
                        <div className={'flex gap-x-3'}>
                            <Duration />
                            <div className={'flex flex-col gap-y-3'}>
                                <div>{props.data.cost.amount}</div>
                                <div>{props.data.cost.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'w-[20px] bg-white h-full]'} />
            </div>
            {/*For small & medium screens*/}
            <div className={'flex gap-x-5 lg:hidden px-5'}>
                <div className={'flex flex-col gap-y-5'}>
                    <div className={'flex gap-x-3'}>
                        <Duration />
                        <div className={'flex flex-col gap-y-3'}>
                            <div>{props.data.duration.total}</div>
                            <div>{props.data.duration.weekly}</div>
                        </div>
                    </div>
                    <div className={'flex gap-x-3'}>
                        <Duration />
                        <div className={'flex flex-col gap-y-3'}>
                            <div>{props.data.type.title}</div>
                            <div>{props.data.type.description}</div>
                        </div>
                    </div>
                    <div className={'flex gap-x-3'}>
                        <Duration />
                        <div className={'flex flex-col gap-y-3'}>
                            <div>{props.data.cost.amount}</div>
                            <div>{props.data.cost.description}</div>
                        </div>
                    </div>
                </div>
                {/* <Course /> */}
                {/*<Image src={Course} alt={''} />*/}
            </div>
        </div>
    );
};

export default Hero;
