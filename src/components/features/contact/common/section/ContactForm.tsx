import * as React from 'react';

const ContactForm = () => {
  return (
    <div className='grid grid-cols-2 gap-x-4 gap-y-5 px-2'>
      <input
        type='text'
        placeholder='Name'
        className='input input-sm input-bordered col-span-2 w-full md:col-auto'
      />
      <input
        type='text'
        placeholder='Email'
        className='input input-sm input-bordered col-span-2 w-full md:col-auto'
      />
      <textarea
        placeholder='Message'
        className='textarea textarea-bordered textarea-sm col-span-2 w-full'
      />
      <button className='text-light btn-secondary/50 btn btn-xs col-span-2 w-full text-secondary md:btn-sm'>
        {/* <span className='loading loading-spinner loading-xs' /> */}
        Send
      </button>
    </div>
  );
};

export default ContactForm;
