import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { cache } from 'react';

export type BlogResponse = {
  id: number;
  title: string;
  description: string;
  slug: string;
  social_image: string;
  tag_list: string[];
  published_at: string;
};

export const readAllBlog = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_DEVTO_BASE_URL}/api/articles?username=mteguhirawan1996`,
      {}
    );
    return response.data;
  } catch (err: any) {
    return Promise.reject(err);
  }
};

export const readAllBlogServer = cache(async () => {
  try {
    const response: AxiosResponse<BlogResponse[], any> = await axios.get(
      `${process.env.NEXT_PUBLIC_DEVTO_BASE_URL}/api/articles?username=mteguhirawan1996`
    );
    return response.data;
  } catch (err: any) {
    return Promise.reject(err);
  }
});

export const useReadAllBlog = () => {
  return useQuery<BlogResponse[]>({
    queryKey: ['blogs'],
    queryFn: async () => {
      const data: BlogResponse[] = await readAllBlog();
      return data;
    },
    // select: (data) => {
    //   return data.sort((a, b) => dayjs(b._createdAt).diff(dayjs(a._createdAt)));
    // },
  });
};
