import { SectionWrapper } from '@/components/elements';

const CardBlogSkeleton = () => {
  return (
    <SectionWrapper
      title='Blogs'
      subTitle='Exploring the world of code, creativity, and constant learning.'
      icon='tabler:edit-circle'
      isLoading
    >
      <div className='mx-auto grid grid-cols-1 gap-6 p-4 md:grid-cols-2'>
        {[...Array(4)].map((_, i) => (
          <div className='flex w-full flex-col gap-4' key={i}>
            <div className='skeleton h-52 w-full' />
            <div className='skeleton h-4 w-28' />
            <div className='skeleton h-4 w-full' />
            <div className='skeleton h-4 w-full' />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CardBlogSkeleton;
