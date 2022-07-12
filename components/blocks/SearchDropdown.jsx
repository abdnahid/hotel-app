import React from 'react';
import Calender from './Calender';
import { BsPeopleFill } from 'react-icons/bs';

const SearchDropdown = ({ onResetSearch }) => {
  return (
    <div className='absolute left-0 top-10 z-10 bg-white shadow-md p-5 rounded-lg'>
      <Calender />
      <div className='flex items-center p-2 shadow-md rounded-sm border-b-2 border-red-400 space-x-2'>
        <h2 className='text-lg flex-grow pl-4'>Number of guests</h2>
        <BsPeopleFill className='text-lg' />
        <input
          type='number'
          className='w-10 outline-none text-red-400'
          placeholder='1'
          min={1}
          max={8}
        />
      </div>
      <div className='grid grid-cols-2 gap-2 mt-2'>
        <button
          className='theme-btn block text-purple-500'
          onClick={() => onResetSearch()}
        >
          Cancel
        </button>
        <button className='theme-btn block bg-red-400 text-white'>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchDropdown;
