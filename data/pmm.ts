import Course from "../Types";
import {  PMM, InstructorImg } from "./assets";

const pmm:Course =
    {
        hero: {
            title: 'Performance Marketing Mastery',
            subtitle: 'Master the art of Performance Marketing with our comprehensive course and boost your online business success.',
            offeredBy: 'EduBeacon',
            courseImage: PMM,
            duration: {
                total: '8 weeks',
                weekly: '5–8 hours per week',
            },
            type: {
                title: 'Online Course',
                description: 'Study at your own pace, from anywhere in the world.',
            },
            cost: {
                amount: 'Get in touch with us',
                description: 'Optional upgrade available',
            },
        },
        about: {
            duration: '8 weeks',
            about:
                '• Introduction to Performance Marketing, how it works and its benefits' +
                '\n' +
                '• Types of Performance Marketing and how to choose the right platform' +
                '\n' +
                '• Creating high-converting landing pages and understanding Buyer Personas' +
                '\n' +
                '• Funnel creation and Google Ads account setup' +
                '\n' +
                '• Technical terms, Google Ads structure, and campaign setup' +
                '\n' +
                '• Targeting and Audience, Bidding strategies, and Keyword research' +
                '\n' +
                '• Search Ad extension, Ad rank and Quality score, Conversion setup, and Remarketing campaigns' +
                '\n' +
                '• Shopping Ads and Google Merchant Center' +
                '\n' +
                '• Youtube video ads and Reporting' +
                '\n' +
                '• Advanced optimization techniques for Shopping Ads and Search Ads',
        },
        syllabus: {
            chapters: [
                'Introduction of Performance Marketing',
                'How it works and its Benefits',
                'Types of Performance Marketing',
                'Choosing the right Platform',
                'High-converting Landing Page Creation',
                'Understanding Buyer Personas',
                'Funnel Creation',
                'Google Ads Account Setup',
                'Technical Terms and Google Ads Structure',
                'Campaign Setup',
                'Targeting and Audience',
                'Bidding Strategies',
                'Keyword Research, Keywords type, Negative Keywords',
                'Search Ad Extension',
                'Ad Rank and Quality Score',
                'Conversion Setup',
                'Remarketing Campaigns',
                'Shopping Ads',
                'Google Merchant Center',
                'Youtube Video Ads',
                'Reporting',
                'Advanced Optimization Techniques for Shopping Ads and Search Ads'
            ],
        },
        instructor: {
            name: 'Rajesh Thakur',
            designation: 'Scientific Program Director',
            image: InstructorImg,
            about: 'Rajesh Thakur is the Scientific Program Director of the Institute for Applied Computational Science(IACS) at the Harvard John A. Paulson School of Engineering and Applied Sciences. He has had a long and distinguished career as a scientist and data science educator, and currently teaches the CS109 course series for basic and advanced data science at Harvard University, as well as the capstone course for the IACS master’s program at Harvard.',
        },
        testimonials: []
    }
;
export default pmm;
