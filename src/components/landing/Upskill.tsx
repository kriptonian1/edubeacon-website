import React from 'react';
import Image from 'next/image';
import { asset1, asset2, asset3 } from './assets/Upskill';
import Link from 'next/link';

const data = [
    {
        id: 1,
        title: 'Unlock Your Potential With EduBeacon',
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
        title: "Get the skills you need to thrive in today's world.",
        body: "We believe that everyone has the potential to succeed. That's why we offer a range of courses, designed to help you stay relevant and competitive in your field.",
        buttonText: 'Own your career',
        image: asset3,
    },
];

const Upskill = () => {
    return (
        <div className={'flex flex-col gap-y-10 text-white'}>
            <div className={'text-2xl text-center'}>
                Upskill Yourself And <span className={'font-bold'}>Get Placed</span>
            </div>
            <div className={'flex flex-col lg:flex-row gap-y-10  md:gap-x-10 items-center justify-center'}>
                {data.map(item => (
                    <div
                        key={item.id}
                        className={
                            'flex flex-col relative justify-between gap-y-8 aspect-square w-[90vw] lg:w-[23vw]  bg-[#2693FF]/[60%] rounded-2xl h-[450px] hover:shadow-2xl hover:shadow-sky-700/40 transition-all ease-out duration-300'
                        }
                    >
                        <div className={'flex gap-x-5 px-8 pt-8 items-start'}>
                            {/* <div className={'bg-white/[40%] aspect-square rounded-lg p-4 w-7'}>{item.id}</div> */}
                            <div className="aspect-square bg-white/[40%] w-10 h-10 items-center justify-center flex p-4 rounded-md text-xl">
                                {item.id}
                            </div>
                            <div className={'text-lg '}>{item.title}</div>
                        </div>
                        <div className={' px-8'}>{item.body}</div>
                        <div className={'flex justify-between mb-14 items-start'}>
                            <Link href={'/contact'}>
                                <button className={'bg-white text-blue-500 rounded-full ml-8 py-2 px-4'}>
                                    {item.buttonText}
                                </button>
                            </Link>
                        </div>
                        <Image
                            className="absolute right-0 bottom-0 "
                            draggable={false}
                            src={item.image}
                            width={'111'}
                            alt={''}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Upskill;
