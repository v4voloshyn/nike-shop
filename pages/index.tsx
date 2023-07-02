import Head from 'next/head';

import { Carousel } from '@/src/components';
import { PreHeader } from '@/src/components/layout/PreHeader/PreHeader';
import { TopNews } from '@/src/sections';
import { Header } from '@/ui/layout';

import { BannerX } from '../src/components/layout/BannerX/BannerX';

// export async function getStaticProps() {
//   const response = await strapiApi.request.get('/sneakers/1');
//   return {
//     props: { data: response.data.data },
//   };
// }

const Home = () => {
  // console.log('data', data);
  const tmp = 'tmp';
  return (
    <>
      <Head>
        <title>Nike Shop</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <PreHeader />
        <Header />
        <BannerX />
        <TopNews />
        <Carousel />
      </main>
    </>
  );
};

export default Home;
