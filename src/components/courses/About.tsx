import React from 'react';

export type AboutProps = {
    duration: string;
    about: string;
};

const About: React.FC<{ data: AboutProps }> = props => {
    return (
        <div className={'lg:w-[70vw] mx-auto flex flex-col gap-y-5 text-white px-5'} id={'about'}>
            <h1 className={'text-3xl font-medium border-l-4 border-l-navyBlue pl-5'}>About the course</h1>
            <div className={'flex text-[#C8C8DC]'}>
                <div className={'font-bold text-white'}>Duration</div>:
                <div className={'ml-2'}>{props.data.duration}</div> (excluding orientation)
            </div>
            <div className={'text-[#C8C8DC] whitespace-pre-wrap'}>{props.data.about}</div>
        </div>
    );
};

export default About;
