import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Smartphone, Laptop, Headphones, Home, BookOpen } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const categories = [
        { name: 'Smartphones', icon: <Smartphone size={18} />, path: '/smartphones' },
        { name: 'Laptops', icon: <Laptop size={18} />, path: '/laptops' },
        { name: 'Audio', icon: <Headphones size={18} />, path: '/audio' },
        { name: 'Smart Home', icon: <Home size={18} />, path: '/smart-home' },
        { name: 'Buying Guides', icon: <BookOpen size={18} />, path: '/guides' },
    ];

    return (
        <header style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            borderBottom: '1px solid #eee'
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '70px'
            }}>
                <Link to="/"><Logo /></Link>

                {/* Desktop Nav */}
                <nav style={{ display: 'none', gap: '2rem' }} className="desktop-nav">
                    {categories.map((cat) => (
                        <Link
                            key={cat.name}
                            to={cat.path}
                            style={{ fontWeight: '600', color: '#0D1B2A', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}
                        >
                            {cat.icon} {cat.name}
                        </Link>
                    ))}
                </nav>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0D1B2A' }}>
                        <Search size={22} />
                    </button>
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#0D1B2A' }}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <nav style={{
                    position: 'absolute',
                    top: '70px',
                    left: 0,
                    width: '100%',
                    backgroundColor: '#fff',
                    padding: '1rem',
                    boxShadow: '0 10px 10px rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    {categories.map((cat) => (
                        <Link
                            key={cat.name}
                            to={cat.path}
                            onClick={() => setIsOpen(false)}
                            style={{ fontWeight: '600', color: '#0D1B2A', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '16px', padding: '0.5rem 0' }}
                        >
                            {cat.icon} {cat.name}
                        </Link>
                    ))}
                </nav>
            )}

            <style dangerouslySetInnerHTML={{
                __html: `
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 991px) {
          .mobile-toggle { display: block !important; }
        }
      `}} />
        </header>
    );
};

export default Header;
