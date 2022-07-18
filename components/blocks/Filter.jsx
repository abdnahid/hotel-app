import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Filter = () => {
  const roomDetails = useSelector((state) => state.allRooms);
  const [location, setLocation] = useState();
  const [guest, setGuest] = useState(0);
  const [numBeds, setNumBeds] = useState(0);
  return (
    <form className='grid grid-cols-4 gap-3 place-content-center mb-16'>
      <div>
        <label htmlFor='location'>Location</label>
        <input
          type='text'
          id='location'
          className='input-style'
          placeholder='Preferred location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='guestCapacity'>guestCapacity</label>
        <input
          type='number'
          id='guestCapacity'
          className='input-style'
          value={guest}
          onChange={(e) => setGuest(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='numOfBeds'>numbOfBeds</label>
        <input
          type='number'
          id='numOfBeds'
          className='input-style'
          value={numBeds}
          onChange={(e) => setNumBeds(e.target.value)}
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

export default Filter;
