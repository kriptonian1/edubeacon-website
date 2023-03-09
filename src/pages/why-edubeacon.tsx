import React from 'react';
import Page from '@/components/common/Page';
import Hero from '@/components/why-edubeacon/Hero';
import SkillDevelopment from '@/components/why-edubeacon/SkillDevelopment';
import Perks from '@/components/why-edubeacon/Perks';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/landing/Footer';

const WhyEdubeacon = () => {
    return (
        <Page>
            <div className={'w-[100vw] absolute'}>
                <div
                    className={
                        'relative -translate-y-[150px] w-[1024px] mx-auto h-[609px] rounded-full bg-gradient-radial from-[#057CF2]/[30%] to-transparent blur-[250px]'
                    }
                />
            </div>
            <Navbar />
            <Hero />
            <SkillDevelopment />
            <Perks />
            <Footer />
        </Page>
    );
};

export default WhyEdubeacon;
