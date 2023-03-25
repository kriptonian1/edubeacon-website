import Page from '@/components/common/Page';
import ContactBox from '@/components/contact/ContactBox';
import ContactDetails from '@/components/contact/ContactDetails';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import Head from 'next/head';
import BlueButton from '@/components/common/BlueButton';

const ComingSoon = () => {
    return (
        <Page>
            <Head>
                <title>Comming Soon | Edubeacon</title>
            </Head>
            <div className={'w-[100vw] absolute '}>
                <div
                    className={
                        'relative -translate-y-[150px] w-[100vw] mx-auto h-[609px] rounded-full bg-gradient-radial from-[#057CF2]/[30%] to-transparent blur-[250px]'
                    }
                />
            </div>
            <Navbar />
            <div className="flex flex-col gap-y-[5rem] justify-center items-center mt-[20vh] mb-[10vh] gap-x-[15vw] z-20">
                <h2 className=" text-4xl md:text-9xl text-white text-center">COMING SOON</h2>

                <div className="justify-center">
                    <BlueButton>Browse Courses</BlueButton>
                </div>
            </div>

            <div className="hidden md:flex">
                <div className="absolute bottom-0 w-screen">
                    <Footer />
                </div>
            </div>

            <div className="flex md:hidden">
                <div className="w-screen">
                    <Footer />
                </div>
            </div>
        </Page>
    );
};

export default ComingSoon;
