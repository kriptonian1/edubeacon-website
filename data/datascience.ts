import Course from "../Types";
import {  DatascienceMain, InstructorImg } from "./assets";

const dataScience:Course = 
    {
        hero: {
            title: 'Data Science',
            subtitle: 'Learn about the world of data science first-hand from real data scientists.',
            offeredBy: 'This course is offered by GetSmarter, an EduBeacon partner',
            courseImage: DatascienceMain,
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
                'Data Science is an interdisciplinary field that involves the use of statistical and computational methods to extract insights and knowledge from large and complex data sets. A Data Science course is designed to equip students with the knowledge and skills required to work with data and derive meaningful insights from it.\n' +
                '\n' +
                'The course typically covers a range of topics including data collection, data cleaning, data exploration, statistical inference, machine learning, data visualization, and data communication. Students learn how to use tools and techniques such as Python, R, SQL, and Tableau to manipulate and analyze data, build predictive models, and create visualizations to communicate their findings.\n' +
                'Data Science courses are often designed for individuals with a strong background in mathematics, statistics, computer science, or a related field. However, some courses are also designed to cater to students with little to no prior experience in these areas.\n' +
                '\n' +
                'The course may be offered in different formats such as traditional classroom-based learning, online learning, or a combination of both. Some courses may also offer opportunities for students to work on real-world projects, participate in competitions, or collaborate with industry partners.\n' +
                '\n' +
                'Upon completion of the course, students should be able to apply their skills and knowledge to solve real-world problems in a variety of fields, including business, healthcare, finance, and science. They may also be well-positioned for careers in data science, data analytics, business intelligence, or related fields.',
        },
        syllabus: {
            chapters: [
                'Linear Regression',
                'Multiple and Polynomial Regression',
                'Model Selection and Cross-Validation',
                'Bias, Variance, and Hyperparameters',
                'Classification and Logistic Regression',
                'Multi-logstic Regression and Missingness',
                'Bootstrap, Confidence Intervals, and Hypothesis Testing',
                'Capstone Project',
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
export default dataScience;
