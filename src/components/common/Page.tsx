import React from 'react';
import { Poppins } from 'next/font/google';
type Props = {
    children?: React.ReactNode;
    className?: string;
};

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
});

const Page: React.FC<Props> = ({ className, children }) => {
    return (
        <div className={`${className} ${poppins.className} flex flex-col gap-y-[80px] `}>
            <div className={'w-[100vw] absolute'}>
                <div
                    className={
                        'relative -translate-y-[150px] w-[100vw] mx-auto h-[609px] rounded-full bg-gradient-radial from-[#057CF2]/[30%] to-transparent blur-[250px]'
                    }
                />
            </div>
            {children}
        </div>
    );
};

export default Page;
