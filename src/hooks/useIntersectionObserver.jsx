import { useCallback, useRef } from 'react';

function useIntersectionObserver(callbackRef) {
  const observer = useRef(
    new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && callbackRef.current) {
          callbackRef.current();
        }
      },
      {
        threshold: 0.7,
      },
    ),
  );

  const observe = useCallback((element) => {
    observer.current.observe(element);
  }, []);
  const unobserve = useCallback((element) => {
    observer.current.unobserve(element);
  }, []);

  return [observe, unobserve];
}

export default useIntersectionObserver;
