import React from 'react';
import RoomCard from '../blocks/RoomCard';

const RoomList = () => {
  return (
    <section>
      <div className='w-4/5 mx-auto grid-view-3'>
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </div>
    </section>
  );
};

export default RoomList;
