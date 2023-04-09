import Course from "../Types";
import { DMFB, InstructorImg } from "./assets";
import { testimonials } from './testimonials';

const dmfb:Course =
    {
        hero: {
            title: 'Digital Marketing for Beginners',
            subtitle: 'Learn how to create successful digital marketing campaigns, improve your LinkedIn presence, and generate leads for your business.',
            offeredBy: 'EduBeacon',
            courseImage: DMFB,
            duration: {
                total: '6 weeks',
                weekly: '5–8 hours per week',
            },
            type: {
                title: 'Online live virtual classroom',
                description: 'Online live virtual classroom \n Live Mentorship',
            },
            cost: {
                amount: 'Get in touch with us',
                description: 'Optional upgrade available',
            },
        },
        about: {
            duration: '6 weeks',
            about: ''
        },
        syllabus: {
            chapters: [
                'Overview of digital marketing and its importance',
                'Types of digital marketing channels',
                'The digital marketing landscape',
                'Trends in digital marketing',
                'Understanding LinkedIn Marketing',
                'Overview of LinkedIn and its benefits for businesses',
                'Types of LinkedIn Marketing',
                'Best practices for creating a LinkedIn marketing strategy',
                'LinkedIn Marketing metrics',
                'Content Marketing',
                'What is content marketing',
                'Developing a content marketing strategy',
                'Types of content marketing',
                'Creating high-quality content',
                'Social Media Marketing',
                'Overview of social media marketing',
                'Social media channels',
                'Best practices for social media marketing',
                'Advertising on social media',
                'Email Marketing',
                'Overview of email marketing',
                'Types of email marketing',
                'Creating an email marketing strategy',
                'Best practices for email marketing',
                'Analytics and Optimization',
                'Overview of digital marketing analytics',
                'Key metrics to track',
                'Using analytics to optimize campaigns',
                'Tools for digital marketing analytics',
                'Bonus Items:',
                'Canva Design Mastery – Presentations, Pitch Decks, Social Media Designs, and Videos.',
                'Linkedin Account Optimization',
                'Opt-in Resume Building Personal Session',
                'Course Delivery:',
                'The course will be delivered online through a live virtual classroom.',
                'The course will consist of six weeks of 1-hour sessions, 4 days a week.',
                'Each session will include a mix of lecture, group discussion, and hands-on activities.',
                'Participants will be expected to complete assignments and projects outside of class time.',
                'Participants will receive a certificate of completion upon finishing the course.',
                'Prerequisites:',
                'Basic computer skills and access to a computer with internet access.',
                'Basic knowledge of social media platforms and marketing terminology.',
                'LinkedIn account [optional].',
                'Assessment:',
                'Assignments and projects will be graded on a pass/fail basis.',
                'Participants will be expected to complete all assignments and projects to receive a certificate of completion.',
            ],
        },
        instructor: {
            name: 'Rajesh Thakur',
            designation: 'Scientific Program Director',
            image: InstructorImg,
            about: 'Rajesh Thakur is the Scientific Program Director of the Institute for Applied Computational Science(IACS) at the Harvard John A. Paulson School of Engineering and Applied Sciences. He has had a long and distinguished career as a scientist and data science educator, and currently teaches the CS109 course series for basic and advanced data science at Harvard University, as well as the capstone course for the IACS master’s program at Harvard.',
        },
        testimonials: testimonials.filter(t => t.position === 'Digital Marketing')
    }
;
export default dmfb;
