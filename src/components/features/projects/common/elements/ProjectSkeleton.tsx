import * as React from 'react';

const ProjectSkeleton = () => {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <div
          className='mx-auto h-96 w-full rounded-md border p-4 shadow'
          key={i}
        >
          <div className='flex animate-pulse space-x-4'>
            <div className='flex-1 space-y-6 py-1'>
              <div className='h-2 rounded bg-slate-200'></div>
              <div className='space-y-6'>
                <div className='grid grid-cols-3 gap-4'>
                  <div className='col-span-2 h-4 rounded bg-slate-200'></div>
                  <div className='col-span-1 h-4 rounded bg-slate-200'></div>
                </div>
                <div className='h-2 rounded bg-slate-200'></div>
              </div>
            </div>
            <div className='aspect-square h-52 rounded-full bg-slate-200' />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectSkeleton;
