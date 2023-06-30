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
      options: Object.keys(ICON_LIST),
    },
  },
  // @ts-expect-error
  render: ({ startIcon }) => <Input startIcon={<IconButton icon={ICON_LIST[startIcon]} />} />,
};

/**
 * Input component with icon
 */
const meta: Meta<typeof Input> = {
  title: 'ui-kit/Fields/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
