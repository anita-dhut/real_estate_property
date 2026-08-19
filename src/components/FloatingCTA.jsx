import { MessageCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { contactInfo } from '../data/contact';
import './FloatingCTA.css';

export default function FloatingCTA() {
  return (
    <>
      {/* Desktop Floating WhatsApp */}
      <a href={`https://wa.me/91${contactInfo.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="WhatsApp">
        <MessageCircle size={28} />
      </a>
      
      {/* Desktop Floating Button */}
      <a href={`mailto:${contactInfo.email}`} className="floating-cta-desktop" aria-label="Enquire Now">
        <span>ENQUIRE NOW</span>
        <ArrowRight size={18} />
      </a>

      {/* Mobile Fixed Bottom Bar */}
      <div className="floating-cta-mobile">
        <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="mobile-cta-action" aria-label="Call Us">
          <Phone size={18} />
          <span>CALL</span>
        </a>
        <a href={`https://wa.me/91${contactInfo.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="mobile-cta-action whatsapp" aria-label="WhatsApp">
          <MessageCircle size={18} />
          <span>WHATSAPP</span>
        </a>
        <a href={`mailto:${contactInfo.email}`} className="mobile-cta-action enquire" aria-label="Email Enquiry">
          <Mail size={18} />
          <span>ENQUIRE</span>
        </a>
      </div>
    </>
  );
}
