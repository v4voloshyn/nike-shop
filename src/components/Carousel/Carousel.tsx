import React from 'react';

import shoe from '../../../.storybook/public/assets/images/shoe.webp';
import { ArrowButton } from '../buttons/ArrowButton/ArrowButton';
import { Typography } from '../typography';

import { CarouselItem, ItemCardProps } from './CarouselItem/CarouselItem';

const items: ItemCardProps[] = [
  {
    id: '1',
    image: {
      alt: 'image',
      src: shoe,
    },
    title: 'title',
    type: 'type',
    price: '$1.0',
  },
  {
    id: '2',
    image: {
      alt: 'image',
      src: shoe,
    },
    title: 'title',
    type: 'type',
    price: '$1.0',
  },
  {
    id: '3',
    image: {
      alt: 'image',
      src: shoe,
    },
    title: 'title',
    type: 'type',
    price: '$1.0',
  },
  {
    id: '4',
    image: {
      alt: 'image',
      src: shoe,
    },
    title: 'title',
    type: 'type',
    price: '$1.0',
  },
  {
    id: '5',
    image: {
      alt: 'image',
      src: shoe,
    },
    title: 'title',
    type: 'type',
    price: '$1.0',
  },
  {
    id: '6',
    image: {
      alt: 'image',
      src: shoe,
    },
    title: 'title',
    type: 'type',
    price: '$1.0',
  },
  {
    id: '7',
    image: {
      alt: 'image',
      src: shoe,
    },
    title: 'title',
    type: 'type',
    price: '$1.0',
  },
];

interface CarouselProps {
  /**
   * title
   */
  title?: string;
  /**
   * items
   */
  items?: ItemCardProps[];
}

export const CAROUSEL_TEST_IDS = {
  CONTAINER: 'carousel-container',
  LIST: 'carousel-list',
  ITEM: 'carousel-item',
};

/**
 * Carousel component
 */
export const Carousel: React.FC<CarouselProps> = ({ title }) => {
  const [index, setIndex] = React.useState(0);
  const carouselRef = React.useRef<HTMLUListElement>(null);

  return (
    <section className='mt-[3rem] flex flex-col items-center justify-between'>
      <div className='w-full max-w-[90rem] xl:mx-auto'>
        <div className='flex items-center justify-between px-[2.25rem] '>
          <Typography tag='h2' variant='title-2' className='flex-auto'>
            Trending This Week
          </Typography>
          <div className='flex flex-shrink-0 flex-grow-0 items-center justify-end gap-3 px-[2.25rem]'>
            <ArrowButton
              direction='left'
              onClick={() => setIndex(index - 1)}
              disabled={index === 0}
            />
            <ArrowButton
              direction='right'
              onClick={() => setIndex(index + 1)}
              disabled={index === items.length}
            />
          </div>
        </div>

        <ul
          ref={carouselRef}
          className='mt-[2rem] flex w-full snap-x snap-mandatory scroll-p-[2.25rem] gap-[0.75rem] overflow-x-auto scroll-smooth pb-[1.875rem] ps-[2.25rem] transition'
        >
          {items.map((item) => (
            <li key={item.id} className='snap-start'>
              <CarouselItem {...item} />
            </li>
          ))}
          <li className='shrink-0 grow-0 basis-[2.25rem]' />
        </ul>
      </div>
    </section>
  );
};
