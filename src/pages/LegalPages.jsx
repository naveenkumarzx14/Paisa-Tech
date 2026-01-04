import React from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LegalPage = ({ title, children }) => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main className="container" style={{ flex: 1, padding: '4rem 1.5rem', maxWidth: '800px' }}>
                <h1 style={{ borderBottom: '4px solid #2E7D32', display: 'inline-block', marginBottom: '2rem' }}>{title}</h1>
                <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#333' }}>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export const AboutUs = () => (
    <LegalPage title="About Us">
        <p>Welcome to <strong>Paisa Tech</strong> (www.paisatech.in) — India’s most trusted destination for technology reviews, buying guides, and value-focused tech journalism.</p>
        <p style={{ marginTop: '1.5rem' }}>Our mission is simple: To help the Indian consumer find the absolute best "Paisa Vasool" value in a crowded market. Whether you're hunting for a 5G smartphone that won't break the bank, a laptop for your first job, or the perfect pair of noise-canceling earbuds, we provide the deep-dive testing and real-world insights you need.</p>
        <p style={{ marginTop: '1.5rem' }}>At Paisa Tech, we believe tech should be accessible, reliable, and above all, worth every rupee you spend. Our editorial team consists of veteran tech enthusiasts who live and breathe gadgets, ensuring every review is backed by hours of hands-on usage.</p>
    </LegalPage>
);

export const PrivacyPolicy = () => (
    <LegalPage title="Privacy Policy">
        <p>Last Updated: January 2026</p>
        <p style={{ marginTop: '1.5rem' }}>At <strong>Paisa Tech</strong> (www.paisatech.in), one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Paisa Tech and how we use it.</p>
        <p style={{ marginTop: '1rem' }}>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

        <h3 style={{ marginTop: '2rem' }}>1. Consent</h3>
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

        <h3 style={{ marginTop: '2rem' }}>2. Information We Collect</h3>
        <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
        <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><strong>Contact Information:</strong> If you contact us directly via our Contact Us form, we may receive additional information about you such as your name, email address, the contents of the message and/or attachments you may send us.</li>
            <li><strong>Log Files:</strong> Paisa Tech follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.</li>
        </ul>

        <h3 style={{ marginTop: '2rem' }}>3. Cookies and Web Beacons</h3>
        <p>Like any other website, Paisa Tech uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

        <h3 style={{ marginTop: '2rem' }}>4. Google DoubleClick DART Cookie</h3>
        <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.paisatech.in and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" style={{ color: '#2E7D32' }}>https://policies.google.com/technologies/ads</a></p>

        <h3 style={{ marginTop: '2rem' }}>5. Advertising Partners Privacy Policies</h3>
        <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Paisa Tech. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Paisa Tech, which are sent directly to users' browser. They automatically receive your IP address when this occurs.</p>
        <p style={{ marginTop: '1rem' }}>Note that Paisa Tech has no access to or control over these cookies that are used by third-party advertisers.</p>

        <h3 style={{ marginTop: '2rem' }}>6. Affiliate Disclosure</h3>
        <p>Paisa Tech is a participant in the Amazon Associates Program and Flipkart Affiliate Program, affiliate advertising programs designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.in and Flipkart.com. This means we may earn a small commission on qualifying purchases made through our links, at no additional cost to you.</p>

        <h3 style={{ marginTop: '2rem' }}>7. Third Party Privacy Policies</h3>
        <p>Paisa Tech's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>

        <h3 style={{ marginTop: '2rem' }}>8. Children's Information</h3>
        <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Paisa Tech does not knowingly collect any Personal Identifiable Information from children under the age of 13.</p>

        <h3 style={{ marginTop: '2rem' }}>9. Data Security</h3>
        <p>We use appropriate technical and organizational security measures to protect your personal information. However, please remember that no method of transmission over the internet or method of electronic storage is 100% secure.</p>

        <h3 style={{ marginTop: '2rem' }}>10. Changes to This Privacy Policy</h3>
        <p>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

        <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '12px', borderLeft: '4px solid #2E7D32' }}>
            <h4 style={{ color: '#0D1B2A', marginBottom: '0.5rem' }}>Contact Information</h4>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@paisatech.in" style={{ color: '#2E7D32', fontWeight: '600' }}>privacy@paisatech.in</a> or through our <a href="/contact" style={{ color: '#2E7D32', fontWeight: '600' }}>Contact Page</a>.</p>
        </div>
    </LegalPage>
);

export const ContactUs = () => {
    const form = React.useRef();
    const [status, setStatus] = React.useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'service_1n1zxaj';
        const TEMPLATE_ID = 'template_ay31pnx';
        const PUBLIC_KEY = 'yFh0D569dddefQQtE';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                e.target.reset();
                alert("Message Sent! We'll get back to you shortly.");
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                alert("Failed to send message. Please try again later.");
            });
    };

    return (
        <LegalPage title="Contact Us">
            <p>Have a tech query? Found a bargain we should know about? Or want to collaborate? We’d love to hear from you.</p>
            <form ref={form} onSubmit={sendEmail} style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <input type="hidden" name="to_email" value="naveenkumarzx24@gmail.com" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontWeight: '600' }}>Name</label>
                    <input type="text" name="from_name" required style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontWeight: '600' }}>Email</label>
                    <input type="email" name="from_email" required style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontWeight: '600' }}>Message</label>
                    <textarea name="message" rows="5" required style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }}></textarea>
                </div>
                <button
                    type="submit"
                    disabled={status === 'sending'}
                    style={{
                        backgroundColor: status === 'sending' ? '#666' : '#0D1B2A',
                        color: 'white',
                        padding: '1rem',
                        border: 'none',
                        borderRadius: '4px',
                        fontWeight: '700',
                        cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                        opacity: status === 'sending' ? 0.7 : 1
                    }}
                >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
            </form>
            <p style={{ marginTop: '2rem', fontSize: '14px', textAlign: 'center' }}>
                Editorial Enquiries: <a href="mailto:editorial@paisatech.in" style={{ color: '#2E7D32', fontWeight: '600' }}>editorial@paisatech.in</a>
            </p>
        </LegalPage>
    );
};

export const TermsOfService = () => (
    <LegalPage title="Terms of Service">
        <p>Last Updated: January 2026</p>
        <p style={{ marginTop: '1.5rem' }}>Welcome to Paisa Tech (www.paisatech.in). By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h3 style={{ marginTop: '2rem' }}>1. Use of Content</h3>
        <p>All content on Paisa Tech, including but not limited to text, graphics, logos, images, and software, is the property of Paisa Tech or its content suppliers and is protected by Indian and international copyright laws. You may not reproduce, distribute, or create derivative works from our content without explicit written permission.</p>

        <h3 style={{ marginTop: '2rem' }}>2. Affiliate Links & Commissions</h3>
        <p>Paisa Tech participates in affiliate marketing programs including Amazon Associates and Flipkart Affiliate. When you click on links to various merchants on this site and make a purchase, this can result in a commission for us. Affiliate programs and affiliations include, but are not limited to, the Amazon Associates Program and Flipkart Affiliate Program.</p>
        <p style={{ marginTop: '1rem' }}>Our reviews and recommendations are based on genuine testing and editorial judgment. The presence of affiliate links does not influence our editorial content or product ratings.</p>

        <h3 style={{ marginTop: '2rem' }}>3. Product Information & Pricing</h3>
        <p>We strive to provide accurate product information and pricing. However, prices and availability are subject to change without notice. We are not responsible for typographical errors or inaccuracies in product descriptions or pricing. Always verify current prices on the retailer's website before making a purchase.</p>

        <h3 style={{ marginTop: '2rem' }}>4. User Comments & Submissions</h3>
        <p>By submitting comments, reviews, or other content to Paisa Tech, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and distribute such content. You represent that you own or have the necessary rights to the content you submit.</p>

        <h3 style={{ marginTop: '2rem' }}>5. Disclaimer of Warranties</h3>
        <p>The information on Paisa Tech is provided "as is" without any representations or warranties, express or implied. We make no representations or warranties in relation to the accuracy, completeness, or reliability of the information on this website.</p>

        <h3 style={{ marginTop: '2rem' }}>6. Limitation of Liability</h3>
        <p>Paisa Tech will not be liable for any consequential, incidental, indirect, or special damages arising out of or in connection with your use of this website, even if we have been advised of the possibility of such damages.</p>

        <h3 style={{ marginTop: '2rem' }}>7. External Links</h3>
        <p>Our website contains links to third-party websites. These links are provided for your convenience only. We have no control over the content of these sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>

        <h3 style={{ marginTop: '2rem' }}>8. Modifications to Terms</h3>
        <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following the posting of changes constitutes your acceptance of such changes.</p>

        <h3 style={{ marginTop: '2rem' }}>9. Governing Law</h3>
        <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of India.</p>

        <p style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '8px', fontSize: '16px' }}>
            <strong>Questions?</strong> If you have any questions about these Terms of Service, please contact us at <a href="/contact" style={{ color: '#2E7D32', fontWeight: '600' }}>our contact page</a>.
        </p>
    </LegalPage>
);

