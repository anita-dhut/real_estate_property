import { Search, X, ChevronDown } from 'lucide-react';
import { allProjects } from '../data/projects';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './ProjectFilter.css';

export default function ProjectFilter({
  activeStatus, setActiveStatus,
  activeLocation, setActiveLocation,
  activeBHK, setActiveBHK,
  searchQuery, setSearchQuery,
  totalResults,
  resetFilters
}) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  // Map display labels to data values if necessary, or just use exactly what's in data.
  // Assuming data uses 'Under Construction', we'll display it as 'ONGOING'
  const statuses = [
    { label: 'ALL', value: 'All' },
    { label: 'ONGOING', value: 'Under Construction' },
    { label: 'UPCOMING', value: 'Upcoming' },
    { label: 'COMPLETED', value: 'Completed' },
    { label: 'SOLD OUT', value: 'Sold Out' }
  ];
  const locations = ['All Locations', ...new Set(allProjects.map(p => p.location))];
  const bhks = ['All Configurations', '2 BHK', '2.5 BHK', '3 BHK', '4 BHK', '4.5 BHK'];

  return (
    <div className={`project-filter-container fade-up ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      
      <div className="status-pills">
        {statuses.map(status => (
          <button 
            key={status.value}
            className={`status-pill ${activeStatus === status.value ? 'active' : ''}`}
            onClick={() => setActiveStatus(status.value)}
          >
            {status.label}
          </button>
        ))}
      </div>

      <div className="project-filter-controls">
        <div className="filter-group">
          <label>Location</label>
          <div className="custom-select-wrapper">
            <select value={activeLocation} onChange={(e) => setActiveLocation(e.target.value)}>
              {locations.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <ChevronDown size={16} className="select-icon" />
          </div>
        </div>

        <div className="filter-group">
          <label>Configuration</label>
          <div className="custom-select-wrapper">
            <select value={activeBHK} onChange={(e) => setActiveBHK(e.target.value)}>
              {bhks.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <ChevronDown size={16} className="select-icon" />
          </div>
        </div>

        <div className="filter-group search-group">
          <label>Search</label>
          <div className="search-input-wrapper">
            <input 
              type="text" 
              placeholder="Search projects..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search size={16} className="search-icon" />
          </div>
        </div>
      </div>
      
      <div className="filter-footer">
        <span className="results-count">Showing {totalResults} Project{totalResults !== 1 ? 's' : ''}</span>
        <button onClick={resetFilters} className="clear-filters-btn">
          <X size={14} /> CLEAR FILTERS
        </button>
      </div>
    </div>
  );
}
