import Hero from '@/components/landing/Hero';
import Skills from '@/components/landing/Skills';
// import WhyChoose from '@/components/landing/WhyChoose';
// import Upskill from '@/components/landing/Upskill';
// import FAQ from '@/components/landing/FAQ';
import Testimonials from '@/components/landing/Testimonials';
import Page from '@/components/common/Page';
import Navbar from '@/components/navbar/Navbar';
// import Footer from '@/components/footer/Footer';

import dynamic from 'next/dynamic';

const FAQ = dynamic(() => import('@/components/landing/FAQ'));
const WhyChoose = dynamic(() => import('@/components/landing/WhyChoose'));
const Upskill = dynamic(() => import('@/components/landing/Upskill'));
const Footer = dynamic(() => import('@/components/footer/Footer'));

export default function Home() {
    return (
        <Page>
            <Navbar />
            <Hero />
            <Skills />
            <WhyChoose />
            <Upskill />
            {/* <FAQ /> */}
            {/* <Testimonials /> */}
            <Footer />
        </Page>
    );
}
