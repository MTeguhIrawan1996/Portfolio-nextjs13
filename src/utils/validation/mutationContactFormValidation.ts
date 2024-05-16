import { z } from 'zod';

import { ContactFormValues } from '@/service/useMutationContact';

export const mutationContactFormValidation: z.ZodType<ContactFormValues> =
  z.object({
    name: z.string().min(1, { message: 'Kolom tidak boleh kosong' }),
    email: z
      .string()
      .min(1, { message: 'Kolom tidak boleh kosong' })
      .email({ message: 'Format email salah' }),
    message: z.string(),
  });
