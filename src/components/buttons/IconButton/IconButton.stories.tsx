import * as Icons from '@/ui/icons';
import type { Meta, StoryObj } from '@storybook/react';

import { ICON_LIST } from '../../icons/storybook';

import { IconButton, IconButtonProps } from './IconButton';

const iconButtonProps: IconButtonProps = {
  icon: <Icons.HeartIcon />,
};

type Story = StoryObj<typeof IconButton>;

const IconButtonTemplate: Story = {
  render: (args) => <IconButton {...args} />,
};
const defaultIcon = <Icons.HeartIcon />;

/**
 * Icon button component
 * */
export const DefaultButton: Story = {
  ...IconButtonTemplate,
  args: {
    ...iconButtonProps,
    icon: defaultIcon,
  },
};

const meta: Meta<typeof IconButton> = {
  title: 'ui-kit/Buttons/Icon button',
  component: IconButton,
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: Object.keys(ICON_LIST),
      mapping: ICON_LIST,
      defaultValue: ICON_LIST.YoutubeIcon,
    },
  },

  tags: ['autodocs'],
};

export default meta;
