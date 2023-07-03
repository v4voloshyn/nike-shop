import Link from 'next/link';
import { FC } from 'react';

import { IconButton, Typography } from '@/ui';
import { CartIcon, FindIcon, HeartIcon, NikeIcon } from '@/ui/icons';

import { Input } from '../../fields';

interface HeaderProps {}

const HEADER_ROUTES = [
  { title: 'New & Featured', href: '/' },
  { title: 'Men', href: '/' },
  { title: 'Woman', href: '/' },
  { title: 'Kids', href: '/' },
  { title: 'Accessories', href: '/' },
  { title: 'Sale', href: '/' },
];

export const Header: FC<HeaderProps> = () => (
  <header className='relative z-[10] flex h-[4rem] items-center justify-between gap-[1.25rem] truncate px-[2.25rem]'>
    <Link className='my-[1px] flex h-[3.6rem] w-[3.6rem] items-center px-3' href='/'>
      <NikeIcon className='ml-3 h-[3.6rem] w-[3.6rem] scale-[333%] justify-self-end hover:opacity-60' />
    </Link>
    <nav className='header-nav max-h-full '>
      <ul className='flex h-full flex-wrap items-center py-3 text-base font-normal '>
        {HEADER_ROUTES.map((route) => (
          <li className='text-m h-full px-3 leading-[3.6rem]' key={route.title}>
            <Link
              href={route.href}
              className='pre-brand-item mx-1 inline-flex h-full items-center hover:text-black-200'
            >
              <Typography variant='body-1' tag='span'>
                {route.title}
              </Typography>
            </Link>
          </li>
        ))}
        <div className='invisible fixed left-0 top-[10rem] z-[0] h-full w-full bg-black-100 opacity-0 transition-all duration-500 peer-hover:opacity-20 peer-hover:blur-lg' />
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
