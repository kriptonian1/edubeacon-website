import React from 'react';

const data = [
    {
        title: 'Master Tomorrow',
        color: '#62FFB3',
    },
    {
        title: 'Master Skills',
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
    {
        title: 'Supercharge Your Career',
        color: '#FEDA77',
    },
    {
        title: 'Master Tomorrow',
        color: '#62FFB3',
    },
    {
        title: 'Master Skills',
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
        <div className={'text-white flex flex-col gap-y-16 items-center'}>
            <div className={'text-2xl text-center'}>
                Why choose <span className={'font-bold'}>Edubeacon</span>
            </div>
            <div className={'flex gap-4 w-[65vw] flex-wrap break-all items-center justify-center'}>
                {data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`flex text-sm gap-x-4 items-center bg-[#F5F8FF]/[10%] rounded-lg px-4 py-2`}
                        >
                            <div className={`w-[25px] h-[25px] rounded-full`} style={{ backgroundColor: item.color }} />
                            <div className={'font-medium'}>{item.title}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WhyChoose;
