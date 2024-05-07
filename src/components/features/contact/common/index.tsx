import * as React from 'react';

import { Header, SectionWrapper } from '@/components/elements';
import ContactForm from '@/components/features/contact/common/section/ContactForm';
import SocialLinkList from '@/components/features/contact/common/section/SocialLinkList';

const ContactPage = () => {
  return (
    <>
      <Header />
      <SectionWrapper
        title='Contact'
        subTitle='Let`s get in touch. Find me on'
        icon='tabler:send'
      >
        <div className='flex flex-col gap-6'>
          <SocialLinkList />
          <ContactForm />
        </div>
      </SectionWrapper>
    </>
  );
};

export default ContactPage;
