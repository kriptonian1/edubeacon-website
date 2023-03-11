import Hero from '@/components/landing/Hero';
import Skills from '@/components/landing/Skills';
import WhyChoose from '@/components/landing/WhyChoose';
import Upskill from '@/components/landing/Upskill';
import FAQ from '@/components/landing/FAQ';
import Testimonials from '@/components/landing/Testimonials';
import Page from '@/components/common/Page';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

export default function Home() {
    return (
        <Page>
            <Navbar />
            <Hero />
            <Skills />
            <WhyChoose />
            <Upskill />
            <FAQ />
            {/* <Testimonials /> */}
            <Footer />
        </Page>
    );
}
