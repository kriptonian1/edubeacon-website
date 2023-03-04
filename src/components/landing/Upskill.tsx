import React from 'react';
import asset1 from './assets/Upskill/asset1.svg';
import asset2 from './assets/Upskill/asset2.svg';
import asset3 from './assets/Upskill/asset3.svg';
import Image from 'next/image';

const data = [
    {
        id: 1,
        title: 'Unlock Your Potential With Edubeacon',
        body: "Whether you're looking to learn new skills or upgrade your existing ones, we've got you covered. ",
        buttonText: 'Sign up today',
        image: asset1,
    },
    {
        id: 2,
        title: "Don't let a lack of skills hold you back.",
        body: 'Our expert instructors will guide you every step of the way, so you can reach your goals and achieve your dreams.',
        buttonText: 'Book a consultation',
        image: asset2,
    },
    {
        id: 3,
        title: "Get the skills you need to thrive in today's fast-paced world.",
        body: "We believe that everyone has the potential to succeed. That's why we offer a range of courses, designed to help you stay relevant and competitive in your field.",
        buttonText: 'Take charge of your career, Sign Up',
        image: asset3,
    },
];

const Upskill = () => {
    return (
        <div className={'flex flex-col gap-y-10'}>
            <div className={'text-2xl text-center text-white'}>
                Upskill Yourself And <span className={'font-bold'}>Get Placed</span>
            </div>
            <div className={'flex gap-x-10 items-center justify-center'}>
                {data.map(item => (
                    <div
                        key={item.id}
                        className={
                            'flex flex-col justify-between gap-y-8 w-[20vw] bg-[#2693FF]/[60%] rounded-2xl h-[450px] hover:shadow-2xl hover:shadow-sky-700/40 transition-all ease-out duration-300'
                        }
                    >
                        <div className={'flex gap-x-5 text-white px-8 pt-8'}>
                            <div className={'bg-white/[40%] rounded-lg p-4 h-fit'}>{item.id}</div>
                            <div className={'text-lg'}>{item.title}</div>
                        </div>
                        <div className={'text-white px-8'}>{item.body}</div>
                        <div className={'flex justify-between items-start'}>
                            <button className={'bg-white text-blue-500 rounded-xl ml-8 py-2 px-4'}>
                                {item.buttonText}
                            </button>
                            <Image src={item.image} alt={''} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Upskill;
