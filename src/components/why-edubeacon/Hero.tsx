import React from 'react';
import quote from './assets/Hero/quote.svg';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className={'flex mt-[300px] text-white items-center justify-center'}>
            <Image className={'relative -translate-y-10 translate-x-5'} src={quote} alt={''} />
            <div className={'font-bold text-6xl z-10'}>
                Why choose <span className={'text-navyBlue'}>Edubeacon?</span>
            </div>
            <Image className={'rotate-180 relative translate-y-9 -translate-x-7'} src={quote} alt={''} />
        </div>
    );
};

export default Hero;
