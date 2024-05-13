'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import AnimationDot from '@/components/elements/ui-animation/AnimationDot';

import { useTheme } from '@/utils/context/ThemeProvider';
import useHasMounted from '@/utils/hooks/useHasMounted';

export default function Status() {
  const { theme } = useTheme();
  const mounted = useHasMounted();
  if (!mounted) return null;
  return (
    <Link href='mailto:teguhirawan1996@gmail.com'>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 42, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`absolute ${
          theme === 'light'
            ? 'inverted-border-radius'
            : 'inverted-border-radius-dark'
        } left-0 top-0 z-10 rounded-br-xl py-2 pr-2`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          data-testid='available-hire'
          className='status-dot relative flex items-center gap-2 rounded-xl border border-neutral-300 px-2 py-1'
        >
          <AnimationDot />
          <span className='text-xs text-secondary'>Hire me.</span>
        </motion.div>
      </motion.div>
    </Link>
  );
}
