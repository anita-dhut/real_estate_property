import { useEffect, useState } from 'react';
import './PageLoader.css';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only show loader on initial mount for a very short duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`page-loader ${!isLoading ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <h1 className="loader-logo">Nivara Developers</h1>
        <div className="loader-bar-container">
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  );
}
