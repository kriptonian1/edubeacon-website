import React from 'react';
import Image from 'next/image';

export type InstructorProps = {
    name: string;
    designation: string;
    about: string;
    image: any;
};

const Instructor: React.FC<{ data: InstructorProps }> = props => {
    return (
        <div className={'lg:w-[80vw] mx-auto flex flex-col items-start gap-y-10 text-white px-5'} id={'instructor'}>
            <div className={'w-[100vw] absolute'}>
                <div
                    className={
                        'relative -translate-y-[200px] w-[100vw] h-[609px] rounded-full bg-gradient-radial from-[#057CF2]/[30%] to-transparent blur-[250px]'
                    }
                />
            </div>
            <h1 className={'text-3xl font-medium z-10 border-l-4 border-l-navyBlue pl-5'}>About the instructor</h1>
            <div className={'flex md:flex-row flex-col justify-center items-center gap-5 z-10'}>
                <div className={'flex flex-col gap-y-2 md:w-2/6 lg:w-1/6 items-center'}>
                    <Image className='rounded-full' src={props.data.image} alt={''} />
                    {/* <Image src={Instructor} alt={''} /> */}
                    <div className={'font-bold'}>{props.data.name}</div>
                    <div className={'text-[#C8C8DC]'}>{props.data.designation}</div>
                </div>
                <div className={'md:w-4/6 lg:w-5/6 text-[#C8C8DC] md:text-left text-center'}>{props.data.about}</div>
            </div>
        </div>
    );
};

export default Instructor;
