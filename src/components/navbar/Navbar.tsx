import logoWhite from './assets/logo-white.svg';
import Image from 'next/image';
import BlueButton from '@/components/common/BlueButton';
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const links = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Courses',
        path: '#',
    },
    {
        name: 'Why Edubeacon?',
        path: '/why-edubeacon',
    },
    {
        name: 'About',
        path: '#',
    },
    {
        name: 'Contact',
        path: '#',
    },
];

const Navbar = () => {
    const [hasScrolled, setHasScrolled] = React.useState(false);
    const [currentPath, setCurrentPath] = React.useState('');
    const router = useRouter();

    React.useEffect(() => {
        // Set the current path as state
        setCurrentPath(router.pathname);

        // Handle scroll event to change navbar design
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [router]);

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
                {links.map((link, i) => (
                    <Link
                        key={i}
                        href={link.path}
                        className={`translation-all ease-out duration-300 ${
                            currentPath === link.path
                                ? hasScrolled
                                    ? 'text-[#B6ABFF]'
                                    : 'text-navyBlue' + ' font-bold'
                                : 'text-white'
                        }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
            <BlueButton>Browse Courses</BlueButton>
        </div>
    );
};

export default Navbar;
