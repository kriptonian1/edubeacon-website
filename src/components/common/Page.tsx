import React from 'react';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/landing/Footer';

type Props = {
    children?: React.ReactNode;
    className?: string;
    includeNavbar?: boolean;
    includeFooter?: boolean;
};

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
});

const Page: React.FC<Props> = ({ className, children, includeNavbar, includeFooter }) => {
    return (
        <div className={`${className} bg-[#111111] ${poppins.className} flex flex-col gap-y-[80px] min-h-screen`}>
            {includeNavbar && <Navbar />}
            {children}
            {includeFooter && <Footer />}
        </div>
    );
};

export default Page;
