import React from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';

const data = [
    {
        id: '01',
        question: 'What is the duration of this course?',
        answer: 'The course duration can vary, but typically lasts between 6 to 12 weeks, depending on the program.',
    },
    {
        id: '02',
        question: 'Is prior experience required to enroll in the course? ',
        answer: 'No, prior experience is not required. The course is designed for individuals of all levels, from beginners to experienced professionals.',
    },
    {
        id: '03',
        question: 'What is the format of the course?',
        answer: 'The course can be delivered in a variety of formats, including in-person, online, and blended learning.',
    },
    {
        id: '04',
        question: 'Are there any prerequisites for enrolling in the course?',
        answer: 'No, there are no specific prerequisites for enrolling in the course. However, a basic understanding of mathematics and computing would be helpful.',
    },
    {
        id: '05',
        question: 'Will I receive a certificate upon completion of the course?',
        answer: 'Yes, you will receive a certificate of completion after successfully finishing the course and passing the required assessments.',
    },
];

const FAQ = () => {
    const [selected, setSelected] = React.useState<string | null>(null);

    const handleSelected = React.useCallback((id: string) => {
        setSelected(prev => (prev === id ? null : id));
    }, []);

    return (
        <div className={'text-white flex flex-col gap-y-10 items-center justify-center'}>
            <div className={'font-bold text-3xl text-center'}>FAQs</div>
            <div className={'flex flex-col w-[60vw] z-10 relative'}>
                {data.map(item => (
                    <button
                        onClick={handleSelected.bind(null, item.id)}
                        key={item.id}
                        className={`flex gap-x-6 ${
                            selected === item.id ? 'bg-[#057CF2]/[20%]' : 'bg-[#16171F]'
                        } border-b-[2px] border-b-gray-600 p-10 text-left items-start`}
                    >
                        <div className={'text-[#3F8DC6]/[83%] font-bold text-3xl'}>{item.id}</div>
                        <div className={`flex flex-col gap-y-4 flex-grow transition-all ease-out duration-300`}>
                            <div className={'font-semibold text-2xl'}>{item.question}</div>
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
            <div
                className={
                    'absolute w-[100vw] translate-y-40 mx-auto h-[900px] rounded-full bg-gradient-radial from-[#057CF2]/[30%] to-transparent blur-[250px]'
                }
            />
        </div>
    );
};

export default FAQ;
