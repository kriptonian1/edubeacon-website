import Page from '@/components/common/Page';
import ContactBox from '@/components/contact/ContactBox';
import ContactDetails from '@/components/contact/ContactDetails';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import Head from 'next/head';
import { WhatsappIcon, WhatsappMobileIcon } from '@/components/assets';

const Contact = () => {
    return (
        <Page>
            <Head>
                <title>Contact | EduBeacon</title>
            </Head>
            <div className={'w-[100vw] absolute '}>
                <div
                    className={
                        'relative -translate-y-[150px] w-[100vw] mx-auto h-[609px] rounded-full bg-gradient-radial from-[#057CF2]/[30%] to-transparent blur-[250px]'
                    }
                />
            </div>
            <Navbar />
            <div className="flex flex-col md:flex-row gap-y-[5rem] justify-center items-center mt-[20vh] mb-[10vh] gap-x-[15vw]">
                <ContactDetails />
                <ContactBox />
            </div>
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
            <div className="sticky top-[100vh]">
                <Footer />
            </div>
        </Page>
    );
};

export default Contact;
