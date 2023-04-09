import React from 'react';
import Image from 'next/image';
import { Star } from '@mui/icons-material';
import 'swiper/css';
import { testimonials } from '../../../data/testimonials';

const Testimonials = () => {
    return (
        <div className={'flex flex-col gap-y-16 items-center justify-center text-white z-10 pb-[200px] w-[80vw] mx-auto'}>
            <div className={'flex flex-col gap-y-3 text-center'}>
                <div className={'text-4xl font-medium'}>Graduate&apos;s Testimonials</div>
                <div className={'text-lg text-[#B4B4B4]'}>Let’s see what our happy graduates say</div>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-row'}>
                {testimonials.map((item, index) => (
                    <div key={index} className={'flex rounded-lg bg-white/[15%] text-left p-3'}>
                        <div className={'flex w-[110px]'}>
                            <div className={'min-w-[80px] h-[80px] bg-lightBlue rounded-full z-0 relative'} />
                            <Image
                                src={item.image}
                                alt={''}
                                className={'relative right-[70px] z-10 min-w-[80px] h-[80px]'}
                            />
                        </div>
                        <div className={'flex flex-col gap-y-3 flex-grow'}>
                            <div className={'text-xl font-medium'}>{item.name}</div>
                            <div className={'text-sm text-[#B4B4B4]'}>{item.position}</div>
                            <div className={' flex gap-x-1'}>
                                {Array.from(Array(5).keys()).map((n) => (
                                    <Star key={n} width="16" height="16" className={`${item.rating > n ? 'text-[#51A9FF]' : 'text-white'}`} />
                                ))}
                            </div>

                            <div>{item.comments}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
