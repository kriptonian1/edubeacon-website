import React from 'react';
import Page from '@/components/common/Page';
import Hero from '@/components/why-edubeacon/Hero';
import SkillDevelopment from '@/components/why-edubeacon/SkillDevelopment';
import Perks from '@/components/why-edubeacon/Perks';

const WhyEdubeacon = () => {
    return (
        <Page includeNavbar includeFooter>
            <div className={'w-[100vw] absolute'}>
                <div
                    className={
                        'relative -translate-y-[150px] w-[1024px] mx-auto h-[609px] rounded-full bg-gradient-radial from-[#057CF2]/[30%] to-transparent blur-[250px]'
                    }
                />
            </div>
            <Hero />
            <SkillDevelopment />
            <Perks />
        </Page>
    );
};

export default WhyEdubeacon;
