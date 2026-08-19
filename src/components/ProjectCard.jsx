import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <div className="project-img-wrapper">
        <img src={project.image || project.heroImage} alt={project.title || project.name} loading="lazy" />
        <div className="project-status-label">{project.status}</div>
        <div className="project-overlay-gradient"></div>
        
        <div className="project-content">
          <div className="project-content-inner">
            <h3>{project.title || project.name}</h3>
            <div className="project-meta">
              <span className="location">{project.location}</span>
              <span className="divider"></span>
              <span className="bhk">{project.bhk}</span>
            </div>
          </div>
          <div className="project-arrow">
            <ArrowRight size={24} />
          </div>
        </div>
      </div>
    </Link>
  );
}
