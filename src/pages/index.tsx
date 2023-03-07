import Hero from '@/components/landing/Hero';
import Skills from '@/components/landing/Skills';
import WhyChoose from '@/components/landing/WhyChoose';
import Upskill from '@/components/landing/Upskill';
import FAQ from '@/components/landing/FAQ';
import Testimonials from '@/components/landing/Testimonials';
import Page from '@/components/common/Page';

export default function Home() {
    return (
        <Page includeNavbar includeFooter>
            <div className={'w-[100vw] absolute'}>
                <div
                    className={
                        'relative -translate-y-[150px] w-[1024px] mx-auto h-[609px] rounded-full bg-gradient-radial from-[#057CF2]/[30%] to-transparent blur-[250px]'
                    }
                />
            </div>
            <Hero />
            <Skills />
            <WhyChoose />
            <Upskill />
            <FAQ />
            <Testimonials />
        </Page>
    );
}
