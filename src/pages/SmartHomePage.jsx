import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdSlot from '../components/AdSlot';
import PaisaScale from '../components/PaisaScale';
import AffiliateButtons from '../components/AffiliateButtons';
import { ChevronRight, Calendar, User, Home } from 'lucide-react';

const SmartHomePage = () => {
    const smartImages = {
        echo: "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800",
        bulb: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=800",
        plug: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
        camera: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800",
        sensor: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800"
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <main className="container" style={{ flex: 1, padding: '2rem 1.5rem', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
                <article>
                    <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#666', marginBottom: '1.5rem' }}>
                        <span>Home</span> <ChevronRight size={14} />
                        <span>Smart Home</span> <ChevronRight size={14} />
                        <span style={{ fontWeight: '600', color: '#0D1B2A' }}>Smart Home Gadgets Under 5000</span>
                    </nav>

                    <h1 style={{ marginBottom: '1rem', fontSize: '2.8rem', lineHeight: '1.1', color: '#0D1B2A' }}>
                        Best Smart Home Gadgets Under ₹5,000 in India (Jan 2026): Start Your Smart Lab Today
                    </h1>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '14px', color: '#666', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <User size={16} /> By <strong>Paisa Tech Editorial</strong>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Calendar size={16} /> Updated: January 4, 2026
                        </div>
                    </div>

                    <AdSlot type="leaderboard" />

                    <div className="article-body" style={{ fontSize: '18px', lineHeight: '1.8', color: '#333' }}>
                        <p>Building a smart home in 2026 doesn't require a high-end contractor or thousands of dollars. With the rise of Matter-compatible devices and localized AI, you can automate your life for less than the cost of a fancy dinner. Here are our top "Paisa Vasool" smart home picks for 2026.</p>

                        <AdSlot type="in-content" />

                        <h2>1. Amazon Echo Pop (2nd Gen, 2026): The Brain</h2>
                        <p>The latest Echo Pop brings improved AI responses and better microphones, making it the perfect entry-point for voice control in any room.</p>
                        <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', height: '400px', backgroundColor: '#eee' }}>
                            <img src={smartImages.echo} alt="Amazon Echo Pop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ display: 'flex', gap: '2rem', margin: '2rem 0', flexWrap: 'wrap' }}>
                            <div style={{ flex: 1, minWidth: '300px' }}>
                                <ul style={{ listStyle: 'none', background: '#f8f9fa', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #2E7D32' }}>
                                    <li><strong>AI:</strong> New Alexa LLM for natural chat</li>
                                    <li><strong>Connectivity:</strong> Matter & Thread support</li>
                                    <li><strong>Audio:</strong> Front-firing directional speaker</li>
                                </ul>
                            </div>
                            <PaisaScale score={9.1} />
                        </div>
                        <AffiliateButtons
                            amazonUrl="https://www.amazon.in/s?k=Amazon+Echo+Pop+2026"
                            flipkartUrl="https://www.flipkart.com/search?q=Amazon+Echo+Pop+2026"
                        />

                        <h2>2. Wipro Smart LED Bulb (B22, 12W): The Mood Setter</h2>
                        <p>Wipro's latest bulbs are incredibly reliable and integrate seamlessly with both Alexa and Google Home without needing a hub.</p>
                        <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', height: '350px', backgroundColor: '#eee' }}>
                            <img src={smartImages.bulb} alt="Smart Bulb" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <PaisaScale score={8.8} />
                        <AffiliateButtons
                            amazonUrl="https://www.amazon.in/s?k=Wipro+Smart+LED+Bulb"
                            flipkartUrl="https://www.flipkart.com/search?q=Wipro+Smart+LED+Bulb"
                        />

                        <AdSlot type="in-content" />

                        <h2>3. TP-Link Tapo P110 Smart Plug: The Energy Saver</h2>
                        <p>This isn't just a switch; it's an energy auditor. Track exactly how much power your AC or Geyser is consuming in real-time.</p>
                        <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', height: '350px', backgroundColor: '#eee' }}>
                            <img src={smartImages.plug} alt="Smart Plug" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <PaisaScale score={8.7} />
                        <AffiliateButtons
                            amazonUrl="https://www.amazon.in/s?k=TP-Link+Tapo+P110"
                            flipkartUrl="https://www.flipkart.com/search?q=TP-Link+Tapo+P110"
                        />

                        <h2>4. Qubo Smart Cam 360 (2026): The Guardian</h2>
                        <p>Security is paramount. Qubo's 2026 edition offers 2K resolution and AI-based human detection that actually works, with no false alarms from pets.</p>
                        <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', height: '350px', backgroundColor: '#eee' }}>
                            <img src={smartImages.camera} alt="Smart Camera" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <PaisaScale score={8.5} />
                        <AffiliateButtons
                            amazonUrl="https://www.amazon.in/s?k=Qubo+Smart+Cam+360+2026"
                            flipkartUrl="https://www.flipkart.com/search?q=Qubo+Smart+Cam+360+2026"
                        />
                    </div>
                </article>

                <aside className="sidebar-content">
                    <div style={{ backgroundColor: '#f8f9fa', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem' }}>
                        <h4 style={{ color: '#0D1B2A', display: 'flex', alignItems: 'center', gap: '8px' }}><Home size={20} /> Smart Tip</h4>
                        <p style={{ fontSize: '14px', marginTop: '10px' }}>Look for devices with the "Matter" logo. These are guaranteed to work across Alexa, Google Home, and Apple HomeKit, making your setup future-proof!</p>
                    </div>
                    <AdSlot type="skyscraper" />
                </aside>
            </main>

            <Footer />

            <style dangerouslySetInnerHTML={{
                __html: `
        @media (max-width: 991px) {
           .sidebar-content { display: none; }
           article { grid-column: span 2; }
           h1 { font-size: 2rem !important; }
        }
      `}} />
        </div>
    );
};

export default SmartHomePage;
