import { useState, useEffect } from 'react';

export function useCountUp(end, duration = 2000, startAnimating = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimating) return;
    
    let startTime = null;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutQuart)
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(easeOut * end));
      
      if (progress < duration) {
        animationFrame = window.requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure it ends exactly at target
      }
    };
    
    animationFrame = window.requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, startAnimating]);
  
  return count;
}
