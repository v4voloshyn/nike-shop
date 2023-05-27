/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import { FC } from 'react';

import { ConverseIcon, JordanIcon } from '../../icons';

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
          <JordanIcon />
        </Link>
      </li>
      <li className='flex h-full items-center px-3 '>
        <ConverseIcon />
      </li>
    </ul>
    <nav>
      <ul className='flex h-full items-center gap-1 text-xs font-normal'>
        {PRE_HEADER_ROUTES.map((route, index) => {
          const lastElement = PRE_HEADER_ROUTES.length - 1 === index;
          return (
            <li className='h-full leading-[14px]'>
              <Link
                href={route.href}
                className='pre-brand-item inline-flex h-full items-center hover:text-black-200'
              >
                {route.name}
              </Link>
              {!lastElement && <span className='mx-2'>|</span>}
            </li>
          );
        })}
      </ul>
    </nav>
  </div>
);
