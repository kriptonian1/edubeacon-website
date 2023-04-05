import React from 'react';
import cross from './assets/Perks/cross.svg';
import Image from 'next/image';

const perks = [
    {
        title: 'Your Partner for skill development',
        body: 'Choose our institute to enhance your skills and reach your career goals.',
    },
    {
        title: 'Placement Assistance',
        body: 'Have placed more than 50+ students',
    },
    {
        title: 'Experienced Mentor',
        body: 'Mentor having 10+ years of experience',
    },
    {
        title: 'Customized Syllabus',
        body: "The course plan is tailored to the specific needs and goals of the prevailing market practices.",
    },
];

const Perks = () => {
    return (
        <div
            className={
                'w-full px-5 md:w-[75vw] grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-4 gap-8 md:gap-16 mx-auto text-white mb-20 z-10'
            }
        >
            {perks.map((perk, index) => (
                <div key={index} className={'flex flex-col gap-y-6'}>
                    <div className={'font-semibold text-xl md:text-2xl pl-5 border-l-4 border-l-navyBlue'}>
                        {perk.title}
                    </div>
                    <div className={'text-[#C8C8DC] pl-5'}>{perk.body}</div>
                </div>
            ))}
            <div className={'w-[75vw] absolute z-0'}>
                <Image className={'mx-auto'} src={cross} alt={''} />
            </div>
            <div className={'w-[75vw] absolute z-0'}>
                <div
                    className={
                        'relative h-[200px] translate-y-[600px] rounded-full bg-gradient-radial from-[#057CF2]/[30%] to-transparent blur-[250px]'
                    }
                />
            </div>
        </div>
    );
};

export default Perks;
