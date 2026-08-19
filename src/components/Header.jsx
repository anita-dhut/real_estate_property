import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, ArrowRight } from 'lucide-react';
import { navLinks, projects } from '../data/constants';
import { contactInfo } from '../data/contact';
import Button from './Button';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const headerClass = `header ${isScrolled ? 'header-scrolled' : ''} ${!isHomePage ? 'header-solid' : ''}`;

  const featuredProjects = projects.slice(0, 2);

  return (
    <header className={headerClass}>
      <div className="header-container">
        <Link to="/" className="header-logo" aria-label="Nivara Developers Home">
          <span className="logo-text">NIVARA<br/><small className="text-accent" style={{letterSpacing: '3px'}}>DEVELOPERS</small></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navLinks.map((link) => {
            if (link.name === 'Projects') {
              return (
                <div key={link.path} className="nav-item has-dropdown">
                  <Link 
                    to={link.path}
                    className={`nav-link ${location.pathname.startsWith('/projects') ? 'active' : ''}`}
                    aria-haspopup="true"
                  >
                    {link.name} <ChevronDown size={14} className="dropdown-icon" />
                  </Link>
                  
                  {/* Premium Mega Menu */}
                  <div className="mega-menu">
                    <div className="mega-menu-content">
                      <div className="mega-menu-links">
                        <h4>Explore Status</h4>
                        <ul>
                          <li><Link to="/projects">Ongoing Projects</Link></li>
                          <li><Link to="/projects">Completed Projects</Link></li>
                          <li><Link to="/projects">Sold Out</Link></li>
                          <li><Link to="/projects">View All Portfolio <ArrowRight size={14} className="ml-1 inline"/></Link></li>
                        </ul>
                      </div>
                      
                      <div className="mega-menu-featured">
                        <h4>Featured Projects</h4>
                        <div className="mega-featured-grid">
                          {featuredProjects.map(proj => (
                            <Link key={proj.id} to={`/projects/${proj.slug}`} className="mega-project-card">
                              <div className="mega-project-img">
                                <img src={proj.image} alt={proj.title} loading="lazy" />
                              </div>
                              <div className="mega-project-info">
                                <h5>{proj.title}</h5>
                                <span>{proj.location}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link 
                key={link.path} 
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="desktop-actions">
          <Button to="/contact" variant={isScrolled || !isHomePage ? 'primary' : 'outline-light'}>
            Enquire Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Slide-out Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <nav className="mobile-nav" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mobile-actions">
            <Button to="/contact" variant="primary" className="mobile-btn">
              Enquire Now
            </Button>
            <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="mobile-phone">
              <Phone size={18} /> {contactInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
