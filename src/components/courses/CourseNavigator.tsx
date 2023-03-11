import React from 'react';
import Link from 'next/link';

const CourseNavigator = () => {
    return (
        <div className={'flex gap-x-10 md:w-[80vw] text-white mx-auto text-xl px-5'}>
            <Link href={'#about'}>About</Link>
            <Link href={'#syllabus'}>Syllabus</Link>
            <Link href={'#instructor'}>Instructor</Link>
        </div>
    );
};

export default CourseNavigator;
