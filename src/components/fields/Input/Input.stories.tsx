import { FindIcon } from '@/ui/icons';
import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '../../buttons';
import { ICON_LIST } from '../../icons/storybook';

import { Input, InputProps } from './Input';

const inputProps: InputProps = {
  startIcon: <IconButton icon={<FindIcon />} />,
};

type Story = StoryObj<typeof Input>;

export const Playground: Story = {
  args: {
    ...inputProps,
  },
  argTypes: {
    startIcon: {
      control: { type: 'select' },
      options: ICON_LIST,
    },
  },
  render: ({ containerClassnames, ...args }) => (
    <Input containerClassnames={`border-2 ${containerClassnames}`} {...args} />
  ),
};

/**
 * Input component with start icon
 */
const meta: Meta<typeof Input> = {
  title: 'ui-kit/Fields/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
