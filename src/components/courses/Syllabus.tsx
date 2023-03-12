import React from 'react';

export type SyllabusProps = {
    chapters: string[];
};

const Syllabus: React.FC<{ data: SyllabusProps }> = props => {
    return (
        <div className={'w-full lg:w-[80vw] mx-auto flex flex-col gap-y-5 text-white z-10 px-5'} id={'syllabus'}>
            <h1 className={'text-3xl font-medium border-l-4 border-l-navyBlue pl-5'}>Syllabus</h1>
            <div className={'font-semibold'}>Course outline:</div>
            <div className={'text-[#C8C8DC] flex flex-col gap-y-2 pl-10'}>
                {props.data.chapters.map((chapter, index) => (
                    <div key={index} className={'flex gap-x-2'}>
                        <div>{index + 1}.</div>
                        <div>{chapter}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Syllabus;
