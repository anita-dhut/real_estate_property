import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allProjects } from '../data/projects';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/Button';
import Lightbox from '../components/Lightbox';
import QuickInquiry from '../sections/Home/QuickInquiry';
import ProjectCard from '../components/ProjectCard';
import PremiumCTA from '../components/PremiumCTA';
import SEO from '../components/SEO';
import ShareButtons from '../components/ShareButtons';
import { useToast } from '../components/ToastProvider';
import * as Icons from 'lucide-react';
import './ProjectDetails.css';

export default function ProjectDetails() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const { addToast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = allProjects.find(p => p.slug === slug);
    setProject(found);
  }, [slug]);

  // Handle active navigation state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'amenities', 'gallery', 'location', 'enquire'];
      let current = '';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!project) return <div className="page-container pt-32"><h2>Project Not Found</h2></div>;

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const navigateLightbox = (direction) => {
    if (direction === 'prev') {
      setLightboxIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1));
    } else {
      setLightboxIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1));
    }
  };

  const handleBrochureClick = () => {
    if (project.brochure && project.brochure !== '#') {
      window.open(project.brochure, '_blank');
    } else {
      addToast({
        type: 'info',
        title: 'Brochure Coming Soon',
        message: 'The digital brochure for this project is currently being updated.'
      });
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100, // Account for sticky nav header
        behavior: 'smooth'
      });
    }
  };

  const relatedProjects = allProjects
    .filter(p => p.id !== project.id && (p.status === project.status || p.city === project.city))
    .slice(0, 4);

  return (
    <div className="project-details">
      <SEO title={`${project.name} | Premium Residential Project in Pune`} description={project.description.substring(0, 150)} />
      
      {/* Compact Info Bar at very top below nav could go here, or we merge it with Hero */}
      
      {/* Hero Section */}
      <section className="project-hero">
        <div className="project-hero-bg">
          <img src={project.heroImage} alt={project.name} />
          <div className="hero-gradient-overlay"></div>
        </div>
        <div className="project-hero-content page-container">
          <Breadcrumb items={[{ label: 'Projects', path: '/projects' }, { label: project.name }]} />
          
          <div className="project-header fade-up is-visible">
            <span className="hero-status-badge">{project.status}</span>
            <h1>{project.name}</h1>
            <p className="project-location"><Icons.MapPin size={20}/> {project.location}, {project.city}</p>
            
            <div className="project-actions mt-6">
              <Button onClick={() => scrollToSection('enquire')} variant="primary">Enquire Now</Button>
              <Button variant="outline-light" onClick={handleBrochureClick}>
                <Icons.Download size={18} className="mr-2 inline"/> Download Brochure
              </Button>
            </div>
          </div>
          
          <div className="hero-quick-info fade-up is-visible" style={{transitionDelay: '0.2s'}}>
            <div className="info-item">
              <span className="info-label">Configuration</span>
              <span className="info-val">{project.bhk}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-val">{project.location}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Possession</span>
              <span className="info-val">{project.completionYear || 'Ready to Move'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">RERA ID</span>
              <span className="info-val">{project.reraNumber}</span>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY NAVIGATION */}
      <div className="project-sticky-nav">
        <div className="page-container nav-container">
          <ul className="project-nav-list">
            <li><button className={activeSection === 'overview' ? 'active' : ''} onClick={() => scrollToSection('overview')}>Overview</button></li>
            <li><button className={activeSection === 'amenities' ? 'active' : ''} onClick={() => scrollToSection('amenities')}>Amenities</button></li>
            <li><button className={activeSection === 'gallery' ? 'active' : ''} onClick={() => scrollToSection('gallery')}>Gallery</button></li>
            <li><button className={activeSection === 'location' ? 'active' : ''} onClick={() => scrollToSection('location')}>Location</button></li>
            <li><button className={activeSection === 'enquire' ? 'active' : ''} onClick={() => scrollToSection('enquire')}>Enquire</button></li>
          </ul>
          <div className="nav-share-wrapper">
             <ShareButtons title={`Checkout ${project.name} by Nivara Developers`} />
          </div>
        </div>
      </div>

      <div className="page-container content-grid pt-12">
        <div className="main-content">
          <section id="overview" className="detail-section fade-up is-visible pt-4">
            <h2>Project Overview</h2>
            <p className="description">{project.description}</p>
            
            <div className="highlights-specs">
              <div className="highlights">
                <h3>Highlights</h3>
                <ul>
                  {project.highlights.map((item, i) => (
                    <li key={i}><Icons.CheckCircle2 size={16} style={{color: 'var(--color-accent)'}}/> {item}</li>
                  ))}
                </ul>
              </div>
              <div className="specifications">
                <h3>Specifications</h3>
                <ul>
                  {project.specifications.map((item, i) => (
                    <li key={i}><Icons.CheckSquare size={16} style={{color: 'var(--color-accent)'}}/> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="amenities" className="detail-section fade-up is-visible pt-12">
            <h2>Amenities</h2>
            <div className="amenities-grid">
              {project.amenities.map((amenity, i) => {
                const IconComponent = Icons[amenity.icon] || Icons.Check;
                return (
                  <div key={i} className="amenity-item">
                    <div className="amenity-icon"><IconComponent size={32} strokeWidth={1.5} /></div>
                    <span>{amenity.name}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Masonry Gallery */}
          <section id="gallery" className="detail-section fade-up is-visible pt-12">
            <h2>Gallery</h2>
            <div className="masonry-gallery">
              {project.gallery.map((img, i) => (
                <div key={i} className={`gallery-thumb ${i % 3 === 0 ? 'large' : ''}`} onClick={() => openLightbox(i)}>
                  <img src={img} alt={`${project.name} gallery ${i+1}`} loading="lazy" />
                  <div className="gallery-overlay"><Icons.ZoomIn size={24}/></div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="sidebar fade-up is-visible" style={{transitionDelay: '0.2s'}}>
          <div id="location" className="sidebar-widget pt-4">
            <h3>Location</h3>
            <div className="map-placeholder">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" alt="Map Location" loading="lazy"/>
              <div className="map-overlay">
                <Icons.MapPin size={32} color="var(--color-primary)" />
              </div>
            </div>
            
            <div className="nearby-places">
              {Object.entries(project.nearbyPlaces).map(([category, places]) => (
                <div key={category} className="nearby-category">
                  <h4>{category}</h4>
                  <ul>
                    {places.map((place, i) => <li key={i}>{place}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <a href={`https://maps.google.com/?q=${project.latitude},${project.longitude}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark w-full inline-flex items-center justify-center">
                <Icons.Navigation size={18} className="mr-2 inline"/> Get Directions
              </a>
            </div>
          </div>
        </aside>
      </div>

      <div id="enquiry" className="pt-12">
        <QuickInquiry />
      </div>

      {relatedProjects.length > 0 && (
        <section className="related-projects page-container fade-up is-visible">
          <h2>Similar Projects</h2>
          <div className="projects-grid mt-4">
            {relatedProjects.map(p => (
              <ProjectCard key={p.id} project={{...p, image: p.heroImage, title: p.name}} />
            ))}
          </div>
        </section>
      )}

      <PremiumCTA />

      <Lightbox 
        images={project.gallery}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={navigateLightbox}
      />

      {/* MOBILE STICKY CTA */}
      <div className="mobile-sticky-cta">
        <a href="tel:+919876543210" className="sticky-action-btn bg-dark">
          <Icons.Phone size={18} /> Call
        </a>
        <a href={`https://wa.me/919876543210?text=I'm interested in ${project.name}`} target="_blank" rel="noopener noreferrer" className="sticky-action-btn bg-whatsapp">
          <Icons.MessageCircle size={18} /> WhatsApp
        </a>
        <button onClick={() => scrollToSection('enquire')} className="sticky-action-btn bg-primary">
          <Icons.Mail size={18} /> Enquire
        </button>
      </div>
    </div>
  );
}
