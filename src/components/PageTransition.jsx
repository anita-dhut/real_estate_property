import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

export default function PageTransition({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation.pathname]);

  const handleAnimationEnd = () => {
    if (transitionStage === 'fadeOut') {
      setTransitionStage('fadeIn');
      setDisplayLocation(location);
    }
  };

  return (
    <div
      className={`page-transition ${transitionStage}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
}
