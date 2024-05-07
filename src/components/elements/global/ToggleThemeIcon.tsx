'use client';

import { IconCloudCog, IconCloudStar } from '@tabler/icons-react';
import { motion } from 'framer-motion';
// import { useTheme } from 'next-themes';
import React from 'react';

import { useTheme } from '@/utils/context/ThemeProvider';
import useHasMounted from '@/utils/hooks/useHasMounted';

export default function ToggleThemeIcon() {
  const { setTheme, theme } = useTheme();
  const mounted = useHasMounted();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return null;
  return (
    <motion.button
      aria-label='Toggle Theme'
      onClick={toggleTheme}
      className='bg-base-100 p-2'
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {theme === 'light' ? <IconCloudCog /> : <IconCloudStar />}
    </motion.button>
  );
}
