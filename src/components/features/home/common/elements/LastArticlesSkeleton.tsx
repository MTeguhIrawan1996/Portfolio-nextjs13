import { SectionWrapper } from '@/components/elements';

const LastArticlesSkeleton = () => {
  return (
    <SectionWrapper
      className='py-2'
      title='Articles'
      subTitle='Last articles'
      icon='tabler:edit-circle'
      withDivider
      isLoading
    >
      <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {[...Array(3)].map((_, i) => (
          <div className='flex w-full flex-col gap-4' key={i}>
            <div className='skeleton h-44 w-full' />
            <div className='skeleton h-4 w-full' />
            <div className='skeleton h-4 w-28' />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default LastArticlesSkeleton;
