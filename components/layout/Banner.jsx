import React from 'react';
import Image from 'next/image';
import Filter from '../blocks/Filter';

const Banner = () => {
  return (
    <div className='relative'>
      <Image
        src='/hero.jpg'
        layout='responsive'
        objectFit='cover'
        alt='banner-villa'
        width={2500}
        height={1000}
      />
      <div className='absolute top-1/2 left-1/2 w-3/5 -translate-x-1/2 -translate-y-1/2'>
        <Filter />
      </div>
    </div>
  );
};

export default Banner;
