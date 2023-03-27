import React from 'react';
import Page from '@/components/common/Page';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { KeyboardArrowDown } from '@mui/icons-material';
import Head from 'next/head';
import Hero from '@/components/why-edubeacon/Hero';
import SkillDevelopment from '@/components/why-edubeacon/SkillDevelopment';
import Perks from '@/components/why-edubeacon/Perks';

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
    },
    {
        id: '06',
        question: 'How experienced are the instructors on Edubeacon?',
        answer: 'The instructors on Edubeacon are highly experienced professionals in their respective fields, with years of practical experience and expertise.'
    },
    {
        id: '07',
        question: 'Is there a limit to the number of courses I can take on Edubeacon?',
        answer: 'No, there is no limit to the number of courses learners can take on Edubeacon.'
    },
    {
        id: '08',
        question: 'How much do \tcourses on Edubeacon cost?',
        answer: 'The cost of courses on Edubeacon varies depending on the course type and duration.'
    },
    {
        id: '09',
        question: 'Are there any free courses available on Edubeacon?',
        answer: 'Although we do not offer free courses, our YouTube channel is a treasure trove of informative videos that can supplement your learning experience.'
    },
    {
        id: '10',
        question: 'How long are \tthe courses on Edubeacon?',
        answer: 'The duration of courses on Edubeacon varies depending on the course type and content. Short courses can range from a few hours to a few days, while some courses may take several weeks or months to complete.'
    },
    {
        id: '11',
        question: 'Will I receive a certificate of completion after finishing a course on Edubeacon?',
        answer: 'Yes, learners receive a certificate of completion after successfully finishing a course on Edubeacon.'
    },
    {
        id: '12',
        question: 'Are Edubeacon courses recognized by employers?',
        answer: 'Yes, Edubeacon courses are not only recognized by many employers, but they help you present yourself better in an interview, giving you the upper hand. Therefore, they can be a valuable addition to one\'s CV.'
    },
    {
        id: '13',
        question: 'Can I access Edubeacon courses on my mobile device?',
        answer: 'Yes, Edubeacon courses are optimized for mobile devices and can be accessed through the Edubeacon app or a mobile web browser.'
    },
    {
        id: '14',
        question: 'Is there a trial period for Edubeacon courses?',
        answer: 'No, Edubeacon does not offer a trial period for its courses. Although exceptions can be made for personalized masterclasses where a demo class is offered.'
    },
    {
        id: '15',
        question: 'How often are new courses added to Edubeacon?',
        answer: 'New courses are added to Edubeacon on a regular basis, with new offerings added each month.'
    },
    {
        id: '16',
        question: 'Can I access \tcourse materials after finishing a course on Edubeacon?',
        answer: 'Yes, learners can access course materials even after finishing a course on Edubeacon.'
    },
    {
        id: '17',
        question: 'How is the quality of Edubeacon courses ensured?',
        answer: 'Edubeacon ensures the quality of its courses by partnering with industry experts, using rigorous content development and review processes, and regularly updating its courses'
    },
    {
        id: '18',
        question: 'Can I interact with other students on Edubeacon?',
        answer: 'Yes, learners can interact with each other through WhatsApp chat groups, and the upcoming discussion forums, and other collaborative tools that will shortly be available on Edubeacon.'
    },
    {
        id: '19',
        question: 'How do I contact customer support on Edubeacon?',
        answer: 'To contact support for a query, you can reach out to us through mail or call us at +91 99454 88674'
    },
    {
        id: '20',
        question: 'Is there a refund policy for Edubeacon courses?',
        answer: 'No, there is no refund policy on Edubeacon courses. In case of queries, you can contact customer support'
    },
    {
        id: '21',
        question: 'How does Edubeacon protect my personal information?',
        answer: 'Edubeacon takes the protection of your personal information very seriously and has implemented robust security measures to safeguard it. We use industry-standard encryption and authentication protocols to protect the confidentiality and integrity of your data. Additionally, we have a privacy policy in place that outlines our commitment to protecting your personal information and ensuring its appropriate use. We do not share your information with third parties without your consent, except as required by law.'
    },
    {
        id: '22',
        question: 'Can I recommend courses to be added to Edubeacon?',
        answer: 'Yes, learners can suggest new course topics to Edubeacon, and the team will consider adding them to the course offerings.'
    },
    {
        id: '23',
        question: 'Are there any prerequisites for taking courses on Edubeacon?',
        answer: 'The prerequisites for courses on Edubeacon vary and are listed on the course page. While some courses may have specific requirements, many are designed for learners of all levels and backgrounds. You can contact support for further guidance.'
    },
    {
        id: '24',
        question: 'How do I know if a course is suitable for my skill level?',
        answer: 'Each course on Edubeacon includes a detailed description, including the target audience and skill level required. Learners can refer to this information to determine if the course is suitable for their skill level.'
    },
    {
        id: '25',
        question: 'How do I know which course is right for me on Edubeacon?',
        answer: 'It’s simple! Our course counselors can help you take the first step to upskilling and choose the right course for you. Contact support to get in touch with us!'
    },
    {
        id: '26',
        question: 'Can I get personalized feedback on my progress on Edubeacon?',
        answer: 'Absolutely, our course trainers would be more than happy to share feedback on a personal recap session with you. You simply need to contact support to book an appointment via mail or call.'
    },
    {
        id: '27',
        question: 'How can Edubeacon help me advance my career?',
        answer: 'Edubeacon offers a wide range of courses, workshops, and masterclasses that can help you acquire new skills, enhance your resume, and network with other professionals. This can lead to new job opportunities and help you stay competitive in your field. Overall, investing in your education through Edubeacon can help you stay competitive in the job market and achieve your career goals.'
    }
];

const Faq = () => {
    const [selected, setSelected] = React.useState<string | null>(null);

    const handleSelected = React.useCallback((id: string) => {
        setSelected(prev => (prev === id ? null : id));
    }, []);

    return (
        <Page>
            <Navbar />
            <div className={'text-white flex flex-col gap-y-16 mt-[20vh] items-center justify-center z-10'}>
                <div className={'font-bold text-3xl text-center'}>FAQs</div>
                <div className={'flex flex-col w-[85vw] md:w-[75vw] lg:w-[60vw] relative'}>
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
            </div>
            <Footer />
        </Page>
    );
};

export default Faq;
