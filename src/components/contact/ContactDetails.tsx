import React from 'react';
import { AddressIcon, MailIcon, PhoneIcon } from './assets';

const ContactDetails = () => {
    return (
        <div className="flex flex-col gap-y-10  z-10 text-white">
            <div className="flex items-center">
                <AddressIcon />
                <span className="ml-7">
                    No. 537, 1st floor
                    <br />
                    Robby Arcade,
                    <br />
                    Indranagar, Bengaluru
                </span>
            </div>
            <div className="flex items-center">
                <PhoneIcon />
                <a href="tel:+918004564781">
                    <span className="ml-7">+91 9945488674</span>
                </a>
            </div>
            <div className="flex items-center">
                <MailIcon />
                <a href="mailto:mail@edubeacon.com">
                    <span className="ml-7">mail@edubeacon.com</span>
                </a>
            </div>
        </div>
    );
};

export default ContactDetails;
