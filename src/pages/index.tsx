import Hero from '@/components/landing/Hero';
import Skills from '@/components/landing/Skills';
import WhyChoose from '@/components/landing/WhyChoose';
import Upskill from '@/components/landing/Upskill';
import FAQ from '@/components/landing/FAQ';
import Testimonials from '@/components/landing/Testimonials';
import Page from '@/components/common/Page';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Head from 'next/head';
import { WhatsappIcon, WhatsappMobileIcon } from '@/components/assets';

export default function Home() {
    return (
        <Page>
            <Head>
                <title>Edubeacon</title>
                <meta property="og:image" content="https://i.postimg.cc/tCXd3Tfg/thumbnail.png" />
                <meta property="twitter:image" content="https://i.postimg.cc/tCXd3Tfg/thumbnail.png" />
                <meta
                    name="description"
                    content="Acquire the skills you need to succeed in today’s job market. Edubeacon is an online learning platform that helps students gain practical, real-world experience with digital marketing and data science. We offer courses and certifications that are designed to help professionals advance their careers in just a few hours per week."
                />
                <meta
                    name="og:description"
                    content="Acquire the skills you need to succeed in today’s job market. Edubeacon is an online learning platform that helps students gain practical, real-world experience with digital marketing and data science. We offer courses and certifications that are designed to help professionals advance their careers in just a few hours per week."
                />
            </Head>
            <Navbar />
            <Hero />
            <Skills />
            <WhyChoose />
            <Upskill />
            <Testimonials />
            <FAQ />

            <div className="hidden flex-row-reverse md:flex sticky bottom-0 right-0 z-50">
                <a
                    href="https://api.whatsapp.com/send/?phone=919945488674&text=Hey%20there%20%F0%9F%91%8B"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <WhatsappIcon />
                </a>
            </div>
            <div className="flex flex-row-reverse md:hidden sticky bottom-3  z-50">
                <a
                    href="https://api.whatsapp.com/send/?phone=919945488674&text=Hey%20there%20%F0%9F%91%8B"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <WhatsappMobileIcon />
                </a>
            </div>
            <Footer />
        </Page>
    );
}
