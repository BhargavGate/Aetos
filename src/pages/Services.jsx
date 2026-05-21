import React, { useState, useEffect } from 'react';

export default function Services() {
  const industryPresets = {
    clinical: {
      label: 'Clinics & MedSpas',
      ticketValue: 3000,
      conversionRate: 5.5,
      bookings: [
        { name: 'Dr. Olivia W.', service: 'Full Dermatology Assessment', value: 7500, time: 'Just now' },
        { name: 'Marcus E.', service: 'Laser Resurfacing Treatment', value: 12000, time: '3 mins ago' },
        { name: 'Sophia R.', service: 'Signature Facial & Serum Pack', value: 5000, time: '12 mins ago' },
        { name: 'Julian D.', service: 'Injectable Consultation & Session', value: 10000, time: '30 mins ago' },
        { name: 'Eliza P.', service: 'Microneedling Therapy Package', value: 25000, time: '1 hour ago' }
      ]
    },
    realestate: {
      label: 'Luxury Real Estate',
      ticketValue: 200000,
      conversionRate: 1.5,
      bookings: [
        { name: 'The Carlyle Group', service: 'Penthouse Buying Representation', value: 125000, time: 'Just now' },
        { name: 'Dr. Evelyn K.', service: 'Oceanfront Villa Consultation', value: 45000, time: '14 mins ago' },
        { name: 'Robert & Co.', service: 'Miami Beach Listing Agreement', value: 85000, time: '45 mins ago' },
        { name: 'Claire G.', service: 'Commercial Space Brokerage', value: 65000, time: '2 hours ago' }
      ]
    },
    dining: {
      label: 'Hospitality & Dining',
      ticketValue: 4000,
      conversionRate: 7.5,
      bookings: [
        { name: 'Table 4 (4 Guests)', service: 'Chef Tasting Menu & Wine Pairing', value: 3800, time: 'Just now' },
        { name: 'Isabella K.', service: 'VIP Lounge Table Booking', value: 2500, time: '4 mins ago' },
        { name: 'Victoria R.', service: 'Private Room Dining Event Dep.', value: 7500, time: '18 mins ago' },
        { name: 'Penelope H.', service: 'Weekend Champagne Brunch Table', value: 1800, time: '55 mins ago' }
      ]
    },
    salons: {
      label: 'Salons & Spas',
      ticketValue: 15000,
      conversionRate: 6.0,
      bookings: [
        { name: 'Charlotte M.', service: 'Hand-Painted Balayage & Styling', value: 380, time: 'Just now' },
        { name: 'Isabella K.', service: 'Russian Volume Extensions', value: 750, time: '2 mins ago' },
        { name: 'Victoria R.', service: 'Signature HydraFacial & Sculpt', value: 290, time: '12 mins ago' },
        { name: 'Genevieve D.', service: 'Weft Extensions Volume Install', value: 920, time: '24 mins ago' }
      ]
    },
    services: {
      label: 'Startups & Professional Services',
      ticketValue: 100000,
      conversionRate: 2.5,
      bookings: [
        { name: 'Nova Analytics', service: 'Quarterly Search Marketing Retainer', value: 3500, time: 'Just now' },
        { name: 'Vesper Systems', service: 'Bespoke UI Design & Brand Setup', value: 5000, time: '20 mins ago' },
        { name: 'Summit Partners', service: 'Local Citation Auditing Strategy', value: 1500, time: '1 hour ago' }
      ]
    }
  };

  // Booking Simulator States
  const [selectedIndustry, setSelectedIndustry] = useState('clinical');
  const [traffic, setTraffic] = useState(1500);
  const [conversionRate, setConversionRate] = useState(5.5);
  const [simulatedBookings, setSimulatedBookings] = useState([]);
  
  // FAQ state
  const [openFaq, setOpenFaq] = useState(null);

  // Dynamically update booking stream based on traffic slider and industry selection
  useEffect(() => {
    const preset = industryPresets[selectedIndustry];
    const bookingCount = Math.min(Math.ceil((traffic * (conversionRate / 100)) / 10), preset.bookings.length);
    setSimulatedBookings(preset.bookings.slice(0, bookingCount));
  }, [traffic, conversionRate, selectedIndustry]);

  // Calculate outputs
  const calculatedBookings = Math.round(traffic * (conversionRate / 100));
  const estimatedRevenue = Math.round(calculatedBookings * industryPresets[selectedIndustry].ticketValue);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const servicesData = [
    {
      title: 'Google Business Profile Domination',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9M14 9a2 2 0 00-2 2v10" />
        </svg>
      ),
      description: 'Complete profile auditing, category optimization, and local coordinates mapping to force your profile to rank on top Google search layouts.',
      benefit: 'Appear immediately when high-intent prospects search locally.',
      outcome: '+150% boost in click-to-call & map direction triggers.'
    },
    {
      title: 'Aesthetic Local SEO',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10zM2 12h20" />
        </svg>
      ),
      description: 'Structured geo-citations, authority backlinking, and optimized content layers to rank your services for competitive high-ticket queries.',
      benefit: 'Durable organic search positions driving continuous inbound prospects.',
      outcome: '#1 ranking positions for core luxury search terms.'
    },
    {
      title: 'High-Converting Web Design',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4M2 12h20" />
        </svg>
      ),
      description: 'Stunning bespoke digital canvases matching high-end brand guidelines. Fast, intuitive, and optimized for instant scheduling.',
      benefit: 'Establishes instant aesthetic trust and eliminates inquiry drops.',
      outcome: 'Average visitor conversion rates exceeding 8.5%.'
    },
    {
      title: 'Social Grid Revamp & Management',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
        </svg>
      ),
      description: 'Curating an editorial visual identity for Instagram, TikTok, and LinkedIn. We produce content that attracts high-value customers.',
      benefit: 'Positions your company as a premium trendsetter in your city.',
      outcome: 'Increased word-of-mouth visual sharing and brand prestige.'
    },
    {
      title: 'Paid Ads Growth Campaigns',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
      description: 'High-intent Meta and Google ad strategies focused on booking your most profitable packages and premium client inquiries.',
      benefit: 'Immediate, scalable customer acquisition to support system expansion.',
      outcome: 'Average 4.5x Return on Ad Spend (ROAS).'
    },
    {
      title: 'Review Generation Systems',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      description: 'Automated post-service SMS/email systems that request reviews at the peak of client satisfaction, filtering feedback gracefully.',
      benefit: 'Maintains an unshakeable 5-star reputation on Google maps search grids.',
      outcome: '+400 premium reviews generated per year, fully automated.'
    },
    {
      title: 'Content & Transformation Strategy',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      ),
      description: 'Training and frameworks to capture before &amp; after portfolios. We format transformations to feel luxurious and editorial instead of generic.',
      benefit: 'Drives intense emotional bookings through visible expert results.',
      outcome: 'A gorgeous repository of results that does the selling for you.'
    },
    {
      title: 'Brand Identity Design',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      description: 'Developing cohesive typography, luxury color guides, and premium digital templates that establish a cohesive high-ticket impression.',
      benefit: 'Allows your company to confidently charge premium, top-tier rates.',
      outcome: 'Unification of digital assets into an elite luxury brand shell.'
    }
  ];

  const faqs = [
    {
      q: 'How long does it take to see rankings improve on Google Maps?',
      a: 'Initial GBP optimizations produce ranking uplifts within 30 to 45 days. Major keyword dominance for high-volume city searches typically takes 90 days of sustained regional SEO mapping.'
    },
    {
      q: 'Will we have to change our existing booking or scheduling software?',
      a: 'No. We work with and optimize your current booking systems. We construct a premium custom front-end website shell and integrate your existing booking/scheduling widget or CRM smoothly, enhancing its conversion layout to decrease drop-offs.'
    },
    {
      q: 'Do you offer custom media shoot assets or work with our local photographers?',
      a: 'We provide visual styling guidelines, storyboard parameters, and editorial direction for your local shoots. If you are based in the Dehli NCR, we can coordinate direct cinematic shoot assets.(inclusive of any extras charges)'
    },
    {
      q: 'Is there a minimum commitment length for your scale programs?',
      a: 'Because search engine algorithms require time to crawl, record, and establish rank authority, our growth programs run on a 4-month commitment. After this period, services switch to rolling month-to-month contracts.'
    }
  ];

  return (
    <div style={styles.container}>
      {/* HEADER SECTION */}
      <section style={styles.header}>
        <p style={styles.tag}>THE SYSTEM</p>
        <h1 style={styles.title}>Bespoke Growth <br /><em style={styles.titleItalic}>Tactics</em></h1>
        <p style={styles.sub}>
          We construct high-performance customer acquisition systems for premium brands, capturing high-ticket search volume and automating client scheduling.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section style={styles.servicesSection}>
        <div style={styles.grid}>
          {servicesData.map((svc, idx) => (
            <div key={idx} className="glass-card" style={styles.card}>
              <div style={styles.cardHeader}>
                <div style={styles.iconContainer}>{svc.icon}</div>
                <span style={styles.cardNumber}>0{idx + 1}</span>
              </div>
              <h3 style={styles.cardTitle}>{svc.title}</h3>
              <p style={styles.cardDesc}>{svc.description}</p>
              
              <div style={styles.divider}></div>
              
              <div style={styles.metaRow}>
                <span style={styles.metaLabel}>Benefit:</span>
                <span style={styles.metaVal}>{svc.benefit}</span>
              </div>
              <div style={styles.metaRow}>
                <span style={styles.metaLabel}>Outcome:</span>
                <span style={styles.metaValGlow}>{svc.outcome}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE BOOKINGS SIMULATOR */}
      <section style={styles.simulatorSection}>
        <div style={styles.sectionHeader}>
          <p style={styles.tag}>REVENUE SCALER</p>
          <h2 style={styles.sectionTitle}>Calculate the Revenue Impact</h2>
          <p style={styles.sectionSub}>
            Select your industry and drag the traffic and conversion sliders to simulate the impact on your monthly revenue.
          </p>
          
          {/* Industry Preset Selector */}
          <div style={styles.industryTabs} className="glass-panel">
            {Object.keys(industryPresets).map(key => (
              <button 
                key={key}
                onClick={() => {
                  setSelectedIndustry(key);
                  setConversionRate(industryPresets[key].conversionRate);
                }}
                style={{
                  ...styles.industryTab,
                  backgroundColor: selectedIndustry === key ? 'rgba(212, 180, 110, 0.15)' : 'transparent',
                  color: selectedIndustry === key ? 'var(--gold-base)' : 'var(--text-muted)'
                }}
              >
                {industryPresets[key].label}
              </button>
            ))}
          </div>
        </div>

        <div className="booking-dashboard" style={styles.dashboard}>
          {/* Slider & Math Controls */}
          <div style={styles.simControls}>
            <div style={styles.controlGroup}>
              <div style={styles.controlHeader}>
                <span style={styles.controlLabel}>Monthly Inbound Traffic</span>
                <span style={styles.controlValue}>{traffic.toLocaleString()} visitors</span>
              </div>
              <input 
                type="range" 
                min="500" 
                max="10000" 
                step="100" 
                value={traffic} 
                onChange={(e) => setTraffic(Number(e.target.value))} 
                style={styles.slider}
              />
              <p style={styles.helperText}>Average search volume for target keywords ranges between 1,000 and 10,000 queries per month depending on sector.</p>
            </div>

            <div style={styles.controlGroup}>
              <div style={styles.controlHeader}>
                <span style={styles.controlLabel}>Website Onboarding Conversion</span>
                <span style={styles.controlValue}>{conversionRate}%</span>
              </div>
              <input 
                type="range" 
                min="0.5" 
                max="15" 
                step="0.5" 
                value={conversionRate} 
                onChange={(e) => setConversionRate(Number(e.target.value))} 
                style={styles.slider}
              />
              <p style={styles.helperText}>Standard templates convert at 0.5-2%. Aura &amp; Rank bespoke web systems average 4% to 10% conversion.</p>
            </div>

            <div style={styles.summaryBox} className="glass-panel">
              <div style={styles.sumItem}>
                <span style={styles.sumLabel}>Average Deal/Ticket Value</span>
                <span style={styles.sumVal}>₹{industryPresets[selectedIndustry].ticketValue}</span>
              </div>
              <div style={styles.sumItem}>
                <span style={styles.sumLabel}>Est. Monthly Inquiries / Bookings</span>
                <span style={styles.sumVal}>{calculatedBookings} clients</span>
              </div>
              <div style={styles.sumItem}>
                <span style={styles.sumLabel}>Projected Revenue (Mo.)</span>
                <span style={{ ...styles.sumVal, color: 'var(--gold-base)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                  ₹{estimatedRevenue.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Simulated Live Bookings Feed */}
          <div style={styles.feedWrapper}>
            <h4 style={styles.feedHeader}>Live Activity Simulator Feed</h4>
            <div style={styles.feedContainer}>
              {simulatedBookings.map((b, idx) => (
                <div key={idx} className="booking-ticket">
                  <div className="booking-info">
                    <h4>{b.name}</h4>
                    <p>{b.service}</p>
                    <span style={styles.bookingTime}>{b.time}</span>
                  </div>
                  <div className="booking-amount">${b.value}</div>
                </div>
              ))}
              {simulatedBookings.length === 0 && (
                <p style={styles.emptyFeed}>Adjust sliders to generate activity triggers.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={styles.faqSection}>
        <div style={styles.sectionHeader}>
          <p style={styles.tag}>FAQ</p>
          <h2 style={styles.sectionTitle}>Frequently Addressed</h2>
        </div>

        <div style={styles.faqWrapper}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={styles.faqItem}>
              <button 
                onClick={() => toggleFaq(idx)} 
                style={styles.faqQuestion}
              >
                <span>{faq.q}</span>
                <span style={{ 
                  ...styles.faqArrow, 
                  transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)' 
                }}>
                  ▼
                </span>
              </button>
              <div style={{ 
                ...styles.faqAnswer, 
                maxHeight: openFaq === idx ? '200px' : '0',
                opacity: openFaq === idx ? 1 : 0
              }}>
                <p style={styles.faqText}>{faq.a}</p>
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
  titleItalic: {
    fontStyle: 'italic',
    color: 'var(--gold-base)',
    display: 'inline-block',
    transform: 'skewX(-4deg)',
  },
  sub: {
    fontSize: '1.2rem',
    color: 'var(--text-muted)',
    maxWidth: '650px',
    margin: '0 auto',
  },
  servicesSection: {
    padding: '3rem 0 6rem 0',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '3rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    color: 'var(--gold-base)',
  },
  cardNumber: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.5rem',
    fontStyle: 'italic',
    color: 'var(--gold-base)',
    opacity: 0.3,
  },
  cardTitle: {
    fontSize: '1.95rem',
  },
  cardDesc: {
    fontSize: '0.98rem',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
  },
  divider: {
    height: '1px',
    width: '100%',
    backgroundColor: 'var(--border-color)',
    margin: '0.5rem 0',
  },
  metaRow: {
    display: 'flex',
    gap: '1rem',
    fontSize: '0.9rem',
    alignItems: 'baseline',
  },
  metaLabel: {
    fontWeight: '600',
    color: 'var(--text-primary)',
    minWidth: '70px',
  },
  metaVal: {
    color: 'var(--text-muted)',
  },
  metaValGlow: {
    color: 'var(--gold-base)',
    fontWeight: '500',
  },
  simulatorSection: {
    padding: '6rem 0',
    borderTop: '1px solid var(--border-color)',
  },
  sectionHeader: {
    textAlign: 'center',
    maxWidth: '750px',
    margin: '0 auto 4rem auto',
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
  dashboard: {
    marginTop: '2rem',
  },
  simControls: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  controlGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  controlHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  controlLabel: {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'var(--text-secondary)',
  },
  controlValue: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.25rem',
    fontStyle: 'italic',
    color: 'var(--gold-base)',
    fontWeight: '600',
  },
  slider: {
    WebkitAppearance: 'none',
    width: '100%',
    height: '4px',
    borderRadius: '2px',
    background: 'rgba(212, 180, 110, 0.15)',
    outline: 'none',
    cursor: 'pointer',
  },
  helperText: {
    fontSize: '0.78rem',
    color: 'var(--text-muted)',
  },
  summaryBox: {
    marginTop: '1rem',
    padding: '1.8rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
    borderRadius: 'var(--border-radius-md)',
  },
  sumItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sumLabel: {
    fontSize: '0.95rem',
    color: 'var(--text-muted)',
  },
  sumVal: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
  },
  feedWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  feedHeader: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.25rem',
    fontStyle: 'italic',
    color: 'var(--text-primary)',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid var(--border-color)',
  },
  feedContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
    maxHeight: '340px',
    overflowY: 'auto',
    paddingRight: '0.5rem',
  },
  bookingTime: {
    fontSize: '0.72rem',
    color: 'var(--gold-base)',
    opacity: 0.8,
  },
  emptyFeed: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    textAlign: 'center',
    marginTop: '3rem',
  },
  faqSection: {
    padding: '6rem 0 8rem 0',
    borderTop: '1px solid var(--border-color)',
  },
  faqWrapper: {
    maxWidth: '850px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  faqItem: {
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '1.5rem',
  },
  faqQuestion: {
    width: '100%',
    background: 'transparent',
    border: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'var(--font-serif)',
    fontSize: '1.45rem',
    textAlign: 'left',
    color: 'var(--text-primary)',
    cursor: 'pointer',
    padding: '0.8rem 0',
  },
  faqArrow: {
    fontSize: '0.75rem',
    color: 'var(--gold-base)',
    transition: 'var(--transition-smooth)',
  },
  faqAnswer: {
    overflow: 'hidden',
    transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
  },
  faqText: {
    paddingTop: '0.5rem',
    fontSize: '0.98rem',
    color: 'var(--text-muted)',
    lineHeight: '1.65',
  },
  industryTabs: {
    display: 'inline-flex',
    padding: '0.25rem',
    borderRadius: 'var(--border-radius-pill)',
    gap: '0.25rem',
    marginTop: '2rem',
  },
  industryTab: {
    border: 'none',
    padding: '0.5rem 1.25rem',
    borderRadius: 'var(--border-radius-pill)',
    fontSize: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'var(--transition-fast)',
  },
};
