import Page from '@/components/common/Page';
import About, { AboutProps } from '@/components/courses/About';
import Hero, { HeroProps } from '@/components/courses/Hero';
import { InstructorProps } from '@/components/courses/Instructor';
import Syllabus, { SyllabusProps } from '@/components/courses/Syllabus';
import { Course } from '@/components/courses/assets/Hero';
import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { useRouter } from 'next/router';
import dataScience from '../../../data/datascience';
import aioops from '../../../data/aioops';
import pmm from '../../../data/pmm';
import dmfb from '../../../data/dmfb';
import Testimonials, { TestimonialProps } from '@/components/courses/Testimonials';
import ContactBox from '@/components/contact/ContactBox';
import CourseReachOut from '@/components/common/CourseReachOut';

type Course = {
    hero: HeroProps;
    syllabus: SyllabusProps;
    instructor: InstructorProps;
    about: AboutProps;
    testimonials: TestimonialProps;
};

const fetchCourseDetails = (slug: string | string[] | undefined): Course | null => {
    let course: Course | null = null;
    switch (slug) {
        case 'data-science':
            course = dataScience;
            break;
        case 'ai-ops':
            course = aioops;
            break;
        case 'performance-marketing-mastery':
            course = pmm;
            break;
        case 'digital-marketing-for-beginners':
            course = dmfb;
            break;
    }
    return course;
};

const CourseDetail = () => {
    const router = useRouter();
    const { slug } = router.query;

    let course: Course | null = fetchCourseDetails(slug);

    return (
        <Page>
            <Head>
                <title>{course?.hero.title} | EduBeacon</title>
            </Head>
            <Navbar />
            {course && (
                <>
                    <Hero data={course.hero} />
                    <About data={course.about} />
                    <Syllabus data={course.syllabus} />
                    {/* <Instructor data={course.instructor} /> */}
                    {course.testimonials.length !== 0 && <Testimonials data={course.testimonials} />}
                </>
            )}

            <div></div>

            <div className='justify-center items-start md:mx-[38%] m-[4vw]'>
                <div className='text-white text-3xl mb-6'>
                    Reach out to us for any queries
                </div>
                <CourseReachOut />
            </div>

            <Footer />
        </Page>
    );
};

export default CourseDetail;
