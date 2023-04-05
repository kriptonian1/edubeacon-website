import React from 'react';
import BlueButton from '@/components/common/BlueButton';
import WhiteButton from '@/components/common/WhiteButton';
import { FacebookIcon, InstagramIcon, LinkedinLogo, LogoColored, TwitterIcon, YoutubeLogo } from './assets';
import Link from 'next/link';

const socials = [
    {
        icon: <FacebookIcon />,
        link: '#',
    },
    {
        icon: <InstagramIcon />,
        link: '#',
    },
    {
        icon: <TwitterIcon />,
        link: '#',
    },
    {
        icon: <YoutubeLogo />,
        link: '#',
    },
    {
        icon: <LinkedinLogo />,
        link: '#',
    },
];

const companyLinks = [
    {
        name: 'About',
        link: '#',
    },
    {
        name: 'Careers',
        link: '#',
    },
    {
        name: 'Team',
        link: '#',
    },
];

const resourceLinks = [
    {
        name: 'Safety',
        link: '#',
    },
    {
        name: 'Support',
        link: '#',
    },
    {
        name: 'Branding',
        link: '#',
    },
];

const policyLinks = [
    {
        name: 'Terms & Conditions',
        link: '#',
    },
    {
        name: 'Acknowledgement',
        link: '#',
    },
    {
        name: 'Privacy',
        link: 'privacy-policy',
    },
    {
        name: 'License',
        link: '#',
    },
];

const Footer = () => {
    return (
        <div className={'bg-[#252525] p-20 flex flex-col md:flex-row items-center justify-between z-10'}>
            <div className={'flex flex-col gap-y-8 justify-between md:order-1 order-2'}>
                <LogoColored />
                <div className={'flex justify-between md:gap-x-3'}>
                    {socials.map((s, index) => (
                        <a key={index} href={s.link}>
                            {s.icon}
                        </a>
                    ))}
                </div>
            </div>
            <div
                className={
                    'md:flex md:flex-row grid grid-rows-2 grid-cols-2 gap-5 md:gap-20 font-medium text-white order-1 md:order-2'
                }
            >
                <div>
                    <div className={'mb-5 text-navyBlue text-xl'}>Company</div>
                    {companyLinks.map((c, index) => (
                        <a href={c.link} key={index} className={'block text-sm mb-3'}>
                            {c.name}
                        </a>
                    ))}
                </div>
                <div>
                    <div className={'mb-5 text-navyBlue text-xl'}>Resources</div>
                    {resourceLinks.map((c, index) => (
                        <a href={c.link} key={index} className={'block text-sm mb-3'}>
                            {c.name}
                        </a>
                    ))}
                </div>
                <div>
                    <div className={'mb-5 text-navyBlue text-xl'}>Policy</div>
                    {policyLinks.map((c, index) => (
                        <a href={c.link} key={index} className={'block text-sm mb-3'}>
                            {c.name}
                        </a>
                    ))}
                </div>
            </div>
            <div className={'hidden lg:flex flex-col gap-y-5 order-3'}>
                <Link href={'/courses'}>
                    <BlueButton>Browse Courses</BlueButton>
                </Link>
                <WhiteButton>Contact Us</WhiteButton>
                <div className={'text-white font-medium'}>© EduBeacon, 2022.</div>
            </div>
        </div>
    );
};

export default Footer;
