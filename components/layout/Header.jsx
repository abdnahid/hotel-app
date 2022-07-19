import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiLogIn } from 'react-icons/fi';

const Header = () => {
  return (
    <header className='shadow-md'>
      <section className='py-1'>
        <div className='w-4/5 mx-auto grid grid-cols-2 '>
          <nav>
            <ul className='flex items-center justify-start space-x-3'>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </nav>
          <nav>
            <ul className='flex items-center justify-end'>
              <li className='p-2 bg-theme rounded-sm flex items-center space-x-2'>
                <FiLogIn /> <span>Login</span>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <section className='py-4 bg-dark'>
        <div className='w-4/5 mx-auto grid grid-cols-6 place-content-center'>
          <div className='col-span-1'>
            <Link href='/' passHref>
              <a>
                <Image
                  className='cursor-pointer'
                  src='/airbnb-logo.png'
                  width={120}
                  height={30}
                  objectFit='contain'
                  objectPosition='left'
                  alt='airbnb-logo'
                />
              </a>
            </Link>
          </div>
          <nav className='col-span-4 text-white'>
            <ul className='flex space-x-2 items-center justify-center'>
              <li className='hover:text-theme active:text-theme p-3 cursor-pointer'>
                About
              </li>
              <li className='hover:text-theme active:text-theme p-3 cursor-pointer'>
                contact
              </li>
              <li className='hover:text-theme active:text-theme p-3 cursor-pointer'>
                News
              </li>
            </ul>
          </nav>
          <div className='col-start-6 col-span-1'>
            <button className='w-full bg-white py-2 rounded-sm'>
              Book Now!
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
