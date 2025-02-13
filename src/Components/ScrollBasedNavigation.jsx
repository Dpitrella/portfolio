import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollBasedNavigation = ({ children }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const pages = ['/', '/portfolio', '/skills', '/formation', '/contact'];

  useEffect(() => {
    const handleScroll = (event) => {
      if (isAnimating) return; 

      if (event.deltaY > 0 && currentPage < pages.length - 1) {
        setIsAnimating(true);
        setCurrentPage((prev) => prev + 1);
        setTimeout(() => {
          navigate(pages[currentPage + 1]);
          setIsAnimating(false);
        }, 300); 
      } else if (event.deltaY < 0 && currentPage > 0) {
        setIsAnimating(true);
        setCurrentPage((prev) => prev - 1);
        setTimeout(() => {
          navigate(pages[currentPage - 1]);
          setIsAnimating(false);
        }, 300); 
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentPage, navigate, isAnimating]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ScrollBasedNavigation;
