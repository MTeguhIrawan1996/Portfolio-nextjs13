'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

interface IAnimationDotProps {}

const AnimationDot: React.FunctionComponent<IAnimationDotProps> = () => {
  return (
    <motion.div
      className='h-2 w-2 rounded-full bg-green-400'
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 0.5, repeat: Infinity }}
    />
  );
};

export default AnimationDot;
