import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Pagination = ({ pages, page}) => {
  const router = useRouter();
  const urlPath = router.asPath.split('pageNumber')[0]
  const showPage = pages > 5 ? 5 : pages;
  return (
    <nav className='flex justify-center pt-16'>
      <ul className='flex items-center space-x-2'>
        {page !== 1 && <li className='paginate-pn'>Next</li>}
        {page > 2 && page < pages - 2 ? (
          <>
            {[...Array(showPage).keys()].map((x) => (
              <li
                className={`px-2 py-1 rounded-sm ${
                  page + x - 2 === page && 'bg-theme text-white'
                }`}
                key={page + x - 2}
              >
                <Link
                  href={page+x-2===1?urlPath:`${urlPath}&pageNumber=${page + x - 2}`}
                >
                  {page + x - 2}
                </Link>
              </li>
            ))}
          </>
        ) : page <= 2 ? (
          <>
            {[...Array(showPage).keys()].map((x) => (
              <li
                className={`px-2 py-1 rounded-sm ${
                  x + 1 === page && 'bg-theme text-white'
                }`}
                key={x + 1}
              >
                <Link
                  href={
                    x + 1 === 1 ? urlPath : `${urlPath}&pageNumber=${x + 1}`
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
                  page - x === page && 'bg-theme text-white'
                }`}
                key={x + 1}
              >
                <Link href={`${urlPath}&pageNumber=${page - x}`}>
                  {page - x}
                </Link>
              </li>
            ))}
          </>
        )}
        {page < pages && <li className='paginate-pn'>Next</li>}
      </ul>
    </nav>
  );
};

export default Pagination;
