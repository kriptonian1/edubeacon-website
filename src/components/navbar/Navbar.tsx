import logoWhite from './assets/logo-white.svg';
import Image from 'next/image';
import BlueButton from '@/components/common/BlueButton';
import React from 'react';

const Navbar = () => {
    const [hasScrolled, setHasScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`${
                hasScrolled ? 'bg-[#565656]/[90%] rounded-b-xl sticky' : 'bg-transparent'
            } absolute z-20 w-screen flex justify-between top-0 px-10 items-center text-white transition-all ease-out duration-300`}
        >
            <a href={'#'}>
                <Image src={logoWhite} height={80} alt={'logo'} />
            </a>
            <div className={'flex gap-x-5 items-center text-lg'}>
                <span>Home</span>
                <span>Courses</span>
                <span>Why Edubeacon?</span>
                <span>About</span>
                <span>Contact</span>
            </div>
            <BlueButton>Browse Courses</BlueButton>
        </div>
    );
};

export default Navbar;
