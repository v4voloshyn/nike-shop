import Head from 'next/head';

import { strapiApi } from '@/src/utils/api';

import styles from '@/styles/Home.module.css';

export async function getStaticProps(_context) {
  const response = await strapiApi.request.get('/sneakers/1');
  console.log('@@', response.data);
  return {
    props: { data: response.data.data },
  };
}

const Home = ({ data }) => {
  console.log('data', data);
  return (
    <>
      <Head>
        <title>Nike Shop data</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className='p-4 pt-2 text-3xl font-bold underline '>
          Hello world!
          {data.attributes.shoe}
        </h1>
      </main>
    </>
  );
};

export default Home;
