import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import './ImageFallback.css';

export default function ImageFallback({ src, alt, className = '', ...props }) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  if (hasError) {
    return (
      <div className={`image-fallback-container ${className}`}>
        <ImageIcon size={32} className="fallback-icon" />
        <span className="fallback-text">{alt || 'Image unavailable'}</span>
      </div>
    );
  }

  return (
    <div className={`image-wrapper ${isLoaded ? 'loaded' : 'loading'} ${className}`}>
      <img
        src={src}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
}
