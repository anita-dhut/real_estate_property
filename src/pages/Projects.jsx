import { useState, useEffect } from 'react';
import PageHero from '../components/PageHero';
import ProjectFilter from '../components/ProjectFilter';
import ProjectCard from '../components/ProjectCard';
import PremiumCTA from '../components/PremiumCTA';
import SEO from '../components/SEO';
import { allProjects } from '../data/projects';
import './Projects.css';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeStatus, setActiveStatus] = useState('All');
  const [activeLocation, setActiveLocation] = useState('All Locations');
  const [activeBHK, setActiveBHK] = useState('All Configurations');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resetFilters = () => {
    setSearchQuery('');
    setActiveStatus('All');
    setActiveLocation('All Locations');
    setActiveBHK('All Configurations');
  };

  const filteredProjects = allProjects.filter(project => {
    const lowerQuery = searchQuery.toLowerCase();
    const matchSearch = !searchQuery || 
                        project.name.toLowerCase().includes(lowerQuery) || 
                        project.location.toLowerCase().includes(lowerQuery) ||
                        project.bhk.toLowerCase().includes(lowerQuery);

    const matchStatus = activeStatus === 'All' || project.status === activeStatus;
    const matchLocation = activeLocation === 'All Locations' || project.location.includes(activeLocation);
    const matchBHK = activeBHK === 'All Configurations' || project.bhk.includes(activeBHK.split(' ')[0]);
    
    return matchSearch && matchStatus && matchLocation && matchBHK;
  });

  return (
    <div className="projects-page">
      <SEO title="Residential & Commercial Projects in Pune | Nivara Developers" description="Explore our portfolio of premium real estate projects." />
      <PageHero 
        title="OUR PROJECTS" 
        subtitle="Explore spaces designed around the way Pune lives."
        image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
        breadcrumbItems={[{ label: 'Projects' }]}
      />
      
      <div className="page-container py-16">
        <ProjectFilter 
          searchQuery={searchQuery} setSearchQuery={setSearchQuery}
          activeStatus={activeStatus} setActiveStatus={setActiveStatus}
          activeLocation={activeLocation} setActiveLocation={setActiveLocation}
          activeBHK={activeBHK} setActiveBHK={setActiveBHK}
          totalResults={filteredProjects.length}
          resetFilters={resetFilters}
        />

        <div className="projects-editorial-grid fade-up is-visible">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id} className="editorial-grid-item">
                <ProjectCard project={project} />
              </div>
            ))
          ) : (
            <div className="no-projects-found">
              <h3>No projects match your selected filters.</h3>
              <p>Try adjusting your search or clearing the filters.</p>
              <button onClick={resetFilters} className="btn btn-outline-dark mt-4">Clear All Filters</button>
            </div>
          )}
        </div>
      </div>
      <PremiumCTA />
    </div>
  );
}
