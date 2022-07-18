import Head from 'next/head';
import Banner from '../components/layout/Banner';
import RoomList from '../components/layout/RoomList';
import { getAllRooms } from '../redux/actions/roomActions';
import { wrapper } from '../redux/store';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abd Inn</title>
        <meta name='description' content='A airbnb clone app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Banner />
        <RoomList />
      </main>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getAllRooms(req));
    }
);
