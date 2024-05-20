import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';

import { client } from '@/service/sanityClient';

export type CareerResponse = {
  id: string;
  company: string;
  position: string;
  companyLogo: string;
  startDate: string;
  endDate?: string;
  iconifyClass: string;
  _createdAt: string;
};

export const readAllCareer = async () => {
  const query = '*[_type == "experiences"]';
  try {
    const response = await client.fetch(query);
    return response;
  } catch (err: any) {
    return Promise.reject(err);
  }
};

export const useReadAllCareer = () => {
  return useQuery<CareerResponse[]>({
    queryKey: ['careers'],
    queryFn: async () => {
      const data = await readAllCareer();
      return data;
    },
    select: (data) => {
      return data.sort((a, b) => dayjs(b.startDate).diff(dayjs(a.startDate)));
    },
  });
};
