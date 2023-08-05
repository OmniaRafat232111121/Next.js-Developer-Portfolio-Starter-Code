import { useScroll } from 'framer-motion';
import React from 'react';
import { motion } from 'framer-motion';

const LiIcon = ({ ref }) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center center"]
  });

  return (
    <figure className='absolute -left-5 stroke-dark'>
      <svg width="75" height="75" viewBox="0 0 100 100">
        <circle cx="75" cy="50" r="20" className='!stroke-primary' />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          animate={{ scale: scrollYProgress }} 
          style={{ 
            pathLength:scrollYProgress,
            
    }} 
    className='circle2'
        />

        <circle cx="75" cy="50" r="20"
        
        className='animate-pulse circle3' />
        <circle cx="75" cy="50" r="20" 
        className='animate-pulse circle4' />

      </svg>
    </figure>
  )
}

export default LiIcon;
