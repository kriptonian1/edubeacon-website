import Page from '@/components/common/Page';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import Head from 'next/head';
import BlueButton from '@/components/common/BlueButton';
import Link from 'next/link';

const ComingSoon = () => {
    return (
        <Page>
            <Head>
                <title>Coming Soon | EduBeacon</title>
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

                <Link href={'/'} className="justify-center">
                    <BlueButton>Return Home</BlueButton>
                </Link>
            </div>
            <Footer />
        </Page>
    );
};

export default ComingSoon;
