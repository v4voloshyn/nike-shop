import Link from 'next/link';
import { FC } from 'react';

import { ConverseIcon, JordanIcon } from '@/ui/icons';

import { Typography } from '../../typography';

interface PreHeaderProps {}

const PRE_HEADER_ROUTES = [
  { name: 'Find a Store', href: '/' },
  { name: 'Help', href: '/' },
  { name: 'Join Us', href: '/' },
  { name: 'Sign In', href: '/' },
];

export const PreHeader: FC<PreHeaderProps> = () => (
  <div className='flex h-[36px] justify-between bg-neutral-100 px-[36px]'>
    <ul className='flex'>
      <li className='flex h-full items-center px-3'>
        <Link href='/'>
          <JordanIcon className='hover:opacity-60' />
        </Link>
      </li>
      <li className='flex h-full items-center px-3'>
        <Link href='/'>
          <ConverseIcon className='hover:opacity-60' />
        </Link>
      </li>
    </ul>
    <nav>
      <ul className='flex h-full items-center text-xs font-normal'>
        {PRE_HEADER_ROUTES.map((route, index) => {
          const lastElement = PRE_HEADER_ROUTES.length - 1 === index;
          return (
            <li className='leading-[14px]0 h-full' key={route.name}>
              <Link
                href={route.href}
                className='pre-brand-item mx-1 inline-flex h-full items-center px-1 hover:text-black-200'
              >
                <Typography variant='body-3' tag='span'>
                  {route.name}
                </Typography>
              </Link>
              {!lastElement && <span className='mr-2'>|</span>}
            </li>
          );
        })}
      </ul>
    </nav>
  </div>
);
