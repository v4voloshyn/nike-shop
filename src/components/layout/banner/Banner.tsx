import { cva } from 'class-variance-authority';
import React, { FC } from 'react';

import { Typography } from '../../typography';

export const Banner: FC = () => {
  const [currentBanner, setCurrentBanner] = React.useState(0);
  const bannersLength = 5;

  React.useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentBanner((prev) => (prev + 1) % bannersLength);
    }, 5000);

    return () => {
      clearTimeout(interval);
    };
  }, [currentBanner]);

  const bannerWrapperClasses = cva(
    ` whitespace-nowrap py-[0.4rem] text-center transition-all duration-1000`
  );

  const bannerItemClasses = cva(`inline-block w-full`);

  return (
    <section className='banner w-full'>
      <ul className={bannerWrapperClasses()} style={{ translate: `-${100 * currentBanner}%` }}>
        <li className={bannerItemClasses()}>
          <Typography variant='body-1' tag='p'>
            Shop all new arrivals
          </Typography>
          <Typography variant='body-3' tag='span'>
            Shop now
          </Typography>
        </li>
        <li className={bannerItemClasses()}>
          <Typography variant='body-1' tag='p'>
            Members: Free Shipping on Orders $50+
          </Typography>
          <Typography variant='body-3' tag='span'>
            Join now
          </Typography>
        </li>
        <li className={bannerItemClasses()}>
          <Typography variant='body-1' tag='p'>
            Nike Membership
          </Typography>
          <Typography variant='body-3' tag='span'>
            Join now
          </Typography>
        </li>
        <li className={bannerItemClasses()}>
          <Typography variant='body-1' tag='p'>
            Why Wait? Try Store Pickup
          </Typography>
          <Typography variant='body-3' tag='span'>
            Buy online and find a store near you for pick up in less than 2 hours. Shop now.
          </Typography>
        </li>
        <li className={bannerItemClasses()}>
          <Typography variant='body-1' tag='p'>
            Nike Membership
          </Typography>
          <Typography variant='body-3' tag='span'>
            Join now
          </Typography>
        </li>
      </ul>
    </section>
  );
};

export default Banner;
