import Course from "../Types";
import {  AioopsMain, InstructorImg } from "./assets";

const aioops:Course = 
    {
        hero: {
            title: 'AI OPS',
            subtitle: 'Join the AI Ops revolution and gain practical skills from experienced data scientists to unlock endless career opportunities.',
            offeredBy: 'EduBeacon',
            courseImage: AioopsMain,
            duration: {
                total: '16 weeks',
                weekly: '5–8 hours per week',
            },
            type: {
                title: '1on1 Live Mentorship sessions',
                description: 'Study your way, Study from anywhere, at any time',
            },
            cost: {
                amount: 'Free',
                description: 'Optional upgrade available',
            },
        },
        about: {
            duration: '16 weeks',
            about:
                '• Discover the exciting world of AI Ops' +
                '\n' +
                '• Learn from experienced data scientists who work in the field' +
                '\n' +
                '• Get hands-on experience with advanced tools and techniques used to solve complex problems' +
                '\n' +
                '• Gain valuable insights into this rapidly growing field' +
                '\n' +
                '• Unlock your potential and discover exciting career opportunities in AI Ops.',
        },
        syllabus: {
            chapters: [
                'Linux Foundation',
                'GIT Foundation',
                'Data Version Control',
                'ML Flow',
                'Kubernetes Flow',
                'TFX',
                'Kubeflow',
                'GitLab Foundation',
                'Digital Ocean',
                'AWS MLOps'
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
export default aioops;
