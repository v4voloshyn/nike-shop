import Link from 'next/link';
import { FC } from 'react';

import { IconButton, Typography } from '@/ui';
import { CartIcon, HeartIcon, NikeIcon } from '@/ui/icons';

interface HeaderProps {}

const HEADER_ROUTES = [
  { name: 'New & Featured', href: '/' },
  { name: 'Men', href: '/' },
  { name: 'Woman', href: '/' },
  { name: 'Kids', href: '/' },
  { name: 'Sale', href: '/' },
];

export const Header: FC<HeaderProps> = () => (
  <header className='flex h-[64px] items-center justify-between px-[36px]'>
    <Link className='my-[1px] flex h-[59px] w-[59px] items-center px-3' href='/'>
      <NikeIcon className='scale-[333%] justify-self-end hover:opacity-60' />
    </Link>
    <nav className='header-nav'>
      <ul className='flex h-full items-center text-base font-normal'>
        {HEADER_ROUTES.map((route) => (
          <li className='text-m h-full p-3 leading-[24px]' key={route.name}>
            <Link
              href={route.href}
              className='pre-brand-item mx-1 inline-flex h-full items-center hover:text-black-200'
            >
              <Typography variant='body-1' tag='span'>
                {route.name}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <div>
      <IconButton icon={<HeartIcon />} />
      <IconButton icon={<CartIcon />} />
    </div>
  </header>
);
