import type { ImageProps } from 'next/image';
import Image from 'next/image';

import { Typography } from '../../typography';

export interface ItemCardProps {
  /**
   * id
   */
  id: string;
  /**
   * image
   */
  image: ImageProps;
  /**
   * title
   */
  title: string;
  /**
   * type
   */
  type: string;
  /**
   * title
   */
  price: string;
}

export const CAROUSELITEM_TEST_IDS = {
  CONTAINER: 'carouselItem-container',
  IMAGE: 'carouselItem-image',
  PRICE: 'carouselItem-price',
  TYPE: 'carouselItem-type',
  TITLE: 'carouselItem-title',
} as const;

/**
 * ItemCard component
 */
export const CarouselItem: React.FC<ItemCardProps> = ({ image, title, type, price }) => (
  <div data-testid={CAROUSELITEM_TEST_IDS.CONTAINER}>
    <div className='relative h-[20rem] w-[20rem]'>
      <Image fill data-testid={CAROUSELITEM_TEST_IDS.IMAGE} {...image} />
    </div>

    <div className='mt-[0.75rem] flex justify-between align-top'>
      <div>
        <Typography tag='h4' variant='title-2' data-testid={CAROUSELITEM_TEST_IDS.TITLE}>
          {title}
        </Typography>
        <Typography
          variant='body-2'
          tag='p'
          className='text-grey'
          data-testid={CAROUSELITEM_TEST_IDS.TYPE}
        >
          {type}
        </Typography>
      </div>

      <Typography
        variant='body-3'
        tag='p'
        className='text-grey'
        data-testid={CAROUSELITEM_TEST_IDS.PRICE}
      >
        {price}
      </Typography>
    </div>
  </div>
);
