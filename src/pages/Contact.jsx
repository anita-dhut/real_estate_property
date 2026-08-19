import PageHero from '../components/PageHero';
import { offices, contactInfo } from '../data/contact';
import { allProjects } from '../data/projects';
import { useToast } from '../components/ToastProvider';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import './Contact.css';

export default function Contact() {
  const [enquiryType, setEnquiryType] = useState('General'); // General or Project
  const [formData, setFormData] = useState({ 
    name: '', phone: '', email: '', subject: 'General Inquiry', project: '', message: '' 
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const { addToast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters long.';
    if (!/^[6-9]\d{9}$/.test(formData.phone)) newErrors.phone = 'Please enter a valid 10-digit Indian phone number.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
    if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters long.';
    if (enquiryType === 'Project' && !formData.project) newErrors.project = 'Please select a project.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', phone: '', email: '', subject: 'General Inquiry', project: '', message: '' });
      setErrors({});
      addToast({
        type: 'success',
        title: 'Message Sent Successfully!',
        message: 'Thank you for reaching out. A member of our team will contact you shortly.'
      });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error as user types
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  return (
    <div className="contact-page">
      <SEO title="Contact Us | Nivara Developers" description="Get in touch with Nivara Developers. Our offices in Pune and Sangli are ready to assist you." />
      <PageHero 
        title="Get in Touch" 
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
        breadcrumbItems={[{ label: 'Contact Us' }]}
      />
      
      <div className="page-container contact-layout py-16">
        
        {/* Office Information */}
        <div className="contact-offices fade-up is-visible">
          <h2>Our Offices</h2>
          <p className="mb-8 text-light">Visit us or reach out through our dedicated channels.</p>
          
          <div className="offices-grid">
            {offices.map((office, i) => (
              <div key={i} className="office-card">
                <h3>{office.city}</h3>
                <div className="office-detail"><MapPin size={20}/> <span>{office.address}</span></div>
                <div className="office-detail"><Phone size={20}/> <span>{office.phone}</span></div>
                <div className="office-detail"><Mail size={20}/> <span>{office.email}</span></div>
              </div>
            ))}
          </div>


        </div>

        {/* Dynamic Contact Form */}
        <div className="contact-form-wrapper fade-up is-visible" style={{transitionDelay: '0.2s'}}>
          <h2>Send us a Message</h2>
          
          <div className="enquiry-type-tabs">
            <button 
              className={enquiryType === 'General' ? 'active' : ''} 
              onClick={() => setEnquiryType('General')}
            >
              General Enquiry
            </button>
            <button 
              className={enquiryType === 'Project' ? 'active' : ''} 
              onClick={() => setEnquiryType('Project')}
            >
              Project Enquiry
            </button>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            
            {enquiryType === 'General' ? (
              <div className="form-group">
                <label>Department / Subject</label>
                <select name="subject" value={formData.subject} onChange={handleChange}>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Purchase / Sales">Purchase / Sales</option>
                  <option value="Redevelopment">Society Redevelopment</option>
                  <option value="Vendor / Supplier">Vendor / Supplier</option>
                </select>
              </div>
            ) : (
              <div className="form-group">
                <label>Select Project *</label>
                <select name="project" value={formData.project} onChange={handleChange}>
                  <option value="" disabled>Choose a project...</option>
                  {allProjects.map(p => (
                    <option key={p.id} value={p.name}>{p.name} ({p.location})</option>
                  ))}
                </select>
                {errors.project && <span className="error-msg">{errors.project}</span>}
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className={errors.name ? 'has-error' : ''} />
                {errors.name && <span className="error-msg">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={errors.phone ? 'has-error' : ''} />
                {errors.phone && <span className="error-msg">{errors.phone}</span>}
              </div>
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? 'has-error' : ''} />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label>Message *</label>
              <textarea rows="5" name="message" value={formData.message} onChange={handleChange} className={errors.message ? 'has-error' : ''}></textarea>
              {errors.message && <span className="error-msg">{errors.message}</span>}
            </div>
            <button type="submit" className="btn btn-primary w-full" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
