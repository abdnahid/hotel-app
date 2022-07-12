import Head from 'next/head';
import Banner from '../components/layout/Banner';
import RoomList from '../components/layout/RoomList';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb @Abd</title>
        <meta name='description' content='A airbnb clone app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Banner />
        <RoomList />
      </main>

      <footer>
        <p>Copyright @2022</p>
      </footer>
    </div>
  );
}
