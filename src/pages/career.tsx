import Page from '@/components/common/Page';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import Head from 'next/head';
import BlueButton from '@/components/common/BlueButton';
import Link from 'next/link';

const Career = () => {
    return (
        <Page>
            <Head>
                <title>Career | EduBeacon</title>
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
                <h1 className=" text-2xl max-w-2xl text-white text-center">Career at EduBeacon</h1>
                <h2 className=" text-xl max-w-2xl text-white text-justify p-6">
                    Welcome to the career page for our EdTech firm! We are a group of dedicated people who believe in
                    the transforming potential of education. Our purpose is to give students of all ages the skills and
                    resources they need to reach their greatest potential. <br />
                    <br />
                    As a member of our team, you will be able towork on cutting-edge technology and creative solutions
                    that will make a difference in the world. You&apos;ll be part of a collaborative workplace that
                    supports development and learning whether you&apos;re a software developer, customer service
                    professional, marketing, or part of our business team.
                    <br />
                    <br />
                    We believe in investing in the growth of our workers, which is why we provide on-going training and
                    professional development opportunities. We also provide fair pay, complete benefits, and a flexible
                    work schedule that encourages a good work-life balance.
                    <br />
                    <br />
                    Our EdTech firm is dedicated to making a positive difference in the lives of students all around the
                    world. If you&apos;re seeking for a rewarding and challenging career, we invite you to check through
                    our world. If you&apos;re seeking for a rewarding and challenging career, we invite you to check
                    through our job listings and apply immediately. We look forward to hearing from you and assisting
                    you in achieving your professional objectives.
                </h2>

                <Link href={'/'} className="justify-center">
                    <BlueButton>Return Home</BlueButton>
                </Link>
            </div>
            <Footer />
        </Page>
    );
};

export default Career;
