import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#0D1B2A', color: '#FFFFFF', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    <div>
                        <h3 style={{ color: '#2E7D32', marginBottom: '1.5rem' }}>PAISA TECH</h3>
                        <p style={{ opacity: 0.8, fontSize: '14px', lineHeight: '1.8' }}>
                            Your high-authority guide to technology in India. We help you find the best value for your money with deep-dive reviews and expert buying guides.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '14px' }}>
                            <li><a href="/smartphones" style={{ opacity: 0.8 }}>Smartphones</a></li>
                            <li><a href="/laptops" style={{ opacity: 0.8 }}>Laptops</a></li>
                            <li><a href="/guides" style={{ opacity: 0.8 }}>Buying Guides</a></li>
                            <li><a href="/reviews" style={{ opacity: 0.8 }}>Expert Reviews</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem' }}>Legal</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '14px' }}>
                            <li><a href="/about" style={{ opacity: 0.8 }}>About Us</a></li>
                            <li><a href="/privacy-policy" style={{ opacity: 0.8 }}>Privacy Policy</a></li>
                            <li><a href="/contact" style={{ opacity: 0.8 }}>Contact Us</a></li>
                            <li><a href="/terms" style={{ opacity: 0.8 }}>Terms of Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem' }}>Subscribe</h4>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <input
                                type="email"
                                placeholder="Email address"
                                style={{
                                    padding: '0.8rem',
                                    borderRadius: '4px',
                                    border: 'none',
                                    flex: 1
                                }}
                            />
                            <button style={{
                                backgroundColor: '#2E7D32',
                                color: 'white',
                                border: 'none',
                                padding: '0 1.5rem',
                                borderRadius: '4px',
                                fontWeight: '700',
                                cursor: 'pointer'
                            }}>JOIN</button>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    fontSize: '12px',
                    opacity: 0.6
                }}>
                    <p>© 2026 Paisa Tech (www.paisatech.in). All Rights Reserved. Affiliate disclosure: We may earn a commission when you buy through links on our site.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
