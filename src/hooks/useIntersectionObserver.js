import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Once visible, we can disconnect if we only want it to trigger once
        if (options.triggerOnce !== false) {
          observer.disconnect();
        }
      } else {
        if (options.triggerOnce === false) {
          setIsVisible(false);
        }
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px'
    });

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.rootMargin, options.triggerOnce]);

  return [elementRef, isVisible];
}
