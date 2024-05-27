'use client';
import { IconAlertCircle } from '@tabler/icons-react';
import * as React from 'react';
import { useController } from 'react-hook-form';

import clsxm from '@/utils/lib/clsxm';

interface IInputTextRhfProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'name'> {
  name: string;
}

const InputTextRhf: React.FC<IInputTextRhfProps> = ({
  placeholder,
  name,
  ...props
}) => {
  const { field, fieldState } = useController({ name });
  return (
    <div className='col-span-2 flex w-full flex-col gap-1 md:col-auto'>
      <input
        {...field}
        placeholder={placeholder}
        className={clsxm(
          'input input-sm input-bordered w-full',
          fieldState.error && 'input-error'
        )}
        {...props}
      />
      {fieldState.error && (
        <div className='flex flex-row items-center gap-1'>
          <IconAlertCircle className='h-4 w-4 text-red-500' />
          <p className='text-xs text-red-500'>{fieldState.error?.message}</p>
        </div>
      )}
    </div>
  );
};

export default InputTextRhf;
