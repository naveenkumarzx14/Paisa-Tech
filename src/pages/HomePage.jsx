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
        { id: 1, title: "10 Best 5G Phones Under ₹15k", category: "Smartphones", path: "/best-5g-phones-under-15000", views: "125k", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=200" },
        { id: 2, title: "Best Student Laptops for 2026", category: "Laptops", path: "/laptops", views: "98k", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=200" },
        { id: 3, title: "Smart Home on a Budget", category: "Smart Home", path: "/smart-home", views: "85k", image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=200" },
        { id: 4, title: "Top Noise Cancelling Earbuds", category: "Audio", path: "/audio", views: "72k", image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=200" },
    ];

    const latestValuePicks = [
        {
            id: 1,
            title: "Best True Wireless Earbuds Under ₹2000 (2026 Edition)",
            excerpt: "Don't overpay for great sound. We've ranked the best budget TWS from Boat, Realme, and Oppo.",
            image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800",
            path: "/audio",
            category: "Audio"
        },
        {
            id: 2,
            title: "Top 5 Laptops for Students & Coding",
            excerpt: "Performance meets portability. Check out our top picks from Acer, HP, and Lenovo.",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800",
            path: "/laptops",
            category: "Laptops"
        },
        {
            id: 3,
            title: "Smart Home Starter Kit: Essential Gadgets",
            excerpt: "Transform your home with these simple, affordable smart plugs, bulbs, and cameras.",
            image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800",
            path: "/smart-home",
            category: "Smart Home"
        },
        {
            id: 4,
            title: "Smartphone Buying Guide: What Matters in 2026?",
            excerpt: "Processor, Camera, or Battery? We breakdown what you should actually look for.",
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800",
            path: "/guides",
            category: "Guides"
        }
    ];

    const expertReviews = [
        {
            id: 1,
            product: "Samsung Galaxy S24",
            verdict: "Best Android All-Rounder",
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800",
            path: "/smartphones"
        },
        {
            id: 2,
            product: "MacBook Air M2",
            verdict: "Unbeatable Battery Life",
            rating: 5,
            image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800",
            path: "/laptops"
        },
        {
            id: 3,
            product: "Sony WH-1000XM5",
            verdict: "Silence King",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800",
            path: "/audio"
        }
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
                                {latestValuePicks.map(item => (
                                    <div key={item.id} style={{ borderBottom: '1px solid #eee', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                                        <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <div style={{ height: '200px', backgroundColor: '#eee', borderRadius: '8px', marginBottom: '1rem', overflow: 'hidden' }}>
                                                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                                                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                                />
                                            </div>
                                            <span style={{ fontSize: '11px', color: '#2E7D32', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>{item.category}</span>
                                            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', lineHeight: '1.3' }}>{item.title}</h3>
                                            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>{item.excerpt}</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Side Column */}
                        <aside>
                            <div style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #1a3c5a 100%)', color: '#fff', padding: '2rem', borderRadius: '16px', marginBottom: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
                                <h3 style={{ borderBottom: '2px solid #2E7D32', paddingBottom: '0.8rem', marginBottom: '1.5rem', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <TrendingUp color="#4ADE80" /> Trending Topics
                                </h3>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', listStyle: 'none', padding: 0 }}>
                                    {trendingArticles.map((article, index) => (
                                        <li key={article.id} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                            <span style={{ fontSize: '1.8rem', fontWeight: '900', color: '#FFD700', minWidth: '24px', lineHeight: 1, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>{index + 1}</span>
                                            <Link to={article.path} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit', flex: 1 }}>
                                                <div style={{ width: '60px', height: '60px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, border: '2px solid rgba(255,255,255,0.1)' }}>
                                                    <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                                    <span style={{ fontSize: '10px', color: '#4ADE80', fontWeight: '800', letterSpacing: '0.5px' }}>{article.category}</span>
                                                    <span style={{ fontWeight: '600', fontSize: '14px', lineHeight: '1.3', color: '#fff', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>
                                                        {article.title}
                                                    </span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <AdSlot type="skyscraper" />
                        </aside>
                    </div>

                    {/* Expert Reviews Section */}
                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
                            <Star color="#2E7D32" fill="#2E7D32" /> Expert Reviews
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            {expertReviews.map(review => (
                                <Link key={review.id} to={review.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div style={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #eee', transition: 'transform 0.2s' }}
                                        onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                                        onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                                    >
                                        <div style={{ height: '180px', position: 'relative' }}>
                                            <img src={review.image} alt={review.product} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'rgba(0,0,0,0.8)', color: '#FFD700', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                <Star size={12} fill="#FFD700" /> {review.rating}/5
                                            </div>
                                        </div>
                                        <div style={{ padding: '1.5rem' }}>
                                            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{review.product}</h3>
                                            <span style={{ fontSize: '13px', color: '#2E7D32', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                                {review.verdict}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default HomePage;
