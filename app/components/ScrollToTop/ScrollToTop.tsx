'use client';

import React, { useEffect, useState } from 'react';
import { SlArrowUp } from 'react-icons/sl';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <button
      className={`fixed  bottom-0 right-6 size-14 md:size-16  rounded-full border-[2px] border-[#DD6A00] mb-[30px]  md:mb-[71px] z-50 items-center justify-center flex   scrollToTopButton ${
        isVisible ? 'visible' : ''
      }`}
      onClick={scrollToTop}
    >
      <SlArrowUp size={40} color="#DD6A00" />
    </button>
  );
};

export default ScrollToTop;
