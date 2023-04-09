import Course from "../Types";
import {  DatascienceMain, InstructorImg } from "./assets";
import {testimonials} from './testimonials';

const dataScience: Course =
    {
        hero: {
            title: 'Data Science',
            subtitle: 'Learn about the world of data science firsthand from real data scientists.',
            offeredBy: 'EduBeacon',
            courseImage: DatascienceMain,
            duration: {
                total: '6 weeks',
                weekly: '5–8 hours per week',
            },
            type: {
                title: '1on1 Live Mentorship sessions',
                description: 'Online live virtual classroom \n Live Mentorship',
            },
            cost: {
                amount: 'Free',
                description: 'Optional upgrade available',
            },
        },
        about: {
            duration: '6 weeks',
            about:
                'Data Science is a rapidly growing field that leverages statistical and computational methods to extract insights and knowledge from big data sets. A comprehensive Data Science course is designed to equip students with the knowledge and skills required to work with data and derive meaningful insights from it, while also preparing them for exciting career opportunities in fields such as AI and machine learning.' +
                '\n\n'+
                'This hands-on course covers essential topics such as data collection, data cleaning, statistical inference, machine learning, data visualization, and communication, using popular tools such as Python, R, SQL, and Tableau. Students have opportunities to work on real-world projects, participate in competitions, and collaborate with industry partners to gain practical experience.' +
                '\n\n' +
                'Whether you have a strong background in mathematics, statistics, computer science, or a related field, or little to no prior experience, this course is tailored to your needs. You\'ll learn how to analyze and manipulate complex data sets, build predictive models, and create engaging visualizations to communicate your findings.' +
                '\n\n' +
                'Upon completion of the course, you\'ll be well-prepared to solve real-world problems in diverse fields, including business, healthcare, finance, and science, and be in a prime position to embark on a rewarding career in data science, data analytics, or business intelligence. Don\'t miss out on this opportunity to gain a competitive edge in the dynamic field of Data Science!',
        },
        syllabus: {
            chapters: [
                'Python',
                'Data Science with Python',
                'Tableau',
                'Machine Learning',
                'Data science Capstone'
            ],
        },
        instructor: {
            name: 'Rajesh Thakur',
            designation: 'Scientific Program Director',
            image: InstructorImg,
            about: 'Rajesh Thakur is the Scientific Program Director of the Institute for Applied Computational Science(IACS) at the Harvard John A. Paulson School of Engineering and Applied Sciences. He has had a long and distinguished career as a scientist and data science educator, and currently teaches the CS109 course series for basic and advanced data science at Harvard University, as well as the capstone course for the IACS master’s program at Harvard.',
        },
        testimonials: testimonials.filter(t => t.position === 'Data Science')
    }
;
export default dataScience;
