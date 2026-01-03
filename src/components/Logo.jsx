import React from 'react';

const Logo = () => {
    return (
        <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Stylized Rupee symbol */}
                <path d="M30 25 H70" stroke="#2E7D32" strokeWidth="6" strokeLinecap="round" />
                <path d="M30 38 H70" stroke="#2E7D32" strokeWidth="6" strokeLinecap="round" />
                <path d="M70 25 C70 45 35 45 35 60 C35 75 70 75 70 75" stroke="#0D1B2A" strokeWidth="8" strokeLinecap="round" fill="none" />
                <path d="M35 60 L65 90" stroke="#0D1B2A" strokeWidth="8" strokeLinecap="round" />

                {/* Circuit traces on bars */}
                <circle cx="30" cy="25" r="3" fill="#2E7D32" />
                <circle cx="70" cy="25" r="3" fill="#2E7D32" />
                <circle cx="30" cy="38" r="3" fill="#2E7D32" />
                <circle cx="70" cy="38" r="3" fill="#2E7D32" />

                <path d="M45 25 V18 Q45 15 48 15 H52 Q55 15 55 18 V25" stroke="#2E7D32" strokeWidth="2" />
                <path d="M45 38 V45 Q45 48 48 48 H52 Q55 48 55 45 V38" stroke="#2E7D32" strokeWidth="2" />
            </svg>
            <span style={{ fontSize: '24px', fontWeight: '800', color: '#0D1B2A', letterSpacing: '-0.5px' }}>
                PAISA<span style={{ color: '#2E7D32' }}>TECH</span>
            </span>
        </div>
    );
};

export default Logo;
