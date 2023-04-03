import Course from "../Types";
import { DMFB, InstructorImg } from "./assets";

const dmfb:Course =
    {
        hero: {
            title: 'Digital Marketing for Beginners',
            subtitle: 'Learn how to create successful digital marketing campaigns, improve your LinkedIn presence, and generate leads for your business.',
            offeredBy: 'This course is offered by GetSmarter, an EduBeacon partner',
            courseImage: DMFB,
            duration: {
                total: '6 weeks',
                weekly: '5–8 hours per week',
            },
            type: {
                title: 'Online live virtual classroom',
                description: '1-hour sessions, 4 days a week',
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
                'Introduction to Digital Marketing',
            ],
        },
        instructor: {
            name: 'Rajesh Thakur',
            designation: 'Scientific Program Director',
            image: InstructorImg,
            about: 'Rajesh Thakur is the Scientific Program Director of the Institute for Applied Computational Science(IACS) at the Harvard John A. Paulson School of Engineering and Applied Sciences. He has had a long and distinguished career as a scientist and data science educator, and currently teaches the CS109 course series for basic and advanced data science at Harvard University, as well as the capstone course for the IACS master’s program at Harvard.',
        },
    }
;
export default dmfb;
