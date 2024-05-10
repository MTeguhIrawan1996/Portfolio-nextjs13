const CardBlogSkeleton = () => {
  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='skeleton h-52 w-full' />
      <div className='skeleton h-4 w-28' />
      <div className='skeleton h-4 w-full' />
      <div className='skeleton h-4 w-full' />
    </div>
  );
};

export default CardBlogSkeleton;
