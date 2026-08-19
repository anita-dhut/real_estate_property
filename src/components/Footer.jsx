import { Link } from 'react-router-dom';
import { footerLinks } from '../data/constants';
import { contactInfo, socialLinks } from '../data/contact';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';
import Button from './Button';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top page-container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <h2 className="footer-statement">Building spaces.<br/>Creating legacies.</h2>
            <div className="social-links mt-6">
              {socialLinks.map(social => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              {footerLinks.company.map(link => (
                <li key={link.name}><Link to={link.path}>{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h3>Projects</h3>
            <ul>
              {footerLinks.projects.map(link => (
                <li key={link.name}><Link to={link.path}>{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <div className="contact-item">
              <MapPin size={18} className="contact-icon" />
              <span>{contactInfo.address}</span>
            </div>
            <div className="contact-item">
              <Phone size={18} className="contact-icon" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="contact-item">
              <Mail size={18} className="contact-icon" />
              <span>{contactInfo.email}</span>
            </div>
            
          </div>
        </div>

        <div className="newsletter-section-centered">
          <h4>Subscribe to updates</h4>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" required />
            <Button variant="outline-light" type="submit">Join</Button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="page-container flex-between">
          <p>&copy; {new Date().getFullYear()} {contactInfo.companyName}. All Rights Reserved.</p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
