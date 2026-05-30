import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ScrollReveal({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const dirMap = {
    up:    { y: 40, x: 0 },
    down:  { y: -40, x: 0 },
    left:  { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none:  { x: 0, y: 0 },
  };

  const initial = { opacity: 0, ...dirMap[direction] };
  const animate = isInView
    ? { opacity: 1, x: 0, y: 0 }
    : initial;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}>
      {children}
    </motion.div>
  );
}
