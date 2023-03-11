import { ComaDown, ComaUp } from '@/components/common/assets';
import Page from '@/components/common/Page';
import CourseBox from '@/components/courses/CourseBox';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';

const Courses = () => {
    return (
        <Page>
            <div className="relative">
                <div className={'w-[100vw] absolute z-[-10]'}>
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
                    <div className=" translate-x-[-1rem] translate-y-[-0.5rem] ">
                        <ComaUp />
                    </div>
                    <span className="z-[20]">Live Courses</span>
                    <div className="right-0 translate-x-[1rem] translate-y-[1.5rem] ">
                        <ComaDown />
                    </div>
                </div>
                <div className="ml-[7vw] mr-[7vw] justify-items-center inline-grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-2 ">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                        return (
                            <div key={index} >
                                <CourseBox key={index} />
                            </div>
                        );
                    })}
                    {/* <CourseBox /> */}
                </div>
            </div>
            <Footer />
        </Page>
    );
};

export default Courses;
