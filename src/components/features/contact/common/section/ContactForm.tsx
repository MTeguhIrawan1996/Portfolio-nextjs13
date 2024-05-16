'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { InputTextAreaRhf, InputTextRhf } from '@/components/elements';

import {
  ContactFormValues,
  useMutationContactForm,
} from '@/service/useMutationContact';
import { mutationContactFormValidation } from '@/utils/validation/mutationContactFormValidation';

const ContactForm = () => {
  const methods = useForm<ContactFormValues>({
    resolver: zodResolver(mutationContactFormValidation),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    mode: 'onBlur',
  });

  const { mutate: executeCreate, isPending } = useMutationContactForm({
    onSuccess: () => {
      toast.success('✔ Pesan berhasil dikirim!', {
        position: 'top-right',
      });
      methods.reset();
    },
    onError: () => {
      toast.error('❌ Pesan gagal dikirim!', {
        position: 'top-right',
      });
    },
  });

  const handleSubmitForm: SubmitHandler<ContactFormValues> = async (data) => {
    executeCreate(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmitForm)}>
        <div className='grid grid-cols-2 gap-x-4 gap-y-5 px-2'>
          <InputTextRhf name='name' placeholder='Name' />
          <InputTextRhf name='email' placeholder='Email' />
          <InputTextAreaRhf name='message' placeholder='Message' />
          <button
            className='text-light btn-secondary/50 btn btn-xs col-span-2 w-full text-secondary md:btn-sm'
            type='submit'
          >
            {isPending && (
              <span className='loading loading-spinner loading-xs' />
            )}
            Send
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
