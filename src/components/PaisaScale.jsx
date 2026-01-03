import React from 'react';

const PaisaScale = ({ score }) => {
    const normalizedScore = Math.min(Math.max(score, 0), 10);
    const angle = (normalizedScore / 10) * 180 - 180;

    let color = '#d32f2f'; // Red
    if (normalizedScore >= 4) color = '#ffa000'; // Amber
    if (normalizedScore >= 7) color = '#388e3c'; // Green
    if (normalizedScore >= 8) color = '#2E7D32'; // Bright Green (Vasool)

    const radius = 80;
    const centerX = 100;
    const centerY = 100;

    return (
        <div className="paisa-scale" style={{ textAlign: 'center', width: '200px' }}>
            <svg width="200" height="120" viewBox="0 0 200 120">
                {/* Background arc */}
                <path
                    d="M 20 100 A 80 80 0 0 1 180 100"
                    fill="none"
                    stroke="#E0E0E0"
                    strokeWidth="15"
                    strokeLinecap="round"
                />
                {/* Fill arc */}
                <path
                    d={`M 20 100 A 80 80 0 0 1 ${centerX + radius * Math.cos((angle + 180) * Math.PI / 180)} ${centerY + radius * Math.sin((angle + 180) * Math.PI / 180)}`}
                    fill="none"
                    stroke={color}
                    strokeWidth="15"
                    strokeLinecap="round"
                />

                {/* Center score */}
                <text x="100" y="95" textAnchor="middle" style={{ fontSize: '28px', fontWeight: '800', fill: '#0D1B2A' }}>
                    {normalizedScore}
                </text>
                <text x="100" y="115" textAnchor="middle" style={{ fontSize: '12px', fontWeight: '600', fill: color }}>
                    {normalizedScore >= 8 ? 'PAISA VASOOL' : normalizedScore >= 5 ? 'GOOD VALUE' : 'OVERPRICED'}
                </text>
            </svg>
        </div>
    );
};

export default PaisaScale;
