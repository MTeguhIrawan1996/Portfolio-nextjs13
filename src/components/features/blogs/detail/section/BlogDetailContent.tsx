'use client';

import dayjs from 'dayjs';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { NextImageFill, SectionWrapper } from '@/components/elements';

import { BlogDetailProps } from '@/types/global';

interface IBlogDetailContentProps {
  content: BlogDetailProps;
}

const BlogDetailContent: React.FC<IBlogDetailContentProps> = ({ content }) => {
  return (
    <SectionWrapper
      title={content.title}
      otherContent={() => (
        <div className='text-response-sm relative flex cursor-pointer flex-row gap-2 font-normal text-secondary'>
          <span>{`Published on ${dayjs(content.published_at).format(
            'MMMM D, YYYY'
          )}`}</span>
        </div>
      )}
      icon='tabler:edit-circle'
    >
      <div className='flex flex-col gap-4'>
        <div className='h-[28rem] w-full overflow-hidden rounded-xl'>
          <NextImageFill
            src={content.social_image}
            alt={content.title}
            figureClassName='w-full h-full object-cover'
          />
        </div>
        {content.body_markdown && (
          <div className='flex flex-col gap-2'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: (props) => (
                  <a
                    className='cursor-pointer text-teal-600 hover:text-teal-400 hover:underline'
                    target='_blank'
                    {...props}
                  />
                ),
                p: (props) => (
                  <div {...props} className='font-sans text-secondary/70' />
                ),
                h2: (props) => (
                  <h2
                    className='font-sans text-xl font-medium text-primary/70'
                    {...props}
                  />
                ),
                h3: (props) => (
                  <h3
                    className='pt-4 text-[18px] font-medium leading-snug'
                    {...props}
                  />
                ),
                ul: (props) => (
                  <ul
                    className='list-disc space-y-3 pb-5 pl-10 font-sans'
                    {...props}
                  />
                ),
                ol: (props) => (
                  <ol
                    className='list-decimal space-y-3 pb-5 pl-10 font-sans'
                    {...props}
                  />
                ),
                // code: props => <CodeBlock {...props} />,
                blockquote: (props) => (
                  <blockquote
                    className='text-md rounded-lg border-l-[5px] border-neutral-700 border-l-cyan-500 bg-neutral-100 py-3 pl-6 text-cyan-800'
                    {...props}
                  />
                ),
                // table: props => <Table {...props} />,
                th: (props) => (
                  <th className='border px-3 py-1 text-left dark:border-neutral-600'>
                    {props.children}
                  </th>
                ),
                td: (props) => (
                  <td className='border px-3  py-1 dark:border-neutral-600'>
                    {props.children}
                  </td>
                ),
              }}
            >
              {content.body_markdown}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default BlogDetailContent;
