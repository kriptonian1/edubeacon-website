import { AboutProps } from '@/components/courses/About';
import { HeroProps } from '@/components/courses/Hero';
import { InstructorProps } from '@/components/courses/Instructor';
import { SyllabusProps } from '@/components/courses/Syllabus';
import { TestimonialProps } from '@/components/courses/Testimonials';

export default interface Course {
    hero: HeroProps;
    about: AboutProps;
    syllabus: SyllabusProps;
    instructor: InstructorProps;
    testimonials: TestimonialProps;
}
