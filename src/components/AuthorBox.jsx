import React from 'react';
import authorImg from '../assets/author.jpg';

const AuthorBox = () => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            padding: '2rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '16px',
            margin: '3rem 0',
            border: '1px solid #eee'
        }}>
            {/* Stable container to prevent layout shift */}
            <div style={{ width: '100px', height: '100px', flexShrink: 0, position: 'relative' }}>
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        position: 'absolute',
                        top: isHovered ? '-75px' : '0',
                        left: isHovered ? '-50px' : '0',
                        width: isHovered ? '200px' : '100px',
                        height: isHovered ? '250px' : '100px',
                        borderRadius: isHovered ? '12px' : '50%',
                        overflow: 'hidden',
                        border: '3px solid #2E7D32',
                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        boxShadow: isHovered ? '0 15px 30px rgba(0,0,0,0.3)' : 'none',
                        zIndex: isHovered ? 100 : 1,
                        cursor: 'pointer',
                        backgroundColor: '#fff'
                    }}
                >
                    <img
                        src={authorImg}
                        alt="Naveen Kumar"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                            transition: 'transform 0.3s ease'
                        }}
                    />
                </div>
            </div>
            <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: '#0D1B2A' }}>About the Author: Naveen Kumar</h4>
                <p style={{ margin: 0, fontSize: '15px', color: '#555', lineHeight: '1.6' }}>
                    Naveen is the founder and Chief Editor of Paisa Tech. With over 8 years of experience in tech journalism, he specializes in finding the best value-for-money gadgets in the Indian market. His mission is to ensure every Indian consumer gets the most "Paisa Vasool" experience.
                </p>
            </div>
        </div>
    );
};

export default AuthorBox;
