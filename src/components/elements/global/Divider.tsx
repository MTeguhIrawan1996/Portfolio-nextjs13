import * as React from 'react';

import clsxm from '@/utils/lib/clsxm';

interface IDividerProps {
  className?: string;
}

export default function Divider({ className }: IDividerProps) {
  return (
    <div
      className={clsxm('my-4', 'border-t border-secondary/50', className)}
      data-testid='breakline'
    />
  );
}
