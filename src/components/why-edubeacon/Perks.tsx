import React from 'react';
import cross from './assets/Perks/cross.svg';
import Image from 'next/image';

const perks = [
    {
        title: 'Job oriented program',
        body: 'The programs are designed to prepare individuals for specific careers or skill set. These programs typically focus on providing candidates with the knowledge, skills, and experience they need to succeed in their chosen field. They may include hands-on training, and other experiential learning opportunities, as well as coursework that is directly relevant to the field. The main objective is to provide the candidates with a career path, instead of just a degree.',
    },
    {
        title: 'Assistance with placement',
        body: 'It is offered to help candidates find employment after course completion. It includes a variety of services such as job interviews, career counseling, resume and cover letter writing, and job search strategies. We also have dedicated placement officer or career service department that work with candidates to identify job opportunities and connect them with employers.',
    },
    {
        title: 'Practical project oriented classes',
        body: 'We have designed the program in a way to provide candidates with hands-on experience and real-world problem-solving skills. These classes involve working on projects or case studies that are directly related to the industry or field candidates want to specialize in. This approach allows candidates to apply the knowledge and skills they have learned in the classroom to real-world situations, giving them a better understanding of the practical applications of their education.',
    },
    {
        title: 'Customized Syllabus',
        body: "he course plan is tailored to the specific needs and goals of the prevailing market practices. It includes specific set of topics, readings, assignments, and assessments that are chosen to align with the candidates' interests and career aspirations. Since we offer customized syllabus it can be made flexible, allowing the instructor to adjust the content or delivery based on the candidates' needs or feedback.",
    },
];

const Perks = () => {
    return (
        <div className={'w-[75vw] grid grid-cols-2 grid-rows-2 gap-16 mx-auto text-white mb-20 z-10'}>
            {perks.map((perk, index) => (
                <div key={index} className={'flex flex-col gap-y-6'}>
                    <div className={'font-semibold text-2xl pl-5 border-l-4 border-l-navyBlue'}>{perk.title}</div>
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
