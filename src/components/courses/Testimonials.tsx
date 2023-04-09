import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Star } from '@mui/icons-material';
import 'swiper/css';

export type TestimonialProps = {
    name: string;
    rating: number;
    position: string;
    comments: string;
    image: StaticImageData;
} []

const Testimonials: React.FC<{ data: TestimonialProps }> = props => {
    return (
        <div className={'w-full lg:w-[80vw] mx-auto flex flex-col gap-y-5 text-white z-10 px-5'}>
            <h1 className={'text-3xl font-medium border-l-4 border-l-navyBlue pl-5'}>Testimonials</h1>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-row'}>
                {props.data.map((item, index) => (
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
