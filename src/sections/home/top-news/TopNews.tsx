import Link from 'next/link';
import { FC } from 'react';

import { Button, Typography } from '@/src/components';

interface TopNewsProps {}

export const TopNews: FC<TopNewsProps> = () => (
  <section className='mt-[3rem]'>
    <div className='align-end flex flex-col items-center text-center'>
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
