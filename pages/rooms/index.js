import Head from 'next/head';
import React from 'react';
import RoomList from '../../components/layout/RoomList';
import { getAllRooms } from '../../redux/actions/roomActions';
import { wrapper } from '../../redux/store';

const Rooms = () => {
  return (
    <div>
      <Head>
        <title>Abd Inn</title>
        <meta name='description' content='A airbnb clone app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <RoomList />
      </main>
    </div>
  );
};

export default Rooms;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, resolvedUrl }) => {
      await store.dispatch(getAllRooms(req, resolvedUrl));
    }
);
