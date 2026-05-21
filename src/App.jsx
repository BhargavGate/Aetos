import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Views
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Success from './pages/Success';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [renderPage, setRenderPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Transition Handler (Smooth cross-fade routing)
  useEffect(() => {
    if (activePage !== renderPage) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setRenderPage(activePage);
        setIsTransitioning(false);
      }, 350); // Matches the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [activePage, renderPage]);

  // Page Routing Switch
  const renderCurrentPage = () => {
    switch (renderPage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'services':
        return <Services />;
      case 'portfolio':
        return <Portfolio />;
      case 'success':
        return <Success />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <>
      {/* Luxury Texture Noise Overlay */}
      <div className="texture-overlay"></div>

      {/* Viewport Frame Border */}
      <div className="frame-border"></div>

      {/* Main Layout */}
      <div style={styles.appContainer}>
        {/* Navigation Bar */}
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        {/* Page Content with smooth transition wrappers */}
        <main 
          style={{
            ...styles.mainContent,
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
          }}
        >
          {renderCurrentPage()}
        </main>

        {/* Global Footer */}
        <Footer setActivePage={setActivePage} />
      </div>
    </>
  );
}

const styles = {
  appContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: 'var(--bg-primary)',
  },
  mainContent: {
    flex: 1,
    paddingTop: '6rem', // Accounting for fixed navbar height
    transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'opacity, transform',
  },
};
