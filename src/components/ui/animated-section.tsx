import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import React, { HTMLAttributes, forwardRef, memo } from "react";

export interface AnimatedSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom' | 'flip' | 'fade';
  duration?: 'fast' | 'normal' | 'slow';
  delay?: number; // delay in ms
  threshold?: number; // between 0 and 1
  rootMargin?: string;
}

const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(({
  children,
  animation = 'fade',
  duration = 'fast',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px',
  className,
  ...props
}, forwardedRef) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  const setRefs = (element: HTMLDivElement) => {
    // @ts-ignore - TypeScript doesn't like this, but it's a valid way to handle forwarded refs
    ref.current = element;
    
    if (typeof forwardedRef === 'function') {
      forwardedRef(element);
    } else if (forwardedRef) {
      forwardedRef.current = element;
    }
  };

  const durationClasses = {
    fast: 'duration-200',
    normal: 'duration-300',
    slow: 'duration-500',
  };

  const animationClasses = {
    'fade-up': 'translate-y-3 opacity-0',
    'fade-down': 'translate-y-[-10px] opacity-0',
    'fade-left': 'translate-x-[-10px] opacity-0',
    'fade-right': 'translate-x-3 opacity-0',
    'zoom': 'scale-95 opacity-0',
    'flip': 'rotateX-10 opacity-0',
    'fade': 'opacity-0',
  };

  // Create a style object for the delay to avoid Tailwind warnings
  const delayStyle = delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div
      ref={setRefs}
      className={cn(
        'transition-all will-change-auto',
        durationClasses[duration],
        !isVisible && animationClasses[animation],
        isVisible && 'translate-y-0 translate-x-0 scale-100 rotateX-0 opacity-100',
        className
      )}
      style={delayStyle}
      {...props}
    >
      {children}
    </div>
  );
});

AnimatedSection.displayName = 'AnimatedSection';

// Memoize the component to prevent unnecessary re-renders
export const MemoizedAnimatedSection = memo(AnimatedSection);
export { AnimatedSection }; 