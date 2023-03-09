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
    return <div className={`${className} ${poppins.className} flex flex-col gap-y-[80px] `}>{children}</div>;
};

export default Page;
