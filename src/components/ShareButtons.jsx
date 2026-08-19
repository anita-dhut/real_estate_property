import { useToast } from './ToastProvider';
import { Link2 } from 'lucide-react';
import './ShareButtons.css';

export default function ShareButtons({ title, url }) {
  const { addToast } = useToast();
  
  const currentUrl = url || window.location.href;
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title || document.title);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      addToast({
        type: 'success',
        title: 'Link Copied',
        message: 'The link has been copied to your clipboard.'
      });
    } catch (err) {
      const input = document.createElement('input');
      input.setAttribute('value', currentUrl);
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      addToast({
        type: 'success',
        title: 'Link Copied',
        message: 'The link has been copied to your clipboard.'
      });
    }
  };

  return (
    <div className="share-buttons">
      <span className="share-label">Share:</span>
      <a 
        href={`https://wa.me/?text=${encodedTitle} ${encodedUrl}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="share-btn whatsapp"
        aria-label="Share on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </a>
      <a 
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="share-btn facebook"
        aria-label="Share on Facebook"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
      </a>
      <a 
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="share-btn linkedin"
        aria-label="Share on LinkedIn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      </a>
      <button 
        onClick={handleCopyLink} 
        className="share-btn copy-link"
        aria-label="Copy Link"
      >
        <Link2 size={16} />
      </button>
    </div>
  );
}
