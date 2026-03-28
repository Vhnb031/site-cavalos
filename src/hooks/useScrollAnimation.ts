'use client';

import { useEffect, useRef, useState } from 'react';

type AnimationType = 'fadeInUp' | 'scaleIn';

export function useScrollAnimation(animation: AnimationType = 'fadeInUp', threshold: number = 0.15) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          // Opcional: desconectar depois de animar a primeira vez (viewportOnceDefault: true no JSON)
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      { threshold }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [threshold]);

  const animationClass = isInView ? `animate-${animation}-in` : `animate-${animation}-out`;

  return { elementRef, animationClass };
}
