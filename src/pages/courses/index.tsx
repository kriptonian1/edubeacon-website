import { ComaDown, ComaUp } from '@/components/common/assets';
import Page from '@/components/common/Page';
import CourseBox from '@/components/courses/CourseBox';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import Head from 'next/head';
import { AioopsMain, DatascienceMain } from '../../../data/assets';

const courses = [
    {
        id: 1,
        name: 'Data Science',
        slug: 'data-science',
        image: DatascienceMain,
        instructor: "Rajesh Thakur"
    },
    {
        id: 2,
        name: 'AI Ops',
        slug: 'ai-ops',
        image: AioopsMain,
        instructor: "Rajesh Thakur"
    },
];

const Courses = () => {
    return (
        <Page>
            <Head>
                <title>Courses | Edubeacon</title>
                <meta property="og:image" content="https://i.postimg.cc/tCXd3Tfg/thumbnail.png"></meta>
                <meta property="twitter:image" content="https://i.postimg.cc/tCXd3Tfg/thumbnail.png"></meta>
            </Head>
            <div className="">
                <div className={'w-[100vw] absolute z-[-100rem]'}>
                    <div
                        className={
                            'relative -translate-y-[150px] w-[100vw] mx-auto h-[609px] rounded-full bg-gradient-radial from-[#057CF2]/[30%] to-transparent blur-[250px]'
                        }
                    />
                </div>
            </div>

            <Navbar />
            <div className="flex flex-col mt-[20vh]">
                {/* Title */}
                <div className="flex relative text-5xl text-white ml-[7vw] mb-10">
                    <div className=" translate-x-[-1rem] hidden md:flex translate-y-[-0.5rem] ">
                        <ComaUp />
                    </div>
                    <span className="z-[20]">Live Courses</span>
                    <div className="right-0 translate-x-[1rem] hidden md:flex translate-y-[1.5rem] ">
                        <ComaDown />
                    </div>
                </div>
                <div className="ml-[7vw] mr-[7vw] justify-items-center relative z-[10rem] inline-grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-2 ">
                    {courses.map((item, index) => {
                        return (
                            <div key={index}>
                                <CourseBox key={index} data={item}/>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </Page>
    );
};

export default Courses;
