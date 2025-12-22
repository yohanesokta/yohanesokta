import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DelayedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    outline: {
        x: mousePosition.x - 20,
        y: mousePosition.y - 20,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 15
        }
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999]"
        variants={variants}
        animate="default"
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-white rounded-full pointer-events-none z-[9999]"
        variants={variants}
        animate="outline"
      />
    </>
  );
};

export default DelayedCursor;
