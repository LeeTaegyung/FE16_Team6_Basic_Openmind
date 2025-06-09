import { useRef, useState, useEffect } from 'react';

export function useResizeLimit() {
  const resizeTimer = useRef(null);
  const [innerWidth, setInnerWidth] = useState(null);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    setInnerWidth(window.innerWidth);

    function handleResize() {
      if (resizeTimer.current) clearTimeout(resizeTimer.current);
      resizeTimer.current = setTimeout(() => {
        setInnerWidth(window.innerWidth);
      }, 300);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(resizeTimer.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!innerWidth) return;
    const newLimit = innerWidth < 868 ? 6 : 8;
    setLimit(newLimit);
  }, [innerWidth]);

  return limit;
}
