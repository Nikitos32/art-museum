import { useEffect, useState } from 'react';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

  const handleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const handleResize = (event: Event) => {
    const target = event.target as Window;
    setWidth(target.innerWidth);
  };

  const handleClick = (event: Event) => {
    const target = event.target as Element;
    if (
      !target.ariaLabel ||
      (!target.ariaLabel.includes('burger') && isBurgerOpen)
    ) {
      handleBurger();
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { width, isBurgerOpen, handleBurger };
};
