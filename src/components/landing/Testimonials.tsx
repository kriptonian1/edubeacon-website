import React from 'react';
import lady1 from './assets/Testimonials/lady1.png';
import lady2 from './assets/Testimonials/lady2.png';
import man from './assets/Testimonials/man.png';
import Image from 'next/image';
import { Star } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';

const data = [
    {
        name: 'Sara Ali Khan',
        rating: 4,
        position: 'Cardiologist Patient',
        comments: 'Thanks for all the services,no doubt it is the best hospital.',
        image: lady1,
    },
    {
        name: 'Sara Ali Khan',
        rating: 3,
        position: 'Cardiologist Patient',
        comments: 'Thanks for all the services,no doubt it is the best hospital.',
        image: lady1,
    },
    {
        name: 'Simon Targett',
        rating: 5,
        position: 'Cardiologist Patient',
        comments: 'Thanks for all the services,no doubt it is the best hospital.',
        image: man,
    },
    {
        name: 'Sara Ali Khan',
        rating: 4,
        position: 'Cardiologist Patient',
        comments: 'Thanks for all the services,no doubt it is the best hospital.',
        image: lady2,
    },
    {
        name: 'Simon Targett',
        rating: 4,
        position: 'Cardiologist Patient',
        comments: 'Thanks for all the services,no doubt it is the best hospital.',
        image: man,
    },
];

const Testimonials = () => {
    return (
        <div className={'flex flex-col gap-y-16 items-center justify-center text-white z-10 pb-[200px]'}>
            <div className={'flex flex-col gap-y-3 text-center'}>
                <div className={'text-4xl font-medium'}>Graduate&apos;s Testimonials</div>
                <div className={'text-lg text-[#B4B4B4]'}>Let’s see what our happy graduates say</div>
            </div>
            <div className={'flex gap-12  flex-row items-center justify-center'}>
                <Swiper
                    className="mySwiper flex gap-12  flex-row items-center justify-center"
                    spaceBetween={1}
                    slidesPerView={5}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={'flex gap-x-4 rounded-lg bg-white/[15%] text-left p-5  w-[30rem]'}>
                                <div className={'flex'}>
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
