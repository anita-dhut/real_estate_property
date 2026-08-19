import { useState } from 'react';
import { projects } from '../../data/constants';
import Button from '../../components/Button';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './FeaturedProjects.css';

export default function FeaturedProjects() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  // Use first project as featured, next 3 as previews
  const featuredProject = projects[0];
  const previewProjects = projects.slice(1, 4);

  return (
    <section className="featured-showcase page-container" ref={ref}>
      <div className="showcase-header fade-up is-visible">
        <div>
          <h2 className="showcase-title">SELECTED PROJECTS</h2>
          <p className="showcase-subtitle">Spaces thoughtfully designed for the way you live.</p>
        </div>
        <Button to="/projects" variant="text">
          View All Projects
        </Button>
      </div>

      <div className={`showcase-grid ${isVisible ? 'is-visible' : ''}`}>
        
        {/* Large Featured Project */}
        <div className="featured-main fade-up" style={{transitionDelay: '0.1s'}}>
          <Link to={`/projects/${featuredProject.slug}`} className="featured-main-card">
            <div className="featured-img-wrapper">
              <img src={featuredProject.image || featuredProject.heroImage} alt={featuredProject.title} loading="lazy" />
              <div className="featured-status-label">{featuredProject.status}</div>
              <div className="featured-overlay"></div>
            </div>
            <div className="featured-info">
              <h3>{featuredProject.title || featuredProject.name}</h3>
              <div className="featured-meta">
                <span>{featuredProject.location}</span>
                <span className="divider"></span>
                <span className="bhk">{featuredProject.bhk}</span>
              </div>
              <div className="explore-link mt-4">
                Explore Project <ArrowRight size={18} className="ml-2 inline"/>
              </div>
            </div>
          </Link>
        </div>

        {/* Stacked Previews */}
        <div className="featured-previews fade-up" style={{transitionDelay: '0.3s'}}>
          {previewProjects.map((proj) => (
            <Link key={proj.id} to={`/projects/${proj.slug}`} className="preview-card">
              <div className="preview-img-wrapper">
                <img src={proj.image || proj.heroImage} alt={proj.title} loading="lazy" />
              </div>
              <div className="preview-info">
                <h4>{proj.title || proj.name}</h4>
                <div className="preview-meta">
                  <span>{proj.location}</span>
                  <span className="divider"></span>
                  <span className="bhk">{proj.bhk}</span>
                </div>
                <div className="preview-status">{proj.status}</div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
