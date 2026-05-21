import React from 'react';

export default function Footer({ setActivePage }) {
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={styles.footer}>
      {/* Decorative Top Divider */}
      <div style={styles.divider}></div>

      <div style={styles.grid}>
        {/* Brand Description Column */}
        <div style={styles.brandCol}>
          <a href="#home" onClick={() => handleNavClick('home')} style={styles.logo}>
            <svg width="28" height="28" viewBox="0 0 100 100" style={styles.logoSvg}>
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <polygon points="50,30 58,45 75,45 61,55 66,72 50,62 34,72 39,55 25,45 42,45" fill="currentColor" />
            </svg>
            <span style={styles.logoText}>Aetos</span>
          </a>
          <p style={styles.brandDesc}>
            Defining aesthetics and search dominance. We build conversion-optimized web systems and organic search campaigns scaling premium brands and service businesses.
          </p>
        </div>

        {/* Navigation Quick Links Column */}
        <div style={styles.col}>
          <h4 style={styles.heading}>Explore</h4>
          <ul style={styles.list}>
            <li>
              <button onClick={() => handleNavClick('home')} style={styles.linkButton}>
                Home <em style={styles.italic}>Page</em>
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('services')} style={styles.linkButton}>
                Services Breakdown
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('portfolio')} style={styles.linkButton}>
                Before & After Portfolio
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('success')} style={styles.linkButton}>
                Client Success Stories
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('contact')} style={styles.linkButton}>
                Book Consultation
              </button>
            </li>
          </ul>
        </div>

        {/* Agency Services Column */}
        <div style={styles.col}>
          <h4 style={styles.heading}>Core Focus</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Google Business Domination</li>
            <li style={styles.listItem}>Local SEO Optimization</li>
            <li style={styles.listItem}>High-Converting Web Design</li>
            <li style={styles.listItem}>Social Media Revamp</li>
            <li style={styles.listItem}>Paid Growth Advertising</li>
            <li style={styles.listItem}>Reputation & Review Growth</li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div style={styles.col}>
          <h4 style={styles.heading}>Growth HQ</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <span style={styles.label}>Location:</span> Chhatarpur, New Delhi, India
            </li>
            <li style={styles.listItem}>
              <span style={styles.label}>Enquiries:</span> aetosai01@gmail.com
            </li>
            <li style={styles.listItem}>
              <span style={styles.label}>Response Time:</span> Under 4 hours
            </li>
          </ul>
          <button 
            onClick={() => handleNavClick('contact')} 
            style={styles.ctaBtn}
            className="btn-gold"
          >
            Start Your Audit
          </button>
        </div>
      </div>

      {/* Bottom Footer Details */}
      <div style={styles.bottom}>
        <p style={styles.copy}>
          &copy; {new Date().getFullYear()} Aetos. All rights reserved.
        </p>
        <div style={styles.bottomLinks}>
          <a href="#privacy" style={styles.bottomLink}>Privacy Policy</a>
          <span style={styles.bullet}>&bull;</span>
          <a href="#terms" style={styles.bottomLink}>Terms of Growth</a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: 'var(--bg-primary)',
    padding: '6rem 3rem 3rem 3rem',
    position: 'relative',
    zIndex: 10,
  },
  divider: {
    height: '1px',
    width: '100%',
    background: 'linear-gradient(to right, transparent, var(--border-color) 15%, var(--border-color) 85%, transparent)',
    marginBottom: '5rem',
  },
  grid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr 0.8fr 1fr',
    gap: '4rem',
    marginBottom: '5rem',
  },
  brandCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
    color: 'var(--text-primary)',
  },
  logoSvg: {
    color: 'var(--gold-base)',
  },
  logoText: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.35rem',
    fontWeight: '700',
    letterSpacing: '0.02em',
  },
  brandDesc: {
    fontSize: '0.95rem',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  heading: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.2rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
  },
  listItem: {
    fontSize: '0.95rem',
    color: 'var(--text-muted)',
  },
  label: {
    color: 'var(--text-secondary)',
    fontWeight: '500',
  },
  linkButton: {
    background: 'transparent',
    border: 'none',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.95rem',
    color: 'var(--text-muted)',
    cursor: 'pointer',
    textAlign: 'left',
    padding: '0',
    transition: 'var(--transition-fast)',
  },
  italic: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
  },
  ctaBtn: {
    alignSelf: 'flex-start',
    marginTop: '1rem',
    padding: '0.65rem 1.5rem',
    fontSize: '0.95rem',
  },
  bottom: {
    maxWidth: '1200px',
    margin: '0 auto',
    paddingTop: '2.5rem',
    borderTop: '1px solid var(--border-color)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
  },
  copy: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
  },
  bottomLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  bottomLink: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    textDecoration: 'none',
    transition: 'var(--transition-fast)',
  },
  bullet: {
    color: 'var(--border-color)',
    fontSize: '0.85rem',
  },
};
