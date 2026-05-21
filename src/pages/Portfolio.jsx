import React, { useState, useRef, useEffect } from 'react';

// Draggable Before/After Image Comparison Slider Component
function BeforeAfterSlider({ beforeImg, afterImg, beforeLabel = 'BEFORE AURA & RANK', afterLabel = 'AFTER AURA & RANK' }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    
    // Constraint boundaries
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    
    setSliderPosition(position);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  // Attach global mouseup event when dragging
  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="slider-container"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      style={{ cursor: isDragging ? 'ew-resize' : 'default' }}
    >
      {/* Before Image Layer */}
      <div 
        className="slider-before"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: `${sliderPosition}%`, 
          overflow: 'hidden',
          transition: isDragging ? 'none' : 'width 0.1s ease-out'
        }}
      >
        <img 
          src={beforeImg} 
          alt="Before Transformation" 
          className="slider-img"
          style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100vw' }}
        />
        <span className="slider-label before-label">{beforeLabel}</span>
      </div>

      {/* After Image Layer */}
      <div className="slider-after" style={{ width: '100%', height: '100%' }}>
        <img 
          src={afterImg} 
          alt="After Transformation" 
          className="slider-img"
          style={{ width: '100%', height: '100%' }}
        />
        <span className="slider-label after-label">{afterLabel}</span>
      </div>

      {/* Draggable Divider Handle */}
      <div 
        className="slider-handle" 
        style={{ 
          left: `${sliderPosition}%`,
          transition: isDragging ? 'none' : 'left 0.1s ease-out'
        }}
      >
        <div className="slider-button">
          <span>◀ ▶</span>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Verticals' },
    { id: 'clinical', label: 'Clinics & MedSpas' },
    { id: 'properties', label: 'Real Estate' },
    { id: 'dining', label: 'Hospitality & Dining' },
    { id: 'salons', label: 'Salons & Spas' }
  ];

  const caseStudies = [
    {
      title: 'Aether Clinique',
      location: 'Beverly Hills, CA',
      category: 'clinical',
      beforeMetric: '14 Patient Inquiries/mo',
      afterMetric: '88 Patient Inquiries/mo',
      growth: '+528%',
      services: ['Google Maps Domination', 'Premium Redesign', 'Patient Funnels'],
      summary: 'Replaced a slow, template medical website with an editorial dark-luxe experience and optimized search visibility. Aether jumped to Google Maps Rank #1 for high-value terms in Beverly Hills.'
    },
    {
      title: 'Vanguard Realty Group',
      location: 'Brickell, Miami',
      category: 'properties',
      beforeMetric: 'Low-intent inquiries',
      afterMetric: 'Premium buyer leads',
      growth: '+180%',
      services: ['Meta Ad Sequences', 'Google Search Ads', 'Review Accelerator'],
      summary: 'Designed ad funnel targeting premium home buyers in Miami. Complemented by an automated review generation strategy which collected 120+ 5-star Google reviews in 90 days.'
    },
    {
      title: 'Mercer Soho',
      location: 'Soho, New York City',
      category: 'dining',
      beforeMetric: 'Unranked on Maps',
      afterMetric: 'Rank #1 City-Wide',
      growth: '3.2x Reservations',
      services: ['Advanced Local SEO', 'Google Business Sync', 'Reservation Funnels'],
      summary: 'Audited and optimized local search maps indexing. Created a cohesive aesthetic brand guide that connected Instagram traffic to their direct reservation engine.'
    },
    {
      title: 'Elysian Salon & Spa',
      location: 'Manhattan, NY',
      category: 'salons',
      beforeMetric: '140 Bookings/mo',
      afterMetric: '580 Bookings/mo',
      growth: '+314%',
      services: ['Google Maps Domination', 'Premium Redesign', 'Review Loops'],
      summary: 'Configured local maps visibility to funnel ready-to-book balayage and extensions searchers directly to their scheduling app, lifting overall booking values.'
    }
  ];

  const filteredCases = activeCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === activeCategory);

  return (
    <div style={styles.container}>
      {/* HEADER SECTION */}
      <section style={styles.header}>
        <p style={styles.tag}>THE EVIDENCE</p>
        <h1 style={styles.title}>Visual Transformations</h1>
        <p style={styles.sub}>
          Real results, visible progress. Compare the aesthetic and performance difference between standard digital presences and Aura &amp; Rank luxury systems.
        </p>
      </section>

      {/* DYNAMIC BEFORE/AFTER COMPARISON */}
      <section style={styles.sliderSection}>
        <div style={styles.sliderWrapper}>
          <BeforeAfterSlider 
            beforeImg="/before_brand.png" 
            afterImg="/after_brand.png" 
            beforeLabel="Standard Digital Presence"
            afterLabel="Aura & Rank Luxury Refit"
          />
        </div>
        <div style={styles.sliderCaption}>
          <p>
            <strong>Interactive Comparison:</strong> Drag the golden slider left and right to visualize the visual contrast. The luxury visual presentation justifies premium pricing and increases conversion metrics.
          </p>
        </div>
      </section>

      {/* METRICS COUNT PANEL */}
      <section style={styles.metricsBar} className="glass-panel">
        <div style={styles.metricItem}>
          <h3 style={styles.metricVal}>$4.2M+</h3>
          <p style={styles.metricLabel}>Client Revenue Generated</p>
        </div>
        <div style={styles.divider}></div>
        <div style={styles.metricItem}>
          <h3 style={styles.metricVal}>+3,800</h3>
          <p style={styles.metricLabel}>5-Star Reviews Generated</p>
        </div>
        <div style={styles.divider}></div>
        <div style={styles.metricItem}>
          <h3 style={styles.metricVal}>93.4%</h3>
          <p style={styles.metricLabel}>Google Maps Rank Retention</p>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section style={styles.caseSection}>
        <div style={styles.sectionHeader}>
          <p style={styles.tag}>CASE STUDIES</p>
          <h2 style={styles.sectionTitle}>Client Scale Showcases</h2>
          
          {/* Category Filter Tabs */}
          <div style={styles.filterTabs} className="glass-panel">
            {categories.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  ...styles.filterTabBtn,
                  backgroundColor: activeCategory === cat.id ? 'rgba(212, 180, 110, 0.15)' : 'transparent',
                  color: activeCategory === cat.id ? 'var(--gold-base)' : 'var(--text-muted)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.grid}>
          {filteredCases.map((cs, idx) => (
            <div key={idx} className="glass-card" style={styles.card}>
              <div style={styles.cardHeader}>
                <div>
                  <h3 style={styles.cardTitle}>{cs.title}</h3>
                  <p style={styles.cardLoc}>{cs.location}</p>
                </div>
                <div style={styles.growthBadge} className="glass-panel">
                  {cs.growth}
                </div>
              </div>

              <div style={styles.metricsBox}>
                <div style={styles.metricSub}>
                  <span style={styles.metricSubLabel}>Before:</span>
                  <span style={styles.metricSubVal}>{cs.beforeMetric}</span>
                </div>
                <div style={styles.metricSub}>
                  <span style={styles.metricSubLabel}>After:</span>
                  <span style={{ ...styles.metricSubVal, color: 'var(--gold-base)' }}>{cs.afterMetric}</span>
                </div>
              </div>

              <p style={styles.cardDesc}>{cs.summary}</p>

              <div style={styles.tagWrapper}>
                {cs.services.map((s, sIdx) => (
                  <span key={sIdx} style={styles.caseTag}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
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
  header: {
    padding: '5rem 0',
    textAlign: 'center',
  },
  tag: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '0.25em',
    color: 'var(--gold-base)',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '4.25rem',
    lineHeight: '1.15',
    marginBottom: '1.5rem',
  },
  sub: {
    fontSize: '1.2rem',
    color: 'var(--text-muted)',
    maxWidth: '650px',
    margin: '0 auto',
  },
  sliderSection: {
    margin: '1rem auto 5rem auto',
    maxWidth: '950px',
  },
  sliderWrapper: {
    boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
  },
  sliderCaption: {
    marginTop: '1.5rem',
    textAlign: 'center',
    padding: '0 1rem',
  },
  metricsBar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '2.5rem 1.5rem',
    maxWidth: '950px',
    margin: '0 auto 6rem auto',
    borderRadius: 'var(--border-radius-md)',
  },
  metricItem: {
    textAlign: 'center',
    flex: 1,
  },
  metricVal: {
    fontFamily: 'var(--font-serif)',
    fontSize: '2.6rem',
    fontStyle: 'italic',
    color: 'var(--gold-base)',
    fontWeight: '700',
    marginBottom: '0.35rem',
  },
  metricLabel: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  divider: {
    width: '1px',
    height: '40px',
    backgroundColor: 'var(--border-color)',
  },
  caseSection: {
    paddingBottom: '8rem',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  sectionTitle: {
    fontSize: '3.25rem',
    lineHeight: '1.2',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '440px',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1.5rem',
  },
  cardTitle: {
    fontSize: '1.65rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
  },
  cardLoc: {
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    marginTop: '0.2rem',
  },
  growthBadge: {
    padding: '0.35rem 0.85rem',
    borderRadius: 'var(--border-radius-pill)',
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'var(--gold-base)',
    border: '1px solid var(--gold-base)',
    backgroundColor: 'rgba(212, 180, 110, 0.05)',
  },
  metricsBox: {
    backgroundColor: 'rgba(255,255,255,0.01)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--border-radius-sm)',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  },
  metricSub: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.88rem',
  },
  metricSubLabel: {
    color: 'var(--text-muted)',
  },
  metricSubVal: {
    fontWeight: '600',
    color: 'var(--text-secondary)',
  },
  cardDesc: {
    fontSize: '0.92rem',
    color: 'var(--text-muted)',
    lineHeight: '1.55',
    marginBottom: '2rem',
  },
  tagWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  caseTag: {
    fontSize: '0.72rem',
    padding: '0.25rem 0.65rem',
    borderRadius: '4px',
    backgroundColor: 'rgba(255,255,255,0.02)',
    border: '1px solid var(--border-color)',
    color: 'var(--text-secondary)',
  },
  filterTabs: {
    display: 'inline-flex',
    padding: '0.25rem',
    borderRadius: 'var(--border-radius-pill)',
    gap: '0.25rem',
    marginTop: '2rem',
  },
  filterTabBtn: {
    border: 'none',
    padding: '0.5rem 1.25rem',
    borderRadius: 'var(--border-radius-pill)',
    fontSize: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'var(--transition-fast)',
  },
};
