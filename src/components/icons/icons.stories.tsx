import type { Meta, StoryObj } from '@storybook/react';

import { ICON_LIST } from './storybook';

const meta: Meta = {
  title: 'ui-kit/iconography',
};

type Story = StoryObj;

export const IconsList: Story = {
  render: () => (
    <>
      <h1># {'Iconography'.toUpperCase()}</h1>
      <div className='m-2 flex gap-2'>
        {Object.entries(ICON_LIST).map(([iconName, iconComponent]) => (
          <div className='flex items-center gap-2 font-helvetica font-normal'>
            <span className='rounded border-2 border-gray-100 p-1'>{iconComponent}</span>
            <span>{iconName}</span>
          </div>
        ))}
      </div>
    </>
  ),
};

export default meta;
