import BlueButton from '@/components/common/BlueButton';
import WhiteButton from '@/components/common/WhiteButton';
import React from 'react';
import { LeftAsset, Line, RightAsset } from './assets/Hero';

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
        <div className={'pt-[25vh] z-10 relative flex gap-x-10 justify-center items-start px-5'}>
            {/* Left books animation */}
            <div
                style={{
                    transform: `translateY(${yIndexLeft}px)`,
                }}
                className={`transition-all hidden md:block ease-in-out duration-[2000ms] relative`}
            >
                <LeftAsset />
            </div>

            <div className="text-white text-center items-center flex flex-col gap-y-5">
                <div className={'font-bold text-3xl md:text-5xl lg:text-7xl'}>
                    Unlock your <span className={'text-navyBlue'}>Potential</span>
                </div>
                <span className={'text-xl md:text-2xl lg:text-3xl'}>
                    with <span className={'text-lightBlue'}>Edubeacon</span>
                </span>
                <div className={'font-medium text-lg'}>
                    Learn practical skills to transform your career, anytime and anywhere with Edubeacon.
                </div>
                <div className={'flex md:flex-row flex-col gap-5 mt-5 items-center'}>
                    <BlueButton className={'w-[180px] order-1'}>Live Courses</BlueButton>
                    <div className="order-3 md:order-2 md:mt-[60px]">
                        <Line />
                    </div>
                    <WhiteButton className={'w-[180px] md:order-3 order-2'}>Recorded Courses</WhiteButton>
                </div>
            </div>
            <div
                style={{
                    transform: `translateY(${yIndexRight}px)`,
                }}
                className={`transition-all ease-in-out duration-[4000ms] relative hidden md:block`}
            >
                <RightAsset />
            </div>
        </div>
    );
};

export default Hero;
