import React from 'react';
import Page from '@/components/common/Page';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const data = [
    {
        header: '',
        body: 'Edubeacon values your privacy and is committed to protecting your personal information. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information in connection with the Edubeacon platform and related services.'
    },
    {
        header: 'Information We Collect',
        body: 'We may collect personal information from you when you sign up for an account, enroll in a course, make a payment, or interact with our platform in other ways. The information we collect may include your name, email address, payment information, and other details relevant to your use of our services.'
    },
    {
        header: 'How We Use Your Information',
        body: 'We may use your personal information to provide you with access to our platform and services, process payments, communicate with you about your account and courses, and improve our offerings. We may also use your information to personalize your experience and provide targeted marketing and advertising.'
    },
    {
        header: 'How We Share Your Information',
        body: 'We do not share your personal information with third parties without your consent, except as required by law or as necessary to provide our services. We may share your information with our partners and service providers to help us deliver our services and improve our platform.'
    },
    {
        header: 'Security Measures',
        body: 'We use industry-standard encryption and authentication protocols to protect your personal information from unauthorized access, disclosure, or alteration. We also maintain physical, administrative, and technical safeguards to prevent data loss, theft, or misuse.'
    },
    {
        header: 'Your Choices and Rights',
        body: 'You have the right to access, correct, or delete your personal information at any time. You can also opt-out of receiving marketing communications from us by following the instructions in the emails we send you. Please note that we may need to retain certain information for legal or legitimate business purposes.'
    },
    {
        header: 'Changes to This Privacy Policy',
        body: 'We may update this Privacy Policy from time to time to reflect changes in our practices or services. We encourage you to review this policy periodically for any updates or changes.'
    },
    {
        header: 'Contact Us',
        body: 'If you have any questions or concerns about our Privacy Policy or practices, please contact us at [mail id]'
    }
]

const PrivacyPolicy = () => {
    return (
        <Page>
            <Navbar />
            <div className={'mt-[20vh] flex flex-col gap-y-16 items-center justify-center text-white z-10 w-[90vw] md:w-[80vw] lg:w-[75vw] mx-auto'}>
                <div className={'font-bold text-3xl text-center'}>Privacy Policy</div>
                <div>
                    {data.map((item, index) => (
                        <div key={index} className={'flex flex-col gap-y-4 my-8'}>
                            <div className={'font-bold text-xl'}>{item.header}</div>
                            <div className={'text-sm'}>{item.body}</div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </Page>
    );
};

export default PrivacyPolicy;
