import Link from 'next/link';
import { FC } from 'react';

import { Button, Typography } from '@/src/components';

interface BannerProps {}

export const Banner: FC<BannerProps> = () => (
  <section className='mt-[3rem]'>
    <div className='align-end flex flex-col text-center'>
      <Typography tag='h1' variant='title-1'>
        LEADERS LIKE NEVER BEFORE
      </Typography>
      <div className='mt-6'>
        <Typography tag='p' variant='subtitle'>
          England National Team Collection
        </Typography>
      </div>
      <div className='flex justify-center'>
        <Link href='#' className='mt-7'>
          <Button variant='contained' size='small'>
            Shop
          </Button>
        </Link>
      </div>
    </div>
  </section>
);
