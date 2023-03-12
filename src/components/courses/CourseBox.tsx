import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BlueButton from '../common/BlueButton';
import sampleImage from './assets/sampleImage.png';

const CourseBox = () => {
    return (
        <div className=" bg-white/20 md:w-[20rem] pb-5  rounded-2xl">
            <Image className="rounded-t-2xl w-full h-auto" width="0" height="0" src={sampleImage} alt="course name" />

            <div className="m-4">
                <div className="font-bold text-xl pb-4 text-white">CS50s Introduction to Computer Science</div>

                <div className="text-white">by Ayush Jain</div>
                <div className="flex justify-center mt-5">
                    <Link href="/coursedetail">
                        <BlueButton className='!rounded-full'>Browse Courses</BlueButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseBox;
