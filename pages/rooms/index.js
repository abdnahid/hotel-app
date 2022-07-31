import Head from "next/head";
import React from "react";
import Filter from "../../components/blocks/Filter";
import RoomList from "../../components/layout/RoomList";
import { getAllRooms } from "../../redux/actions/roomActions";
import { wrapper } from "../../redux/store";

const Rooms = () => {
  return (
    <div>
      <Head>
        <title>Abd Inn</title>
        <meta name="description" content="A airbnb clone app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-16 w-4/5 mx-auto grid grid-cols-6">
        <div className="col-span-1">
          <Filter />
        </div>
        <div className="col-span-5">
          <RoomList />
        </div>
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
