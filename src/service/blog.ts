import axios from 'axios';

import { BlogDetailProps, BlogItem } from '@/types/global';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function getBlogDetail({
  params,
}: Props): Promise<BlogDetailProps> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_DEVTO_BASE_URL}/api/articles/mteguhirawan1996/${params.slug}`
  );
  if (response.status !== 200) {
    throw new Error('faild to fetch');
  }
  return response.data;
}

export async function getBlogViews(params: string) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_DEVTO_BASE_URL}/api/articles/me/all`,
    {
      headers: {
        'api-key': process.env.NEXT_PUBLIC_DEVTO_KEY,
      },
    }
  );

  if (response.status !== 200) {
    throw new Error('faild to fetch');
  }
  const data = response.data;

  const findArticle = data?.find((blog: BlogItem) => blog.slug === params);
  const page_views_count: number = findArticle?.page_views_count;
  return page_views_count;
}
