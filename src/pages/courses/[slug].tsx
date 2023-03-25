import Page from '@/components/common/Page';
import About, { AboutProps } from '@/components/courses/About';
import Hero, { HeroProps } from '@/components/courses/Hero';
import Instructor, { InstructorProps } from '@/components/courses/Instructor';
import Syllabus, { SyllabusProps } from '@/components/courses/Syllabus';
import { Course } from '@/components/courses/assets/Hero';
import { Guy } from '@/components/courses/assets/Instructor';
import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { useRouter } from 'next/router';
import dataScience from '../../../data/datascience';
import dynamic from 'next/dynamic';
import aioops from '../../../data/aioops';

type Course = {
    hero: HeroProps;
    syllabus: SyllabusProps;
    instructor: InstructorProps;
    about: AboutProps;
};

const CourseDetail = () => {
    const router = useRouter();
    const { slug } = router.query;

    let course: Course = {
        hero: {
            title: '',
            subtitle: '',
            offeredBy: '',
            courseImage: Course,
            duration: {
                total: '',
                weekly: '',
            },
            type: {
                title: '',
                description: '',
            },
            cost: {
                amount: '',
                description: '',
            },
        },
        syllabus: {
            chapters: [],
        },
        instructor: {
            name: '',
            designation: '',
            image: Guy,
            about: '',
        },
        about: {
            duration: '',
            about: '',
        },
    };

    if (slug === 'data-science') {
        course = dataScience;
    }
    if (slug === 'ai-oops') {
        course = aioops;
    }

    console.log(course);

    console.log(course);

    return (
        <Page>
            <Head>
                <title>Course-detail | Edubeacon</title>
            </Head>
            <Navbar />
            {course && (
                <>
                    <Hero data={course.hero} />
                    <About data={course.about} />
                    <Syllabus data={course.syllabus} />
                    <Instructor data={course.instructor} />
                </>
            )}

            <Footer />
        </Page>
    );
};

export default CourseDetail;
