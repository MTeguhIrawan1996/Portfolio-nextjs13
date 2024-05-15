import * as React from 'react';

import PrimaryLink, {
  PrimaryLinkProps,
} from '@/components/elements/links/PrimaryLink';

import clsxm from '@/utils/lib/clsxm';

interface IBadgeLinkProps extends Omit<PrimaryLinkProps, 'children'> {
  label: string;
}

const BadgeLink: React.FC<IBadgeLinkProps> = ({
  href,
  label,
  className,
  ...props
}) => {
  return (
    <PrimaryLink
      href={href}
      className={clsxm(
        'group badge badge-accent badge-lg rounded-md py-3 hover:bg-secondary',
        className
      )}
      {...props}
    >
      <span className='text-secondary group-hover:text-accent'>{label}</span>
    </PrimaryLink>
  );
};

export default BadgeLink;
