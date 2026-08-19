import { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useToast } from '../../components/ToastProvider';
import Button from '../../components/Button';
import './QuickInquiry.css';

export default function QuickInquiry() {
  const [ref, isVisible] = useIntersectionObserver();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', type: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const { addToast } = useToast();

  const validate = () => {
    const newErrors = {};
    if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters.';
    if (!/^[6-9]\d{9}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit Indian phone required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email address required.';
    if (!formData.type) newErrors.type = 'Please select a property type.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', phone: '', email: '', type: '' });
      setErrors({});
      addToast({
        type: 'success',
        title: 'Thank You!',
        message: 'Your enquiry has been submitted successfully.'
      });
    }, 1500);
  };

  return (
    <section className="inquiry-section" ref={ref}>
      <div className={`inquiry-container page-container fade-up ${isVisible ? 'is-visible' : ''}`}>
        <div className="inquiry-content">
          <h2>Looking for your dream home?</h2>
          <p>Drop your details below and our property experts will get in touch with you shortly.</p>
        </div>
        
        <div className="inquiry-form-wrapper">
          <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} className={errors.name ? 'has-error' : ''} />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>
            <div className="form-group">
              <input type="tel" name="phone" placeholder="Phone Number *" value={formData.phone} onChange={handleChange} className={errors.phone ? 'has-error' : ''} />
              {errors.phone && <span className="error-msg">{errors.phone}</span>}
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} className={errors.email ? 'has-error' : ''} />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>
            <div className="form-group">
              <select name="type" value={formData.type} onChange={handleChange} className={errors.type ? 'has-error' : ''}>
                <option value="" disabled>Select Property Type *</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
              </select>
              {errors.type && <span className="error-msg">{errors.type}</span>}
            </div>
            <Button type="submit" variant="primary" className="submit-btn" disabled={status === 'loading'}>
              {status === 'loading' ? 'Submitting...' : 'Submit Enquiry'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
