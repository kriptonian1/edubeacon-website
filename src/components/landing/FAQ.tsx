import React from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';
import BlueButton from '@/components/common/BlueButton';
import Link from 'next/link';

const data = [
    {
        id: '01',
        question: 'What is Edubeacon?',
        answer: 'Edubeacon is an online platform offering a wide range of courses designed to help learners upgrade their skills and advance their careers.',
    },
    {
        id: '02',
        question: 'What types of courses are offered on Edubeacon?',
        answer: 'Edubeacon provides a range of learning options, including concise recorded courses, interactive live masterclasses, and engaging one-day workshops, across diverse fields such as business, technology, design, marketing, and more.',
    },
    {
        id: '03',
        question: 'Are the courses on Edubeacon self-paced or scheduled?',
        answer: 'It depends on the course. We offer both on Edubeacon- Crash Courses that are self-paced, while the Live Masterclasses and Workshops have a fixed schedule with live sessions and assignments.',
    },
    {
        id: '04',
        question: 'Can I take multiple courses at the same time on Edubeacon?',
        answer: 'Yes, learners can enroll in multiple courses on Edubeacon and take them simultaneously.',
    },
    {
        id: '05',
        question: 'What kind of skills can I learn on Edubeacon?',
        answer: 'Edubeacon provides a plethora of relevant courses spanning various disciplines, from digital marketing and coding to project management and leadership, that can catalyse your career growth.',
    }
]

const FAQ = () => {
    const [selected, setSelected] = React.useState<string | null>(null);

    const handleSelected = React.useCallback((id: string) => {
        setSelected(prev => (prev === id ? null : id));
    }, []);

    return (
        <div className={'text-white flex flex-col gap-y-10 items-center justify-center'}>
            <div className={'font-bold text-3xl text-center'}>FAQs</div>
            <div className={'flex flex-col w-[85vw] md:w-[75vw] lg:w-[60vw] z-10 relative'}>
                {data.map(item => (
                    <button
                        onClick={handleSelected.bind(null, item.id)}
                        key={item.id}
                        className={`flex gap-x-6 ${
                            selected === item.id ? 'bg-[#057CF2]/[20%]' : 'bg-[#16171F]'
                        } border-b-[2px] border-b-gray-600 p-10 text-left items-start`}
                    >
                        <div className={'text-[#3F8DC6]/[83%] font-bold text-2xl md:text-3xl'}>{item.id}</div>
                        <div className={`flex flex-col gap-y-4 flex-grow transition-all ease-out duration-300`}>
                            <div className={'font-semibold text-xl md:text-2xl'}>{item.question}</div>
                            <div
                                className={`${selected !== item.id && 'collapse'} transition-all ease-out duration-300`}
                                id="collapseExample"
                            >
                                {item.answer}
                            </div>
                        </div>
                        <div
                            className={`${
                                selected === item.id && 'rotate-180 relative'
                            } translation-all ease-out duration-300`}
                        >
                            <KeyboardArrowDown />
                        </div>
                    </button>
                ))}
            </div>
            <Link href={'/faq'} className={'z-10'}>
                <BlueButton>Browse All FAQs</BlueButton>
            </Link>
            <div
                className={
                    'absolute w-[100vw] translate-y-40 mx-auto h-[900px] rounded-full bg-gradient-radial from-[#057CF2]/[30%] to-transparent blur-[250px]'
                }
            />
        </div>
    );
};

export default FAQ;
