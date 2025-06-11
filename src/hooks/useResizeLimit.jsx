import { useRef, useState, useEffect } from 'react';

const BREAK_POINT = 868;
const MOBILE_ITEM_LIMIT = 6;
const DESKTOP_ITEM_LIMIT = 8;

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
    const newLimit =
      innerWidth < BREAK_POINT ? MOBILE_ITEM_LIMIT : DESKTOP_ITEM_LIMIT;
    setLimit(newLimit);
  }, [innerWidth]);

  return limit;
}
