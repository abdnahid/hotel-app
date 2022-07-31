import { useRouter } from 'next/router';
import React, { useState } from 'react';

const SearchRooms = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState({
    location: '',
    guestCapacity: '',
    numOfBeds: '',
    airConditioned: '',
    wifi: '',
    breakfast: '',
    roomCleaning: '',
    petsAllowed: '',
  });
  const handleChange = (e) => {
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(searchQuery).map((key) => {
      if (searchQuery[key] === '') {
        delete searchQuery[key];
      }
    });
    router.push({
      pathname: '/rooms',
      query: searchQuery,
    });
  };
  return (
    <form
      className='grid grid-cols-4 gap-3 mb-16 bg-white p-5 rounded-md'
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor='location'>Location</label>
        <input
          type='text'
          id='location'
          name='location'
          className='input-style'
          placeholder='Preferred location'
          value={searchQuery.location}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='guestCapacity'>guestCapacity</label>
        <input
          type='number'
          id='guestCapacity'
          name='guestCapacity'
          className='input-style'
          min={1}
          max={6}
          value={searchQuery.guestCapacity}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='numOfBeds'>numbOfBeds</label>
        <input
          type='number'
          id='numOfBeds'
          name='numOfBeds'
          min={1}
          max={4}
          className='input-style'
          value={searchQuery.numOfBeds}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type='submit' className='theme-btn block w-full'>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchRooms;
