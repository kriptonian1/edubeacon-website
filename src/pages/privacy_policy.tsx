import Page from '@/components/common/Page';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import Head from 'next/head';
import BlueButton from '@/components/common/BlueButton';
import Link from 'next/link';

const Terms_and_conditions = () => {
    return (
        <Page>
            <Head>
                <title>Privacy Policy | EduBeacon</title>
            </Head>
            <div className={'w-[100vw] absolute '}>
                <div
                    className={
                        'relative -translate-y-[150px] w-[100vw] mx-auto h-[609px] rounded-full bg-gradient-radial from-[#057CF2]/[30%] to-transparent blur-[250px]'
                    }
                />
            </div>
            <Navbar />
            <div className="flex flex-col gap-y-[5rem] justify-center items-center mt-[20vh] mb-[10vh] z-20">
                <h1 className=" text-2xl max-w-2xl text-white text-center">Privacy Policy for EduBeacon</h1>
                <h2 className=" text-xl max-w-2xl text-white text-justify p-6">
                    <br />
                    <br />
                    <div className="font-semibold">EduBeacon's Privacy Statement</div>
                    <br />
                    <br />
                    EduBeacon values the privacy and security of our customers' personal information. This Privacy
                    Policy describes how we collect, utilize, and disclose personal information in the course of
                    providing our products and services.
                    <br />
                    <br />
                    <div className="font-semibold">Personal Information Collection</div>
                    <br />
                    <br />
                    When you interact with us, such as when you establish an account, make a purchase, or contact us for
                    customer service, we gather personal information. Your name, email address, phone number, and
                    payment information are examples of personal information. We may also collect information on how you
                    use our goods and services, such as which sites you visit and which features you utilize.
                    <br />
                    <br />
                    <div className="font-semibold">Personal Information Use</div>
                    <br />
                    <br />
                    Personal information is used by us to deliver products and services to you, interact with you about
                    your account, and enhance our products and services. With your permission, we may also use personal
                    information for marketing and advertising reasons. We may use your email address, for example, to
                    send you newsletters, promotions, or other marketing messages.
                    <br />
                    <br />
                    <div className="font-semibold">Personal Information Disclosure</div>
                    <br />
                    <br /> You may be able to submit content to our website, such as comments or reviews. By submitting
                    content, you grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license
                    to use, copy, modify, create derivative works based on, distribute, publicly display, publicly
                    perform, and otherwise exploit in any manner such content in all formats and distribution channels
                    now known or hereafter devised (including in connection with our business and on third-party sites
                    and services), without further notice to or consent from you, and without the requirement of payment
                    to you or any other person or entity. You represent and warrant that you have all rights necessary
                    to grant the licenses granted in this section, and that your submission of such content does not
                    violate or infringe any third-party rights, including but not limited to any privacy rights,
                    publicity rights, copyrights, trademarks, or other intellectual property rights.
                    <br />
                    <br />
                    <div className="font-semibold">Payment and Refunds</div>
                    <br />
                    <br />
                    Personal information is never sold or rented to third parties. Personal information may, however, be
                    shared with third-party service providers that assist us in providing our goods and services. For
                    example, in order to execute your purchase, we may share your payment information with a payment
                    processor. Personal information may also be disclosed to comply with relevant laws or regulations or
                    to defend our rights and property.
                    <br />
                    <br />
                    <div className="font-semibold">Personal Information Security</div>
                    <br />
                    <br />
                    We take reasonable precautions to ensure the security of personal information, including the use of
                    encryption and other security technologies to safeguard personal information during transmission and
                    storage. We also expect our service partners to use adequate security measures to safeguard personal
                    information.
                    <br />
                    <br />
                    <div className="font-semibold">Your Choices</div>
                    <br />
                    <br />
                    You may refuse to give us with some personal information, but this may limit your ability to utilize
                    our goods and services. You may also choose not to receive marketing and advertising emails from us
                    by following the unsubscribe instructions included in the communication. Please keep in mind that
                    even if you unsubscribe from marketing emails, we may still send you administrative notifications
                    about your account or our goods and services.
                    <br />
                    <br />
                    <div className="font-semibold">External Links</div>
                    <br />
                    <br /> Our website may have links to other websites, which include third- party websites or
                    resources. We are not responsible for the privacy policy and information practices of third- party
                    websites. Please read the privacy policies of third- party websites as every website has different
                    terms of use and privacy policies.
                    <br />
                    <br />
                    <div className="font-semibold">Cookie Information</div>
                    <br />
                    <br />
                    In order to enhance your online experience and track website performance, our website uses cookies.
                    It’s a small text file that gets placed in your computer hard drive and can be retrieved later.
                    Cookies do not tell us who you are.
                    <br />
                    <br />
                    <div className="font-semibold">Course Content</div>
                    <br />
                    <br />
                    Course content for all the study programs is provided only for the purpose of education and
                    guidance. The course content is reviewed regularly and is subject to change without notice.
                    EduBeacon reserves the right to modify training content without notice.
                    <br />
                    <br />
                    <div className="font-semibold">Copyright Information</div>
                    <br />
                    <br />
                    You can electronically copy or take print outs of the website pages, only for personal use.
                    EduBeacon holds the copyright to all the material on this website, unless otherwise indicated.
                    Written permission from the copyright holder must be obtained for any use of this material other
                    than for purposes permitted by law.
                    <br />
                    <br />
                    <div className="font-semibold">Privacy of Children</div>
                    <br />
                    <br />
                    Our goods and services are not aimed towards children under the age of 16, and we do not
                    intentionally collect personal information from them. If we discover that we have obtained personal
                    information from a kid under the age of 16, we will take immediate steps to remove the information.
                    <br />
                    <br />
                    <div className="font-semibold">Changes to this Privacy Statement</div>
                    <br />
                    <br />
                    This Privacy Policy may be updated from time to time. Any substantial changes to our Privacy Policy
                    will be communicated to you by posting a notice on our website or sending you an email. We advise
                    you to examine this Privacy Policy on a regular basis.
					<br />
					Please contact us at <a className="text-[#0083EE]" href="mailto:info@edubeacon.io"> info@edubeacon.io </a>  if you have any questions or complaints regarding our Privacy Policy or our data practices.
                </h2>

                <Link href={'/'} className="justify-center">
                    <BlueButton>Return Home</BlueButton>
                </Link>
            </div>
            <Footer />
        </Page>
    );
};

export default Terms_and_conditions;
