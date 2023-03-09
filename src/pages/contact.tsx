import Page from '@/components/common/Page';
import ContactBox from '@/components/contact/ContactBox';
import ContactDetails from '@/components/contact/ContactDetails';
import Footer from '@/components/landing/Footer';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';

const Contact = () => {
    return (
        <Page>
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

            <div className="sticky top-[100vh]">
                <Footer />
            </div>
        </Page>
    );
};

export default Contact;
