import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './Button';

const buttonProps: ButtonProps = {
  children: 'Default button label',
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
    children: 'Playground',
    variant: 'contained',
  },
};

export const Contained: Story = {
  args: {
    ...buttonProps,
    children: 'Contained',
    variant: 'contained',
  },
};

export const Outlined: Story = {
  args: {
    ...Contained.args,
    children: 'Outlined',
    variant: 'outlined',
  },
};

/**
 * Button component
 */
const meta: Meta<typeof Button> = {
  title: 'ui-kit/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
