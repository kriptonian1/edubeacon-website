import Hero from '@/components/landing/Hero';
import Navbar from '@/components/navbar/Navbar';
import { Poppins } from 'next/font/google';
import Skills from '@/components/landing/Skills';
import WhyChoose from '@/components/landing/WhyChoose';
import Upskill from '@/components/landing/Upskill';
import FAQ from '@/components/landing/FAQ';
import Testimonials from '@/components/landing/Testimonials';
import Footer from '@/components/landing/Footer';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
});

export default function Home() {
    return (
        <div className={`bg-darkBlue ${poppins.className} flex flex-col gap-y-[80px]`}>
            <div className={'w-[100vw] absolute'}>
                <div
                    className={
                        'relative -translate-y-[150px] w-[1024px] mx-auto h-[609px] rounded-full bg-gradient-radial from-[#057CF2]/[30%] to-transparent blur-[250px]'
                    }
                />
            </div>
            <Navbar />
            <Hero />
            <Skills />
            <WhyChoose />
            <Upskill />
            <FAQ />
            <Testimonials />
            <Footer />
        </div>
    );
}
