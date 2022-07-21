import React, { useEffect } from 'react';
import RoomCard from '../blocks/RoomCard';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Pagination from '../blocks/Pagination';
import { useRouter } from 'next/router';

const RoomList = () => {
  const router = useRouter();
  const { rooms, pages, page, roomsCount, error } = useSelector(
    (state) => state.allRooms
  );
  useEffect(() => {
    toast.error(error, { toastId: 'no room found' });
  }, [error]);

  return (
    <section className='py-16'>
      <div className='pb-16 w-4/5 mx-auto space-y-2'>
        <h1 className='text-4xl font-semibold'>
          {router.query.location
            ? `Rooms in ${router.query.location}`
            : 'All rooms'}
        </h1>
        <p>Total rooms: {roomsCount}</p>
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
      <Pagination pages={pages} page={page} />
    </section>
  );
};

export default RoomList;
