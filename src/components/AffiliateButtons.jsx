import React from 'react';
import { ShoppingCart } from 'lucide-react';

const AffiliateButtons = ({ amazonUrl, flipkartUrl }) => {
    const btnStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '12px 24px',
        borderRadius: '8px',
        fontWeight: '700',
        fontSize: '15px',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        border: 'none',
        width: '100%',
        textAlign: 'center'
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '1.5rem 0' }}>
            {amazonUrl && (
                <a
                    href={amazonUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ ...btnStyle, backgroundColor: '#FF9900', color: '#000' }}
                >
                    <ShoppingCart size={18} /> Check Price on Amazon
                </a>
            )}
            {flipkartUrl && (
                <a
                    href={flipkartUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    style={{ ...btnStyle, backgroundColor: '#2874F0', color: '#fff' }}
                >
                    <ShoppingCart size={18} /> Check Price on Flipkart
                </a>
            )}
        </div>
    );
};

export default AffiliateButtons;
