import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './Button';

const buttonProps: ButtonProps = {
  children: 'button label',
  loading: false,
  size: 'small',
  variant: 'contained',
};

type Story = StoryObj<typeof Button>;

const ButtonTemplate: Story = {
  args: {
    ...buttonProps,
  },
};

export const Playground: Story = {
  args: {
    ...buttonProps,
    variant: 'contained',
  },
};

export const Contained: Story = {
  args: {
    ...buttonProps,
    variant: 'contained',
  },
};

export const Outlined: Story = {
  args: {
    ...Contained.args,
    variant: 'outlined',
  },
};

const meta: Meta<typeof Button> = {
  title: 'ui-kit/button',
  component: Button,
};

export default meta;
