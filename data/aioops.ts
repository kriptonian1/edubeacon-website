import Course from "../Types";
import {  AioopsMain, InstructorImg } from "./assets";

const aioops:Course = 
    {
        hero: {
            title: 'AI OOPS',
            subtitle: 'Learn about the fundamentals of artificial intelligence and object-oriented programming from best tech industrialist.',
            offeredBy: 'This course is offered by GetSmarter, an EduBeacon partner',
            courseImage: AioopsMain,
            duration: {
                total: '6 weeks',
                weekly: '5–8 hours per week',
            },
            type: {
                title: 'Self-paced',
                description: 'Progress at your own speed',
            },
            cost: {
                amount: 'Free',
                description: 'Optional upgrade available',
            },
        },
        about: {
            duration: '6 weeks',
            about:
                'AI stands for artificial intelligence, which is the simulation of human intelligence processes by machines, especially computer systems. OOPs stands for object-oriented programming, which is a programming paradigm that uses objects, which are instances of classes, to represent and manipulate data.\n' +
                '\n' +
                'The course is typically designed for students or professionals who want to build a career in the field of AI or software development. The course can be offered in various formats, such as online, in-person, or a combination of both. The duration of the course can vary depending on the depth and complexity of the topics covered.\n' +
                '\n' +
                'By completing an AI and OOPs course, you will gain a comprehensive understanding of the fundamentals of AI and OOPs, and learn how to apply them to real-world problems. This knowledge can help you build a strong foundation for a successful career in various industries, including technology, healthcare, finance, and more.\n' +
                '\n' +
                'Upon completion of the course, students should be able to apply their skills and knowledge to solve real-world problems in a variety of fields, including business, healthcare, finance, and science. They may also be well-positioned for careers in AI Oops, data analytics, or related fields.',
        },
        syllabus: {
            chapters: [
                'Introduction to AI and its various applications',
                'Basic concepts of OOPs like classes, objects, inheritance, and polymorphism',
                'Data structures and algorithms used in AI',
                'Machine learning concepts and techniques',
                'Neural networks and deep learning',
                'Natural language processing',
                'Image processing and computer vision',
                'Ethics and social implications of AI',
            ],
        },
        instructor: {
            name: 'Pavlos Protopapas',
            designation: 'Scientific Program Director',
            image: InstructorImg,
            about: 'Pavlos Protopapas is the Scientific Program Director of the Institute for Applied Computational Science(IACS) at the Harvard John A. Paulson School of Engineering and Applied Sciences. He has had a long and distinguished career as a scientist and data science educator, and currently teaches the CS109 course series for basic and advanced data science at Harvard University, as well as the capstone course for the IACS master’s program at Harvard.',
        },
    }
;
export default aioops;
