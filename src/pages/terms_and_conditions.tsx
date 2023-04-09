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
                <title>Terms and Conditions | EduBeacon</title>
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
                <h1 className=" text-2xl max-w-2xl text-white text-center">Terms and Conditions for EduBeacon</h1>
                <h2 className=" text-xl max-w-2xl text-white text-justify p-6">
                    Welcome to EduBeacon! These Terms and Conditions govern your use of our website and products and
                    services. Please read them carefully before using our website or products and services. By using our
                    website or products and services, you agree to these Terms and Conditions.
                    <br />
                    <br />
                    <div className="font-semibold">Use of Our Website andProducts and Services</div>
                    <br />
                    <br />
                    You may use our website and products and services only for lawful purposes and in accordance with
                    these Terms and Conditions. You must not use our website or products and services in any way that
                    violates any applicable federal, state, local, or international law or regulation.
                    <br />
                    <br />
                    <div className="font-semibold">Intellectual Property Rights</div>
                    <br />
                    <br />
                    The content on our website, including without limitation, the text, graphics, logos, images, and
                    software, is owned by or licensed to us and is subject to copyright and other intellectual property
                    rights under United States and foreign laws and international conventions. You may not use,
                    reproduce, modify, distribute, or create derivative works of any part of our website or products and
                    services without our prior written consent.
                    <br />
                    <br />
                    <div className="font-semibold">User Content</div>
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
                    We may charge fees for certain products and services. You agree to pay all fees and charges in
                    accordance with the payment terms in effect at the time you make a purchase. All fees and charges
                    are non-refundable unless otherwise stated in writing by us.
                    <br />
                    <br />
                    <div className="font-semibold">Disclaimer of Warranties</div>
                    <br />
                    <br />
                    We provide our website and products and services "as is" and "as available" without any warranty or
                    representation of any kind, whether express, implied, or statutory. We do not warrant that our
                    website or products and services will be uninterrupted, error-free, or free from viruses or other
                    harmful components. We disclaim any and all warranties, express or implied, including but not
                    limited to implied warranties of merchantability, fitness for a particular purpose, and
                    non-infringement.
                    <br />
                    <br />
                    <div className="font-semibold">Limitation of Liability</div>
                    <br />
                    <br />
                    In no event shall we be liable for any direct, indirect, incidental, special, or consequential
                    damages arising out of or in connection with your use of our website or products and services, even
                    if we have been advised of the possibility of such damages. Some jurisdictions do not allow the
                    exclusion or limitation of liability for consequential or incidental damages, so the above
                    limitation may not apply to you.
                    <br />
                    <br />
                    <div className="font-semibold">Indemnification</div>
                    <br />
                    <br /> You agree to indemnify, defend, and hold harmless us and our affiliates, officers, directors,
                    employees, agents, and licensors from and against any and all claims, liabilities, damages, losses,
                    costs, expenses, or fees (including reasonable attorneys' fees) arising out of or in connection with
                    your use of our website or products and services, your breach of these Terms and Conditions, or your
                    violation of any law or the rights of a third-party.
                    <br />
                    <br />
                    <div className="font-semibold">Governing Law and Jurisdiction</div>
                    <br />
                    <br />
                    These Terms and Conditions shall be governed by and construed in accordance with the laws of the
                    State of Karnataka, without regard to its conflict of law provisions. Any legal action or proceeding
                    arising out of or relating to these Terms and Conditions or your use of our website or products and
                    services shall be brought exclusively in the federal or state courts located in [County], [State],
                    and you consent to the personal jurisdiction and venue of such courts.
                    <br />
                    <br />
                    <div className="font-semibold">Termination</div>
                    <br />
                    <br />
                    We may terminate or suspend your access to our website or products and services at any time, without
                    prior notice or liability, for any reason whatsoever, including but not limited to your breach of
                    these Terms and Conditions. All provisions of these Terms and Conditions which by their nature
                    should survive termination shall survive termination, including, without limitation, ownership
                    provisions, warranty disclaimers, indemnity, and limitations of liability.
                    <br />
                    <br />
                    <div className="font-semibold">Modifications to Terms and Conditions</div>
                    <br />
                    <br />
                    We reserve the right to modify these Terms and Conditions at any time. Any changes we make will be
                    effective immediately upon posting on our website. Your continued use of our website or products and
                    services after any such changes constitutes your acceptance of the new Terms and Conditions.
                    <br />
                    <br />
                    <div className="font-semibold">Entire Agreement</div>
                    <br />
                    <br />
                    These Terms and Conditions constitute the entire agreement between you and EduBeacon with respect to
                    your use of our website and products and services, and supersede all prior or contemporaneous
                    communications and proposals, whether oral or written, between you and EduBeacon. Any waiver of any
                    provision of these Terms and Conditions will be effective only if in writing and signed by
                    EduBeacon. If you have any questions about these Terms and Conditions, please contact us at
                    <a className="text-[#0083EE]" href="mailto:info@edubeacon.io">
                        {' '}
                        info@edubeacon.io
                    </a>
                    .
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
