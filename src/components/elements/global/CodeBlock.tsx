'use client';

import { IconCheck, IconCopy } from '@tabler/icons-react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { ExtraProps } from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import diff from 'react-syntax-highlighter/dist/cjs/languages/prism/diff';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import { a11yDark as themeColor } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useCopyToClipboard } from 'usehooks-ts';

const languages = {
  javascript: 'javascript',
  typescript: 'typescript',
  diff: 'diff',
  tsx: 'tsx',
  css: 'css',
};

SyntaxHighlighter.registerLanguage(languages.javascript, javascript);
SyntaxHighlighter.registerLanguage(languages.typescript, typescript);
SyntaxHighlighter.registerLanguage(languages.diff, diff);
SyntaxHighlighter.registerLanguage(languages.tsx, tsx);
SyntaxHighlighter.registerLanguage(languages.css, css);

const CodeBlock = ({
  className = '',
  children,
  ...props
}: React.ClassAttributes<HTMLElement> &
  React.HTMLAttributes<HTMLElement> &
  ExtraProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [_, copy] = useCopyToClipboard();
  const match = /language-(\w+)/.exec(className || '');

  const handleCopy = (code: string) => {
    copy(code);
    setIsCopied(true);
  };

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  return (
    <>
      {match ? (
        <div className='relative'>
          <button
            className='absolute right-3 top-3 rounded-lg border border-neutral-700 p-2 hover:bg-neutral-800'
            type='button'
            aria-label='Copy to Clipboard'
            onClick={() => handleCopy(children?.toString() || '')}
            data-umami-event='Click Copy Code'
          >
            {!isCopied ? (
              <IconCopy size={18} className='text-neutral-400' />
            ) : (
              <IconCheck size={18} className='text-green-600' />
            )}
          </button>

          <SyntaxHighlighter
            {...props}
            style={themeColor}
            customStyle={{
              padding: '20px',
              fontSize: '14px',
              borderRadius: '8px',
              paddingRight: '50px',
            }}
            PreTag='div'
            language={match ? match[1] : 'javascript'}
            wrapLongLines={true}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code className='rounded-md bg-neutral-200 px-2 py-1 text-[14px] font-light text-sky-600'>
          {children}
        </code>
      )}
    </>
  );
};

const LoadingPlaceholder = () => <div className='mb-12 mt-12 h-36 w-full' />;

export default dynamic(() => Promise.resolve(CodeBlock), {
  ssr: false,
  loading: LoadingPlaceholder,
});