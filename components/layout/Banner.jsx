import React from 'react';
import Image from 'next/image';

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
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-white'>Not sure where to go? Perfect.</p>
        <button className='theme-btn'>I am flexible</button>
      </div>
    </div>
  );
};

export default Banner;
