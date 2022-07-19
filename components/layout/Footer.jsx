import React from 'react';

const Footer = () => {
  return (
    <footer>
      <section className='bg-dark-light'>
        <div className='grid-view-3 w-4/5 mx-auto py-8'>
          <div className='text-start'>Phone</div>
          <div className='text-center'>Contact</div>
          <div className='text-right'>Newsletter</div>
        </div>
      </section>
      <section className='bg-dark'>
        <div className='grid-view-3 w-4/5 mx-auto py-4'>
          <div>nav</div>
          <div>payment logos</div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
