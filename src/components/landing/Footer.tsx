import React from 'react';
import facebook from './assets/Footer/facebook.svg';
import instagram from './assets/Footer/instagram.svg';
import twitter from './assets/Footer/twitter.svg';
import youtube from './assets/Footer/youtube.svg';
import linkedin from './assets/Footer/linkedin.svg';
import logoColored from './assets/Footer/logo-colored.svg';
import Image from 'next/image';
import BlueButton from '@/components/common/BlueButton';
import WhiteButton from '@/components/common/WhiteButton';

const socials = [
    {
        icon: facebook,
        link: '#',
    },
    {
        icon: instagram,
        link: '#',
    },
    {
        icon: twitter,
        link: '#',
    },
    {
        icon: youtube,
        link: '#',
    },
    {
        icon: linkedin,
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
        link: '#',
    },
    {
        name: 'License',
        link: '#',
    },
];

const Footer = () => {
    return (
        <div className={'bg-[#252525] p-20 flex items-center justify-between z-10'}>
            <div className={'flex flex-col gap-y-8 justify-between'}>
                <Image src={logoColored} alt={''} />
                <div className={'flex gap-x-3'}>
                    {socials.map((s, index) => (
                        <a key={index} href={s.link}>
                            <Image src={s.icon} alt={''} />
                        </a>
                    ))}
                </div>
            </div>
            <div className={'flex gap-x-20 font-medium text-white'}>
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
            <div className={'flex flex-col gap-y-5'}>
                <BlueButton>Browse Courses</BlueButton>
                <WhiteButton>Contact Us</WhiteButton>
                <div className={'text-white font-medium'}>© Edubeacon, 2022.</div>
            </div>
        </div>
    );
};

export default Footer;
