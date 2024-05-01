import Link from 'next/link';
import * as React from 'react';

export type PrimaryLinkProps = {
  href: string;
  openNewTab?: boolean;
  className?: string;
  children: React.ReactNode;
};

const PrimaryLink = React.forwardRef<HTMLAnchorElement, PrimaryLinkProps>(
  ({ href, openNewTab = false, children, ...rest }, ref) => {
    const isNewTab =
      openNewTab && !href.startsWith('/') && !href.startsWith('#');

    if (!isNewTab) {
      return (
        <Link href={href} ref={ref} {...rest}>
          {children}
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        target='_blank'
        rel='noopener noreferrer'
        href={href}
        {...rest}
      >
        {children}
      </a>
    );
  }
);

export default PrimaryLink;
