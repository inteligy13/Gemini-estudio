
import { useState, useEffect, RefObject } from 'react';

const useOnScreen = <T extends Element,>(ref: RefObject<T>, rootMargin: string = '0px'): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          // Optional: uncomment below to unobserve after it's visible once
          // observer.unobserve(entry.target);
        } else {
           setIntersecting(false); // Can be set to false to re-trigger animation
        }
      },
      {
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, rootMargin]);

  return isIntersecting;
};

export default useOnScreen;
