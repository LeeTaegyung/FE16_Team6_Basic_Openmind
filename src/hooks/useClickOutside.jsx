import { useState, useEffect } from 'react';

export function useClickOutside(ref) {
  const [isOpen, setIsOpen] = useState(false);

  function onToggle() {
    setIsOpen((prev) => !prev);
  }

  function closeDropDown(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', closeDropDown);

    return () => {
      document.removeEventListener('click', closeDropDown);
    };
  }, []);

  return {isOpen, onToggle};
}
