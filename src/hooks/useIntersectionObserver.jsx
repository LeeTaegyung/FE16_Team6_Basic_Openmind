import { useRef } from 'react';

function useIntersectionObserver(callback) {
  const observer = useRef(
    new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          callback();
        }
      },
      {
        threshold: 0.7,
      },
    ),
  );

  const observe = (element) => {
    observer.current.observe(element);
  };
  const unobserve = (element) => {
    observer.current.unobserve(element);
  };

  return [observe, unobserve];
}

export default useIntersectionObserver;
