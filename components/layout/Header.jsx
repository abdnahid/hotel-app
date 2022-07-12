import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
import { FiGlobe, FiMenu } from 'react-icons/fi';
import { HiUserCircle } from 'react-icons/hi';
import SearchDropdown from '../blocks/SearchDropdown';

const Header = () => {
  const [showCal, setShowCal] = useState('');
  return (
    <header className='py-3 shadow-md'>
      <div className='relative w-4/5 mx-auto grid gap-2 grid-cols-6'>
        <div className='hidden items-center justify-start md:col-span-1 md:inline-flex'>
          <Link href='/'>
            <Image
              src='/airbnb-logo.png'
              width={120}
              height={30}
              objectFit='contain'
              objectPosition='left'
              alt='airbnb-logo'
            />
          </Link>
        </div>
        <div className='flex border-2 p-1 rounded-full shadow-sm col-span-6 md:col-span-2'>
          <input
            type='text'
            value={showCal}
            placeholder='start your search'
            className='pl-3 p-1 placeholder:text-xs outline-none bg-transparent flex-grow text-xs'
            onChange={(e) => setShowCal(e.target.value)}
          />
          <BsSearch className='text-2xl bg-red-400 p-1 rounded-full text-white cursor-pointer' />
        </div>
        <div className='hidden md:inline-flex items-center justify-end col-span-3 space-x-4'>
          <div className='space-x-2 flex items-center'>
            <p className='text-sm'>Become a host</p>
            <FiGlobe className='text-lg bg-red-400 p-1 rounded-full text-white cursor-pointer' />
          </div>
          <div className='flex border-2 shadow-sm rounded-full p-1 space-x-2'>
            <FiMenu className='text-base' />
            <HiUserCircle className='text-base' />
          </div>
        </div>
        {showCal && <SearchDropdown onResetSearch={() => setShowCal('')} />}
      </div>
    </header>
  );
};

export default Header;
