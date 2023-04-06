import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BlueButton from '../common/BlueButton';
import sampleImage from './assets/sampleImage.png';

interface CourseBoxProps {
    data: {
        id: number;
        name: string;
        slug: string;
        image: any;
        instructor: string;
    };
}

const CourseBox = ({ data }: CourseBoxProps) => {
    return (
        <div className=" bg-white/20 md:w-[20rem] pb-5 rounded-2xl h-full">
            <Image
                priority={true}
                className="rounded-t-2xl w-full h-auto"
                width="0"
                height="0"
                src={data.image}
                alt="course name"
            />

            <div className="m-4 flex flex-col justify-between">
                <div className="font-bold text-xl pb-4 text-white">{data.name}</div>

                <div>
                    {/* <div className="text-white">by {data.instructor}</div> */}
                    <div className="flex justify-center mt-5">
                        <Link href={`/courses/${data.slug}`}>
                            <BlueButton className="!rounded-full">Browse Courses</BlueButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseBox;
