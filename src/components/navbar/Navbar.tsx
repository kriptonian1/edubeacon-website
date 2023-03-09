import Image from 'next/image';
import BlueButton from '@/components/common/BlueButton';
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { EdubeaconLogo, Menu } from './assets';

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
    const [collapsed, setCollapsed] = React.useState(false);
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

    const toggleCollapseNavbar = React.useCallback(() => setCollapsed(prev => !prev), []);

    return (
        <nav
            className={`${
                hasScrolled || collapsed ? 'bg-black/50 rounded-b-xl sticky backdrop-blur-sm' : 'bg-transparent'
            } absolute z-20 w-screen top-0 px-5 md:px-10 text-white transition-all ease-out duration-300`}
        >
            {/*Medium to large screens*/}
            <div className={'justify-between items-center hidden md:flex'}>
                <Link href={'/'}>
                    <Image src={EdubeaconLogo} height={80} alt={'logo'} />
                </Link>

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

            {/*Small screens*/}
            <div className={'justify-between items-center flex-col md:hidden flex py-5'}>
                <div className={'flex justify-between items-center w-full'}>
                    <Link href={'/'}>
                        <Image src={EdubeaconLogo} height={80} alt={'logo'} />
                    </Link>
                    <button onClick={toggleCollapseNavbar}>
                        <Menu />
                    </button>
                </div>
                <div
                    className={`flex flex-col gap-y-5 items-center text-lg ${
                        collapsed ? 'h-[320px]' : 'h-0'
                    } transition-all ease-out duration-300 overflow-y-hidden`}
                >
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
                    <BlueButton>Browse Courses</BlueButton>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
