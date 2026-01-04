import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdSlot from '../components/AdSlot';
import { ChevronRight, Calendar, User, BookOpen, CheckCircle } from 'lucide-react';
import authorImg from '../assets/author.jpg';
import AuthorBox from '../components/AuthorBox';

const BuyingGuidesPage = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <main className="container" style={{ flex: 1, padding: '2rem 1.5rem', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
                <article>
                    <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#666', marginBottom: '1.5rem' }}>
                        <span>Home</span> <ChevronRight size={14} />
                        <span>Buying Guides</span> <ChevronRight size={14} />
                        <span style={{ fontWeight: '600', color: '#0D1B2A' }}>Smartphone Buying Guide 2026</span>
                    </nav>

                    <h1 style={{ marginBottom: '1rem', fontSize: '2.8rem', lineHeight: '1.1', color: '#0D1B2A' }}>
                        The Ultimate Smartphone Buying Guide (Jan 2026): Don't Overpay for Specs You Don't Need
                    </h1>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '14px', color: '#666', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #2E7D32' }}>
                                <img src={authorImg} alt="Author" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            By <strong>Naveen Kumar</strong>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Calendar size={16} /> Updated: January 4, 2026
                        </div>
                    </div>

                    <AdSlot type="leaderboard" />

                    <div className="article-body" style={{ fontSize: '18px', lineHeight: '1.8', color: '#333' }}>
                        <p>Buying a smartphone in 2026 is no longer about just checking the RAM and Storage. With AI integration, computational photography, and 5G optimization reaching maturity, the decision-making process has become more nuanced. This guide will help you navigate the "Paisa Vasool" landscape without falling for marketing gimmicks.</p>

                        <div style={{ margin: '2.5rem 0', padding: '2rem', background: '#0D1B2A', color: '#fff', borderRadius: '16px' }}>
                            <h3 style={{ color: '#2E7D32', marginBottom: '1rem' }}>The 3 Pillars of a 2026 Smartphone</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', gap: '12px' }}>
                                    <CheckCircle color="#2E7D32" />
                                    <span><strong>On-Device AI:</strong> Ensure the processor has an NPU (Neural Processing Unit) capable of handling real-time translation and AI editing.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '12px' }}>
                                    <CheckCircle color="#2E7D32" />
                                    <span><strong>Thermal Efficiency:</strong> Skip phones that throttle. Look for "VC Cooling" or "Graphene Sheets" in the spec sheet.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '12px' }}>
                                    <CheckCircle color="#2E7D32" />
                                    <span><strong>Software Commitment:</strong> In 2026, 3 years of OS updates should be the bare minimum for any phone over ₹15,000.</span>
                                </li>
                            </ul>
                        </div>

                        <h2>1. The Display: Beyond Just Hertz</h2>
                        <p>While 120Hz is the standard, 2026 is the year of <strong>LTPO</strong>. LTPO displays can drop their refresh rate to 1Hz to save battery. If your budget allows, prioritize LTPO over a slightly faster processor.</p>
                        <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', height: '350px', backgroundColor: '#eee' }}>
                            <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800" alt="Smartphone Display" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>

                        <h2>2. The Camera: Pixels vs. Processing</h2>
                        <p>Don't be fooled by 200MP sensors on budget phones. A well-optimized 50MP sensor with a larger physical size often takes better photos. Look for <strong>OIS (Optical Image Stabilization)</strong>—it's the single most important factor for clear night shots and steady videos.</p>

                        <AdSlot type="in-content" />

                        <h2>3. Performance: The NPU Era</h2>
                        <p>In 2026, we measure performance by how well a phone handles AI tasks. Processors like the Snapdragon 8 Gen 5 or the MediaTek Dimensity 9400 lead the pack, but even budget chips like the Helio G100 (AI Edition) offer decent performance for daily tasks.</p>

                        <div style={{ backgroundColor: '#f0fff4', border: '1px solid #c6f6d5', padding: '1.5rem', borderRadius: '12px', marginTop: '3rem' }}>
                            <h3 style={{ color: '#2E7D32', marginBottom: '0.5rem' }}>Pro Tip: The Refurbished Market</h3>
                            <p>If you're on a tight budget, a 2-year-old flagship often offers better value than a brand-new budget phone. Just ensure the battery health is above 90%!</p>
                        </div>

                        <AuthorBox />
                    </div>
                </article>

                <aside className="sidebar-content">
                    <div style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', padding: '0', borderRadius: '16px', marginBottom: '2rem', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        <div style={{ backgroundColor: '#0D1B2A', color: '#fff', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <BookOpen size={24} color="#4ADE80" />
                            <h4 style={{ margin: 0, fontSize: '1.2rem' }}>Quick Action Plan</h4>
                        </div>
                        <div style={{ padding: '1.5rem' }}>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                {[
                                    { step: 1, text: "Set a strict maximum budget" },
                                    { step: 2, text: "Prioritize Screen vs. Camera" },
                                    { step: 3, text: "Check service center locations" },
                                    { step: 4, text: "Read long-term user reviews" }
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                        <span style={{
                                            backgroundColor: '#E8F5E9',
                                            color: '#2E7D32',
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '12px',
                                            fontWeight: '800',
                                            flexShrink: 0,
                                            marginTop: '2px'
                                        }}>{item.step}</span>
                                        <span style={{ fontSize: '15px', color: '#333', lineHeight: '1.4', fontWeight: '500' }}>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
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

export default BuyingGuidesPage;
