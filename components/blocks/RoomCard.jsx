import React from 'react';
import { GoLocation } from 'react-icons/go';
import { FaUserFriends, FaBed } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const RoomCard = ({ roomData }) => {
  const StarRatings = dynamic(() => import('react-star-ratings'), {
    ssr: false,
  });
  const {
    _id,
    name,
    pricePerNight,
    guestCapacity,
    category,
    description,
    numOfBeds,
    images,
    rating,
    numReviews,
    address,
  } = roomData;
  console.log(images[0]);
  return (
    <div className='shadow-md rounded-lg'>
      <div className='relative'>
        <img
          className='h-48 w-full object-cover rounded-t-lg'
          src={images[0]}
          alt={`${name}-photo`}
        />
        <div className='absolute right-2 top-2 theme-btn-sm'>
          ${pricePerNight}/night
        </div>
      </div>
      <div className='p-4 space-y-3'>
        <div className='flex items-center'>
          <GoLocation className='text-theme pr-2' />
          <p className='text-xs'>{address}</p>
        </div>
        <div className='text-xl'>
          <Link href={`/room/${_id}`}>{name}</Link>
        </div>
        <ul className='grid grid-cols-3 gap-2 text-xs 2xl pb-2 :text-sm border-b border-theme'>
          <li className='flex items-center space-x-2'>
            <FaBed className='text-theme' />{' '}
            <div className='grow'>{numOfBeds}</div>
          </li>
          <li className='flex items-center space-x-2'>
            <BiCategory className='text-theme' />{' '}
            <div className='grow'>{category}</div>
          </li>
          <li className='flex items-center space-x-2'>
            <FaUserFriends className='text-theme' />{' '}
            <div className='grow'>{guestCapacity}</div>
          </li>
        </ul>
        <StarRatings
          rating={rating}
          starDimension='20px'
          starRatedColor='#FF5A5F'
        />
        <div className='text-xs'>({numReviews} reviews)</div>
        <p className='text-sm 2xl :text-lg'>
          {description.substring(0, 100)}...
        </p>
      </div>
    </div>
  );
};

export default RoomCard;
