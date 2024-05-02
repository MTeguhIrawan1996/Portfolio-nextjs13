import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';

import { client } from '@/service/sanityClient';

export type PortfolioResponse = {
  title: string;
  codeLink: string;
  projectLink: string;
  imgUrl: SanityImageSource;
  _createdAt: string;
  tags: string[];
  techs?: string[];
};

export const readAllPortfolio = async () => {
  const query = '*[_type == "works"]';
  try {
    const response = await client.fetch(query);
    return response;
  } catch (err: any) {
    return Promise.reject(err);
  }
};

export const useReadAllPortfolio = () => {
  return useQuery<PortfolioResponse[]>({
    queryKey: ['portfolios'],
    queryFn: async () => {
      const data: PortfolioResponse[] = await readAllPortfolio();
      return data;
    },
    select: (data) => {
      return data.sort((a, b) => dayjs(b._createdAt).diff(dayjs(a._createdAt)));
    },
  });
};
