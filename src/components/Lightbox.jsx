import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Lightbox.css';

export default function Lightbox({ images, currentIndex, isOpen, onClose, onNavigate }) {
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onNavigate('prev');
    if (e.key === 'ArrowRight') onNavigate('next');
  }, [isOpen, onClose, onNavigate]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <X size={32} />
      </button>

      <button 
        className="lightbox-nav prev" 
        onClick={(e) => { e.stopPropagation(); onNavigate('prev'); }}
        aria-label="Previous image"
      >
        <ChevronLeft size={48} />
      </button>

      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        <img src={images[currentIndex]} alt={`Gallery view ${currentIndex + 1}`} />
        <div className="lightbox-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <button 
        className="lightbox-nav next" 
        onClick={(e) => { e.stopPropagation(); onNavigate('next'); }}
        aria-label="Next image"
      >
        <ChevronRight size={48} />
      </button>
    </div>
  );
}
