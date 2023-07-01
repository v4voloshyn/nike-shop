import Link from 'next/link';
import { FC } from 'react';

import { Button, Typography } from '@/src/components';

interface BannerProps {}

export const Banner: FC<BannerProps> = () => (
  <section className='banner flex min-w-[200%] items-center justify-center  bg-gray-100'>
    <div className='flex w-full flex-col items-center justify-center'>
      <Typography variant='body-1' tag='p'>
        Shop all new arrivals
      </Typography>
      <Typography variant='body-3' tag='p'>
        Shop now
      </Typography>
    </div>
    <div className='flex w-full flex-col items-center justify-center'>
      <Typography variant='body-3' tag='p'>
        Members: Free Shipping on Orders $50+
      </Typography>
      <Typography variant='body-3' tag='span'>
        Join now
      </Typography>
    </div>
  </section>
);
