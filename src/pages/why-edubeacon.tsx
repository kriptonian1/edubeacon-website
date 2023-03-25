import React from 'react';
import Head from 'next/head';
import Page from '@/components/common/Page';
import Hero from '@/components/why-edubeacon/Hero';
import SkillDevelopment from '@/components/why-edubeacon/SkillDevelopment';
import Perks from '@/components/why-edubeacon/Perks';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const WhyEdubeacon = () => {
    return (
        <Page>
            <Head>
                <title>Why-edubeacon | Edubeacon</title>
            </Head>
            <Navbar />
            <Hero />
            <SkillDevelopment />
            <Perks />
            <Footer />
        </Page>
    );
};

export default WhyEdubeacon;
