import React from 'react';
import male from './assets/SkillDevelopment/male.png';
import achievement from './assets/SkillDevelopment/achievement.svg';
import chalkboard from './assets/SkillDevelopment/chalkboard.svg';
import line from './assets/SkillDevelopment/line.svg';
import Image from 'next/image';
import { Achievement, Chalkboard } from './assets/SkillDevelopment';

const SkillDevelopment = () => {
    return (
        <div className={' flex gap-x-10 text-white items-center justify-center '}>
            <div className={'flex w-[50vw] flex-col gap-y-5'}>   
                <div className={'border-l-4 border-l-navyBlue text-2xl font-semibold pl-5'}>
                    Your partner for skill development
                </div>
                <div className={'text-[#C8C8DC] pl-5'}>
                    Choose our data science and digital marketing institute to enhance your skills and reach your career
                    goals. With a team of experienced instructors, personalized attention, and hands-on learning
                    opportunities, you will receive a comprehensive education tailored to your needs. Our program is
                    designed to help you stay ahead of the curve in an ever-evolving industry, and our commitment to
                    your success is unwavering. Invest in your future and join our community of skilled professionals
                    today.
                </div>
                <div className={'flex gap-x-10 items-center'}>
                    <div className={'flex gap-x-5 items-center'}>
                        <Achievement />
                        <div className={'flex flex-col gap-y-3'}>
                            <div className={'font-bold text-xl'}>Placement Assistance</div>
                            <div className={'text-[#C8C8DC]'}>Have placed more than 100+ students</div>
                        </div>
                    </div>
                    <Image src={line} alt={''} />
                    <div className={'flex gap-x-5 items-center'}>
                        <Chalkboard />
                        <div className={'flex flex-col gap-y-3'}>
                            <div className={'font-bold text-xl'}>Experienced Mentor</div>
                            <div className={'text-[#C8C8DC]'}>Mentors having 15+ years of experience</div>
                        </div>
                    </div>
                </div>
            </div>
            <Image draggable={false} className={'w-[600px]'} src={male} alt={''} />
        </div>
    );
};

export default SkillDevelopment;
