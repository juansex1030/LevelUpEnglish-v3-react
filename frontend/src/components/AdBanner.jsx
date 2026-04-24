import React, { useEffect, useRef } from 'react';
import './AdBanner.css';

/**
 * AdBanner — Google AdSense placeholder component.
 *
 * HOW TO ACTIVATE ADSENSE:
 * 1. Get approved by Google AdSense (adsense.google.com)
 * 2. Add this script to your index.html <head>:
 *    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossorigin="anonymous"></script>
 * 3. Replace ADSENSE_CLIENT and the data-ad-slot values below with your real IDs.
 * 4. Set VITE_ADSENSE_ENABLED=true in your .env
 */

const ADSENSE_CLIENT = 'ca-pub-7953629056689148'; // ← Updated with your ID
const IS_PRODUCTION = import.meta.env.PROD && import.meta.env.VITE_ADSENSE_ENABLED === 'true';

const AD_SLOTS = {
    horizontal: 'XXXXXXXXXX',   // ← Replace with your Ad Slot IDs
    square:     'XXXXXXXXXX',
    sidebar:    'XXXXXXXXXX',
};

const AD_CONFIG = {
    horizontal: { width: '100%', height: '90px',  label: 'Leaderboard (728×90)' },
    square:     { width: '300px', height: '250px', label: 'Medium Rectangle (300×250)' },
    sidebar:    { width: '160px', height: '600px', label: 'Wide Skyscraper (160×600)' },
};

const AdBanner = ({ type = 'horizontal', className = '' }) => {
    const adRef = useRef(null);
    const config = AD_CONFIG[type] || AD_CONFIG.horizontal;

    useEffect(() => {
        if (IS_PRODUCTION && adRef.current) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.warn('[AdBanner] AdSense push error:', e);
            }
        }
    }, []);

    // --- PRODUCTION: Real AdSense ad ---
    if (IS_PRODUCTION) {
        return (
            <div className={`ad-banner-wrapper ad-${type} ${className}`}>
                <span className="ad-label">Publicidad</span>
                <ins
                    ref={adRef}
                    className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client={ADSENSE_CLIENT}
                    data-ad-slot={AD_SLOTS[type]}
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                />
            </div>
        );
    }

    // --- DEVELOPMENT: Visual placeholder ---
    return (
        <div
            className={`ad-banner-wrapper ad-${type} ad-placeholder ${className}`}
            style={{ width: config.width, height: config.height }}
            title={`AdSense slot: ${config.label}`}
        >
            <span className="ad-label">Publicidad</span>
            <div className="ad-placeholder-inner">
                <i className="bi bi-megaphone-fill"></i>
                <span>{config.label}</span>
                <small>Google AdSense</small>
            </div>
        </div>
    );
};

export default AdBanner;
