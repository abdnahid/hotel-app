import React, { useEffect } from 'react';
import RoomCard from '../blocks/RoomCard';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Pagination from '../blocks/Pagination';
import Filter from '../blocks/Filter';

const RoomList = () => {
  const { rooms, pages, page, roomsCount, error } = useSelector(
    (state) => state.allRooms
  );
  useEffect(() => {
    toast.error(error, { toastId: 'no room found' });
  }, [error]);

  return (
    <section className='py-16'>
      <div className='w-4/5 mx-auto'>
        <Filter />
      </div>
      <div className='w-4/5 mx-auto grid-view-3'>
        {rooms && rooms.length > 0 ? (
          <>
            {rooms.map((item) => (
              <RoomCard key={item._id} roomData={item} />
            ))}
          </>
        ) : (
          <h2>No rooms found</h2>
        )}
      </div>
      <div>
        <Pagination pages={pages} page={1} />
        <p>Total rooms: {roomsCount}</p>
        <h1>{`${page}/${pages}`}</h1>
      </div>
    </section>
  );
};

export default RoomList;
