import { useState } from 'react';
import { careersData as jobs } from '../../data/careers';
import Button from '../../components/Button';
import { useToast } from '../../components/ToastProvider';
import { MapPin, Clock, Plus, Minus, ArrowRight, CheckCircle2 } from 'lucide-react';
import './JobListings.css';

export default function JobListings() {
  const [openJobId, setOpenJobId] = useState(null);
  
  // Apply form state for the currently open job
  const [isApplying, setIsApplying] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', file: null, message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const { addToast } = useToast();

  const toggleJob = (id) => {
    if (openJobId === id) {
      setOpenJobId(null);
      setIsApplying(false);
    } else {
      setOpenJobId(id);
      setIsApplying(false);
    }
  };

  const handleApplyClick = () => {
    setIsApplying(true);
  };

  const handleFileChange = (e) => {
    if(e.target.files.length > 0) {
      setFormData({...formData, file: e.target.files[0]});
      if (errors.file) setErrors({...errors, file: null});
    }
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    if (errors[e.target.name]) setErrors({...errors, [e.target.name]: null});
  };

  const validate = () => {
    const newErrors = {};
    if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters.';
    if (!/^[6-9]\d{9}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit Indian phone required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email required.';
    if (!formData.file) newErrors.file = 'Resume is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', phone: '', file: null, message: '' });
      setErrors({});
      setIsApplying(false);
      setOpenJobId(null);
      addToast({
        type: 'success',
        title: 'Application Submitted!',
        message: 'Thank you for applying. Our HR team will review your profile and get back to you shortly.'
      });
    }, 2000);
  };

  return (
    <section className="job-listings-section page-container">
      <div className="jobs-accordion fade-up is-visible">
        {jobs.map((job) => (
          <div key={job.id} className={`job-accordion-item ${openJobId === job.id ? 'open' : ''}`}>
            
            <button className="job-accordion-header" onClick={() => toggleJob(job.id)}>
              <div className="job-header-info">
                <h3>{job.title}</h3>
                <div className="job-meta-small">
                  <span>{job.department}</span>
                  <span className="divider"></span>
                  <span><MapPin size={14}/> {job.location}</span>
                  <span className="divider"></span>
                  <span><Clock size={14}/> {job.type}</span>
                </div>
              </div>
              <div className="job-header-icon">
                {openJobId === job.id ? <Minus size={24} /> : <Plus size={24} />}
              </div>
            </button>

            <div className="job-accordion-content-wrapper">
              <div className="job-accordion-content">
                
                {!isApplying ? (
                  <div className="job-details-view">
                    <div className="job-section">
                      <h4>Description</h4>
                      <p>{job.description}</p>
                    </div>
                    
                    <div className="job-section-grid">
                      <div className="job-section">
                        <h4>Key Responsibilities</h4>
                        <ul>
                          {job.responsibilities.map((req, i) => (
                            <li key={i}><CheckCircle2 size={16} className="text-accent" /> {req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="job-section">
                        <h4>Requirements</h4>
                        <ul>
                          {job.requirements.map((req, i) => (
                            <li key={i}><CheckCircle2 size={16} className="text-accent" /> {req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="job-actions">
                      <Button variant="primary" onClick={handleApplyClick}>
                        Apply For This Position <ArrowRight size={16} className="ml-2 inline" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="job-apply-view">
                    <h4>Submit Your Application</h4>
                    <form className="application-form mt-6" onSubmit={handleSubmit} noValidate>
                      <div className="form-group">
                        <input type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} className={errors.name ? 'has-error' : ''} />
                        {errors.name && <span className="error-msg">{errors.name}</span>}
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} className={errors.email ? 'has-error' : ''} />
                          {errors.email && <span className="error-msg">{errors.email}</span>}
                        </div>
                        <div className="form-group">
                          <input type="tel" name="phone" placeholder="Phone Number *" value={formData.phone} onChange={handleChange} className={errors.phone ? 'has-error' : ''} />
                          {errors.phone && <span className="error-msg">{errors.phone}</span>}
                        </div>
                      </div>
                      <div className="form-group file-upload">
                        <div className="file-input-wrapper">
                          <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                          <div className={`file-input-custom ${errors.file ? 'has-error' : ''}`}>
                            {formData.file ? formData.file.name : 'Upload Resume (PDF/DOC) *'}
                          </div>
                        </div>
                        {errors.file && <span className="error-msg">{errors.file}</span>}
                      </div>
                      <div className="form-group">
                        <textarea rows="3" name="message" placeholder="Cover Letter / Message" value={formData.message} onChange={handleChange}></textarea>
                      </div>
                      <div className="form-actions">
                        <Button type="button" variant="text" onClick={() => setIsApplying(false)}>Cancel</Button>
                        <Button type="submit" variant="primary" disabled={status === 'loading'}>
                          {status === 'loading' ? 'Submitting...' : 'Submit Application'}
                        </Button>
                      </div>
                    </form>
                  </div>
                )}
                
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
