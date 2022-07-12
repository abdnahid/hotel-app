import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { FaUserFriends } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';

const RoomCard = () => {
  return (
    <div className='shadow-md rounded-sm'>
      <img
        className='h-48 w-full object-cover'
        src='/room.jpg'
        alt='airbnb-logo'
      />
      <h2 className='px-2 py-1'>Room Title</h2>
      <ul className='grid-view-3 px-2 py-1 text-sm'>
        <li className='flex items-center space-x-2'>
          <GrLocation className='' /> <div className='grow'>Buffalo</div>
        </li>
        <li className='flex items-center space-x-2'>
          <BiCategory className='' /> <div className='grow'>King</div>
        </li>
        <li className='flex items-center space-x-2'>
          <FaUserFriends className=' ' /> <div className='grow'>3</div>
        </li>
      </ul>
      <button className='theme-btn'>Click here</button>
    </div>
  );
};

export default RoomCard;
