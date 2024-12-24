import { useEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react';

const useInView = (threshold=0.5) => {
    const currentElemRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Intersection Observer for detecting visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold }
    );

    if (currentElemRef.current) {
      observer.observe(currentElemRef.current);
    }

    return () => {
      if (currentElemRef.current) {
        observer.unobserve(currentElemRef.current);
      }
    };
  }, [threshold]);

  return [currentElemRef, inView];
}

export default useInView
