import React from 'react';

const details = [
    {
        header: '100+',
        body: 'Successfully Placed',
    },
    {
        header: '100%',
        body: 'Successful Placement',
    },
    {
        header: '20+',
        body: 'Tie-up Companies',
    },
];

const Skills = () => {
    return (
        <div className={'h-[50vh] flex flex-col gap-y-10 items-center justify-center text-white text-center'}>
            <h1 className={'font-bold text-4xl'}>The Skills You Need For The Career You Want</h1>
            <h3 className={'w-[60vw] font-medium text-lg relative z-10'}>
                Acquire the skills you need to succeed in today’s job market. Edubeacon is an online learning platform
                that helps students gain practical, real-world experience with digital marketing and data science. We
                offer courses and certifications that are designed to help professionals advance their careers in just a
                few hours per week.
            </h3>
            <div
                className={
                    'flex flex-col md:flex-row gap-x-10 w-[80vw] p-10 border-[2px] border-lightBlue rounded-lg bg-[#DBE5FF]/[15%] justify-center items-center relative z-10'
                }
            >
                {details.map((detail, index) => (
                    <div key={index} className={"flex"}>
                        <div  className={'flex flex-col gap-x-10 gap-y-6 mx-10'}>
                            <div className={'font-bold text-3xl'}>{detail.header}</div>
                            <div className={'text-xl font-medium'}>{detail.body}</div>
                        </div>
                        {index !== details.length - 1 && <div className={'w-[100px] h-[2px] md:h-[100px] md:w-[2px] bg-white'}></div>}
                    </div>
                ))}
            </div>
            <div
                className={
                    'absolute w-[90vw] translate-y-20 mx-auto h-[292px] rounded-full bg-gradient-radial from-[#057CF2]/[30%] to-transparent blur-[250px]'
                }
            />
        </div>
    );
};

export default Skills;
