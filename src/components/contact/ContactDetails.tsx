import React from 'react';
import { AddressIcon, MailIcon, PhoneIcon } from './assets';

const ContactDetails = () => {
    return (
        <div className="flex flex-col gap-y-10  z-10 text-white">
            <div className="flex items-center">
                <AddressIcon />
                <span className="ml-7">Indiranagar, Bengaluru</span>
            </div>
            <div className="flex items-center">
                <PhoneIcon />
                <a href="tel:+919945488674">
                    <span className="ml-7">+91 9945488674</span>
                </a>
            </div>
            <div className="flex items-center">
                <MailIcon />
                <a href="mailto:info@edubeacon.io">
                    <span className="ml-7">info@edubeacon.io</span>
                </a>
            </div>
        </div>
    );
};

export default ContactDetails;
