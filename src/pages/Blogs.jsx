import PageHero from '../components/PageHero';
import { allBlogs } from '../data/blogs';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import PremiumCTA from '../components/PremiumCTA';
import SEO from '../components/SEO';
import './Blogs.css';

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', ...new Set(allBlogs.map(b => b.category))];
  
  const filteredBlogs = activeCategory === 'All' 
    ? allBlogs 
    : allBlogs.filter(b => b.category === activeCategory);

  const displayedBlogs = filteredBlogs.slice(0, visibleCount);

  return (
    <div className="blogs-page">
      <SEO title="News & Insights | Nivara Developers" description="Read the latest news, insights, and updates about real estate and sustainable development in Pune." />
      <PageHero 
        title="News & Insights" 
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
        breadcrumbItems={[{ label: 'Blogs' }]}
      />

      <div className="page-container py-16">
        
        {/* Categories */}
        <div className="blog-filters fade-up is-visible">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => { setActiveCategory(cat); setVisibleCount(3); }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Blog */}
        {activeCategory === 'All' && allBlogs.length > 0 && (
          <div className="featured-blog fade-up is-visible">
            <div className="featured-img hover-zoom">
              <img src={allBlogs[0].image} alt={allBlogs[0].title} loading="lazy"/>
              <span className="category-badge">{allBlogs[0].category}</span>
            </div>
            <div className="featured-content">
              <div className="blog-meta">
                <span><Calendar size={14}/> {allBlogs[0].date}</span>
                <span><User size={14}/> {allBlogs[0].author}</span>
              </div>
              <h2>{allBlogs[0].title}</h2>
              <p className="blog-excerpt">{allBlogs[0].content.substring(0, 150)}...</p>
              <Link to={`/blogs/${allBlogs[0].slug}`} className="read-more-link mt-4">
                READ ARTICLE <ArrowRight size={16}/>
              </Link>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="blogs-grid fade-up is-visible" style={{transitionDelay: '0.2s'}}>
          {displayedBlogs.map((blog, idx) => {
            if(activeCategory === 'All' && idx === 0) return null; // Skip featured in grid
            return (
              <div key={blog.id} className="blog-card">
                <div className="blog-img-wrapper hover-zoom">
                  <img src={blog.image} alt={blog.title} loading="lazy"/>
                  <span className="category-badge">{blog.category}</span>
                </div>
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span><Calendar size={14}/> {blog.date}</span>
                  </div>
                  <h3>{blog.title}</h3>
                  <p className="blog-excerpt">{blog.content.substring(0, 100)}...</p>
                  <Link to={`/blogs/${blog.slug}`} className="read-more-link mt-auto">
                    READ ARTICLE <ArrowRight size={16}/>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {filteredBlogs.length > visibleCount && (
          <div className="text-center mt-12">
            <button className="btn btn-primary" onClick={() => setVisibleCount(prev => prev + 3)}>
              Load More
            </button>
          </div>
        )}
      </div>
      <PremiumCTA />
    </div>
  );
}
