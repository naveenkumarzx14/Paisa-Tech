import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdSlot from '../components/AdSlot';
import PaisaScale from '../components/PaisaScale';
import AffiliateButtons from '../components/AffiliateButtons';
import { ChevronRight, Calendar, User, Headphones } from 'lucide-react';

const AudioPage = () => {
    const audioImages = {
        realme: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800",
        oneplus: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?q=80&w=800",
        redmi: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800",
        boat: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=800",
        oppo: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=800"
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <main className="container" style={{ flex: 1, padding: '2rem 1.5rem', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
                <article>
                    <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#666', marginBottom: '1.5rem' }}>
                        <span>Home</span> <ChevronRight size={14} />
                        <span>Audio</span> <ChevronRight size={14} />
                        <span style={{ fontWeight: '600', color: '#0D1B2A' }}>Best TWS Under 3000</span>
                    </nav>

                    <h1 style={{ marginBottom: '1rem', fontSize: '2.8rem', lineHeight: '1.1', color: '#0D1B2A' }}>
                        Best TWS Earbuds Under ₹3,000 in India (Jan 2026): Audio Excellence on a Budget
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
                        <p>The sub-₹3,000 TWS market in India has seen a massive shift in 2026. Features like Active Noise Cancellation (ANC), multi-device pairing, and LDAC support—once reserved for flagship buds—have now become standard. At Paisa Tech, we've tested the latest releases to find the true "Paisa Vasool" audio gear for you.</p>

                        <AdSlot type="in-content" />

                        <h2>1. Realme Buds Air 6 Pro: The All-Rounder</h2>
                        <p>Realme continues to dominate the budget audio space with its "Pro" moniker. The Air 6 Pro brings dual drivers and 50dB ANC to a price point that's hard to beat.</p>
                        <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', height: '400px', backgroundColor: '#eee' }}>
                            <img src={audioImages.realme} alt="Realme Buds Air 6 Pro" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ display: 'flex', gap: '2rem', margin: '2rem 0', flexWrap: 'wrap' }}>
                            <div style={{ flex: 1, minWidth: '300px' }}>
                                <ul style={{ listStyle: 'none', background: '#f8f9fa', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #2E7D32' }}>
                                    <li><strong>ANC:</strong> 50dB Smart Adaptive</li>
                                    <li><strong>Battery:</strong> 40 Hours total</li>
                                    <li><strong>Drivers:</strong> 11mm + 6mm Dual Drivers</li>
                                </ul>
                            </div>
                            <PaisaScale score={9.3} />
                        </div>
                        <p>In our commute test on the Delhi Metro, the Air 6 Pro managed to drown out the chatter and track noise effectively. The sound profile is slightly bass-heavy but retains clarity.</p>
                        <AffiliateButtons
                            amazonUrl="https://www.amazon.in/s?k=Realme+Buds+Air+6+Pro"
                            flipkartUrl="https://www.flipkart.com/search?q=Realme+Buds+Air+6+Pro"
                        />

                        <h2>2. OnePlus Buds 3: The Comfort King</h2>
                        <p>OnePlus focuses on ergonomics and seamless integration. If you have an OnePlus phone, these are a no-brainer, but they shine on other devices too.</p>
                        <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', height: '350px', backgroundColor: '#eee' }}>
                            <img src={audioImages.oneplus} alt="OnePlus Buds 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <PaisaScale score={8.9} />
                        <AffiliateButtons
                            amazonUrl="https://www.amazon.in/s?k=OnePlus+Buds+3"
                            flipkartUrl="https://www.flipkart.com/search?q=OnePlus+Buds+3"
                        />

                        <AdSlot type="in-content" />

                        <h2>3. Redmi Buds 5: The Battery Beast</h2>
                        <p>With a massive battery life and reliable build, the Redmi Buds 5 are built for those who forget to charge their gadgets.</p>
                        <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', height: '350px', backgroundColor: '#eee' }}>
                            <img src={audioImages.redmi} alt="Redmi Buds 5" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <PaisaScale score={8.6} />
                        <AffiliateButtons
                            amazonUrl="https://www.amazon.in/s?k=Redmi+Buds+5"
                            flipkartUrl="https://www.flipkart.com/search?q=Redmi+Buds+5"
                        />

                        <h2>4. Boat Nirvana Ion: The Bass Specialist</h2>
                        <p>For those who love that extra 'thump' in their Bollywood or Hip-Hop tracks, Boat's Nirvana Ion offers a signature sound profile that's hard to ignore.</p>
                        <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', height: '350px', backgroundColor: '#eee' }}>
                            <img src={audioImages.boat} alt="Boat Nirvana Ion" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <PaisaScale score={8.4} />
                        <AffiliateButtons
                            amazonUrl="https://www.amazon.in/s?k=Boat+Nirvana+Ion"
                            flipkartUrl="https://www.flipkart.com/search?q=Boat+Nirvana+Ion"
                        />

                        <h2>5. Oppo Enco Air 3 Pro: The Audiophile Choice</h2>
                        <p>Using bamboo fiber diaphragms, the Enco Air 3 Pro offers a more natural and detailed soundstage compared to its synthetic competitors.</p>
                        <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', height: '350px', backgroundColor: '#eee' }}>
                            <img src={audioImages.oppo} alt="Oppo Enco Air 3 Pro" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <PaisaScale score={8.8} />
                        <AffiliateButtons
                            amazonUrl="https://www.amazon.in/s?k=Oppo+Enco+Air+3+Pro"
                            flipkartUrl="https://www.flipkart.com/search?q=Oppo+Enco+Air+3+Pro"
                        />
                    </div>
                </article>

                <aside className="sidebar-content">
                    <div style={{ backgroundColor: '#f8f9fa', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem' }}>
                        <h4 style={{ color: '#0D1B2A', display: 'flex', alignItems: 'center', gap: '8px' }}><Headphones size={20} /> Audio Tip</h4>
                        <p style={{ fontSize: '14px', marginTop: '10px' }}>To get the most out of your TWS, ensure you use the correct ear tip size for a proper seal. This significantly improves ANC and bass performance!</p>
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

export default AudioPage;
