import axios from 'axios';

import { BlogDetailProps } from '@/types/global';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function getBlogDetail({
  params,
}: Props): Promise<BlogDetailProps> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_DEVTO_BASE_URL}/mteguhirawan1996/${params.slug}`
  );
  if (response.status !== 200) {
    throw new Error('faild to fetch');
  }
  return response.data;
}
