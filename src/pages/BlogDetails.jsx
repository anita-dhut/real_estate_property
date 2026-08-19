import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allBlogs } from '../data/blogs';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import PremiumCTA from '../components/PremiumCTA';
import SEO from '../components/SEO';
import ShareButtons from '../components/ShareButtons';
import './BlogDetails.css';

export default function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = allBlogs.find(b => b.slug === slug);
    setBlog(found);
  }, [slug]);

  if (!blog) return <div className="page-container pt-32"><h2>Blog Not Found</h2></div>;

  const relatedArticles = allBlogs
    .filter(b => b.id !== blog.id && b.category === blog.category)
    .slice(0, 2);

  return (
    <div className="blog-details-page">
      <SEO title={`${blog.title} | Nivara Developers Blogs`} description={blog.content.substring(0, 150)} />
      <div className="blog-hero-image">
        <img src={blog.image} alt={blog.title} />
        <div className="blog-hero-overlay"></div>
      </div>

      <div className="page-container blog-content-wrapper">
        <div className="back-link-wrapper">
          <Link to="/blogs" className="back-link"><ArrowLeft size={16}/> Back to Blogs</Link>
        </div>

        <article className="blog-article fade-up is-visible">
          <div className="blog-header">
            <span className="category-badge">{blog.category}</span>
            <h1>{blog.title}</h1>
            <div className="blog-meta-full">
              <span><Calendar size={16}/> {blog.date}</span>
              <span><User size={16}/> {blog.author}</span>
              <span><Clock size={16}/> {blog.readTime}</span>
            </div>
          </div>

          <div className="blog-body">
            {blog.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph.trim()}</p>
            ))}
          </div>

          <div className="blog-share-section" style={{marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)'}}>
            <ShareButtons title={blog.title} />
          </div>
        </article>

        {relatedArticles.length > 0 && (
          <aside className="related-articles fade-up is-visible" style={{transitionDelay: '0.2s'}}>
            <h3>Related Articles</h3>
            <div className="related-grid">
              {relatedArticles.map(article => (
                <Link to={`/blogs/${article.slug}`} key={article.id} className="related-card">
                  <img src={article.image} alt={article.title} loading="lazy" />
                  <div className="related-card-content">
                    <h4>{article.title}</h4>
                    <span>{article.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>
      <div style={{marginTop: '4rem'}}>
        <PremiumCTA />
      </div>
    </div>
  );
}
