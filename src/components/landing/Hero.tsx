import BlueButton from '@/components/common/BlueButton';
import WhiteButton from '@/components/common/WhiteButton';
import line from './assets/Hero/line.svg';
import leftAsset from './assets/Hero/left-asset.svg';
import rightAsset from './assets/Hero/right-asset.svg';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
    const [yIndexLeft, setYIndexLeft] = React.useState(0);
    const [yIndexRight, setYIndexRight] = React.useState(200);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setYIndexLeft(yIndex => {
                return yIndex === 0 ? 200 : 0;
            });
        }, 2100);
        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setYIndexRight(yIndex => {
                return yIndex === 0 ? 200 : 0;
            });
        }, 4100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={'pt-[300px]  h-[75vh] z-10 relative flex gap-x-10 justify-center items-start'}>
            <Image
                style={{
                    transform: `translateY(${yIndexLeft}px)`,
                }}
                className={`transition-all ease-in-out duration-[2000ms] relative`}
                src={leftAsset}
                alt={''}
            />
            <div className="text-white text-center items-center flex flex-col gap-y-5">
                <div className={'font-bold text-7xl'}>
                    Unlock your <span className={'text-navyBlue'}>Potential</span>
                </div>
                <span className={'text-3xl'}>
                    with <span className={'text-lightBlue'}>Edubeacon</span>
                </span>
                <div className={'font-medium text-lg'}>
                    Learn practical skills to transform your career, anytime and anywhere with Edubeacon.
                </div>
                <div className={'flex gap-x-5 mt-5'}>
                    <BlueButton className={'w-[180px]'}>Live Courses</BlueButton>
                    <Image className={'mt-[60px]'} src={line} alt={''} />
                    <WhiteButton className={'w-[180px]'}>Recorded Courses</WhiteButton>
                </div>
            </div>
            <Image
                style={{
                    transform: `translateY(${yIndexRight}px)`,
                }}
                className={`transition-all ease-in-out duration-[4000ms] relative`}
                src={rightAsset}
                alt={''}
            />
        </div>
    );
};

export default Hero;
