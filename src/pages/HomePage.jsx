import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdSlot from '../components/AdSlot';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Star } from 'lucide-react';
import motoImg from '../assets/moto_g67.png';

const HomePage = () => {
    const featuredArticle = {
        title: "Top 5 Best 5G Smartphones Under ₹15,000 in India (Jan 2026)",
        excerpt: "Looking for the ultimate value? We've tested the latest budget 5G phones to find the true 'Paisa Vasool' champions.",
        image: motoImg,
        category: "Smartphones",
        date: "Jan 4, 2026"
    };

    const trendingArticles = [
        { id: 2, title: "Best Student Laptops for 2026: Performance on a Budget", category: "Laptops", path: "/laptops" },
        { id: 3, title: "How to Build a Smart Home for Under ₹10,000", category: "Smart Home", path: "/smart-home" },
        { id: 4, title: "The Ultimate Smartphone Buying Guide 2026", category: "Buying Guides", path: "/guides" },
    ];

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <main style={{ flex: 1 }}>
                {/* Hero Section */}
                <section style={{ backgroundColor: '#f8f9fa', padding: '4rem 0' }}>
                    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <span style={{ backgroundColor: '#2E7D32', color: '#fff', padding: '4px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' }}>
                                {featuredArticle.category}
                            </span>
                            <h1 style={{ marginTop: '1rem', fontSize: '3rem', lineHeight: '1.2' }}>{featuredArticle.title}</h1>
                            <p style={{ fontSize: '1.2rem', color: '#555', margin: '1.5rem 0' }}>{featuredArticle.excerpt}</p>
                            <Link to="/best-5g-phones-under-15000" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                backgroundColor: '#0D1B2A',
                                color: '#fff',
                                padding: '1rem 2rem',
                                borderRadius: '8px',
                                fontWeight: '700',
                                transition: 'gap 0.2s'
                            }}>
                                Read Full Guide <ArrowRight size={20} />
                            </Link>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div style={{ width: '100%', height: '400px', backgroundColor: '#ddd', borderRadius: '16px', overflow: 'hidden' }}>
                                <img src={featuredArticle.image} alt="Tech" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', backgroundColor: '#2E7D32', color: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                                <Star size={32} fill="white" />
                                <div style={{ marginTop: '8px', fontWeight: '800' }}>PAISA VASOOL<br />VERDICT 2026</div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <AdSlot type="leaderboard" />

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem', margin: '4rem 0' }}>
                        {/* Latest Grid */}
                        <div>
                            <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
                                <TrendingUp color="#2E7D32" /> Latest in Tech Value
                            </h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} style={{ borderBottom: '1px solid #eee', paddingBottom: '1.5rem' }}>
                                        <div style={{ height: '200px', backgroundColor: '#eee', borderRadius: '8px', marginBottom: '1rem' }}></div>
                                        <h3 style={{ fontSize: '1.25rem' }}>Sample Buying Guide Title for 2026: Expert Tech Tips</h3>
                                        <p style={{ color: '#666', fontSize: '14px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Find out why this is the best value...</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Side Column */}
                        <aside>
                            <div style={{ backgroundColor: '#0D1B2A', color: '#fff', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
                                <h3>Trending Topics</h3>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                                    {trendingArticles.map(article => (
                                        <li key={article.id} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                            <span style={{ fontSize: '11px', color: '#2E7D32', fontWeight: '800' }}>{article.category}</span>
                                            <Link to={article.path} style={{ fontWeight: '600', fontSize: '14px', lineHeight: '1.4', color: '#0D1B2A', textDecoration: 'none' }}>{article.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <AdSlot type="skyscraper" />
                        </aside>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default HomePage;
