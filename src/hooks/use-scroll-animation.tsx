import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollAnimationProps {
  threshold?: number; // Value between 0 and 1
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: UseScrollAnimationProps = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  
  // Use useCallback to memoize the observer callback for better performance
  const observerCallback = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (triggerOnce && ref.current) {
          // Cleanup immediately if triggerOnce is true to improve performance
          observer.current?.unobserve(ref.current);
        }
      } else if (!triggerOnce) {
        setIsVisible(false);
      }
    },
    [triggerOnce]
  );
  
  // Store the observer in a ref to avoid recreating it on every render
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // Create the observer only once
    if (!observer.current) {
      observer.current = new IntersectionObserver(
        observerCallback,
        {
          threshold,
          rootMargin,
        }
      );
    }

    observer.current.observe(element);

    return () => {
      if (element && observer.current) {
        observer.current.unobserve(element);
      }
    };
  }, [threshold, rootMargin, observerCallback]);

  return { ref, isVisible };
} 