import React, { useState } from 'react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', italic: true },
    { id: 'services', label: 'Services', italic: false },
    { id: 'portfolio', label: 'Portfolio', italic: false },
    { id: 'success', label: 'Success', italic: true },
    { id: 'contact', label: 'Contact', italic: false }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav style={styles.nav}>
      {/* Brand Logo */}
      <a href="#home" onClick={() => handleNavClick('home')} style={styles.logo}>
        <svg width="32" height="32" viewBox="0 0 100 100" style={styles.logoSvg}>
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M50 15 L50 85 M15 50 L85 50" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
          <polygon points="50,30 58,45 75,45 61,55 66,72 50,62 34,72 39,55 25,45 42,45" fill="currentColor" opacity="0.9" />
        </svg>
        <span style={styles.logoText}>Aetos</span>
      </a>

      {/* Navigation Pill (Desktop) */}
      <div style={styles.navPillContainer}>
        <div style={styles.navPill}>
          {navItems.map((item, idx) => (
            <React.Fragment key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                style={{
                  ...styles.navLink,
                  fontStyle: item.italic ? 'italic' : 'normal',
                  color: activePage === item.id ? 'var(--gold-base)' : 'var(--text-secondary)',
                  opacity: activePage === item.id ? 1 : 0.7,
                }}
                className="nav-link-btn"
              >
                {item.label}
              </button>
              {idx < navItems.length - 1 && <span style={styles.separator}></span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <button 
        onClick={() => handleNavClick('contact')} 
        style={styles.bookBtn}
        className="btn-gold"
      >
        Book Growth Session
      </button>

      {/* Mobile Burger Menu Icon */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
        style={styles.burgerBtn}
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={styles.mobileDropdown}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                ...styles.mobileNavLink,
                fontStyle: item.italic ? 'italic' : 'normal',
                color: activePage === item.id ? 'var(--gold-base)' : 'var(--text-primary)',
              }}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('contact')}
            style={styles.mobileBookBtn}
            className="btn-gold"
          >
            Book Growth Session
          </button>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: '1.5rem 3rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(to bottom, rgba(10,10,11,0.9) 0%, rgba(10,10,11,0) 100%)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    textDecoration: 'none',
    color: 'var(--text-primary)',
    cursor: 'pointer',
    zIndex: 110,
  },
  logoSvg: {
    color: 'var(--gold-base)',
    transition: 'transform 0.5s ease',
  },
  logoText: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.5rem',
    fontWeight: '700',
    letterSpacing: '0.03em',
  },
  navPillContainer: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    padding: '0 2rem',
  },
  navPill: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    background: 'rgba(17, 17, 19, 0.75)',
    border: '1px solid var(--border-color)',
    padding: '0.6rem 2rem',
    borderRadius: '9999px',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
    pointerEvents: 'auto',
  },
  navLink: {
    background: 'transparent',
    border: 'none',
    fontSize: '1rem',
    fontFamily: 'var(--font-serif)',
    cursor: 'pointer',
    padding: '0.2rem 0.4rem',
    transition: 'var(--transition-smooth)',
  },
  separator: {
    width: '1px',
    height: '12px',
    backgroundColor: 'var(--border-color)',
  },
  bookBtn: {
    zIndex: 110,
  },
  burgerBtn: {
    display: 'none',
    background: 'transparent',
    border: 'none',
    color: 'var(--text-primary)',
    cursor: 'pointer',
    zIndex: 110,
  },
  mobileDropdown: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'var(--bg-primary)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    zIndex: 105,
    padding: '2rem',
  },
  mobileNavLink: {
    background: 'transparent',
    border: 'none',
    fontSize: '2.5rem',
    fontFamily: 'var(--font-serif)',
    cursor: 'pointer',
    transition: 'var(--transition-smooth)',
  },
  mobileBookBtn: {
    marginTop: '2rem',
  },
};

// Media query styles can be applied in index.css
// e.g., @media (max-width: 992px) { ... } for hiding desktop elements and displaying burger
