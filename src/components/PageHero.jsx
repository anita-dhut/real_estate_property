import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './PageHero.css';

export default function PageHero({ title, subtitle, image, breadcrumbItems = [] }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page-hero-container">
      <div className="page-hero-image-wrapper">
        <img 
          src={image} 
          alt={title} 
          style={{ transform: `translateY(${offsetY * 0.4}px) scale(1.05)` }}
        />
        <div className="page-hero-gradient"></div>
      </div>
      
      <div className="page-hero-content page-container fade-up is-visible">
        <nav className="hero-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {breadcrumbItems.map((item, index) => (
            <span key={index} className="breadcrumb-separator">
              <ChevronRight size={14} />
              {item.path ? <Link to={item.path}>{item.label}</Link> : <span>{item.label}</span>}
            </span>
          ))}
        </nav>
        <h1>{title}</h1>
        {subtitle && <p className="hero-subtitle-text">{subtitle}</p>}
        <div className="decorative-line"></div>
      </div>
    </div>
  );
}
