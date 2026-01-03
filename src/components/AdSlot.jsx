import React from 'react';

const AdSlot = ({ type, height, width, style = {} }) => {
    const containerStyle = {
        backgroundColor: '#f9f9f9',
        border: '1px solid #eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2rem auto',
        color: '#999',
        fontSize: '12px',
        position: 'relative',
        overflow: 'hidden',
        ...style
    };

    if (type === 'leaderboard') {
        return (
            <div style={{ ...containerStyle, width: '100%', maxWidth: '728px', height: '90px' }}>
                <span>ADVERTISEMENT - 728x90</span>
            </div>
        );
    }

    if (type === 'skyscraper') {
        return (
            <div style={{ ...containerStyle, width: '300px', height: '600px', position: 'sticky', top: '90px' }}>
                <span>ADVERTISEMENT - 300x600</span>
            </div>
        );
    }

    if (type === 'in-content') {
        return (
            <div style={{ ...containerStyle, width: '100%', height: '250px' }}>
                <span>ADVERTISEMENT - IN-CONTENT</span>
            </div>
        );
    }

    return (
        <div style={{ ...containerStyle, width: width || '100%', height: height || '100px' }}>
            <span>ADVERTISEMENT</span>
        </div>
    );
};

export default AdSlot;
