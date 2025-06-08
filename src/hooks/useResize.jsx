import { useRef, useState, useEffect } from 'react';

export function useResize() {
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
    setLimit((prev) => {
      if (prev === newLimit) return; //limit값이 바뀌지 않았으면 set하지마!
      return newLimit;
    });
  }, [innerWidth]);

  return [limit];
}
