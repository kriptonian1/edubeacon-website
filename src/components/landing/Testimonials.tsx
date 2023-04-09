import React from 'react';
import lady1 from './assets/Testimonials/lady1.png';
import lady2 from './assets/Testimonials/lady2.png';
import man from './assets/Testimonials/man.png';
import Image from 'next/image';
import { Star } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';

const data = [
    {
        name: 'Ayush M',
        rating: 4,
        position: 'Digital Marketing',
        comments: 'It was a great experience for me for learning digital marketing, the faculty and the staff are very supportive and have helped me a lot in gaining all the knowledge about the courses and also Kiran ma\'am is a great teacher for tally as she makes the concepts easier and helps when needed.',
        image: lady1,
    },
    {
        name: 'Haneesha Kandala',
        rating: 3,
        position: 'Digital Marketing',
        comments: 'Very good training material (real scenario projects and examples, not just bookish knowledge), brilliant trainers and Management.',
        image: lady1,
    },
    {
        name: 'Anchit Sharma',
        rating: 5,
        position: 'Digital Marketing',
        comments: 'I took the digital marketing and data science course and I definitely recommend this places for anyone looking for these programs.',
        image: man,
    },
    {
        name: 'Rohit Vadapalli',
        rating: 4,
        position: 'Digital Marketing',
        comments: 'Industry oriented training was provided when I learnt digital marketing here, was able to even work on live projects. New company or no money.',
        image: lady2,
    },
    {
        name: 'Moukthika K R',
        rating: 4,
        position: 'Digital Marketing',
        comments: 'I was looking for best digital marketing course and I came across EduBeacon from one of my friends. They have well experienced trainers who helped me lot, each topic is well explained.',
        image: man,
    },

    {
        name: 'Ankur Phillips',
        rating: 4,
        position: 'Digital Marketing',
        comments: 'I am totally satisfied with my choice. The Teaching method of my teacher ‘Kiran’ was Excellent. She is a very good teacher. She explains all the points in very simple language. Even any student had any doubt, she explained the point again and again. Whatever I learnt from here was, Excellent.',
        image: lady1,
    },
    {
        name: 'Ravi Kumar',
        rating: 3,
        position: 'Data Science',
        comments: 'Am Ravi from Bangalore, I completed Data Science course with EduBeacon. My Tutor is Mr. Rajesh Sir. He taught very well even theory and practical in depth knowledge. Now I got a job Apollo Hospital as a Data Scientist. Am very much thankful to them.',
        image: lady1,
    },
    {
        name: 'Gayathri',
        rating: 5,
        position: 'Data Science',
        comments: 'I had taken a Data Science course here. Trainers are really superb and everything is covered here which is required to become a successful data scientist. I would like to recommend those who want to step into data science.',
        image: man,
    },
    {
        name: 'Akshaya Kumar',
        rating: 4,
        position: 'Data Science',
        comments: 'My experience has been excellent. Moreover, whether you have a technical or non-technical background, I believe you will be able to understand the concepts taught by the professors, who, in my experience, are quite helpful and courteous. Even though the application is just a month old, it is already excellent. And I\'m looking forward to the remainder of my time here as a student. Hence, if someone is considering shifting careers to data science, I strongly advise them to do it; they will not be disappointed!!',
        image: lady2,
    },
    {
        name: 'Shashank K',
        rating: 4,
        position: 'Data Science',
        comments: 'I joined in the Advanced Data Science Program in January and just finished the Python module, and I have to say it has been an incredible experience thus far. The instructor is incredibly knowledgeable and always eager to help when I have concerns. The course content is well-organized and simple to understand. Every day, I feel like I\'m learning something new and developing my talents. Overall, I definitely suggest this course to anyone trying to learn Python. It\'s been a fantastic investment in my education, and I\'m thrilled to see what I can do with my new abilities.',
        image: man,
    },

    {
        name: 'Prasad M',
        rating: 4,
        position: 'Data Science',
        comments: 'A good location to learn data science, AI, and machine learning. Trainers are extremely informed and very supportive in teaching the ideas. Data science training is built in such a manner that even a newbie may study every topic step by step, since the course is begun from scratch. The finest part of learning Data Science is their clarity on the programme, which is industry driven. Faculty are the finest in the business, with a wealth of knowledge. The support is excellent, and there is no possibility of getting lost along the route.',
        image: lady1,
    },
    {
        name: 'Meghana S',
        rating: 3,
        position: 'Data Science',
        comments: 'I was initially hesitant to enroll in a LIVE online course, but after speaking with their counselling faculty, all of my concerns were alleviated. Absolutely, the training is up to date, with industry specialists instructing you. My course\'s case studies are real-time, which I appreciate.',
        image: lady1,
    }
];

const Testimonials = () => {
    return (
        <div className={'flex flex-col gap-y-16 items-center justify-center text-white z-10 pb-[200px]'}>
            <div className={'flex flex-col gap-y-3 text-center'}>
                <div className={'text-4xl font-medium'}>Graduate&apos;s Testimonials</div>
                <div className={'text-lg text-[#B4B4B4]'}>Let’s see what our happy graduates say</div>
            </div>
            <div className={'flex gap-12  flex-row items-center justify-center'}>
                <Swiper
                    className="mySwiper flex gap-12  flex-row items-center justify-center"
                    spaceBetween={1}
                    slidesPerView={5}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={'flex gap-x-4 rounded-lg bg-white/[15%] text-left p-5 w-[10rem] md:w-[30rem]'}>
                                <div className={'flex'}>
                                    <div className={'min-w-[80px] h-[80px] bg-lightBlue rounded-full z-0 relative'} />
                                    <Image
                                        src={item.image}
                                        alt={''}
                                        className={'relative right-[70px] z-10 min-w-[80px] h-[80px]'}
                                    />
                                </div>
                                <div className={'flex flex-col gap-y-3 flex-grow'}>
                                    <div className={'text-xl font-medium'}>{item.name}</div>
                                    <div className={'text-sm text-[#B4B4B4]'}>{item.position}</div>
                                    <div className={' flex gap-x-1'}>
                                        {Array.from(Array(5).keys()).map((n) => (
                                            <Star key={n} width="16" height="16" className={`${item.rating > n ? 'text-[#51A9FF]' : 'text-white'}`} />
                                        ))}
                                    </div>

                                    <div>{item.comments}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
