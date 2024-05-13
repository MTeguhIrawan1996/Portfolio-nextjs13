import type { Metadata } from 'next';

import { BlogDetailPage } from '@/components/features';

import { getBlogDetail } from '@/service/blog';
import { METADATA } from '@/utils/constants/metadata';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const blog = await getBlogDetail({ params, searchParams });
  return {
    title: `${blog.title}`,
    description: blog.description,
    openGraph: {
      images: blog.cover_image,
      url: `${METADATA.openGraph.url}/${blog.slug}`,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: 'article',
      authors: blog.user.name,
    },
    keywords: blog.title,
    alternates: {
      canonical: `${METADATA.openGraph.url}/${blog.slug}`,
    },
  };
}

export default async function BlogDetail({ params, searchParams }: Props) {
  const blog = await getBlogDetail({ params, searchParams });

  return <BlogDetailPage content={blog} />;
}
