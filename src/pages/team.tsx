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
                <title>Team | EduBeacon</title>
            </Head>
            <div className={'w-[100vw] absolute '}>
                <div
                    className={
                        'relative -translate-y-[150px] w-[100vw] mx-auto h-[609px] rounded-full bg-gradient-radial from-[#057CF2]/[30%] to-transparent blur-[250px]'
                    }
                />
            </div>
            <Navbar />
            <div className="flex flex-col gap-y-[5rem] justify-center items-center mt-[20vh] mb-[10vh] z-20">
                <h1 className=" text-2xl max-w-2xl text-white text-center">Team at EduBeacon</h1>
                <h2 className=" text-xl max-w-2xl text-white text-justify p-6">
                    Our team at EduBeacon is made up of enthusiastic individuals that are devoted to changing the world
                    of education. We believe in the power of technology to improve learning experiences and make
                    education more accessible to everyone.
                    <br />
                    <br />
                    Our team is made up of specialists in education, technology, and business, each of whom brings a
                    distinct perspective and skill set to the table. We encourage cooperation, creativity, and a
                    development attitude, and we work hard to foster a happy and supportive workplace atmosphere.
                    <br />
                    <br />
                    Our staff is dedicated to providing our clients with outstanding goods and services, and we are
                    continually trying to enhance and evolve our offerings. We are committed to offering the finest
                    available solutions for our clients&#39; educational needs, with an emphasis on customer happiness and
                    user experience.
                    <br />
                    <br />
                    At EduBeacon, we feel that our staff is our most valuable asset, and we are happy to have such a
                    brilliant and devoted group of people working together to alter education for the better.
                </h2>

                <Link href={'/'} className="justify-center">
                    <BlueButton>Return Home</BlueButton>
                </Link>
            </div>
            <Footer />
        </Page>
    );
};

export default ComingSoon;
