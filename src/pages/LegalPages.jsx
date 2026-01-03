import React from 'react';
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
        <p style={{ marginTop: '1.5rem' }}>At Paisa Tech, we take your privacy seriously. This policy outlines how we collect and use data.</p>
        <h3 style={{ marginTop: '2rem' }}>Google AdSense & DART Cookies</h3>
        <p>Google, as a third-party vendor, uses cookies to serve ads on www.paisatech.in. Google's use of the DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet.</p>
        <h3 style={{ marginTop: '2rem' }}>Affiliate Disclosure</h3>
        <p>Paisa Tech participates in various affiliate marketing programs, including Amazon Associates and Flipkart Affiliate. This means we may earn a commission on purchases made through our links, at no extra cost to you. This helps support our editorial team and keeps our content free for everyone.</p>
    </LegalPage>
);

export const ContactUs = () => (
    <LegalPage title="Contact Us">
        <p>Have a tech query? Found a bargain we should know about? Or want to collaborate? We’d love to hear from you.</p>
        <form style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontWeight: '600' }}>Name</label>
                <input type="text" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontWeight: '600' }}>Email</label>
                <input type="email" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontWeight: '600' }}>Message</label>
                <textarea rows="5" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ddd' }}></textarea>
            </div>
            <button style={{ backgroundColor: '#0D1B2A', color: 'white', padding: '1rem', border: 'none', borderRadius: '4px', fontWeight: '700', cursor: 'pointer' }}>
                Send Message
            </button>
        </form>
        <p style={{ marginTop: '2rem', fontSize: '14px', textAlign: 'center' }}>
            Editorial Enquiries: <a href="mailto:editorial@paisatech.in" style={{ color: '#2E7D32', fontWeight: '600' }}>editorial@paisatech.in</a>
        </p>
    </LegalPage>
);
