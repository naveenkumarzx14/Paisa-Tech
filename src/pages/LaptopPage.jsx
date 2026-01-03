import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdSlot from '../components/AdSlot';
import PaisaScale from '../components/PaisaScale';
import AffiliateButtons from '../components/AffiliateButtons';
import asusImg from '../assets/asus_vivobook.png';
import { ChevronRight, Calendar, User, Laptop } from 'lucide-react';

const LaptopPage = () => {
    const laptopImages = {
        acer: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800",
        hp: "https://images.unsplash.com/photo-1589561253898-768105ca91a8?q=80&w=800",
        lenovo: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800",
        msi: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800"
    };
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <main className="container" style={{ flex: 1, padding: '2rem 1.5rem', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
                <article>
                    <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#666', marginBottom: '1.5rem' }}>
                        <span>Home</span> <ChevronRight size={14} />
                        <span>Laptops</span> <ChevronRight size={14} />
                        <span style={{ fontWeight: '600', color: '#0D1B2A' }}>Best Student Laptops 2026</span>
                    </nav>

                    <h1 style={{ marginBottom: '1rem', fontSize: '2.8rem', lineHeight: '1.1', color: '#0D1B2A' }}>
                        Best Student Laptops in India (Jan 2026): Performance on a Budget
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
                        <p>Back-to-college season in 2026 looks very different from just a few years ago. With AI-integrated chips and thermal efficiencies reaching new heights, you no longer need to spend a fortune to get a laptop that lasts through a day of lectures, coding sessions, and Netflix binging. At Paisa Tech, we've Rounded up the best "Paisa Vasool" laptops for Indian students.</p>

                        <AdSlot type="in-content" />

                        <h2>1. ASUS Vivobook Go 15 (2026): The All-Rounder</h2>
                        <p>ASUS has mastered the art of the student laptop. The Go 15 OLED variant offers a display usually reserved for laptops twice its price.</p>
                        <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', height: '400px', backgroundColor: '#eee' }}>
                            <img src={asusImg} alt="ASUS Vivobook Go 15" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ display: 'flex', gap: '2rem', margin: '2rem 0', flexWrap: 'wrap' }}>
                            <div style={{ flex: 1, minWidth: '300px' }}>
                                <ul style={{ listStyle: 'none', background: '#f8f9fa', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #2E7D32' }}>
                                    <li><strong>Processor:</strong> Ryzen 5 7000 Series</li>
                                    <li><strong>RAM:</strong> 16GB LPDDR5</li>
                                    <li><strong>Display:</strong> 15.6" FHD OLED (500 nits)</li>
                                </ul>
                            </div>
                            <PaisaScale score={9.2} />
                        </div>
                        <p>During our 8-hour "Library Stress Test," the Vivobook maintained its cool and only dipped to 20% battery. It's built for those long study sessions.</p>
                        <AffiliateButtons
                            amazonUrl="https://www.amazon.in/s?k=ASUS+Vivobook+Go+15+2026"
                            flipkartUrl="https://www.flipkart.com/search?q=ASUS+Vivobook+Go+15+2026"
                        />

                        <h2>2. Acer Swift Air: The Ultra-Portable</h2>
                        <p>Weighing in at just 1.1kg, the Swift Air is designed for the student who is always on the move between blocks.</p>
                        <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', height: '350px', backgroundColor: '#eee' }}>
                            <img src={laptopImages.acer} alt="Acer Swift Air" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <PaisaScale score={8.8} />
                        <AffiliateButtons
                            amazonUrl="https://www.amazon.in/s?k=Acer+Swift+Air"
                            flipkartUrl="https://www.flipkart.com/search?q=Acer+Swift+Air"
                        />

                        <AdSlot type="in-content" />

                        <h2>3. HP Laptop 15s: The Keyboard King</h2>
                        <p>If your degree involves writing thousands of words, HP's tactical keyboard feedback is worth every rupee.</p>
                        <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', height: '350px', backgroundColor: '#eee' }}>
                            <img src={laptopImages.hp} alt="HP Laptop 15s" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <PaisaScale score={8.5} />
                        <AffiliateButtons
                            amazonUrl="https://www.amazon.in/s?k=HP+Laptop+15s"
                            flipkartUrl="https://www.flipkart.com/search?q=HP+Laptop+15s"
                        />

                        <h2>4. Lenovo IdeaPad Slim 3: The Durability Champion</h2>
                        <p>With MIL-STD 810H durability ratings, this is the laptop that survives the accidental backpack drop.</p>
                        <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', height: '350px', backgroundColor: '#eee' }}>
                            <img src={laptopImages.lenovo} alt="Lenovo IdeaPad" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <PaisaScale score={8.7} />
                        <AffiliateButtons
                            amazonUrl="https://www.amazon.in/s?k=Lenovo+IdeaPad+Slim+3"
                            flipkartUrl="https://www.flipkart.com/search?q=Lenovo+IdeaPad+Slim+3"
                        />

                        <h2>5. MSI Modern 14: The Creative Entry</h2>
                        <p>For budding video editors and designers, the 100% sRGB color accuracy on the Modern 14 is a game changer in the budget tier.</p>
                        <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', height: '350px', backgroundColor: '#eee' }}>
                            <img src={laptopImages.msi} alt="MSI Modern 14" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <PaisaScale score={8.3} />
                        <AffiliateButtons
                            amazonUrl="https://www.amazon.in/s?k=MSI+Modern+14"
                            flipkartUrl="https://www.flipkart.com/search?q=MSI+Modern+14"
                        />
                    </div>
                </article>

                <aside className="sidebar-content">
                    <div style={{ backgroundColor: '#f8f9fa', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem' }}>
                        <h4 style={{ color: '#0D1B2A', display: 'flex', alignItems: 'center', gap: '8px' }}><Laptop size={20} /> Buyer's Tip</h4>
                        <p style={{ fontSize: '14px', marginTop: '10px' }}>Always check for "Student Discounts" on official brand websites. In 2026, many brands offer an extra 5-7% off + free accidental damage protection for students!</p>
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
        }
      `}} />
        </div>
    );
};

export default LaptopPage;
