import { Link } from 'react-router-dom';
import { allBlogs } from '../../data/blogs';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ArrowRight } from 'lucide-react';
import './LatestUpdates.css';

export default function LatestUpdates() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  // Get 3 blogs for the 3-column grid
  const latestBlogs = allBlogs.slice(0, 3);

  return (
    <section className="latest-updates-section page-container" ref={ref}>
      <div className={`journal-header fade-up ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="journal-heading">Journal</h2>
        <Link to="/blogs" className="view-all-link">
          View All Articles <ArrowRight size={18} className="inline ml-2"/>
        </Link>
      </div>
      
      <div className={`journal-classic-grid fade-up ${isVisible ? 'is-visible' : ''}`} style={{transitionDelay: '0.2s'}}>
        {latestBlogs.map((blog) => (
          <Link key={blog.id} to={`/blogs/${blog.slug}`} className="journal-classic-card">
            <div className="journal-card-img-wrapper">
              <img src={blog.image} alt={blog.title} loading="lazy" />
            </div>
            <div className="journal-card-content">
              <div className="journal-meta">
                <span className="journal-category">{blog.category}</span>
                <span className="journal-separator">|</span>
                <span className="journal-date">{blog.date}</span>
              </div>
              <h3 className="journal-card-title">{blog.title}</h3>
              <div className="read-more-text">Read More</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
