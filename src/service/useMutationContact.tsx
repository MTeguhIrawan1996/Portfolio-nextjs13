import { useMutation } from '@tanstack/react-query';

import { client } from '@/service/sanityClient';

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const mutationContactForm = async ({
  name,
  email,
  message,
}: ContactFormValues) => {
  const contact = {
    _type: 'contact',
    name: name,
    email: email,
    message: message,
  };
  try {
    const response = await client.create(contact);
    return response;
  } catch (error: any) {
    return Promise.reject(error);
  }
};

export const useMutationContactForm = ({
  onError,
  onSuccess,
}: {
  onSuccess?: (success: any) => void;
  onError?: (error: Error) => unknown;
}) => {
  return useMutation<any, Error, ContactFormValues>({
    mutationFn: async (props) => {
      const data = await mutationContactForm(props);
      return data;
    },
    onError,
    onSuccess,
  });
};
