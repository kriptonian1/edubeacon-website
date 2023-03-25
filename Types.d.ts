import { AboutProps } from '@/components/courses/About';
import { HeroProps } from '@/components/courses/Hero';
import { InstructorProps } from '@/components/courses/Instructor';
import { SyllabusProps } from '@/components/courses/Syllabus';

export default interface Course {
    hero: HeroProps;
    about: AboutProps;
    syllabus: SyllabusProps;
    instructor: InstructorProps;
    
}
