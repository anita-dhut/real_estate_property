import PageHero from '../components/PageHero';
import Accordion from '../components/Accordion';
import { faqsData as faqsList } from '../data/faqs';
import SEO from '../components/SEO';
import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import './FAQ.css';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'General', 'Projects', 'Booking', 'Redevelopment', 'Investment', 'Support'];

  // Make sure all these categories actually exist in faqsList, 
  // we can just map the faqsList to include any new ones if they are missing in the data.

  const filteredFaqs = faqsList.filter(faq => {
    const matchCategory = activeCategory === 'All' || faq.category === activeCategory;
    const lowerQuery = searchQuery.toLowerCase();
    const matchSearch = !searchQuery || 
                        faq.question.toLowerCase().includes(lowerQuery) || 
                        faq.answer.toLowerCase().includes(lowerQuery);
    return matchCategory && matchSearch;
  });

  return (
    <div className="faq-page">
      <SEO title="FAQ | Nivara Developers" description="Frequently asked questions about our projects, redevelopment, and real estate investment." />
      <PageHero 
        title="Frequently Asked Questions" 
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
        breadcrumbItems={[{ label: 'FAQ' }]}
      />
      
      <section className="page-container faq-content-section">
        <div className="faq-search-wrapper fade-up is-visible">
          <Search size={20} className="faq-search-icon" />
          <input 
            type="text" 
            placeholder="Search your question..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="faq-search-input"
          />
        </div>

        <div className="faq-layout">
          <aside className="faq-sidebar fade-up is-visible">
            <h3>Categories</h3>
            <ul className="category-list">
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    className={activeCategory === cat ? 'active' : ''} 
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          
          <div className="faq-main fade-up is-visible" style={{transitionDelay: '0.2s'}}>
            {filteredFaqs.length > 0 ? (
              <Accordion items={filteredFaqs} allowMultiple={true} />
            ) : (
              <div className="no-faqs-found">
                <p>No questions found matching your search.</p>
                <button onClick={() => setSearchQuery('')} className="btn btn-outline-dark mt-4">Clear Search</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
