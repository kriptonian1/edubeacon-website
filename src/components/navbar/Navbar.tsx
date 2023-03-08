import logoWhite from './assets/logo-white.svg';
import Image from 'next/image';
import BlueButton from '@/components/common/BlueButton';
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { EdubeaconLogo } from './assets';

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
        <nav
            className={`${
                hasScrolled ? 'bg-black/50 rounded-b-xl sticky backdrop-blur-sm' : 'bg-transparent'
            } absolute z-20 w-screen flex justify-between top-0 px-10 items-center text-white transition-all ease-out duration-300`}
        >
            <Link href={'/'}>
                <Image src={EdubeaconLogo} height={80} alt={'logo'} />
            </Link>

            {/* <Image src={logoWhite} height={80} alt={'logo'} /> */}

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
        </nav>
    );
};

export default Navbar;
