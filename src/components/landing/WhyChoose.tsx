import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';

const data = [
    {
        title: 'Placement Assistance',
        color: '#62FFB3',
    },
    {
        title: 'Personality Development',
        color: '#62AAFF',
    },
    {
        title: 'Practical Project Oriented Class',
        color: '#FF2681',
    },
    {
        title: 'Live Projects for Practice',
        color: '#EA4335',
    },
    {
        title: 'Personality Development',
        color: '#FEDA77',
    },
    {
        title: ' Job Oriented Program ',
        color: '#62FFB3',
    },
    {
        title: 'Customized Syllabus',
        color: '#62AAFF',
    },
    {
        title: 'Achieve More',
        color: '#FF2681',
    },
    {
        title: 'Unleash Your Potential',
        color: '#EA4335',
    },
];

const WhyChoose = () => {
    return (
        <div className={'text-white flex flex-col gap-y-16 items-center px-5'}>
            <div className={'text-2xl text-center'}>
                Why choose <span className={'font-bold'}>Edubeacon</span>
            </div>
            <div className={'flex gap-4 w-screen flex-wrap break-all items-center justify-center'}>
                <Swiper
                    className="mySwiper flex gap-4  flex-wrap break-all items-center justify-center"
                    spaceBetween={100}
                    slidesPerView={5}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {data.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div
                                    className={`flex text-sm gap-x-4 items-center min-w-[255px] bg-[#F5F8FF]/[10%] cursor-grab rounded-lg px-4 py-2`}
                                >
                                    <div
                                        className={`w-[25px] h-[25px] rounded-full`}
                                        style={{ backgroundColor: item.color }}
                                    />
                                    <div className={'font-medium'}>{item.title}</div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default WhyChoose;
