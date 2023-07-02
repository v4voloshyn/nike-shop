import Link from 'next/link';
import { FC } from 'react';

import { Button, Typography } from '@/src/components';

interface TopNewsProps {}

export const TopNews: FC<TopNewsProps> = () => (
  <section className=''>
    <div className=''>
      <video
        width='100%'
        height='100%'
        autoPlay
        loop
        muted
        className='aspect-[2.88] min-h-[20vh] object-cover'
        preload='auto'
      >
        <source src='/video/nike-full.mp4' type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className='align-end mt-[3rem] flex flex-col items-center text-center'>
      <Typography tag='h1' variant='title-1'>
        LEADERS LIKE NEVER BEFORE
      </Typography>
      <div className='mt-6'>
        <Typography tag='p' variant='subtitle'>
          England National Team Collection
        </Typography>
      </div>
      <Link href='#' className='mt-7'>
        <Button variant='contained' size='small'>
          Shop
        </Button>
      </Link>
    </div>
  </section>
);
