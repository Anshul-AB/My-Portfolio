import { useEffect, useState, useRef } from "react";

const useInView = ({ threshold = 0.2, triggerOnce = true } = {}) => {
  const currentElemRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);

          if (triggerOnce && currentElemRef.current) {
            observer.unobserve(currentElemRef.current);
          }
        }
      },
      { threshold }
    );

    if (currentElemRef.current) {
      observer.observe(currentElemRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return [currentElemRef, inView];
};

export default useInView;