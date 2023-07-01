import Link from 'next/link';
import { FC } from 'react';

import { IconButton, Typography } from '@/ui';
import { CartIcon, FindIcon, HeartIcon, NikeIcon } from '@/ui/icons';

import { Input } from '../../fields';

interface HeaderProps {}

const HEADER_ROUTES = [
  { name: 'New & Featured', href: '/' },
  { name: 'Men', href: '/' },
  { name: 'Woman', href: '/' },
  { name: 'Kids', href: '/' },
  { name: 'Accessories', href: '/' },
  { name: 'Sale', href: '/' },
];

export const Header: FC<HeaderProps> = () => (
  <header className='relative flex h-[64px] items-center justify-between truncate px-[36px]'>
    <Link
      className='my-[1px] flex h-[59px] w-[59px] flex-shrink-0 flex-grow-0 items-center px-3'
      href='/'
    >
      <NikeIcon className='ml-3 scale-[333%] justify-self-end hover:opacity-60' />
    </Link>
    <nav className='header-nav max-h-full '>
      <ul className='flex h-full flex-wrap items-center py-3 text-base font-normal '>
        {HEADER_ROUTES.map((route) => (
          <li className='text-m h-full px-3 leading-10' key={route.name}>
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
    <div className='flex h-full flex-shrink-0 flex-grow-0 items-center justify-end gap-3'>
      <Input
        startIcon={<FindIcon />}
        placeholder='Search'
        containerClassnames='max-w-[180px] bg-gray-100'
      />
      <IconButton icon={<HeartIcon />} />
      <IconButton icon={<CartIcon />} />
    </div>
  </header>
);
