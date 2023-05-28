import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [size, setSize] = useState(0);
  useEffect(() => {
    if (typeof window !== undefined) {
      const scrollHandler = () => {
        setSize(window.scrollY);
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }
  }, []);
};
