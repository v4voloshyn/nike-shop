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

export const PlaygroundIcon: Story = {
  ...IconButtonTemplate,
  args: {
    ...iconButtonProps,
    icon: defaultIcon,
  },
};

const meta: Meta<typeof IconButton> = {
  title: 'ui-kit/Buttons/icon-button',
  component: IconButton,
  argTypes: {
    icon: {
      options: ICON_LIST,
      control: { type: 'select' },
    },
  },
};

export default meta;
