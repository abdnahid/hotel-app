import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Pagination = ({ pages, page, searchString = '' }) => {
  const router = useRouter();
  const pageNumber = Number(router.query.pageNumber) || 1;
  const showPage = pages > 5 ? 5 : pages;
  return (
    <nav className='flex justify-center pt-16'>
      <ul className='flex items-center space-x-2'>
        {pageNumber !== 1 && <li className='paginate-pn'>Next</li>}
        {pageNumber > 2 && pageNumber < pages - 2 ? (
          <>
            {[...Array(showPage).keys()].map((x) => (
              <li
                className={`px-2 py-1 rounded-sm ${
                  pageNumber + x - 2 === pageNumber && 'bg-theme text-white'
                }`}
                key={pageNumber + x - 2}
              >
                <Link
                  href={`/?pageNumber=${pageNumber + x - 2}&${searchString}`}
                >
                  {pageNumber + x - 2}
                </Link>
              </li>
            ))}
          </>
        ) : pageNumber <= 2 ? (
          <>
            {[...Array(showPage).keys()].map((x) => (
              <li
                className={`px-2 py-1 rounded-sm ${
                  x + 1 === pageNumber && 'bg-theme text-white'
                }`}
                key={x + 1}
              >
                <Link
                  href={
                    x + 1 === 1 ? '/' : `/?pageNumber=${x + 1}&${searchString}`
                  }
                >
                  {x + 1}
                </Link>
              </li>
            ))}
          </>
        ) : (
          <>
            {[...Array(showPage).keys()].reverse().map((x) => (
              <li
                className={`px-2 py-1 rounded-sm ${
                  pageNumber - x === pageNumber && 'bg-theme text-white'
                }`}
                key={x + 1}
              >
                <Link href={`/?pageNumber=${pageNumber - x}&${searchString}`}>
                  {pageNumber - x}
                </Link>
              </li>
            ))}
          </>
        )}
        {pageNumber < pages && <li className='paginate-pn'>Next</li>}
      </ul>
    </nav>
  );
};

export default Pagination;
