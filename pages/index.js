import Head from 'next/head';
import Banner from '../components/layout/Banner';

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
      </main>
    </div>
  );
}
