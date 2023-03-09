import React from 'react';
import BlueButton from '../common/BlueButton';

const ContactBox = () => {
    return (
        <div className="flex flex-col gap-y-5  z-10 relative text-white bg-white/10 rounded-2xl p-9">
            <input
                className="py-2 px-4 rounded-xl w-[55vw] md:w-[20vw] border placeholder:text-sm placeholder:text-white/70 bg-[#46464699]/[60%] shadow-lg"
                type={'text'}
                placeholder="Enter your name"
            />
            <input
                className="py-2 px-4 rounded-xl w-[55vw] md:w-[20vw] border placeholder:text-sm placeholder:text-white/70 bg-[#46464699]/[60%] shadow-lg"
                type={'email'}
                placeholder="Enter your mail address"
            />
            <input
                className="py-2 px-4 rounded-xl w-[55vw] md:w-[20vw] border placeholder:text-sm placeholder:text-white/70 bg-[#46464699]/[60%] shadow-lg"
                type={'tel'}
                placeholder="Enter your phone number"
            />
            <textarea
                className="py-2 px-4 rounded-xl w-[55vw] md:w-[20vw] border placeholder:text-sm placeholder:text-white/70 bg-[#46464699]/[60%] shadow-lg"
                placeholder='Enter your message'
                cols={10}
                rows={5}
            />
            <BlueButton>
                <span className="text-sm">Send Message</span>
            </BlueButton>
        </div>
    );
};

export default ContactBox;
