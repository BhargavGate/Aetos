import React, { useState, useEffect } from 'react';

export default function Home({ setActivePage }) {
  // Maps Ranking Visualizer States
  const [activeKeyword, setActiveKeyword] = useState('clinics');
  const [isOptimized, setIsOptimized] = useState(true);

  // Logo marquee list
  const clientLogos = [
  ];

  // Keywords for Maps ranking
  const keywords = {
    clinics: {
      title: 'Dermatology Clinic NYC',
      clientRankBefore: 17,
      clientRankAfter: 1,
      competitors: [
        { name: 'Metropolitan Derma', rank: 1, rankAfter: 2, x: 25, y: 35 },
        { name: 'City Skin Clinic', rank: 2, rankAfter: 3, x: 65, y: 20 },
        { name: 'Nouveau Wellness', rank: 3, rankAfter: 4, x: 45, y: 70 },
        { name: 'Aether Clinique (Aura Client)', rank: 17, rankAfter: 1, x: 50, y: 48 }
      ]
    },
    realestate: {
      title: 'Luxury Real Estate Miami',
      clientRankBefore: 12,
      clientRankAfter: 1,
      competitors: [
        { name: 'Gold Coast Realty', rank: 1, rankAfter: 3, x: 30, y: 60 },
        { name: 'Key Realty', rank: 2, rankAfter: 2, x: 70, y: 40 },
        { name: 'Apex Homes', rank: 3, rankAfter: 4, x: 20, y: 25 },
        { name: 'Vanguard Brokerage (Aura Client)', rank: 12, rankAfter: 1, x: 55, y: 45 }
      ]
    },
    dining: {
      title: 'Fine Dining Restaurant Soho',
      clientRankBefore: 24,
      clientRankAfter: 1,
      competitors: [
        { name: 'The Soho Bistro', rank: 1, rankAfter: 2, x: 40, y: 15 },
        { name: 'Luxe Dining Room', rank: 2, rankAfter: 3, x: 80, y: 55 },
        { name: 'Gourmet Lounge', rank: 3, rankAfter: 4, x: 60, y: 75 },
        { name: 'Mercer Tavern (Aura Client)', rank: 24, rankAfter: 1, x: 48, y: 50 }
      ]
    }
  };

  return (
    <div style={styles.container}>
      {/* 1. HERO SECTION */}
      <header style={styles.hero}>
        {/* Background glowing orb */}
        <div style={styles.orb} className="animate-pulse-slow"></div>

        {/* Floating Wireframe geometry */}
        <div style={styles.wireframeWrapper}>
          <svg width="800" height="800" viewBox="0 0 100 100" style={styles.wireframe} className="animate-spin-slow">
            <circle cx="50" cy="50" r="48" fill="none" stroke="var(--gold-base)" strokeWidth="0.08" strokeDasharray="1 3" />
            <circle cx="50" cy="50" r="36" fill="none" stroke="var(--gold-base)" strokeWidth="0.06" />
            <circle cx="50" cy="50" r="22" fill="none" stroke="var(--gold-base)" strokeWidth="0.1" strokeDasharray="4 2" />
            <path d="M50 0 L50 100 M0 50 L100 50" stroke="var(--gold-base)" strokeWidth="0.05" opacity="0.4" />
            <path d="M15 15 L85 85 M15 85 L85 15" stroke="var(--gold-base)" strokeWidth="0.05" opacity="0.2" />
          </svg>
        </div>

        {/* Hero Content */}
        <div style={styles.heroContent}>
          <h1 style={styles.title}>
            Scaling <br />
            <em style={styles.titleItalic}>Premium Brands</em> <br />
            Through Search &amp; Design
          </h1>
          <p style={styles.sub}>
            We can make it not super-specific to you salons
          </p>

          <div style={styles.ctaGroup}>
            <button onClick={() => setActivePage('contact')} className="btn-gold" style={styles.heroBtn}>
              Claim Your Free Audit
            </button>
            <button onClick={() => setActivePage('services')} className="btn-secondary" style={styles.heroBtn}>
              Explore Growth Systems
            </button>
          </div>
        </div>
      </header>

      {/* 2. TRUSTED BY MARQUEE */}
      <section style={styles.trusted}>
        <h3 style={styles.trustedHeading}>Partners in Scale</h3>
        <div className="logo-marquee-container">
          <div className="logo-marquee-track">
            {/* Double the logos to make the infinite loop scroll seamlessly */}
            {[...clientLogos, ...clientLogos].map((logo, idx) => (
              <div key={idx} className="logo-item" style={styles.logoItem}>
                <span style={{ 
                  ...styles.logoName, 
                  fontStyle: logo.style === 'italic' ? 'italic' : 'normal',
                  fontFamily: logo.style === 'italic' ? 'var(--font-serif)' : 'var(--font-sans)'
                }}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE MAPS RANKING VISUALIZER */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <p style={styles.tag}>CONVERSION METRICS</p>
          <h2 style={styles.sectionTitle}>Dominate The Local Three-Pack</h2>
          <p style={styles.sectionSub}>
            93% of high-intent clients search Google when looking for local premium services. If your business isn't in the top 3 on Google Maps, you are losing valuable inquiries to competitors.
          </p>
        </div>

        <div style={styles.mapsDemoWrapper}>
          {/* Toggle switcher */}
          <div style={styles.mapToggleRow}>
            <div style={styles.mapToggleButtonGroup} className="glass-panel">
              <button 
                onClick={() => setIsOptimized(false)} 
                style={{ ...styles.toggleButton, backgroundColor: !isOptimized ? 'rgba(234, 67, 53, 0.15)' : 'transparent', color: !isOptimized ? '#ea4335' : 'var(--text-muted)' }}
              >
                Unoptimized Listings
              </button>
              <button 
                onClick={() => setIsOptimized(true)} 
                style={{ ...styles.toggleButton, backgroundColor: isOptimized ? 'rgba(212, 180, 110, 0.15)' : 'transparent', color: isOptimized ? 'var(--gold-base)' : 'var(--text-muted)' }}
              >
                Optimized by Aetos
              </button>
            </div>
          </div>

          <div className="maps-container">
            {/* Left Sidebar Keywords */}
            <div className="maps-sidebar">
              <button 
                onClick={() => setActiveKeyword('clinics')}
                className={`maps-tab ${activeKeyword === 'clinics' ? 'active' : ''}`}
              >
                <h4>Dermatology Clinic NYC</h4>
                <p>High-value medical queries</p>
              </button>
              <button 
                onClick={() => setActiveKeyword('realestate')}
                className={`maps-tab ${activeKeyword === 'realestate' ? 'active' : ''}`}
              >
                <h4>Luxury Real Estate Miami</h4>
                <p>High-intent property seekers</p>
              </button>
              <button 
                onClick={() => setActiveKeyword('dining')}
                className={`maps-tab ${activeKeyword === 'dining' ? 'active' : ''}`}
              >
                <h4>Fine Dining Soho</h4>
                <p>Culinary destination searches</p>
              </button>
            </div>

            {/* Right Map Area */}
            <div className="maps-canvas">
              <div className="maps-glow"></div>
              {/* Map stylized abstract paths */}
              <svg width="100%" height="100%" style={styles.mapGridSvg}>
                <line x1="10%" y1="0" x2="10%" y2="100%" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="30%" y1="0" x2="30%" y2="100%" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="70%" y1="0" x2="70%" y2="100%" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="0" y1="20%" x2="100%" y2="20%" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="0" y1="80%" x2="100%" y2="80%" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                
                {/* Diagonal abstract streets */}
                <path d="M-50,150 L500,-100" stroke="rgba(212, 180, 110, 0.02)" strokeWidth="3" fill="none" />
                <path d="M200,500 L800,100" stroke="rgba(212, 180, 110, 0.02)" strokeWidth="2" fill="none" />
              </svg>

              {/* Pin Renderings */}
              {keywords[activeKeyword].competitors.map((pin, index) => {
                const isClient = pin.name.includes('(Aura Client)');
                const rankVal = isOptimized ? pin.rankAfter : pin.rank;
                const pinColorClass = isClient && isOptimized ? 'gold' : (isClient ? 'red' : 'neutral');

                return (
                  <div 
                    key={index} 
                    className={`maps-pin ${pinColorClass === 'gold' ? 'gold' : (pinColorClass === 'red' ? 'red' : '')}`}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  >
                    <div className="maps-pin-pulse"></div>
                    <div className="maps-pin-dot">
                      {rankVal}
                    </div>
                    <div className="maps-pin-label">
                      {isClient ? 'Your Business' : pin.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES PREVIEW SECTION */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <p style={styles.tag}>WHAT WE MASTER</p>
          <h2 style={styles.sectionTitle}>High-Ticket Growth Systems</h2>
          <p style={styles.sectionSub}>
            We combine high-ticket aesthetic design with search algorithms to capture ready-to-buy search traffic and automate customer onboarding.
          </p>
        </div>

        <div style={styles.servicesGrid}>
          <div className="glass-card" style={styles.serviceCard}>
            <span style={styles.serviceNum}>01</span>
            <h3 style={styles.serviceHeading}>Search Engine Dominance</h3>
            <p style={styles.serviceDesc}>
              Complete ranking optimization to secure placements in the Google Maps Local 3-Pack and organic search rankings, targeting active local buyer intent.
            </p>
          </div>

          <div className="glass-card" style={styles.serviceCard}>
            <span style={styles.serviceNum}>02</span>
            <h3 style={styles.serviceHeading}>Premium Design &amp; Web</h3>
            <p style={styles.serviceDesc}>
              Bespoke, blazingly fast digital canvases matching luxury brand guidelines. Configured to funnel searchers straight into direct scheduling.
            </p>
          </div>

          <div className="glass-card" style={styles.serviceCard}>
            <span style={styles.serviceNum}>03</span>
            <h3 style={styles.serviceHeading}>Reputation Automation</h3>
            <p style={styles.serviceDesc}>
              Structured feedback and review acquisition platforms that generate 5-star Google entries automatically, establishing instant trust.
            </p>
          </div>
        </div>
      </section>

      {/* NEW: VERTICALS WE SCALE SECTION */}
      <section style={styles.section} className="glass-panel-accent">
        <div style={styles.sectionHeader}>
          <p style={styles.tag}>OUR VERTICALS</p>
          <h2 style={styles.sectionTitle}>Engineered for Luxury &amp; Scale</h2>
          <p style={styles.sectionSub}>
            We partner with businesses demanding elite visual presentation and dominant search positioning.
          </p>
        </div>

        <div style={styles.verticalsGrid}>
          <div className="glass-card" style={styles.verticalItem}>
            <h4 style={styles.verticalTitle}>Cliniques &amp; MedSpas</h4>
            <p style={styles.verticalDesc}>Attracting high-value dermatology, dental, and cosmetic clients.</p>
          </div>
          <div className="glass-card" style={styles.verticalItem}>
            <h4 style={styles.verticalTitle}>Luxury Real Estate</h4>
            <p style={styles.verticalDesc}>Connecting premium property brokerages with high-intent buyers.</p>
          </div>
          <div className="glass-card" style={styles.verticalItem}>
            <h4 style={styles.verticalTitle}>Hospitality &amp; Dining</h4>
            <p style={styles.verticalDesc}>Driving reservation volume and local culinary destination rankings.</p>
          </div>
          <div className="glass-card" style={styles.verticalItem}>
            <h4 style={styles.verticalTitle}>Luxury Salons &amp; Spas</h4>
            <p style={styles.verticalDesc}>Filling appointment grids for hair, beauty, and body therapies.</p>
          </div>
          <div className="glass-card" style={styles.verticalItem}>
            <h4 style={styles.verticalTitle}>Startups &amp; Services</h4>
            <p style={styles.verticalDesc}>Positioning high-growth platforms and firms as market authorities.</p>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section style={styles.processSection}>
        <div style={styles.sectionHeader}>
          <p style={styles.tag}>THE BLUEPRINT</p>
          <h2 style={styles.sectionTitle}>The Aura Scale Framework</h2>
        </div>

        <div style={styles.timeline}>
          <div style={styles.timelineItem}>
            <div style={styles.timelineNumber}>I</div>
            <div style={styles.timelineContent}>
              <h3 style={styles.timelineTitle}>Brand Audit &amp; Search Discovery</h3>
              <p style={styles.timelineDesc}>
                We run a diagnostic scan of your regional search positioning, competitor gaps, and website performance blocks to target growth opportunities.
              </p>
            </div>
          </div>

          <div style={styles.timelineItem}>
            <div style={styles.timelineNumber}>II</div>
            <div style={styles.timelineContent}>
              <h3 style={styles.timelineTitle}>Premium Web Design &amp; Copy</h3>
              <p style={styles.timelineDesc}>
                Our creative team replaces standard layouts with bespoke, high-end digital canvases that elevate brand value and drive user conversions.
              </p>
            </div>
          </div>

          <div style={styles.timelineItem}>
            <div style={styles.timelineNumber}>III</div>
            <div style={styles.timelineContent}>
              <h3 style={styles.timelineTitle}>SEO Domination &amp; Citation Sync</h3>
              <p style={styles.timelineDesc}>
                We clean local citations, build authoritative link profiles, and optimize map triggers to rank your business for top search terms.
              </p>
            </div>
          </div>

          <div style={styles.timelineItem}>
            <div style={styles.timelineNumber}>IV</div>
            <div style={styles.timelineContent}>
              <h3 style={styles.timelineTitle}>Reputation Loops &amp; Scale</h3>
              <p style={styles.timelineDesc}>
                We deploy automated review request funnels and target paid customer acquisition campaigns to sustain client inflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section style={styles.ctaBanner} className="glass-panel">
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaHeading}>Ready to Scale Your Inbound Revenue?</h2>
          <p style={styles.ctaSub}>
            Reserve a complimentary 15-minute Digital Discovery Session. We'll run a custom local search audit, identify website leakage, and lay out your roadmap to Rank #1.
          </p>
          <button onClick={() => setActivePage('contact')} className="btn-gold" style={styles.ctaBtn}>
            Claim Your Free Audit
          </button>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: '0 3rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  hero: {
    position: 'relative',
    minHeight: '85vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '4rem 0',
    overflow: 'hidden',
  },
  orb: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '450px',
    height: '450px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(212, 180, 110, 0.08) 0%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: 1,
  },
  wireframeWrapper: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    opacity: 0.25,
    zIndex: 2,
  },
  wireframe: {
    width: '650px',
    height: '650px',
  },
  heroContent: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '850px',
    marginTop: '2rem',
  },
  title: {
    fontSize: '4.85rem',
    lineHeight: '1.15',
    marginBottom: '2rem',
    fontFamily: 'var(--font-serif)',
  },
  titleItalic: {
    fontStyle: 'italic',
    color: 'var(--gold-base)',
    display: 'inline-block',
    transform: 'skewX(-4deg)',
    fontFamily: 'var(--font-serif)',
  },
  sub: {
    fontSize: '1.25rem',
    color: 'var(--text-muted)',
    maxWidth: '620px',
    margin: '0 auto 3rem auto',
    fontFamily: 'var(--font-sans)',
  },
  ctaGroup: {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  heroBtn: {
    minWidth: '220px',
  },
  floatingCard: {
    position: 'absolute',
    padding: '1rem 1.5rem',
    borderRadius: '12px',
    border: '1px solid var(--border-color)',
    pointerEvents: 'none',
    zIndex: 15,
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.25rem',
  },
  starText: {
    fontFamily: 'var(--font-sans)',
    fontWeight: '700',
    color: 'var(--gold-base)',
    fontSize: '1rem',
  },
  stars: {
    color: 'var(--gold-base)',
    letterSpacing: '1px',
    fontSize: '0.85rem',
  },
  cardVal: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.85rem',
    fontStyle: 'italic',
    color: 'var(--gold-base)',
    fontWeight: '700',
    marginBottom: '0.1rem',
  },
  cardText: {
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  rankingIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  greenDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#34a853',
    boxShadow: '0 0 8px #34a853',
  },
  rankingText: {
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'var(--text-secondary)',
  },
  trusted: {
    padding: '3rem 0',
    borderY: '1px solid var(--border-color)',
    borderTop: '1px solid var(--border-color)',
    borderBottom: '1px solid var(--border-color)',
    marginBottom: '6rem',
  },
  trustedHeading: {
    textAlign: 'center',
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    fontSize: '1.15rem',
    color: 'var(--text-muted)',
    marginBottom: '2rem',
  },
  logoItem: {
    margin: '0 4rem',
  },
  logoName: {
    fontSize: '1.35rem',
    letterSpacing: '0.08em',
    color: 'var(--text-secondary)',
  },
  section: {
    padding: '6rem 0',
  },
  sectionHeader: {
    textAlign: 'center',
    maxWidth: '750px',
    margin: '0 auto 4rem auto',
  },
  tag: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '0.25em',
    color: 'var(--gold-base)',
    marginBottom: '1rem',
  },
  sectionTitle: {
    fontSize: '3.25rem',
    lineHeight: '1.2',
    marginBottom: '1.5rem',
  },
  sectionSub: {
    fontSize: '1.05rem',
    color: 'var(--text-muted)',
  },
  mapsDemoWrapper: {
    margin: '0 auto',
    maxWidth: '950px',
  },
  mapToggleRow: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  },
  mapToggleButtonGroup: {
    display: 'flex',
    padding: '0.25rem',
    borderRadius: 'var(--border-radius-pill)',
  },
  toggleButton: {
    border: 'none',
    padding: '0.5rem 1.5rem',
    borderRadius: 'var(--border-radius-pill)',
    fontSize: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'var(--transition-fast)',
  },
  mapGridSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2.5rem',
  },
  serviceCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  serviceNum: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.5rem',
    fontStyle: 'italic',
    color: 'var(--gold-base)',
    opacity: 0.5,
  },
  serviceHeading: {
    fontSize: '1.75rem',
  },
  serviceDesc: {
    fontSize: '0.95rem',
    color: 'var(--text-muted)',
  },
  processSection: {
    padding: '6rem 0',
  },
  timeline: {
    maxWidth: '850px',
    margin: '0 auto',
    position: 'relative',
    paddingLeft: '2.5rem',
  },
  timelineItem: {
    position: 'relative',
    paddingBottom: '4rem',
  },
  timelineNumber: {
    position: 'absolute',
    left: '-2.5rem',
    top: '0',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    border: '1px solid var(--gold-base)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-serif)',
    fontSize: '0.8rem',
    fontStyle: 'italic',
    color: 'var(--gold-base)',
    backgroundColor: 'var(--bg-primary)',
  },
  timelineContent: {
    paddingLeft: '1.5rem',
  },
  timelineTitle: {
    fontSize: '1.85rem',
    marginBottom: '0.75rem',
  },
  timelineDesc: {
    fontSize: '0.98rem',
    color: 'var(--text-muted)',
  },
  ctaBanner: {
    margin: '6rem auto',
    padding: '4.5rem 3rem',
    borderRadius: 'var(--border-radius-lg)',
    textAlign: 'center',
    maxWidth: '1000px',
    position: 'relative',
    overflow: 'hidden',
  },
  ctaContent: {
    position: 'relative',
    zIndex: 5,
    maxWidth: '700px',
    margin: '0 auto',
  },
  ctaHeading: {
    fontSize: '2.85rem',
    marginBottom: '1.5rem',
  },
  ctaSub: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    marginBottom: '2.5rem',
    lineHeight: '1.6',
  },
  ctaBtn: {
    minWidth: '240px',
  },
  verticalsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  },
  verticalItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    padding: '2.5rem',
  },
  verticalTitle: {
    fontSize: '1.5rem',
    fontFamily: 'var(--font-serif)',
    color: 'var(--text-primary)',
  },
  verticalDesc: {
    fontSize: '0.95rem',
    color: 'var(--text-muted)',
    lineHeight: '1.5',
  },
};
