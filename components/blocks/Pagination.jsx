import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Pagination = ({ pages, page, searchString = '' }) => {
  const router = useRouter();
  const pageNumber = Number(router.query.pageNumber) || 1;
  return (
    <nav className='flex justify-center my-16'>
      <ul className='flex items-center'>
        <li className='px-3 py-1 rounded-sm'>Prev</li>
        {[...Array(pages).keys()].map((x) => (
          <li
            className={`px-3 py-1 rounded-sm ${
              x + 1 === Number(pageNumber) && 'bg-theme'
            }`}
            key={x + 1}
          >
            <Link
              href={x + 1 === 1 ? '/' : `/?pageNumber=${x + 1}&${searchString}`}
            >
              {x + 1}
            </Link>
          </li>
        ))}
        <li className='px-3 py-1 rounded-sm'>Next</li>
      </ul>
    </nav>
  );
};

export default Pagination;
